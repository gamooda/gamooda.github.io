const emojiContainer = document.getElementById('emoji-container');
if (emojiContainer) {
    let activeEmojis = [], emojiInterval = null, lastAnimationFrame = null;
    function getRandomEmoji() { return `emoji/emoji${Math.floor(Math.random() * 50)}.webp`; }
    function createFallingEmoji() {
        if (document.hidden) return;
        const emoji = document.createElement('div');
        emoji.className = 'falling-emoji';
        emoji.style.backgroundImage = `url('${getRandomEmoji()}')`;
        const size = 20 + Math.random() * 20;
        const range = Math.max(0, window.innerWidth - size - 4);
        emoji.style.left = `${4 + Math.random() * range}px`;
        emoji.style.top = '0';
        emoji.style.transform = `translate3d(0, -30px, 0) rotate(${-30 + Math.random() * 60}deg)`;
        emoji.style.width = `${size}px`; emoji.style.height = `${size}px`;
        emojiContainer.appendChild(emoji);
        const data = { element: emoji, speed: 0.5 + Math.random() * 2.5, position: -30, rotation: -30 + Math.random() * 60, removed: false };
        activeEmojis.push(data);
        if (!lastAnimationFrame) animateEmojis();
        setTimeout(() => { if (!data.removed) removeEmoji(data); }, 10000);
    }
    function animateEmojis() {
        for (let i = activeEmojis.length - 1; i >= 0; i--) {
            const e = activeEmojis[i];
            if (e.removed) { activeEmojis.splice(i, 1); continue; }
            e.position += e.speed * 2;
            e.element.style.transform = `translate3d(0, ${e.position}px, 0) rotate(${e.rotation}deg)`;
            if (e.position > window.innerHeight) removeEmoji(e);
        }
        if (activeEmojis.length > 0) lastAnimationFrame = requestAnimationFrame(animateEmojis);
        else lastAnimationFrame = null;
    }
    function removeEmoji(e) { if (e.removed) return; e.removed = true; if (e.element.parentNode) e.element.parentNode.removeChild(e.element); }
    function startEmojiSystem() {
        if (emojiInterval) clearInterval(emojiInterval);
        emojiInterval = setInterval(createFallingEmoji, 700 + Math.random() * 300);
        activeEmojis.forEach(removeEmoji); activeEmojis.length = 0;
        setTimeout(() => { for (let i = 0; i < 5; i++) setTimeout(createFallingEmoji, i * 200); }, 1000);
    }
    document.addEventListener('visibilitychange', () => { if (document.hidden) { clearInterval(emojiInterval); cancelAnimationFrame(lastAnimationFrame); } else { startEmojiSystem(); } });
    startEmojiSystem();
}

const modalOverlay = document.getElementById('videoModalOverlay');
const iframePlayer = document.getElementById('youtubeIframe');
let modalOpen = false, modalCloseTimer = null;

function openVideoModal(videoId, originalUrl) {
    if (!videoId) return window.open(originalUrl, '_blank', 'noopener');
    if (modalCloseTimer) { clearTimeout(modalCloseTimer); modalCloseTimer = null; }
    iframePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modalOverlay.style.display = 'flex'; modalOpen = true;
    setTimeout(() => { modalOverlay.style.opacity = '1'; }, 10);
    document.body.style.overflow = 'hidden';
}
function closeVideoModal() {
    if (!modalOpen) return;
    modalOpen = false; modalOverlay.style.opacity = '0'; document.body.style.overflow = '';
    if (modalCloseTimer) clearTimeout(modalCloseTimer);
    modalCloseTimer = setTimeout(() => { modalOverlay.style.display = 'none'; iframePlayer.removeAttribute('src'); }, 300);
}

// ИСПРАВЛЕННАЯ КНОПКА НАЗАД
function goBack() { 
    if (modalOpen) return closeVideoModal(); 
    if (document.referrer && document.referrer.indexOf(location.host) !== -1 && history.length > 1) {
        history.back();
    } else {
        location.href = 'index.html';
    }
}
window.goBack = goBack;
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOpen) closeVideoModal(); });
if(document.getElementById('closeVideoModal')) document.getElementById('closeVideoModal').addEventListener('click', closeVideoModal);
if(modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeVideoModal(); });

const STATUS_KEY = 'cryptoYTStatus_v3';
const STATUS_TTL = 604800000;
const CHECK_LIMIT = 6;
let statusCache = readStatusCache(), statusCacheDirty = false;

function readStatusCache() { try { const raw = localStorage.getItem(STATUS_KEY); return raw ? JSON.parse(raw) : {}; } catch { return {}; } }
function saveStatusCache(force) { if (!statusCacheDirty && !force) return; statusCacheDirty = false; try { localStorage.setItem(STATUS_KEY, JSON.stringify(statusCache)); } catch {} }
function cachedStatus(id) { const e = statusCache[id]; return (e && typeof e.t === 'number') ? { available: !!e.a, fresh: Date.now() - e.t < STATUS_TTL } : null; }

async function checkStreamStatus(stream) {
    if (!stream.videoId) { stream.status = 'unavailable'; stream.statusIcon = '❌'; return; }
    const cached = cachedStatus(stream.videoId);
    if (cached && cached.fresh) return;
    try {
        const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${stream.videoId}&format=json`, { cache: 'no-store' });
        if (res.ok) { stream.status = 'available'; stream.statusIcon = '✅'; statusCache[stream.videoId] = { a: 1, t: Date.now() }; statusCacheDirty = true; }
        else if (res.status === 404 || res.status === 401) { stream.status = 'unavailable'; stream.statusIcon = '❌'; statusCache[stream.videoId] = { a: 0, t: Date.now() }; statusCacheDirty = true; }
    } catch { if (!cached) { stream.status = 'unavailable'; stream.statusIcon = '❌'; } }
}

function refreshCard(stream) {
    const card = document.querySelector(`.stream-card[data-vid="${stream.videoId}"]`);
    if (!card) return;
    card.classList.remove('checking', 'available', 'unavailable'); card.classList.add(stream.status);
    const icon = card.querySelector('.status-icon'); if (icon) { icon.className = `status-icon status-${stream.status}`; icon.textContent = stream.statusIcon; }
    const label = card.querySelector('.stream-status span:last-child');
    if (label) label.textContent = stream.status === 'available' ? 'Доступен' : (stream.status === 'unavailable' ? 'Недоступен' : 'Проверка...');
}

async function checkAllStreams(allStreams, onUpdate) {
    const pending = allStreams.filter(s => s.videoId && (!cachedStatus(s.videoId) || !cachedStatus(s.videoId).fresh));
    if (!pending.length) { if(onUpdate) onUpdate(); return; }
    let cursor = 0, done = 0;
    const worker = async () => {
        while (cursor < pending.length) {
            const stream = pending[cursor++];
            await checkStreamStatus(stream);
            refreshCard(stream);
            done++;
            if (done % 10 === 0) { if(onUpdate) onUpdate(); saveStatusCache(); }
        }
    };
    const runners = []; for (let i = 0; i < Math.min(CHECK_LIMIT, pending.length); i++) runners.push(worker());
    await Promise.all(runners); saveStatusCache(); if(onUpdate) onUpdate();
}
window.addEventListener('pagehide', () => saveStatusCache(true));