document.addEventListener('DOMContentLoaded', async () => {
    const yearStr = location.pathname.split('/').pop().replace('.html', '');
    const container = document.getElementById('streamsContainer');
    let allStreams = [], currentFilter = 'all', currentSearch = '';

    try {
        const res = await fetch(`data/${yearStr}.json`);
        if (!res.ok) throw new Error('Not found');
        allStreams = await res.json();
        allStreams.forEach(s => { 
            const cached = cachedStatus(s.videoId);
            s.status = cached ? (cached.available ? 'available' : 'unavailable') : 'checking';
            s.statusIcon = cached ? (cached.available ? '✅' : '❌') : '⏳';
        });
    } catch (e) {
        container.innerHTML = '<div class="error">Ошибка загрузки данных</div>';
        return;
    }

    function updateCounters() {
        const counts = { all: allStreams.length, available: 0, unavailable: 0 };
        allStreams.forEach(s => { if (s.status === 'available') counts.available++; if (s.status === 'unavailable') counts.unavailable++; });
        document.querySelectorAll('.filter-btn').forEach(btn => {
            const old = btn.querySelector('.filter-count'); if (old) old.remove();
            const el = document.createElement('div'); el.className = 'filter-count'; el.textContent = counts[btn.dataset.filter]; btn.appendChild(el);
        });
    }

    function render() {
        container.innerHTML = '';
        const filtered = allStreams.filter(s => {
            const matchStatus = currentFilter === 'all' || s.status === currentFilter;
            const matchSearch = !currentSearch || s.title.toLowerCase().includes(currentSearch) || s.number.includes(currentSearch) || s.date.includes(currentSearch);
            return matchStatus && matchSearch;
        });
        if (!filtered.length) { container.innerHTML = '<div class="no-results">Ничего не найдено</div>'; return; }
        
        filtered.forEach((s, i) => {
            const card = document.createElement('div');
            card.className = `stream-card ${s.status}`; card.dataset.vid = s.videoId || ''; card.style.animationDelay = `${0.1 + i * 0.05}s`;
            card.innerHTML = `
                <div class="stream-number">#${s.number}</div>
                <div class="stream-thumbnail"><img src="https://img.youtube.com/vi/${s.videoId}/mqdefault.jpg" alt="" loading="lazy"></div>
                <div class="stream-info">
                    <div class="stream-title">${s.title}</div>
                    <div class="stream-date">${s.date}</div>
                    <div class="stream-status"><span class="status-icon status-${s.status}">${s.statusIcon}</span><span>${s.status === 'available' ? 'Доступен' : (s.status === 'unavailable' ? 'Недоступен' : 'Проверка...')}</span></div>
                    <img src="assets/avatars/youtube.webp" class="yt-icon-link" alt="YouTube">
                </div><a href="${s.url}" class="stream-link"></a>`;
            
            card.querySelector('.stream-link').addEventListener('click', (e) => { e.preventDefault(); openVideoModal(s.videoId, s.url); });
            card.querySelector('.yt-icon-link').addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); window.open(s.url, '_blank'); });
            container.appendChild(card);
        });
    }

    document.getElementById('searchInput').addEventListener('input', function() { currentSearch = this.value.toLowerCase().trim(); render(); });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');
            currentFilter = this.dataset.filter; render();
        });
    });

    updateCounters(); render(); checkAllStreams(allStreams, updateCounters);
});