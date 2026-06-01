/* =============================================
   TUMADAM MOD — app.js
   Data + Logic tách biệt hoàn toàn khỏi HTML/CSS
   Font: Be Vietnam Pro — hỗ trợ tiếng Việt & tiếng Anh
   ============================================= */

/* =============================================
   DATA — GAME DOWNLOADS
   hide: false = hiện, true = ẩn app khỏi danh sách
   ============================================= */
const GAMES = [
  {
    name:     'Aov Mod(No Hack)',
    meta:     'Cập nhật 2/6',
    img:      'https://play-lh.googleusercontent.com/29k6AAX1NYWPdnRmVm86NgvDlywy9o3TnNBJrbHWm3emdLB2dGrxdgc05f621I1kMVSph8U1igCpx3XTdS8blQ=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/aovmod',
    hide:     false,
  },
  {
    name:     'Aov Cheat(Map+Mod)',
    meta:     'Cập nhật 2/6',
    img:      'https://play-lh.googleusercontent.com/29k6AAX1NYWPdnRmVm86NgvDlywy9o3TnNBJrbHWm3emdLB2dGrxdgc05f621I1kMVSph8U1igCpx3XTdS8blQ=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/aovcheat',
    hide:     false,
  },
  {
    name:     'Map/Skin AOV Android',
    meta:     'Cập nhật 2/6 • Dùng Unlock nếu không muốn hắc',
    img:      'https://i.imgur.com/vKPMWWx.jpeg',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'android',
    url64:    'https://tumadam.com/aov-mapmod-andr-64bit',
    url32:    'https://tumadam.com/aov-mapmod-andr-32bit',
    urlKey:   'https://tumadam.github.io/getkeygameios/andr',
    hide:     false,
  },
    {
    name:     'Hắc PUPG iOS',
    meta:     'Cập nhật 2/6',
    img:      'https://tumadam.com/_next/image?url=https%3A%2F%2Fcdn.tumadam.com%2Fgames%2Ficon%2F412c9c52-c2df-4d65-b6ec-4c58a85234a5.webp&w=256&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/pubg-mobile-vn',
    hide:     false,
  },
  {
    name:     'Roblox iOS Client Delta',
    meta:     'Cập nhật 2/6',
    img:      'https://tumadam.com/_next/image?url=https%3A%2F%2Fcdn.tumadam.com%2Fgames%2Ficon%2Ff50e2394-dcb6-4063-89ff-126faed25f26.png&w=256&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/roblox-vn',
    hide:     false,
  },
];

/* =============================================
   DATA — GET KEY
   hide: false = hiện, true = ẩn
   ============================================= */
const KEYS = [
  {
    name:      'Get Key LQ iOS',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'ios',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://tumadam.github.io/getkeygameios/',
    hide:      false,
  },
  {
    name:      'Get Key LQ iOS [Máp Sáng]',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'ios',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://tumadam.github.io/getkeygameios/hackmap',
    hide:      true,
  },
  {
    name:      'Mua Key LQ iOS + Android',
    desc:      'Mua nếu không muốn vượt link',
    iconClass: 'shop',
    icon:      'bi-cart-fill',
    spin:      false,
    url:       'https://tumadam.com/shopkey',
    hide:      false,
  },
  {
    name:      'Get Key LQ Android',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'android',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://tumadam.github.io/getkeygameios/andr',
    hide:      false,
  },
];

/* =============================================
   DATA — BACKGROUND MUSIC PLAYLIST
   ============================================= */
const PLAYLIST = [
  'https://files.catbox.moe/by3qnj.mp3',
  'https://files.catbox.moe/r3samf.mov',
];

/* =============================================
   DATA — TYPED.JS STRINGS
   ============================================= */
const TYPED_STRINGS = [
  'I am Van Man',
  "I'm a Developer & Modder",
  'Top 1 Hacker DakLak =))',
  'Welcome to my Website! ❤️',
  'Scroll down to explore 👇',
];

/* =============================================
   PLATFORM BADGE — iOS / Android icon
   ============================================= */
function platformBadge(type) {
  if (type === 'android') {
    return `<span class="platform-badge android"><i class="bi bi-android2"></i> Android</span>`;
  }
  if (type === 'ios') {
    return `<span class="platform-badge ios"><i class="bi bi-apple"></i> iOS</span>`;
  }
  return '';
}

/* =============================================
   RENDER HELPERS
   ============================================= */

/**
 * Tạo HTML cho một game card
 * Bỏ qua nếu game.hide === true
 */
function renderGameCard(game) {
  if (game.hide === true) return null;

  const el = document.createElement('div');
  el.className = 'game-card';

  if (game.type === 'android') {
    el.dataset.type   = 'android';
    el.dataset.url64  = game.url64;
    el.dataset.url32  = game.url32;
    el.dataset.urlKey = game.urlKey || '';
  } else {
    el.dataset.type = 'direct';
    el.dataset.url  = game.url;
  }

  el.innerHTML = `
    <img class="game-thumb"
         src="${game.img}"
         onerror="this.src='${game.fallback}'"
         alt="${game.name}">
    <div class="game-info">
      <div class="game-name">${game.name}</div>
      <div class="game-meta">
        <span class="game-meta-dot"></span>
        ${game.meta}
      </div>
      ${platformBadge(game.type)}
    </div>
    <div class="game-dl-btn ${game.type}">
      <i class="bi bi-cloud-arrow-down-fill"></i>
    </div>
  `;
  return el;
}

/**
 * Tạo HTML cho một key card
 * Bỏ qua nếu key.hide === true
 */
