(function(){
    const yearsData = [
        { year: 0, total: '...', available: '...', unavailable: '...', all: true },
        { year: 2026, total: '...', available: '...', unavailable: '...', all: false },
        { year: 2025, total: '...', available: '...', unavailable: '...', all: false },
        { year: 2024, total: '...', available: '...', unavailable: '...', all: false },
        { year: 2023, total: '...', available: '...', unavailable: '...', all: false },
        { year: 2022, total: '...', available: '...', unavailable: '...', all: false }
    ];
    
    const mediaFiles = [
        { type: 'video', url: 'assets/vid/1v_stoyak.webm', caption: 'Стоякоуский' },
        { type: 'video', url: 'assets/vid/2v_buhailparasha.webm', caption: 'Бухаил Парашевич' },
        { type: 'video', url: 'assets/vid/3v_fact.webm', caption: 'Супер Деликатес' },
        { type: 'video', url: 'assets/vid/4v_nasral.webm', caption: 'Насрала' },
        { type: 'video', url: 'assets/vid/5v_pidoras.webm', caption: 'Посмотри, пдиорас...' },
        { type: 'video', url: 'assets/vid/6v_pizdabol.webm', caption: 'На роток слабый' },
        { type: 'video', url: 'assets/vid/7v_podkatil.webm', caption: 'Подкатил' },
        { type: 'video', url: 'assets/vid/8v_red_explode.webm', caption: 'Разрывная' },
        { type: 'video', url: 'assets/vid/9v_crypto_fart.webm', caption: 'Миша ты что пукнул?' },
        { type: 'video', url: 'assets/vid/10v_PICYAKA.webm', caption: 'Маленякая писяка' },
        { type: 'video', url: 'assets/vid/11v_shiza.webm', caption: 'Oh who is she...' },
        { type: 'video', url: 'assets/vid/12v_ayaayyaa.webm', caption: 'AYAAYAA' },
        { type: 'video', url: 'assets/vid/13v_barba.webm', caption: 'Мая Барба' },
        { type: 'video', url: 'assets/vid/14v_cry.webm', caption: 'Грустная реальность' },
        { type: 'video', url: 'assets/vid/15v_crypto_women.webm', caption: 'Криптятина' },
        { type: 'video', url: 'assets/vid/16v_vot-bi.webm', caption: 'Вот бы...' },
        { type: 'video', url: 'assets/vid/17v_yeahh.webm', caption: 'Yeah' },
        { type: 'video', url: 'assets/vid/18v_nachalnica.webm', caption: 'Начальница' },
        { type: 'video', url: 'assets/vid/19v_HIHIHI.webm', caption: 'HA-HA-HA' },
        { type: 'video', url: 'assets/vid/20v_eeek.webm', caption: 'УААААААА!!!' },
        { type: 'video', url: 'assets/vid/21v_fbi.webm', caption: '🤡' },
        { type: 'video', url: 'assets/vid/22v_gay.webm', caption: 'Гейские-позывы' },
        { type: 'video', url: 'assets/vid/23v_history.webm', caption: 'История...' },
        { type: 'video', url: 'assets/vid/24v_huly_ti.webm', caption: 'Хули ТЫ' },
        { type: 'video', url: 'assets/vid/25v_krytooi.webm', caption: 'Крутой' },
        { type: 'video', url: 'assets/vid/26v_pidor_crypto.webm', caption: 'PIDOR' },
        { type: 'video', url: 'assets/vid/27v_pobejali.webm', caption: 'Побежали-побежали' },
        { type: 'video', url: 'assets/vid/28v_popy_vidno.webm', caption: 'Пеуец' },
        { type: 'video', url: 'assets/vid/29v_rap.webm', caption: 'Рэпанул' },
        { type: 'video', url: 'assets/vid/30v_scary.webm', caption: 'Ужасы' },
        { type: 'video', url: 'assets/vid/31v_shit_my_pens.webm', caption: 'Shit my pens' },
        { type: 'video', url: 'assets/vid/32v_what.webm', caption: 'Кого?' },
        { type: 'video', url: 'assets/vid/33v_creslo.webm', caption: 'Ремешки' },
        { type: 'video', url: 'assets/vid/34v_bolnoy.webm', caption: 'Больной...' },
        { type: 'image', url: 'assets/gif/1gif_eating.webp', caption: 'Кушает' },
        { type: 'image', url: 'assets/gif/2gif_pediknavalny.webp', caption: 'Педик Навальный' },
        { type: 'image', url: 'assets/gif/3gif_posral.webp', caption: 'POSRAL' },
        { type: 'image', url: 'assets/gif/4gif_smile.webp', caption: 'Smile' },
        { type: 'image', url: 'assets/gif/5gif_sosali.webp', caption: 'Сосали?' },
        { type: 'image', url: 'assets/gif/6gif_storm.webp', caption: 'Качалово жопное писюнное' },
        { type: 'image', url: 'assets/gif/8gif_razyob.webp', caption: 'Разйоб' },
        { type: 'image', url: 'assets/gif/9gif_booo.webp', caption: 'БУ' },
        { type: 'image', url: 'assets/gif/10gif_crypto_gnom.webp', caption: 'Гномчански Криптянски' },
        { type: 'image', url: 'assets/gif/11gif_doomaem.webp', caption: 'DOOMаем' },
        { type: 'image', url: 'assets/gif/12gif_konfetka.webp', caption: 'Нету ручек - нет конфетки' },
        { type: 'image', url: 'assets/gif/13gif_kushaet.webp', caption: 'Криворукий' },
        { type: 'image', url: 'assets/gif/14gif_poletel.webp', caption: '🎈' },
        { type: 'image', url: 'assets/gif/15gif_shoot.webp', caption: 'School Shooter' },
        { type: 'image', url: 'assets/gif/16gif_tabletki.webp', caption: 'Таблетосики' },
        { type: 'image', url: 'assets/gif/17gif_talking.webp', caption: 'Talking' },
        { type: 'image', url: 'assets/img/1i_18+.webp', caption: 'Голые бабы сматрет 🔞' },
        { type: 'image', url: 'assets/img/2i_boss.webp', caption: 'BigBoss' },
        { type: 'image', url: 'assets/img/3i_clown.webp', caption: 'Истенное лицо' },
        { type: 'image', url: 'assets/img/4i_cry.webp', caption: '😭' },
        { type: 'image', url: 'assets/img/5i_cryptobody.webp', caption: 'Мужчина' },
        { type: 'image', url: 'assets/img/6i_cryptoface1.webp', caption: 'Крассавица' },
        { type: 'image', url: 'assets/img/7i_cryptoface2.webp', caption: '👨‍🦲' },
        { type: 'image', url: 'assets/img/8i_cryptoface3.webp', caption: 'Притаился' },
        { type: 'image', url: 'assets/img/9i_fact.webp', caption: 'Факт' },
        { type: 'image', url: 'assets/img/10i_help.webp', caption: 'Помогите' },
        { type: 'image', url: 'assets/img/11i_howdoyoudo.webp', caption: 'ХауДуюДу' },
        { type: 'image', url: 'assets/img/12i_kablik.webp', caption: '👠' },
        { type: 'image', url: 'assets/img/13i_nasrala.webp', caption: 'Насрала' },
        { type: 'image', url: 'assets/img/14i_nasrala.webp', caption: 'ОПЯТ....' },
        { type: 'image', url: 'assets/img/15i_pidoras.webp', caption: 'ПiдораZZ' },
        { type: 'image', url: 'assets/img/16i_strong.webp', caption: 'Силач' },
        { type: 'image', url: 'assets/img/17i_true.webp', caption: 'Правда...' },
        { type: 'image', url: 'assets/img/18i_nastya_crypto.webp', caption: 'Любоу' },
        { type: 'image', url: 'assets/img/19i_anti_woomen.webp', caption: 'Лжебабы' },
        { type: 'image', url: 'assets/img/20i_family.webp', caption: 'Семья' },
        { type: 'image', url: 'assets/img/21i_he_view.webp', caption: 'He view' }
    ];

    const loaderScreen = document.getElementById('loader-screen');
    const mainContent = document.getElementById('mainContent');
    const gifGrid = document.getElementById('gifGrid');
    const loadingText = document.getElementById('loadingText');
    const emojiImg = document.getElementById('emojiImg');
    const yearsGrid = document.getElementById('yearsGrid');
    const randomMomentDiv = document.getElementById('randomMoment');
    const showAllBtn = document.getElementById('showAllBtn');
    const allMomentsDiv = document.getElementById('allMoments');
    const momentsGrid = document.getElementById('momentsGrid');
    const backToRandomBtn = document.getElementById('backToRandom');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const mediaPlayerOverlay = document.getElementById('mediaPlayerOverlay');
    const mediaPlayerDiv = document.getElementById('mediaPlayer');
    const closePlayerBtn = document.getElementById('closePlayerBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const timeDisplay = document.getElementById('timeDisplay');
    const muteBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeLevel = document.getElementById('volumeLevel');
    const volumeThumb = document.getElementById('volumeThumb');
    const mediaPlayerContainer = document.getElementById('mediaPlayerContainer');
    const playerFrame = document.getElementById('playerFrame');
    const emojiContainer = document.getElementById('emojiContainer');
    const progressBuffer = document.getElementById('progressBuffer');
    const progressThumb = document.getElementById('progressThumb');
    const scrubTip = document.getElementById('scrubTip');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const footer = document.getElementById('footer');
    const favicon = document.getElementById('favicon');
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const miniPrev = document.getElementById('miniPrev');
    const miniCurrent = document.getElementById('miniCurrent');
    const miniNext = document.getElementById('miniNext');

    let currentVideo = null;
    let isPlaying = false;
    let isMuted = false;
    let currentVolume = 1;
    let isDraggingProgress = false;
    let isDraggingVolume = false;
    let pendingScrubRatio = null;
    let emojiInterval = null;
    let activeEmojis = [];
    let animationFrameId = null;
    let lazyObserver = null;
    let loaderHidden = false;
    let loadingTextTimer = null;
    let playerCloseTimer = null;
    let playerOpen = false;
    let progressTicker = null;
    let centerPlayEl = null;
    let currentMedia = null;
    let currentIndex = 0;
    let endScreenEl = null;
    let endGridEl = null;

    const gifUrls = [
        "assets/gif/1gif_eating.webp","assets/gif/2gif_pediknavalny.webp","assets/gif/3gif_posral.webp",
        "assets/gif/4gif_smile.webp","assets/gif/5gif_sosali.webp","assets/gif/6gif_storm.webp",
        "assets/gif/7gif_begit.webp","assets/gif/8gif_razyob.webp","assets/gif/9gif_booo.webp",
        "assets/gif/10gif_crypto_gnom.webp","assets/gif/11gif_doomaem.webp","assets/gif/12gif_konfetka.webp",
        "assets/gif/13gif_kushaet.webp","assets/gif/14gif_poletel.webp","assets/gif/15gif_shoot.webp",
        "assets/gif/16gif_tabletki.webp","assets/gif/17gif_talking.webp"
    ];
    const loadingTexts = [
        "Запускаем параворлд…", "Баними Ховута…", "Заряжаем 12 атмосфер…",
        "Ой твоя почка вообще возбуждает...", "Бодаемся с Гормидом…", "Открываем энергетик…",
        "Моем лысую голову…", "Красим стены…", "Учимся читать…", "Ищем девочек...",
        "Начальница заболела 😭", "Ищем заброшку…", "Убираемся за кошкой…",
        "Придумываем sиzо-теорию…", "Скрываем видики…", "Отсылаем вино…"
    ];
    const emojiUrls = Array.from({length: 50}, (_, i) => `emoji/emoji${i}.webp`);

    const ICONS = {
        play: '<path d="M7.4 4.8 17.9 12 7.4 19.2Z"/>',
        pause: '<rect x="7" y="4" width="3.6" height="16" rx="1.3"/><rect x="13.4" y="4" width="3.6" height="16" rx="1.3"/>',
        replay: '<path d="M12 4.6V1.9c0-.4-.5-.7-.8-.4L5.9 6c-.2.2-.2.5 0 .7l5.3 4.5c.3.3.8 0 .8-.4V8.1a5.2 5.2 0 1 1-5.2 5.2H4.2A7.8 7.8 0 1 0 12 4.6Z"/>',
        volume: '<path d="M4 9.4v5.2h3.2L12 18.8V5.2L7.2 9.4H4Z"/><path d="M14.7 8.2a5.3 5.3 0 0 1 0 7.6l1.3 1.4a7.2 7.2 0 0 0 0-10.4Z"/><path d="M16.9 5.2a8.9 8.9 0 0 1 0 13.6l1.3 1.4a10.8 10.8 0 0 0 0-16.4Z"/>',
        mute: '<path d="M4 9.4v5.2h3.2L12 18.8V5.2L7.2 9.4H4Z"/><path d="m14.6 9.8 1.4-1.4 2 2 2-2 1.4 1.4-2 2 2 2-1.4 1.4-2-2-2 2-1.4-1.4 2-2z"/>',
        full: '<path d="M4 9.3V4h5.3v1.9H5.9v3.4H4Zm10.7-5.3H20v5.3h-1.9V5.9h-3.4V4ZM4 14.7h1.9v3.4h3.4V20H4v-5.3Zm14.1 0H20V20h-5.3v-1.9h3.4v-3.4Z"/>',
        exitFull: '<path d="M9.3 4v5.3H4V7.4h3.4V4h1.9Zm5.4 0h1.9v3.4H20v1.9h-5.3V4ZM4 14.7h5.3V20H7.4v-3.4H4v-1.9Zm10.7 0H20v1.9h-3.4V20h-1.9v-5.3Z"/>',
        close: '<path d="m6.7 5.3 5.3 5.3 5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z"/>',
        arrowLeft: '<path d="M15.4 5.4 14 4l-8 8 8 8 1.4-1.4L8.8 12z"/>',
        arrowRight: '<path d="m8.6 18.6 1.4 1.4 8-8-8-8-1.4 1.4 6.6 6.6z"/>'
    };

    function icon(name) {
        return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
    }

    function readJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return fallback;
            const parsed = JSON.parse(raw);
            return parsed === null || parsed === undefined ? fallback : parsed;
        } catch (e) {
            return fallback;
        }
    }

    function writeJSON(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {}
    }

    const THUMB_KEY = 'cryptoVideoThumbs_v1';
    const THUMB_WIDTH = 360;
    const THUMB_CONCURRENCY = 2;
    const THUMB_TIMEOUT = 9000;
    const VOLUME_KEY = 'cryptoPlayerVolume_v1';

    const thumbStore = readJSON(THUMB_KEY, {});
    const thumbMemory = new Map();
    const thumbPending = new Map();
    const thumbQueue = [];
    let thumbActive = 0;
    let thumbPersistTimer = null;

    const savedVolume = readJSON(VOLUME_KEY, null);
    if (savedVolume && typeof savedVolume.v === 'number') {
        currentVolume = Math.min(1, Math.max(0, savedVolume.v));
        isMuted = !!savedVolume.m;
    }

    function saveVolume() {
        writeJSON(VOLUME_KEY, { v: currentVolume, m: isMuted });
    }

    function schedulePersistThumbs() {
        if (thumbPersistTimer) clearTimeout(thumbPersistTimer);
        thumbPersistTimer = setTimeout(() => {
            thumbPersistTimer = null;
            writeJSON(THUMB_KEY, thumbStore);
        }, 700);
    }

    function generateThumb(url) {
        return new Promise(resolve => {
            const video = document.createElement('video');
            video.muted = true;
            video.playsInline = true;
            video.preload = 'auto';
            let settled = false;
            let timer = null;
            const finish = (value) => {
                if (settled) return;
                settled = true;
                clearTimeout(timer);
                try {
                    video.removeAttribute('src');
                    video.load();
                } catch (e) {}
                resolve(value);
            };
            timer = setTimeout(() => finish(null), THUMB_TIMEOUT);
            video.addEventListener('loadedmetadata', () => {
                const duration = video.duration;
                try {
                    video.currentTime = isFinite(duration) && duration > 0 ? duration / 2 : 0;
                } catch (e) {
                    finish(null);
                }
            });
            video.addEventListener('seeked', () => {
                try {
                    const width = video.videoWidth;
                    const height = video.videoHeight;
                    if (!width || !height) return finish(null);
                    const scale = Math.min(1, THUMB_WIDTH / width);
                    const canvas = document.createElement('canvas');
                    canvas.width = Math.max(1, Math.round(width * scale));
                    canvas.height = Math.max(1, Math.round(height * scale));
                    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    finish(canvas.toDataURL('image/jpeg', 0.72));
                } catch (e) {
                    finish(null);
                }
            });
            video.addEventListener('error', () => finish(null));
            video.src = url;
        });
    }

    function pumpThumbs() {
        while (thumbActive < THUMB_CONCURRENCY && thumbQueue.length) {
            const job = thumbQueue.shift();
            thumbActive++;
            generateThumb(job.url).then(data => {
                if (data) {
                    thumbMemory.set(job.url, data);
                    thumbStore[job.url] = data;
                    schedulePersistThumbs();
                }
                thumbPending.delete(job.url);
                thumbActive--;
                job.resolve(data);
                pumpThumbs();
            });
        }
    }

    function cachedThumb(url) {
        if (thumbMemory.has(url)) return thumbMemory.get(url);
        const stored = thumbStore[url];
        if (typeof stored === 'string' && stored.indexOf('data:image') === 0) {
            thumbMemory.set(url, stored);
            return stored;
        }
        return null;
    }

    function requestThumb(url, urgent) {
        const cached = cachedThumb(url);
        if (cached) return Promise.resolve(cached);
        const pending = thumbPending.get(url);
        if (pending) {
            if (urgent) {
                const index = thumbQueue.findIndex(job => job.url === url);
                if (index > 0) {
                    const job = thumbQueue.splice(index, 1)[0];
                    thumbQueue.unshift(job);
                }
            }
            return pending;
        }
        let resolver;
        const promise = new Promise(resolve => { resolver = resolve; });
        thumbPending.set(url, promise);
        const job = { url, resolve: resolver };
        if (urgent) thumbQueue.unshift(job);
        else thumbQueue.push(job);
        pumpThumbs();
        return promise;
    }

    function createVideoThumbnail(url) {
        const video = document.createElement('video');
        video.src = url;
        video.muted = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.addEventListener('loadedmetadata', () => {
            if (isFinite(video.duration) && video.duration > 0) {
                video.currentTime = video.duration / 2;
            }
        });
        video.addEventListener('play', () => {
            video.pause();
        });
        return video;
    }

    function makeThumb(url, onDone) {
        const img = document.createElement('img');
        img.alt = '';
        img.decoding = 'async';
        const done = () => { if (onDone) onDone(); };
        const cached = cachedThumb(url);
        if (cached) {
            img.onload = done;
            img.onerror = done;
            img.src = cached;
            return img;
        }
        requestThumb(url, true).then(data => {
            if (data) {
                img.onload = done;
                img.onerror = done;
                img.src = data;
            } else {
                const fallback = createVideoThumbnail(url);
                fallback.onloadeddata = done;
                fallback.onerror = done;
                if (img.parentNode) img.parentNode.replaceChild(fallback, img);
                else done();
            }
        });
        return img;
    }

    function warmThumbs() {
        mediaFiles.forEach(media => {
            if (media.type === 'video') requestThumb(media.url, false);
        });
    }

    window.addEventListener('pagehide', () => {
        if (thumbPersistTimer) {
            clearTimeout(thumbPersistTimer);
            thumbPersistTimer = null;
            writeJSON(THUMB_KEY, thumbStore);
        }
    });

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function setupGridLayout(count) {
        const cols = Math.ceil(Math.sqrt(count));
        const rows = Math.ceil(count / cols);
        gifGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        gifGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }
    function renderGifs() {
        const count = 3 + Math.floor(Math.random() * 3);
        const files = shuffleArray([...gifUrls]).slice(0, count);
        setupGridLayout(files.length);
        const loads = files.map((src, index) => new Promise(resolve => {
            const tile = document.createElement('div');
            tile.className = 'gif-tile';
            tile.style.animationDelay = `${(index * 0.42).toFixed(2)}s`;
            tile.style.animationDuration = `${5.4 + (index % 4) * 0.5}s`;
            const img = document.createElement('img');
            img.alt = '';
            img.decoding = 'async';
            img.loading = 'eager';
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
            tile.appendChild(img);
            gifGrid.appendChild(tile);
        }));
        return Promise.all(loads);
    }
    function rotateLoadingTexts() {
        let available = [...loadingTexts];
        const update = () => {
            if (available.length === 0) available = [...loadingTexts];
            const idx = Math.floor(Math.random() * available.length);
            loadingText.textContent = available[idx];
            available.splice(idx, 1);
        };
        update();
        if (loadingTextTimer) clearInterval(loadingTextTimer);
        loadingTextTimer = setInterval(update, 1250);
    }
    function showRandomEmoji() {
        const random = emojiUrls[Math.floor(Math.random() * emojiUrls.length)];
        emojiImg.src = random;
        emojiImg.alt = '';
    }

    function getRandomEmojiUrl() {
        return emojiUrls[Math.floor(Math.random() * emojiUrls.length)];
    }
    function removeAllEmojis() {
        activeEmojis.forEach(e => {
            if (e.element && e.element.parentNode) e.element.parentNode.removeChild(e.element);
        });
        activeEmojis = [];
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }
    function spawnRange(size) {
        const width = document.documentElement.clientWidth || window.innerWidth;
        return Math.max(0, width - size - 4);
    }

    function fadeAlpha(position, height) {
        const fadeZone = 280;
        const start = height - fadeZone;
        if (position <= start) return 1;
        const t = Math.max(0, Math.min(1, (height - position) / fadeZone));
        return Math.pow(t, 1.6);
    }

    function createFallingEmoji() {
        if (document.hidden) return;
        if (activeEmojis.length >= 14) return;
        const emoji = document.createElement('div');
        emoji.className = 'falling-emoji';
        emoji.style.backgroundImage = `url('${getRandomEmojiUrl()}')`;
        const size = 20 + Math.random() * 20;
        emoji.style.left = `${4 + Math.random() * spawnRange(size)}px`;
        emoji.style.top = '0';
        emoji.style.transform = `translate3d(0, -30px, 0) rotate(${-30 + Math.random() * 60}deg)`;
        emoji.style.width = `${size}px`;
        emoji.style.height = `${size}px`;
        emojiContainer.appendChild(emoji);
        const data = {
            element: emoji,
            speed: 0.5 + Math.random() * 2.5,
            position: -30,
            rotation: -30 + Math.random() * 60,
            rotSpeed: (Math.random() - 0.5) * 10,
            removed: false
        };
        activeEmojis.push(data);
        if (!animationFrameId) animateEmojis();
        setTimeout(() => { if (!data.removed) removeEmoji(data); }, 10000);
    }
    function animateEmojis() {
        for (let i = activeEmojis.length-1; i >= 0; i--) {
            const e = activeEmojis[i];
            if (e.removed) { activeEmojis.splice(i,1); continue; }
            e.position += e.speed * 2;
            e.rotation += e.rotSpeed;
            e.element.style.transform = `translate3d(0, ${e.position}px, 0) rotate(${e.rotation}deg)`;
            if (e.position > window.innerHeight) removeEmoji(e);
            else if (e.position > window.innerHeight - 280) e.element.style.opacity = fadeAlpha(e.position, window.innerHeight).toFixed(3);
        }
        if (activeEmojis.length > 0) animationFrameId = requestAnimationFrame(animateEmojis);
        else animationFrameId = null;
    }
    function removeEmoji(emojiData) {
        if (emojiData.removed) return;
        emojiData.removed = true;
        if (emojiData.element.parentNode) emojiData.element.parentNode.removeChild(emojiData.element);
    }
    function startEmojiSystem() {
        if (!loaderHidden) return;
        if (emojiInterval) clearInterval(emojiInterval);
        removeAllEmojis();
        emojiInterval = setInterval(createFallingEmoji, 900 + Math.random() * 300);
        for (let i=0; i<5; i++) setTimeout(createFallingEmoji, i*200);
    }
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) { if (emojiInterval) clearInterval(emojiInterval); if (animationFrameId) cancelAnimationFrame(animationFrameId); }
        else startEmojiSystem();
    });

    function buildYearsGrid() {
        yearsGrid.innerHTML = '';
        yearsData.forEach((data, idx) => {
            const card = document.createElement('div');
            card.className = `year-card ${data.all ? 'all-card' : ''}`;
            card.setAttribute('data-year', data.year || 'all');
            card.style.animationDelay = `${0.1 + idx * 0.1}s`;
            // Больше НЕ меняем opacity и transform в JS, чтобы не залипало при возврате назад
            card.innerHTML = `
                <div class="year-number">${data.all ? 'ВСЕ' : data.year}</div>
                <div class="year-counters">
                    <div class="counter total" title="Всего стримов"><div class="counter-number">${data.total}</div><div class="counter-label">Всего</div></div>
                    <div class="counter available" title="Доступных"><div class="counter-number">${data.available}</div><div class="counter-label">Доступно</div></div>
                    <div class="counter unavailable" title="Недоступных"><div class="counter-number">${data.unavailable}</div><div class="counter-label">Недоступно</div></div>
                </div>
            `;
            yearsGrid.appendChild(card);
        });
        document.querySelectorAll('.year-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const year = card.getAttribute('data-year');
                let url = year === 'all' ? 'all.html' : `${year}.html`;
                setTimeout(() => { window.location.href = url; }, 50);
            });
        });
    }

    const YEAR_LIST = [2022, 2023, 2024, 2025, 2026];
    const INDEX_KEY = 'cryptoStreamIndex_v3';
    const INDEX_TTL = 600000;
    const STATUS_KEY = 'cryptoYTStatus_v3';
    const STATUS_TTL = 604800000;
    const CHECK_LIMIT = 6;

    const statusStore = readJSON(STATUS_KEY, {});
    let statusStoreDirty = false;

    function persistStatuses() {
        if (!statusStoreDirty) return;
        statusStoreDirty = false;
        writeJSON(STATUS_KEY, statusStore);
    }

    function statusEntry(videoId) {
        const entry = statusStore[videoId];
        if (!entry || typeof entry.a !== 'number' || typeof entry.t !== 'number') return null;
        return entry;
    }

    function readIndexSnapshot() {
        const snapshot = readJSON(INDEX_KEY, null);
        if (!snapshot || !snapshot.years || typeof snapshot.t !== 'number') return null;
        return snapshot;
    }

    async function loadIndexSnapshot() {
        const cached = readIndexSnapshot();
        if (cached && Date.now() - cached.t < INDEX_TTL) return cached;
        
        const years = {};
        await Promise.all(YEAR_LIST.map(async (year) => {
            try {
                const res = await fetch(`data/${year}.json`);
                if (res.ok) {
                    const data = await res.json();
                    years[year] = data.map(s => s.videoId).filter(Boolean);
                }
            } catch(e) {}
        }));
        
        const merged = Object.assign({}, cached ? cached.years : null, years);
        if (Object.keys(merged).length === 0) return cached;
        const snapshot = { t: Date.now(), years: merged };
        writeJSON(INDEX_KEY, snapshot);
        return snapshot;
    }

    function computeCounters(snapshot) {
        const perYear = {};
        const total = { total: 0, available: 0, unavailable: 0, unknown: 0 };
        YEAR_LIST.forEach(year => {
            const ids = snapshot.years[year] || [];
            const result = { total: ids.length, available: 0, unavailable: 0, unknown: 0 };
            ids.forEach(videoId => {
                const entry = statusEntry(videoId);
                if (!entry) result.unknown++;
                else if (entry.a === 1) result.available++;
                else result.unavailable++;
            });
            total.total += result.total;
            total.available += result.available;
            total.unavailable += result.unavailable;
            total.unknown += result.unknown;
            perYear[year] = result;
        });
        return { perYear, total };
    }

    function paintCounters(snapshot) {
        const counters = computeCounters(snapshot);
        yearsData.forEach(data => {
            const result = data.all ? counters.total : counters.perYear[data.year];
            if (!result) return;
            data.total = result.total;
            if (result.unknown > 0 && result.available + result.unavailable === 0) {
                data.available = '...';
                data.unavailable = '...';
            } else {
                data.available = result.available;
                data.unavailable = result.unavailable;
            }
        });
        updateDOMCounters(yearsData);
    }

    function pendingVideoIds(snapshot) {
        const pending = [];
        const seen = {};
        YEAR_LIST.forEach(year => {
            (snapshot.years[year] || []).forEach(videoId => {
                if (seen[videoId]) return;
                seen[videoId] = true;
                const entry = statusEntry(videoId);
                if (!entry || Date.now() - entry.t >= STATUS_TTL) pending.push(videoId);
            });
        });
        return pending;
    }

    async function checkVideoStatus(videoId) {
        let res;
        try {
            res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`, { cache: 'no-store' });
        } catch (e) {
            return null;
        }
        if (res.ok) return true;
        if (res.status === 404 || res.status === 401) return false;
        return null;
    }

    async function checkPendingStatuses(snapshot) {
        const pending = pendingVideoIds(snapshot);
        if (pending.length === 0) return;
        let cursor = 0;
        let done = 0;
        const worker = async () => {
            while (cursor < pending.length) {
                const videoId = pending[cursor++];
                const available = await checkVideoStatus(videoId);
                if (available !== null) {
                    statusStore[videoId] = { a: available ? 1 : 0, t: Date.now() };
                    statusStoreDirty = true;
                }
                done++;
                if (done % 10 === 0) {
                    persistStatuses();
                    paintCounters(snapshot);
                }
            }
        };
        const runners = [];
        for (let i = 0; i < Math.min(CHECK_LIMIT, pending.length); i++) runners.push(worker());
        await Promise.all(runners);
        persistStatuses();
    }

    async function updateDynamicCounters() {
        const cached = readIndexSnapshot();
        if (cached) paintCounters(cached);
        const snapshot = await loadIndexSnapshot();
        if (!snapshot) return;
        paintCounters(snapshot);
        await checkPendingStatuses(snapshot);
        paintCounters(snapshot);
    }

    window.addEventListener('pagehide', persistStatuses);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) persistStatuses();
    });

    function updateDOMCounters(dataArray) {
        document.querySelectorAll('.year-card').forEach(card => {
            const y = card.getAttribute('data-year');
            const d = y === 'all' ? dataArray.find(x => x.all) : dataArray.find(x => x.year === parseInt(y));
            if (d) {
                const totalEl = card.querySelector('.counter.total .counter-number');
                const availEl = card.querySelector('.counter.available .counter-number');
                const unavailEl = card.querySelector('.counter.unavailable .counter-number');
                if(totalEl) totalEl.textContent = d.total;
                if(availEl) availEl.textContent = d.available;
                if(unavailEl) unavailEl.textContent = d.unavailable;
            }
        });
    }

    function formatTime(seconds) {
        if (!isFinite(seconds) || seconds < 0) seconds = 0;
        const minutes = Math.floor(seconds / 60);
        const rest = Math.floor(seconds % 60);
        return `${minutes}:${rest < 10 ? '0' : ''}${rest}`;
    }

    function setPlayIcon(state) {
        const name = state === 'pause' ? 'pause' : (state === 'replay' ? 'replay' : 'play');
        playPauseBtn.innerHTML = icon(name);
        playPauseBtn.title = state === 'pause' ? 'Пауза' : (state === 'replay' ? 'Смотреть снова' : 'Смотреть');
        if (centerPlayEl) {
            const endVisible = endScreenEl && endScreenEl.classList.contains('visible');
            centerPlayEl.innerHTML = icon(state === 'replay' ? 'replay' : 'play');
            centerPlayEl.style.display = (state === 'pause' || endVisible) ? 'none' : 'flex';
        }
    }

    function syncPlayIcon() {
        const video = currentVideo;
        if (!video) return;
        const isAtEnd = video.duration > 0 && video.currentTime >= video.duration - 0.1;
        if (isAtEnd) setPlayIcon('replay');
        else if (video.paused) setPlayIcon('play');
        else setPlayIcon('pause');
    }

    function checkEndState(video) {
        if (!video || !isFinite(video.duration) || video.duration <= 0) return;
        const isAtEnd = video.currentTime >= video.duration - 0.1;
        if (isAtEnd) {
            if (!video.paused && !video.ended) {
                video.pause();
            }
            mediaPlayerDiv.classList.add('video-ended');
            showEndScreen();
        } else {
            hideEndScreen();
            mediaPlayerDiv.classList.remove('video-ended');
        }
        syncPlayIcon();
    }

    function updateBufferBar() {
        const video = currentVideo;
        if (!video || !isFinite(video.duration) || video.duration <= 0) return;
        try {
            const ranges = video.buffered;
            if (!ranges || !ranges.length) return;
            const end = ranges.end(ranges.length - 1);
            progressBuffer.style.width = `${Math.min(100, (end / video.duration) * 100)}%`;
        } catch (e) {}
    }

    function updateProgressBar() {
        const video = currentVideo;
        if (!video || !isFinite(video.duration) || video.duration <= 0 || isDraggingProgress) return;
        const ratio = Math.min(1, video.currentTime / video.duration);
        progressBar.style.width = `${ratio * 100}%`;
        progressThumb.style.left = `${ratio * 100}%`;
        const label = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        if (timeDisplay.textContent !== label) timeDisplay.textContent = label;
    }

    function startProgressTicker() {
        stopProgressTicker();
        const step = () => {
            updateProgressBar();
            progressTicker = requestAnimationFrame(step);
        };
        progressTicker = requestAnimationFrame(step);
    }

    function stopProgressTicker() {
        if (progressTicker) {
            cancelAnimationFrame(progressTicker);
            progressTicker = null;
        }
    }

    function updateVolumeUI() {
        const video = currentVideo;
        const value = video ? (video.muted ? 0 : video.volume) : (isMuted ? 0 : currentVolume);
        volumeLevel.style.width = `${value * 100}%`;
        volumeThumb.style.left = `${value * 100}%`;
        muteBtn.innerHTML = icon(value === 0 ? 'mute' : 'volume');
        muteBtn.title = value === 0 ? 'Включить звук' : 'Выключить звук';
        if (video) saveVolume();
    }

    function applyMediaRatio(width, height) {
        if (!width || !height) return;
        const ratio = width / height;
        if (!isFinite(ratio) || ratio <= 0) return;
        mediaPlayerContainer.style.setProperty('--media-ar', ratio.toFixed(4));
    }

    function resetPlayerState() {
        isPlaying = false;
        isDraggingProgress = false;
        isDraggingVolume = false;
        pendingScrubRatio = null;
        progressBar.style.width = '0%';
        progressThumb.style.left = '0%';
        progressBuffer.style.width = '0%';
        scrubTip.style.left = '0%';
        scrubTip.textContent = '0:00';
        timeDisplay.textContent = '0:00 / 0:00';
        setPlayIcon('play');
        stopProgressTicker();
        mediaPlayerDiv.classList.remove('is-seeking', 'video-ended');
    }

    function releasePlayerVideo() {
        const video = currentVideo;
        currentVideo = null;
        stopProgressTicker();
        if (!video) return;
        try { video.pause(); } catch (e) {}
        try {
            video.removeAttribute('src');
            video.load();
        } catch (e) {}
    }

    function bindVideoEvents(video) {
        video.addEventListener('play', () => {
            isPlaying = true;
            hideEndScreen();
            mediaPlayerDiv.classList.remove('video-ended');
            syncPlayIcon();
            startProgressTicker();
        });
        video.addEventListener('playing', syncPlayIcon);
        video.addEventListener('pause', () => {
            isPlaying = false;
            syncPlayIcon();
            stopProgressTicker();
            updateProgressBar();
        });
        video.addEventListener('loadedmetadata', () => {
            applyMediaRatio(video.videoWidth, video.videoHeight);
            updateProgressBar();
            updateBufferBar();
            syncPlayIcon();
        });
        video.addEventListener('durationchange', () => {
            updateProgressBar();
            updateBufferBar();
        });
        video.addEventListener('progress', updateBufferBar);
        video.addEventListener('seeking', () => {
            mediaPlayerDiv.classList.add('is-seeking');
        });
        video.addEventListener('seeked', () => {
            mediaPlayerDiv.classList.remove('is-seeking');
            updateProgressBar();
            updateBufferBar();
            checkEndState(video);
            if (!video.paused) startProgressTicker();
        });
        video.addEventListener('waiting', () => {
            mediaPlayerDiv.classList.add('is-seeking');
        });
        video.addEventListener('canplay', () => {
            mediaPlayerDiv.classList.remove('is-seeking');
            updateBufferBar();
        });
        video.addEventListener('ended', () => {
            mediaPlayerDiv.classList.add('video-ended');
            showEndScreen();
            syncPlayIcon();
            updateProgressBar();
        });
        video.addEventListener('error', () => {
            releasePlayerVideo();
            document.getElementById('mediaControls').style.display = 'none';
            mediaPlayerDiv.innerHTML = '<div style="color:red; text-align:center; padding:20px;">Ошибка загрузки видео</div>';
        });
    }

    function pickSuggestions(currentUrl) {
        const pool = mediaFiles.filter(media => media.url !== currentUrl);
        const videos = shuffleArray(pool.filter(media => media.type === 'video'));
        const others = shuffleArray(pool.filter(media => media.type !== 'video'));
        return videos.concat(others).slice(0, 6);
    }

    function createEndScreen() {
        endScreenEl = document.createElement('div');
        endScreenEl.className = 'end-screen';
        const head = document.createElement('div');
        head.className = 'end-head';
        head.textContent = 'Что ещё посмотреть';
        endGridEl = document.createElement('div');
        endGridEl.className = 'end-grid';
        endScreenEl.appendChild(head);
        endScreenEl.appendChild(endGridEl);
        endScreenEl.addEventListener('click', (event) => event.stopPropagation());
        mediaPlayerDiv.appendChild(endScreenEl);
    }

    function showEndScreen() {
        if (!endScreenEl) return;
        if (endScreenEl.classList.contains('visible') && endGridEl.children.length > 0) return;
        endGridEl.innerHTML = '';
        pickSuggestions(currentMedia ? currentMedia.url : '').forEach((media, index) => {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'end-item';
            item.style.animationDelay = `${index * 0.05}s`;
            let thumb;
            if (media.type === 'video') {
                thumb = makeThumb(media.url);
            } else {
                thumb = document.createElement('img');
                thumb.loading = 'lazy';
                thumb.decoding = 'async';
                thumb.src = media.url;
                thumb.alt = '';
            }
            item.appendChild(thumb);
            const caption = document.createElement('span');
            caption.className = 'end-caption';
            caption.textContent = media.caption;
            item.appendChild(caption);
            const badge = document.createElement('span');
            badge.className = 'end-badge';
            badge.textContent = momentTypeLabel(media);
            item.appendChild(badge);
            item.addEventListener('click', (event) => {
                event.stopPropagation();
                openMediaPlayer(media);
            });
            endGridEl.appendChild(item);
        });
        endScreenEl.classList.add('visible');
        if (centerPlayEl) centerPlayEl.style.display = 'none';
    }

    function hideEndScreen() {
        if (!endScreenEl) return;
        endScreenEl.classList.remove('visible');
        if (endGridEl) endGridEl.innerHTML = '';
    }

    function updateMiniMenu() {
        if (!currentMedia) return;
        const total = mediaFiles.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;
        
        const items = [
            { index: prevIndex, el: miniPrev, media: mediaFiles[prevIndex] },
            { index: currentIndex, el: miniCurrent, media: mediaFiles[currentIndex] },
            { index: nextIndex, el: miniNext, media: mediaFiles[nextIndex] }
        ];
        
        items.forEach(item => {
            const media = item.media;
            if (!media) return;
            const thumb = item.el.querySelector('.mini-thumb');
            const title = item.el.querySelector('.mini-title');
            
            if (thumb.dataset.url !== media.url) {
                thumb.innerHTML = '';
                if (media.type === 'video') {
                    thumb.appendChild(makeThumb(media.url));
                } else {
                    const img = document.createElement('img');
                    img.alt = '';
                    img.decoding = 'async';
                    img.src = media.url;
                    thumb.appendChild(img);
                }
                thumb.dataset.url = media.url;
            }
            title.textContent = media.caption;
            
            item.el.onclick = (e) => {
                e.stopPropagation();
                navigateTo(item.index);
            };
        });
    }

    function navigateTo(index) {
        if (!mediaFiles[index] || index === currentIndex) return;
        mediaPlayerDiv.style.opacity = '0';
        setTimeout(() => {
            openMediaPlayer(mediaFiles[index]);
            mediaPlayerDiv.style.opacity = '1';
        }, 200);
    }

    function openMediaPlayer(media) {
        if (playerCloseTimer) {
            clearTimeout(playerCloseTimer);
            playerCloseTimer = null;
        }
        releasePlayerVideo();
        mediaPlayerContainer.style.removeProperty('--media-ar');
        mediaPlayerDiv.innerHTML = '';
        mediaPlayerDiv.onclick = null;
        mediaPlayerDiv.classList.remove('video-ended');
        centerPlayEl = null;
        endScreenEl = null;
        endGridEl = null;
        currentMedia = media;
        currentIndex = mediaFiles.findIndex(m => m.url === media.url);
        if (currentIndex === -1) currentIndex = 0;
        resetPlayerState();
        const placeholder = document.createElement('div');
        placeholder.className = 'loading-placeholder';
        placeholder.innerHTML = '<div class="loading-spinner"></div>';
        mediaPlayerDiv.appendChild(placeholder);
        if (media.type === 'image') {
            const img = document.createElement('img');
            img.src = media.url;
            img.alt = media.caption;
            img.onload = () => {
                applyMediaRatio(img.naturalWidth, img.naturalHeight);
                placeholder.remove();
            };
            img.onerror = () => {
                placeholder.remove();
                mediaPlayerDiv.innerHTML = '<div style="color:red; text-align:center; padding:20px;">Ошибка загрузки изображения</div>';
            };
            mediaPlayerDiv.appendChild(img);
            document.getElementById('mediaControls').style.display = 'none';
            mediaPlayerDiv.onclick = () => closeMediaPlayer();
        } else {
            const video = document.createElement('video');
            video.src = media.url;
            video.controls = false;
            video.playsInline = true;
            video.preload = 'auto';
            video.volume = currentVolume;
            video.muted = isMuted;
            video.onloadeddata = () => placeholder.remove();
            mediaPlayerDiv.appendChild(video);
            centerPlayEl = document.createElement('div');
            centerPlayEl.className = 'center-play';
            centerPlayEl.innerHTML = icon('play');
            mediaPlayerDiv.appendChild(centerPlayEl);
            createEndScreen();
            document.getElementById('mediaControls').style.display = 'flex';
            currentVideo = video;
            bindVideoEvents(video);
            updateVolumeUI();
            setPlayIcon('play');
            mediaPlayerDiv.onclick = () => togglePlayPause();
            const promise = video.play();
            if (promise && promise.catch) promise.catch(() => {});
        }
        updateMiniMenu();
        playerOpen = true;
        mediaPlayerOverlay.style.display = 'flex';
        setTimeout(() => {
            mediaPlayerOverlay.style.opacity = '1';
            playerFrame.style.transform = 'scale(1)';
        }, 10);
        document.body.style.overflow = 'hidden';
        updateFooterToggleStyle(true);
    }

    function getClientX(e) {
        if (e.touches && e.touches.length) return e.touches[0].clientX;
        if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0].clientX;
        return e.clientX;
    }

    function ratioFromEvent(e, el) {
        const rect = el.getBoundingClientRect();
        if (!rect.width) return 0;
        return Math.max(0, Math.min(1, (getClientX(e) - rect.left) / rect.width));
    }

    function applyScrubUI(ratio, duration) {
        progressBar.style.width = `${ratio * 100}%`;
        progressThumb.style.left = `${ratio * 100}%`;
        scrubTip.style.left = `${ratio * 100}%`;
        scrubTip.textContent = formatTime(ratio * duration);
        if (isFinite(duration) && duration > 0) {
            timeDisplay.textContent = `${formatTime(ratio * duration)} / ${formatTime(duration)}`;
        }
    }

    function seekVideoToRatio(ratio) {
        const video = currentVideo;
        if (!video || !isFinite(video.duration) || video.duration <= 0) return;
        const target = Math.max(0, Math.min(video.duration, ratio * video.duration));
        try {
            if (typeof video.fastSeek === 'function') {
                video.fastSeek(target);
            } else {
                video.currentTime = target;
            }
        } catch (err) {
            try { video.currentTime = target; } catch (e2) {}
        }
        applyScrubUI(ratio, video.duration);
        checkEndState(video);
    }

    function handleScrubMove(e) {
        if (!isDraggingProgress) return;
        if (e.cancelable) e.preventDefault();
        const video = currentVideo;
        if (!video || !isFinite(video.duration) || video.duration <= 0) return;
        const ratio = ratioFromEvent(e, progressContainer);
        pendingScrubRatio = ratio;
        applyScrubUI(ratio, video.duration);
    }

    function stopScrub() {
        if (!isDraggingProgress) return;
        isDraggingProgress = false;
        progressContainer.classList.remove('dragging');
        window.removeEventListener('mousemove', handleScrubMove);
        window.removeEventListener('mouseup', stopScrub);
        window.removeEventListener('touchmove', handleScrubMove);
        window.removeEventListener('touchend', stopScrub);
        if (pendingScrubRatio !== null) {
            seekVideoToRatio(pendingScrubRatio);
            pendingScrubRatio = null;
        } else {
            updateProgressBar();
            if (currentVideo) checkEndState(currentVideo);
        }
    }

    progressContainer.addEventListener('mousedown', (e) => {
        if (!currentVideo) return;
        e.preventDefault();
        isDraggingProgress = true;
        pendingScrubRatio = null;
        progressContainer.classList.add('dragging');
        handleScrubMove(e);
        window.addEventListener('mousemove', handleScrubMove);
        window.addEventListener('mouseup', stopScrub);
    });

    progressContainer.addEventListener('touchstart', (e) => {
        if (!currentVideo) return;
        isDraggingProgress = true;
        pendingScrubRatio = null;
        progressContainer.classList.add('dragging');
        handleScrubMove(e);
        window.addEventListener('touchmove', handleScrubMove, { passive: false });
        window.addEventListener('touchend', stopScrub);
    }, { passive: true });

    progressContainer.addEventListener('mousemove', (e) => {
        if (!currentVideo || isDraggingProgress || !isFinite(currentVideo.duration) || currentVideo.duration <= 0) return;
        const ratio = ratioFromEvent(e, progressContainer);
        scrubTip.style.left = `${ratio * 100}%`;
        scrubTip.textContent = formatTime(ratio * currentVideo.duration);
    });

    function handleVolumeMove(e) {
        if (!isDraggingVolume) return;
        if (e.cancelable) e.preventDefault();
        const video = currentVideo;
        if (!video) return;
        const ratio = ratioFromEvent(e, volumeSlider);
        currentVolume = ratio;
        isMuted = ratio === 0;
        video.volume = ratio;
        video.muted = isMuted;
        updateVolumeUI();
    }

    function stopVolumeScrub() {
        if (!isDraggingVolume) return;
        isDraggingVolume = false;
        window.removeEventListener('mousemove', handleVolumeMove);
        window.removeEventListener('mouseup', stopVolumeScrub);
        window.removeEventListener('touchmove', handleVolumeMove);
        window.removeEventListener('touchend', stopVolumeScrub);
    }

    volumeSlider.addEventListener('mousedown', (e) => {
        if (!currentVideo) return;
        e.preventDefault();
        isDraggingVolume = true;
        handleVolumeMove(e);
        window.addEventListener('mousemove', handleVolumeMove);
        window.addEventListener('mouseup', stopVolumeScrub);
    });

    volumeSlider.addEventListener('touchstart', (e) => {
        if (!currentVideo) return;
        isDraggingVolume = true;
        handleVolumeMove(e);
        window.addEventListener('touchmove', handleVolumeMove, { passive: false });
        window.addEventListener('touchend', stopVolumeScrub);
    });

    playPauseBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        togglePlayPause();
    });

    muteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const video = currentVideo;
        if (!video) return;
        video.muted = !video.muted;
        if (!video.muted && video.volume === 0) video.volume = 0.6;
        currentVolume = video.volume;
        isMuted = video.muted;
        updateVolumeUI();
    });

    fullscreenBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleFullscreen();
    });

    mediaPlayerDiv.addEventListener('dblclick', () => {
        if (currentVideo) toggleFullscreen();
    });

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            if (mediaPlayerOverlay.requestFullscreen) {
                const promise = mediaPlayerOverlay.requestFullscreen();
                if (promise && promise.catch) promise.catch(() => {});
            }
        } else if (document.exitFullscreen) {
            const promise = document.exitFullscreen();
            if (promise && promise.catch) promise.catch(() => {});
        }
    }

    document.addEventListener('fullscreenchange', () => {
        const isFull = !!document.fullscreenElement;
        fullscreenBtn.innerHTML = icon(isFull ? 'exitFull' : 'full');
        fullscreenBtn.title = isFull ? 'Выйти из полноэкранного режима' : 'На весь экран';
    });

    function togglePlayPause() {
        const video = currentVideo;
        if (!video) return;
        if (video.paused) {
            const isAtEnd = video.duration > 0 && video.currentTime >= video.duration - 0.1;
            if (isAtEnd) {
                video.currentTime = 0;
                hideEndScreen();
                mediaPlayerDiv.classList.remove('video-ended');
            }
            const promise = video.play();
            if (promise && promise.catch) promise.catch(() => {});
        } else {
            video.pause();
        }
        requestAnimationFrame(syncPlayIcon);
    }

    function closeMediaPlayer() {
        if (!playerOpen) return;
        playerOpen = false;
        if (document.fullscreenElement && document.exitFullscreen) {
            const exit = document.exitFullscreen();
            if (exit && exit.catch) exit.catch(() => {});
        }
        mediaPlayerOverlay.style.opacity = '0';
        playerFrame.style.transform = 'scale(0.95)';
        releasePlayerVideo();
        resetPlayerState();
        document.body.style.overflow = '';
        updateFooterToggleStyle(false);
        if (playerCloseTimer) clearTimeout(playerCloseTimer);
        playerCloseTimer = setTimeout(() => {
            playerCloseTimer = null;
            mediaPlayerOverlay.style.display = 'none';
            mediaPlayerDiv.innerHTML = '';
            mediaPlayerDiv.onclick = null;
            mediaPlayerDiv.classList.remove('video-ended');
            centerPlayEl = null;
            endScreenEl = null;
            endGridEl = null;
            currentMedia = null;
        }, 300);
    }

    function updateFooterToggleStyle(isOpen) {
        const toggleWrapper = document.querySelector('.footer-toggle-wrapper');
        if (!toggleWrapper) return;
        toggleWrapper.style.opacity = isOpen ? '0' : '1';
        toggleWrapper.style.visibility = isOpen ? 'hidden' : 'visible';
        toggleWrapper.style.pointerEvents = isOpen ? 'none' : 'auto';
        if (isOpen) toggleWrapper.classList.add('is-hidden');
        else toggleWrapper.classList.remove('is-hidden');
    }

    closePlayerBtn.innerHTML = icon('close');
    fullscreenBtn.innerHTML = icon('full');
    playPauseBtn.innerHTML = icon('play');
    prevBtn.innerHTML = icon('arrowLeft');
    nextBtn.innerHTML = icon('arrowRight');
    updateVolumeUI();

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateTo((currentIndex - 1 + mediaFiles.length) % mediaFiles.length);
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateTo((currentIndex + 1) % mediaFiles.length);
    });

    document.addEventListener('keydown', (event) => {
        if (!playerOpen) return;
        if (document.fullscreenElement && event.key === 'Escape') return;
        if (event.key === 'Escape') {
            closeMediaPlayer();
            return;
        }
        const video = currentVideo;
        if (event.key === ' ' || event.code === 'Space') {
            if (video) {
                event.preventDefault();
                togglePlayPause();
            }
            return;
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            if (video) {
                event.preventDefault();
                const dir = event.key === 'ArrowUp' ? 0.1 : -0.1;
                const next = Math.min(1, Math.max(0, (video.muted ? 0 : video.volume) + dir));
                currentVolume = next;
                isMuted = next === 0;
                video.volume = next;
                video.muted = isMuted;
                updateVolumeUI();
            }
            return;
        }
        if (event.key === 'ArrowLeft') {
            if (event.shiftKey && video) {
                video.currentTime = Math.max(0, video.currentTime - 5);
                updateProgressBar();
                checkEndState(video);
            } else {
                navigateTo((currentIndex - 1 + mediaFiles.length) % mediaFiles.length);
            }
        } else if (event.key === 'ArrowRight') {
            if (event.shiftKey && video) {
                video.currentTime = Math.min(video.duration || 0, video.currentTime + 5);
                updateProgressBar();
                checkEndState(video);
            } else {
                navigateTo((currentIndex + 1) % mediaFiles.length);
            }
        } else if (event.key === 'm' || event.key === 'M' || event.key === 'ь') {
            if (video) {
                video.muted = !video.muted;
                isMuted = video.muted;
                updateVolumeUI();
            }
        } else if (event.key === 'f' || event.key === 'F' || event.key === 'а') {
            toggleFullscreen();
        }
    });
    function showRandomMoment() {
        const imagesOnly = mediaFiles.filter(m => m.type === 'image');
        const random = imagesOnly[Math.floor(Math.random() * imagesOnly.length)];
        randomMomentDiv.innerHTML = '';
        const placeholder = document.createElement('div'); placeholder.className = 'loading-placeholder'; placeholder.innerHTML = '<div class="loading-spinner"></div>';
        randomMomentDiv.appendChild(placeholder);
        const img = document.createElement('img');
        img.src = random.url; img.alt = random.caption;
        img.onload = () => placeholder.remove();
        img.onerror = () => { placeholder.remove(); randomMomentDiv.innerHTML = '<div style="color:red; text-align:center; padding:20px;">Ошибка загрузки</div>'; };
        randomMomentDiv.appendChild(img);
        const caption = document.createElement('div'); caption.className = 'random-moment-caption'; caption.textContent = random.caption;
        randomMomentDiv.appendChild(caption);
        randomMomentDiv.onclick = () => openMediaPlayer(random);
    }
    function renderStillFrame(canvas, url, placeholder, maxWidth) {
        const limit = maxWidth || 480;
        const image = new Image();
        image.decoding = 'async';
        image.onload = () => {
            const naturalWidth = image.naturalWidth || limit;
            const naturalHeight = image.naturalHeight || 270;
            const scale = Math.min(1, limit / naturalWidth) || 1;
            canvas.width = Math.max(1, Math.round(naturalWidth * scale));
            canvas.height = Math.max(1, Math.round(naturalHeight * scale));
            const context = canvas.getContext('2d');
            if (!context) {
                if (placeholder) placeholder.remove();
                return;
            }
            try {
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
            } catch (e) {}
            if (placeholder) placeholder.remove();
        };
        image.onerror = () => { if (placeholder) placeholder.remove(); };
        image.src = url;
    }

    function momentTypeLabel(media) {
        if (media.type === 'video') return 'VID';
        if (media.type === 'image' && media.url.indexOf('assets/gif/') === 0) return 'GIF';
        return 'PIC';
    }

    function showAnimatedPreview(item) {
        const url = item.dataset.anim;
        if (!url || item.querySelector('.moment-anim')) return;
        const preview = document.createElement('img');
        preview.className = 'moment-anim';
        preview.alt = '';
        preview.src = url;
        const caption = item.querySelector('.moment-caption');
        item.insertBefore(preview, caption);
    }

    function hideAnimatedPreview(item) {
        const preview = item.querySelector('.moment-anim');
        if (preview) preview.remove();
    }

    function loadAllMoments() {
        momentsGrid.innerHTML = '';
        mediaFiles.forEach((media, index) => {
            const item = document.createElement('div');
            item.className = 'moment-item';
            item.dataset.type = media.type;
            item.dataset.index = index;
            const placeholder = document.createElement('div'); placeholder.className = 'loading-placeholder'; placeholder.innerHTML = '<div class="loading-spinner"></div>';
            item.appendChild(placeholder);
            const caption = document.createElement('div'); caption.className = 'moment-caption'; caption.textContent = media.caption;
            item.appendChild(caption);
            const badge = document.createElement('div');
            badge.className = 'moment-type';
            badge.textContent = momentTypeLabel(media);
            item.appendChild(badge);
            if (media.type === 'video') {
                const playIcon = document.createElement('div'); playIcon.className = 'play-icon'; item.appendChild(playIcon);
            }
            if (media.type === 'image' && media.url.indexOf('assets/gif/') === 0) {
                item.dataset.anim = media.url;
                item.addEventListener('mouseenter', () => showAnimatedPreview(item));
                item.addEventListener('mouseleave', () => hideAnimatedPreview(item));
            }
            item.addEventListener('click', () => openMediaPlayer(media));
            momentsGrid.appendChild(item);
        });
        if (lazyObserver) lazyObserver.disconnect();
        lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    if (item.dataset.loaded === 'true') return;
                    const mediaObj = mediaFiles[parseInt(item.dataset.index, 10)];
                    if (!mediaObj) return;
                    const placeholder = item.querySelector('.loading-placeholder');
                    let mediaEl;
                    if (mediaObj.type === 'image') {
                        if (mediaObj.url.indexOf('assets/gif/') === 0) {
                            mediaEl = document.createElement('canvas');
                            renderStillFrame(mediaEl, mediaObj.url, placeholder);
                        } else {
                            mediaEl = document.createElement('img');
                            mediaEl.loading = 'lazy';
                            mediaEl.decoding = 'async';
                            mediaEl.src = mediaObj.url;
                            mediaEl.alt = mediaObj.caption;
                            mediaEl.onload = () => { if (placeholder) placeholder.remove(); };
                            mediaEl.onerror = () => { if (placeholder) placeholder.remove(); };
                        }
                        item.insertBefore(mediaEl, item.firstChild);
                    } else {
                        mediaEl = makeThumb(mediaObj.url, () => { if (placeholder) placeholder.remove(); });
                        item.insertBefore(mediaEl, item.firstChild);
                    }
                    item.dataset.loaded = 'true';
                    lazyObserver.unobserve(item);
                }
            });
        }, { rootMargin: '200px' });
        Array.from(momentsGrid.children).forEach(item => lazyObserver.observe(item));
    }
    function filterMoments(category) {
        const items = document.querySelectorAll('.moment-item');
        items.forEach(item => { item.style.display = (category === 'all' || item.dataset.type === category) ? 'block' : 'none'; });
    }

    function preloadResources() {
        return new Promise(resolve => {
            const urlsToPreload = [
                ...emojiUrls.slice(0, 20),
                'assets/background/2022.webp','assets/background/2023.webp','assets/background/2024.webp','assets/background/2025.webp','assets/background/2026.webp',
                'assets/avatars/telegram_avatar.webp','assets/avatars/telegram.webp','assets/avatars/youtube_avatar.webp','assets/avatars/youtube.webp','assets/avatars/discord_avatar.webp','assets/avatars/discord.webp'
            ];
            let loaded = 0;
            let finished = false;
            const total = urlsToPreload.length;
            const done = () => {
                if (finished) return;
                finished = true;
                resolve();
            };
            if (total === 0) return done();
            const step = () => {
                loaded++;
                if (loaded >= total) done();
            };
            urlsToPreload.forEach(url => {
                const img = new Image();
                img.decoding = 'async';
                img.src = url;
                img.onload = step;
                img.onerror = step;
            });
            setTimeout(done, 900);
        });
    }

    function changeFavicon() {
        const randomEmoji = emojiUrls[Math.floor(Math.random() * emojiUrls.length)];
        favicon.href = randomEmoji;
    }

    const INTRO_KEY = 'cryptoIntroShown';

    function introSeen() {
        try {
            return sessionStorage.getItem(INTRO_KEY) === '1';
        } catch (e) {
            return false;
        }
    }

    function markIntroSeen() {
        try {
            sessionStorage.setItem(INTRO_KEY, '1');
        } catch (e) {}
    }

    function afterReveal() {
        showRandomMoment();
        startEmojiSystem();
        updateDynamicCounters();
        setTimeout(warmThumbs, 1200);
    }

    function revealSite(instant) {
        if (loaderHidden) return;
        loaderHidden = true;
        markIntroSeen();
        if (loadingTextTimer) {
            clearInterval(loadingTextTimer);
            loadingTextTimer = null;
        }
        if (instant) {
            loaderScreen.style.display = 'none';
            mainContent.style.display = 'block';
            gifGrid.innerHTML = '';
            afterReveal();
            return;
        }
        loaderScreen.style.opacity = '0';
        setTimeout(() => {
            loaderScreen.style.display = 'none';
            mainContent.style.display = 'block';
            gifGrid.innerHTML = '';
            afterReveal();
        }, 400);
    }

    function hideLoader() {
        revealSite(false);
    }

    function init() {
        buildYearsGrid();
        loadAllMoments();
        if (introSeen() || document.documentElement.classList.contains('intro-skip')) {
            revealSite(true);
        } else {
            const gifLoad = renderGifs();
            rotateLoadingTexts();
            showRandomEmoji();
            Promise.all([gifLoad, preloadResources()]).then(hideLoader);
        }
        changeFavicon();
        setInterval(changeFavicon, 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) hideLoader();
    });

    showAllBtn.addEventListener('click', () => {
        document.querySelector('.random-moment').style.display = 'none';
        allMomentsDiv.style.display = 'block';
        allMomentsDiv.style.opacity = '1';
    });
    backToRandomBtn.addEventListener('click', () => {
        allMomentsDiv.style.display = 'none';
        document.querySelector('.random-moment').style.display = 'block';
        showRandomMoment();
    });
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterMoments(btn.dataset.category);
        });
    });
    closePlayerBtn.addEventListener('click', closeMediaPlayer);
    mediaPlayerOverlay.addEventListener('click', (e) => { if (e.target === mediaPlayerOverlay) closeMediaPlayer(); });

    const toggleWrapper = document.createElement('div');
    toggleWrapper.className = 'footer-toggle-wrapper';
    toggleWrapper.innerHTML = '<button id="toggleFooterBtn" class="footer-toggle-btn" title="Скрыть футер"></button>';
    document.body.appendChild(toggleWrapper);
    const toggleBtn = document.getElementById('toggleFooterBtn');
    toggleBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9.4 12 15.4 18 9.4 16.6 8 12 12.6 7.4 8Z"/></svg>';
    function updateButtonPosition() {
        if (footer.classList.contains('footer-hidden')) {
            toggleWrapper.style.bottom = '10px'; toggleBtn.classList.add('is-up'); toggleBtn.title = "Показать футер";
        } else {
            const footerHeight = footer.offsetHeight;
            toggleWrapper.style.bottom = `${footerHeight + 15}px`; toggleBtn.classList.remove('is-up'); toggleBtn.title = "Скрыть футер";
        }
        toggleWrapper.classList.toggle('is-hidden', playerOpen);
        toggleWrapper.style.opacity = playerOpen ? '0' : '1';
        toggleWrapper.style.visibility = playerOpen ? 'hidden' : 'visible';
        toggleWrapper.style.pointerEvents = playerOpen ? 'none' : 'auto';
    }
    toggleBtn.addEventListener('click', function() {
        footer.classList.toggle('footer-hidden');
        updateButtonPosition();
    });
    setTimeout(() => {
        updateButtonPosition();
        const resizeObserver = new ResizeObserver(() => { if (!footer.classList.contains('footer-hidden')) updateButtonPosition(); });
        resizeObserver.observe(footer);
        const mediaObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => { if (mutation.attributeName === 'style') updateButtonPosition(); });
        });
        mediaObserver.observe(mediaPlayerOverlay, { attributes: true, attributeFilter: ['style'] });
    }, 100);
})();