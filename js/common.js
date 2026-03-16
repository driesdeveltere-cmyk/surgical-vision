// ── Shared card builders ───────────────────────────────────────────────────

function getProcColor(procedureId) {
  const map = { rarp: 'teal', rc: 'blue', recon: 'amber' };
  return map[procedureId] || 'teal';
}

function getProcShort(procedureId) {
  const proc = SV_DATA.procedures.find(p => p.id === procedureId);
  return proc ? proc.shortTitle : '';
}

function getChapterTitle(procedureId, chapterId) {
  const proc = SV_DATA.procedures.find(p => p.id === procedureId);
  if (!proc) return '';
  const ch = proc.chapters.find(c => c.id === chapterId);
  return ch ? ch.title : '';
}

function youtubeUrl(youtubeId) {
  if (!youtubeId || youtubeId === 'YOUTUBE_ID_HERE') return '#';
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

function difficultyPill(difficulty) {
  const cls = difficulty === 'Essential' ? 'pill-essential' : 'pill-advanced';
  return `<span class="meta-pill ${cls}">${difficulty}</span>`;
}

function complexityPill(complexity) {
  const cls = complexity === 'Challenging anatomy' ? 'pill-challenging' : 'pill-standard';
  return `<span class="meta-pill ${cls}">${complexity}</span>`;
}

function buildFeaturedCard(v) {
  const proc = getProcShort(v.procedureId);
  const chapter = getChapterTitle(v.procedureId, v.chapterId);
  const url = youtubeUrl(v.youtubeId);
  return `
    <div class="featured-card" style="margin-bottom:24px;">
      <div class="featured-thumb">
        <span class="badge-new">Latest</span>
        <a href="${url}" target="_blank" class="play-btn">
          <div class="play-icon"></div>
        </a>
        <span class="duration-badge">${v.duration}</span>
      </div>
      <div class="featured-meta">
        <span class="video-tag">${proc} · ${chapter}</span>
        <p class="video-title">${v.title}</p>
        <p class="video-desc">${v.description}</p>
        <div class="tag-row" style="margin-top:14px;">
          ${difficultyPill(v.difficulty)}
          ${complexityPill(v.complexity)}
        </div>
        <a href="${url}" target="_blank" class="watch-link">Watch on YouTube →</a>
      </div>
    </div>`;
}

function buildVideoCard(v) {
  const proc = getProcShort(v.procedureId);
  const chapter = getChapterTitle(v.procedureId, v.chapterId);
  const url = youtubeUrl(v.youtubeId);
  const tagsHtml = v.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('');
  return `
    <a class="video-card" href="${url}" target="_blank">
      <div class="video-thumb">
        <span class="thumb-proc-label">${proc}</span>
        <div class="play-btn-sm"><div class="play-icon-sm"></div></div>
        <span class="duration-badge">${v.duration}</span>
      </div>
      <div class="video-meta">
        <span class="video-tag">${chapter}</span>
        <p class="video-title">${v.title}</p>
        <p class="video-desc">${v.description.substring(0,100)}…</p>
        <div class="meta-row">
          ${difficultyPill(v.difficulty)}
          ${complexityPill(v.complexity)}
          <span class="meta-duration">${v.duration}</span>
        </div>
        <div class="tag-row">${tagsHtml}</div>
      </div>
    </a>`;
}