function renderKeyCard(key) {
  if (key.hide === true) return null;

  const el = document.createElement('div');
  el.className = 'key-card';

  const spinClass = key.spin ? 'spin' : '';

  el.innerHTML = `
    <div class="key-icon-wrap ${key.iconClass}">
      <i class="bi ${key.icon} ${spinClass}"></i>
    </div>
    <div class="key-info">
      <div class="key-name">${key.name}</div>
      <div class="key-desc">${key.desc}</div>
    </div>
    <a href="${key.url}" target="_blank" class="key-action" rel="noopener">
      <i class="bi bi-box-arrow-up-right"></i>
    </a>
  `;
  return el;
}

/* =============================================
   RENDER — Mount all sections
   ============================================= */
function mountSections() {
  const gameGrid = document.getElementById('gameGrid');
  const keyGrid  = document.getElementById('keyGrid');

  if (gameGrid) {
    GAMES.forEach(g => {
      const el = renderGameCard(g);
      if (el) gameGrid.appendChild(el);
    });
  }
  if (keyGrid) {
    KEYS.forEach(k => {
      const el = renderKeyCard(k);
      if (el) keyGrid.appendChild(el);
    });
  }
}

/* =============================================
   POPUP / MODAL LOGIC
   ============================================= */
const androidModal = document.getElementById('androidArch');
const iosModal     = document.getElementById('iosVersionPopup');

/**
 * Mở modal Android — 64bit / 32bit / GetKey
 */
function openAndroidModal(url64, url32, urlKey) {
  const btn64  = document.getElementById('apk64');
  const btn32  = document.getElementById('apk32');
  const btnKey = document.getElementById('apkKey');

  btn64.href  = url64  || '#';
  btn32.href  = url32  || '#';
  btnKey.href = urlKey || '#';

  // Ẩn nút GetKey nếu không có link
  btnKey.style.display = urlKey ? 'flex' : 'none';

  androidModal.classList.add('show');
}

function openIosModal(urlV1, urlV2) {
  document.getElementById('iosV1').href = urlV1;
  document.getElementById('iosV2').href = urlV2;
  iosModal.classList.add('show');
}

function closeAllModals() {
  androidModal.classList.remove('show');
  iosModal.classList.remove('show');
}

// Đóng khi click overlay
[androidModal, iosModal].forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeAllModals();
  });
});

// Đóng khi click nút Huỷ
document.querySelectorAll('.modal-cancel').forEach(btn => {
  btn.addEventListener('click', closeAllModals);
});

/**
 * Delegate click trên game grid
 */
function bindGameGrid() {
  const gameGrid = document.getElementById('gameGrid');
  if (!gameGrid) return;

  gameGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.game-card');
    if (!card) return;

    const { type, url, url64, url32, urlKey } = card.dataset;

    if (type === 'android') {
      openAndroidModal(url64, url32, urlKey);
    } else if (type === 'direct') {
      window.open(url, '_blank', 'noopener');
    }
  });
}

/* =============================================
   SIDEBAR MENU
   ============================================= */
function initMenu() {
  const fab      = document.getElementById('menuToggle');
  const nav      = document.getElementById('sideNav');
  const overlay  = document.getElementById('menuOverlay');
  const closeBtn = nav.querySelector('.nav-close');
  const links    = nav.querySelectorAll('.menu-link');

  function open() {
    nav.classList.add('open');
    overlay.classList.add('open');
    fab.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    nav.classList.remove('open');
    overlay.classList.remove('open');
    fab.classList.remove('open');
    document.body.style.overflow = '';
  }

  fab.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));
}

/* =============================================
   DARK / LIGHT THEME
   ============================================= */
function initTheme() {
  const html  = document.documentElement;
  const btn   = document.getElementById('themeToggle');
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  const saved = localStorage.getItem('tm_theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const cur = html.getAttribute('data-theme');
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('tm_theme', theme);
    icon.className    = theme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
    label.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  }
}

/* =============================================
   TYPED.JS HERO TEXT
   ============================================= */
function initTyped() {
  const el = document.getElementById('GioiThieu');
  if (!el || typeof Typed === 'undefined') return;
  new Typed('#GioiThieu', {
    strings:        TYPED_STRINGS,
    typeSpeed:      65,
    backSpeed:      35,
    loop:           true,
    smartBackspace: true,
  });
}

/* =============================================
   INTRO SPLASH SCREEN
   ============================================= */
function initSplash() {
  const splash = document.getElementById('introSplash');
  if (!splash) return;
  setTimeout(() => splash.classList.add('hide'), 2800);
  setTimeout(() => splash.remove(), 3500);
}

/* =============================================
   BACKGROUND MUSIC
   ============================================= */
function initMusic() {
  const audio = document.getElementById('bgMusic');
  if (!audio) return;

  let idx = 0;
  audio.src    = PLAYLIST[idx];
  audio.volume = 0.45;

  audio.addEventListener('ended', () => {
    idx = (idx + 1) % PLAYLIST.length;
    audio.src = PLAYLIST[idx];
    audio.play().catch(() => {});
  });

  const start = () => {
    audio.play().catch(() => {});
    window.removeEventListener('click',      start);
    window.removeEventListener('touchstart', start);
  };
  window.addEventListener('click',      start);
  window.addEventListener('touchstart', start);
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity:0; transform:translateY(18px); transition:opacity .5s ease, transform .5s ease; }
    .reveal.visible { opacity:1; transform:translateY(0); }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll('.game-card, .key-card, .quick-card, .help-card');
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
  });

  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  targets.forEach(el => obs.observe(el));
}

/* =============================================
   INIT — Entry point
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('loading');
  initTheme();
  initSplash();
  mountSections();
  bindGameGrid();
  initMenu();
  initTyped();
  initMusic();
  requestAnimationFrame(initScrollReveal);
});
