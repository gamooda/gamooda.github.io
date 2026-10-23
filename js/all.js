document.addEventListener('DOMContentLoaded', async () => {
    const years = ['2022', '2023', '2024', '2025', '2026'];
    const container = document.getElementById('streamsContainer');
    let allStreams = [], currentFilter = 'all', currentYear = 'all', currentSearch = '';

    try {
        const promises = years.map(y => fetch(`data/${y}.json`).then(r => r.ok ? r.json() : []).then(data => data.map(d => ({...d, year: y}))));
        const results = await Promise.all(promises);
        allStreams = results.flat();
        
        const unique = []; const seen = new Set();
        allStreams.forEach(s => { if (!seen.has(s.url)) { seen.add(s.url); unique.push(s); } });
        allStreams = unique.sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')));
        
        allStreams.forEach(s => { 
            const cached = cachedStatus(s.videoId);
            s.status = cached ? (cached.available ? 'available' : 'unavailable') : 'checking';
            s.statusIcon = cached ? (cached.available ? '✅' : '❌') : '⏳';
        });
    } catch (e) { container.innerHTML = '<div class="error">Ошибка загрузки данных</div>'; return; }

    function updateCounters() {
        const filtered = allStreams.filter(s => (currentYear === 'all' || s.year === currentYear) && (!currentSearch || s.title.toLowerCase().includes(currentSearch)));
        const counts = { all: filtered.length, available: 0, unavailable: 0 };
        filtered.forEach(s => { if (s.status === 'available') counts.available++; if (s.status === 'unavailable') counts.unavailable++; });
        
        const yearCounts = { all: allStreams.length };
        years.forEach(y => yearCounts[y] = allStreams.filter(s => s.year === y).length);

        document.querySelectorAll('.filter-btn').forEach(btn => { const el = btn.querySelector('.filter-count'); if(el) el.textContent = counts[btn.dataset.filter]; });
        document.querySelectorAll('.year-btn').forEach(btn => { const el = btn.querySelector('.year-count'); if(el) el.textContent = yearCounts[btn.dataset.year]; });
    }

    function render() {
        container.innerHTML = '';
        const filtered = allStreams.filter(s => {
            const matchStatus = currentFilter === 'all' || s.status === currentFilter;
            const matchYear = currentYear === 'all' || s.year === currentYear;
            const matchSearch = !currentSearch || s.title.toLowerCase().includes(currentSearch) || s.number.includes(currentSearch) || s.date.includes(currentSearch);
            return matchStatus && matchYear && matchSearch;
        });
        
        if (!filtered.length) { container.innerHTML = '<div class="no-results">Ничего не найдено</div>'; return; }
        
        filtered.forEach((s, i) => {
            const card = document.createElement('div');
            card.className = `stream-card ${s.status}`; card.dataset.vid = s.videoId || ''; card.style.animationDelay = `${0.1 + (i%15) * 0.05}s`;
            card.innerHTML = `
                <div class="stream-number">#${s.number}</div><div class="stream-year">${s.year}</div>
                <div class="stream-thumbnail"><img src="https://img.youtube.com/vi/${s.videoId}/mqdefault.jpg" alt="" loading="lazy"></div>
                <div class="stream-info">
                    <div class="stream-title">${s.title}</div><div class="stream-date">${s.date}</div>
                    <div class="stream-status"><span class="status-icon status-${s.status}">${s.statusIcon}</span><span>${s.status === 'available' ? 'Доступен' : (s.status === 'unavailable' ? 'Недоступен' : 'Проверка...')}</span></div>
                    <img src="assets/avatars/youtube.webp" class="yt-icon-link" alt="YouTube">
                </div><a href="${s.url}" class="stream-link"></a>`;
            
            card.querySelector('.stream-link').addEventListener('click', (e) => { e.preventDefault(); openVideoModal(s.videoId, s.url); });
            card.querySelector('.yt-icon-link').addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); window.open(s.url, '_blank'); });
            container.appendChild(card);
        });
    }

    document.getElementById('searchInput').addEventListener('input', function() { currentSearch = this.value.toLowerCase().trim(); render(); });
    document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', function() { document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); currentFilter=this.dataset.filter; render(); }));
    document.querySelectorAll('.year-btn').forEach(btn => btn.addEventListener('click', function() { document.querySelectorAll('.year-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); currentYear=this.dataset.year; render(); }));

    document.querySelectorAll('.filter-btn, .year-btn').forEach(btn => { const el = document.createElement('div'); el.className = btn.classList.contains('year-btn') ? 'year-count' : 'filter-count'; btn.appendChild(el); });
    
    updateCounters(); render(); checkAllStreams(allStreams, updateCounters);
});