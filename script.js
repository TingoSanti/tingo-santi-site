
function $(sel){ return document.querySelector(sel); }
function el(tag, cls, html){
  const node = document.createElement(tag);
  if(cls) node.className = cls;
  if(html !== undefined) node.innerHTML = html;
  return node;
}
function escapeHtml(v){
  return String(v ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function currentSlug(){
  const seg = location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
  return seg.length ? seg[seg.length-1].toLowerCase() : '';
}
function activeChannel(){
  const base = SITE.contatoPadrao || SITE.contato || {};
  const slug = currentSlug();
  const canal = (SITE.canais && SITE.canais[slug]) ? SITE.canais[slug] : {};
  return Object.assign({}, base, canal);
}
function setupMenu(){
  const btn = $('#menuBtn');
  const panel = $('#mobilePanel');
  btn.addEventListener('click', () => panel.classList.toggle('open'));
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => panel.classList.remove('open')));
}
let heroMuted = true;
function heroCommand(func){
  const iframe = $('#heroVideo');
  if(!iframe || !iframe.contentWindow) return;
  iframe.contentWindow.postMessage(JSON.stringify({event:'command',func,args:[]}), '*');
}
function setupHero(){
  $('#heroMedia').style.backgroundImage = `url('${SITE.hero.foto}')`;
  $('#heroTagline').textContent = SITE.hero.tagline || '';
  const heroVideoId = SITE.hero.youtubeId || SITE.videoShow.youtubeId || '';
  if(heroVideoId){
    $('#heroVideo').src = `https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&playlist=${heroVideoId}&playsinline=1&modestbranding=1&rel=0&enablejsapi=1&origin=${location.origin}`;
  }
  $('#soundBtn').addEventListener('click', toggleHeroSound);
}
function toggleHeroSound(){
  heroMuted = !heroMuted;
  heroCommand(heroMuted ? 'mute' : 'unMute');
  const btn = $('#soundBtn');
  btn.classList.toggle('is-on', !heroMuted);
  btn.setAttribute('aria-label', heroMuted ? 'Ligue o som' : 'Desligar som');
  const label = btn.querySelector('.sound-label');
  if(label) label.textContent = heroMuted ? 'Ligue o som' : 'Som ligado';
}
function setupShow(){
  $('#showMain').src = SITE.show.fotoMain;
  $('#showAccent').src = SITE.show.fotoAccent;
  $('#showIntro').textContent = SITE.show.intro;
  const wrap = $('#showFeatures');
  SITE.show.features.forEach(item => {
    wrap.appendChild(el('article','feature', `<h3>${escapeHtml(item.titulo)}</h3><p>${escapeHtml(item.desc)}</p>`));
  });
}
function setupVideo(){
  const thumb = $('#videoThumb');
  const player = $('#videoPlayer');
  const frame = $('#videoFrame');
  $('#videoTitle').textContent = SITE.videoShow.titulo || '';
  thumb.style.backgroundImage = `url(https://img.youtube.com/vi/${SITE.videoShow.youtubeId}/maxresdefault.jpg)`;
  frame.src = `https://www.youtube-nocookie.com/embed/${SITE.videoShow.youtubeId}?autoplay=0&rel=0&modestbranding=1&playsinline=1&controls=1&enablejsapi=1&origin=${location.origin}`;
  player.addEventListener('click', toggleShowVideo);
}
let showVideoLoaded = false;
let showVideoPlaying = false;
function showVideoCommand(func){
  const frame = $('#videoFrame');
  if(!frame || !frame.contentWindow) return;
  frame.contentWindow.postMessage(JSON.stringify({event:'command',func,args:[]}), '*');
}
function toggleShowVideo(){
  const player = $('#videoPlayer');
  if(!showVideoLoaded){
    heroMuted = true;
    heroCommand('mute');
    heroCommand('pauseVideo');
    $('#videoFrame').classList.remove('hidden');
    player.classList.add('is-active');
    showVideoLoaded = true;
    setTimeout(() => showVideoCommand('playVideo'), 280);
    showVideoPlaying = true;
    return;
  }
  if(showVideoPlaying){
    showVideoCommand('pauseVideo');
    showVideoPlaying = false;
    player.classList.remove('is-active');
  } else {
    heroMuted = true;
    heroCommand('mute');
    heroCommand('pauseVideo');
    showVideoCommand('playVideo');
    showVideoPlaying = true;
    player.classList.add('is-active');
  }
}
function setupGallery(){
  const landscape = $('#galleryLandscape');
  const portrait = $('#galleryPortrait');
  const items = (SITE.galeria || []);
  const landscapes = items.filter(item => item.orientacao === 'landscape').slice(0,4);
  const portraits = items.filter(item => item.orientacao === 'portrait').slice(0,4);
  landscapes.forEach((item, i) => {
    const a = el('a', 'gallery-item landscape-item', `<img src="${escapeHtml(item.arquivo)}" alt="Galeria horizontal ${i+1}">`);
    a.href = item.arquivo;
    a.target = '_blank';
    a.rel = 'noopener';
    landscape.appendChild(a);
  });
  portraits.forEach((item, i) => {
    const a = el('a', 'gallery-item portrait-item', `<img src="${escapeHtml(item.arquivo)}" alt="Galeria vertical ${i+1}">`);
    a.href = item.arquivo;
    a.target = '_blank';
    a.rel = 'noopener';
    portrait.appendChild(a);
  });
}
function setupInstagram(){
  $('#instagramTitle').textContent = SITE.instagram.titulo || '@TingoSanti';
  const wrap = $('#instagramGrid');
  (SITE.instagram.itensFallback || []).slice(0,6).forEach(item => {
    const a = el('a', 'ig-item', `<img src="${escapeHtml(item.imagem)}" alt="${escapeHtml(item.alt || 'Instagram')}">`);
    a.href = item.link || '#';
    a.target = '_blank';
    a.rel = 'noopener';
    wrap.appendChild(a);
  });
}
function setupComposer(){
  $('#composerTitle').innerHTML = SITE.compositor.titulo || '';
  $('#composerSubtitle').textContent = SITE.compositor.subtitulo || '';
  const shortId = SITE.compositor.youtubeShortId || '';
  $('#shortPoster').src = `https://img.youtube.com/vi/${shortId}/maxresdefault.jpg`; 
  $('#shortLink').href = `https://www.youtube.com/watch?v=${shortId}`;
  const type = SITE.compositor.spotifyEmbedType || 'artist';
  $('#spotifyEmbed').src = `https://open.spotify.com/embed/${type}/${SITE.compositor.spotifyEmbedId}?utm_source=generator&theme=0`;
  $('#composerHighlightTitle').textContent = SITE.compositor.destaque.titulo || '';
  $('#composerHighlightDesc').textContent = SITE.compositor.destaque.desc || '';
  $('#spotifyBtn').href = SITE.contato.spotify || '#';
  $('#instagramBtn').href = `https://instagram.com/${(SITE.contato.instagram || 'tingosanti').replace('@','')}`;
}
function setupNumbers(){
  $('#numbersTitle').innerHTML = SITE.numerosTitulo || '';
  $('#numbersSubtitle').textContent = SITE.numerosSubtitulo || '';
  $('#numbersFootnote').textContent = SITE.numerosRodape || '';
  const wrap = $('#numbersGrid');
  (SITE.numeros || []).forEach(item => {
    const cls = item.destaque ? 'number-card featured' : 'number-card';
    wrap.appendChild(el('div', cls, `<strong>${escapeHtml(item.numero)}</strong><div class="label">${escapeHtml(item.label)}</div><p>${escapeHtml(item.desc)}</p>`));
  });
}
function setupNotoriedade(){
  return;
}
function imprensaCard(item, compact=false){
  const href = item.link || '#';
  const media = `<div class="card-media" style="background-image:url('${escapeHtml(item.imagem)}');background-position:${escapeHtml(item.pos || 'center center')}"></div>`;
  return `<a class="card" href="${escapeHtml(href)}" ${item.link ? 'target="_blank" rel="noopener"' : ''}>${media}<div class="card-body"><div class="card-meta">${escapeHtml(item.veiculo)} · ${escapeHtml(item.data)}</div><h3 style="${compact ? 'font-size:18px' : ''}">${escapeHtml(item.manchete)}</h3>${compact ? '' : '<p>Leitura editorial e prova pública de aderência.</p>'}</div></a>`;
}
function setupImprensa(){
  const featured = (SITE.imprensa || []).filter(x => x.featured).slice(0,1);
  const mids = (SITE.imprensa || []).filter(x => !x.featured && !x.official).slice(0,2);
  const press = (SITE.imprensa || []).filter(x => !x.featured && !x.official).slice(2,8);
  const editorialWrap = $('#editorialGrid');
  [...featured, ...mids].forEach((item, idx) => {
    editorialWrap.insertAdjacentHTML('beforeend', imprensaCard(item, idx>0));
  });
  $('#pressQuote').textContent = SITE.imprensaQuote.texto || '';
  $('#pressQuoteSource').textContent = SITE.imprensaQuote.fonte || '';
  const pressWrap = $('#pressGrid');
  press.forEach(item => pressWrap.insertAdjacentHTML('beforeend', imprensaCard(item, true)));
  const validations = (SITE.validacoes || []).slice(0,6);
  if(validations.length){
    const container = $('#imprensa .container');
    container.appendChild(el('div','', '<div style="height:18px"></div><div class="kicker">Validações institucionais</div><h3 style="margin:0 0 14px;font-size:26px;line-height:1.08">Presença pública e institucional já consolidada.</h3>'));
    const grid = el('div','validation-grid','');
    validations.forEach(v=> grid.appendChild(el('div','validation',`<strong>${escapeHtml(v.titulo)}</strong><span>${escapeHtml(v.subtitulo)}</span>`)));
    container.appendChild(grid);
  }
}
function setupSobre(){
  $('#aboutPhoto').src = SITE.sobre.foto;
  $('#aboutQuote').textContent = SITE.sobre.citacao || '';
  const paras = $('#aboutParagraphs');
  (SITE.sobre.paras || []).forEach(p => {
    paras.appendChild(el('p','', p));
  });
  const timeline = $('#timeline');
  (SITE.sobre.marcos || []).forEach(item => {
    timeline.appendChild(el('div','timeline-item', `<strong>${escapeHtml(item.ano)}</strong><div>${escapeHtml(item.desc)}</div>`));
  });
}
function setupContratantes(){
  $('#contractIntro').textContent = SITE.contratantes.intro || '';
  const docs = $('#docList');
  (SITE.contratantes.documentos || []).forEach(doc => {
    docs.appendChild(el('div','doc-item', `<div class="doc-mark">✓</div><div>${escapeHtml(doc)}</div>`));
  });
  const prec = $('#precList');
  (SITE.contratantes.precedentes || []).forEach(item => {
    prec.appendChild(el('div','prec-item', `<small>${escapeHtml(item.categoria)}</small><div style="font-weight:700;margin-bottom:5px">${escapeHtml(item.municipio)}</div><div class="muted">${escapeHtml(item.evento)}</div>`));
  });
}
function setupContato(){
  const C = activeChannel();
  $('#contactIntro').textContent = C.contatoIntro || 'Solicitações comerciais e técnicas atendidas pela produção.';
  $('#contactLabel').textContent = C.contatoLabel || 'Contato comercial';
  $('#contactPhone').textContent = C.whatsappLabel || '';
  $('#contactEmail').textContent = C.email || '';
  $('#contactInstagram').textContent = '@' + String(C.instagram || 'tingosanti').replace('@','');
  $('#contactCnpj').textContent = C.cnpj || '';
  $('#contactAddress').textContent = C.endereco || '';

  const wa = String(C.whatsapp || '').replace(/\D/g,'');
  $('#waBtn').href = wa ? `https://wa.me/${wa}` : '#';
  $('#waBtn').textContent = C.whatsappLabel ? `WhatsApp ${C.whatsappLabel}` : 'WhatsApp';

  $('#footerInstagram').href = `https://instagram.com/${String(C.instagram || SITE.contato.instagram || 'tingosanti').replace('@','')}`;
  $('#footerSpotify').href = C.spotify || SITE.contato.spotify || '#';

  const form = $('#contactForm');
  const success = $('#formSuccess');
  const formspree = C.formspree || '';
  if(formspree){
    form.action = `https://formspree.io/f/${formspree}`;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const res = await fetch(form.action, {method:'POST', body:data, headers:{'Accept':'application/json'}});
      if(res.ok){
        form.classList.add('hidden');
        success.classList.remove('hidden');
      }else{
        alert('Não foi possível enviar agora. Tente novamente em instantes.');
      }
    });
  } else {
    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.textContent = 'Este canal não usa formulário. Use o WhatsApp ou o e-mail exibidos ao lado.';
  }
}
function setupFooter(){
  $('#yearNow').textContent = new Date().getFullYear();
}
document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  setupHero();
  setupShow();
  setupVideo();
  setupGallery();
  setupInstagram();
  setupComposer();
  setupNumbers();
  setupNotoriedade();
  setupImprensa();
  setupSobre();
  setupContratantes();
  setupContato();
  setupFooter();
});
