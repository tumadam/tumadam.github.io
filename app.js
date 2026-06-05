/* =============================================
   TUMADAM MOD — app.js
   ============================================= */

/* =============================================
   DATA — GAME DOWNLOADS
   hide: false = hiện, true = ẩn
   ============================================= */
const GAMES = [
  {
    name:     'Aov Mod(No Hack)',
    meta:     'Cập nhật 5/6',
    desc:     'Bản mod không hắc tài khoản — Chỉ Mod Skin.\n Tuy Nhiên Bị Tố Sẽ Ban 1-3-7 Ngày.',
    img:      'https://play-lh.googleusercontent.com/29k6AAX1NYWPdnRmVm86NgvDlywy9o3TnNBJrbHWm3emdLB2dGrxdgc05f621I1kMVSph8U1igCpx3XTdS8blQ=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/aovmod',
    hide:     false,
    preview:  ['https://cdn.tumadam.com/games/preview/bba60245-7738-4588-afdc-bbdd5f637c8e.webp',
    'https://cdn.tumadam.com/games/preview/89df9f0d-14d2-44ad-b7df-45e2790237b9.webp',
    'https://cdn.tumadam.com/games/preview/8cbb42bf-2d14-41df-8f7c-5396c4c293e9.webp',
    ],
  },
  {
    name:     'Aov Cheat(Map+Mod)',
    meta:     'Cập nhật 5/6',
    desc:     'Hack map sáng + mod skin full chức năng.\n -Chơi kín không phang bụi(tránh bị tố)\n-Không nên dùng aim,auto bán đồ(dễ ban)',
    img:      'https://play-lh.googleusercontent.com/29k6AAX1NYWPdnRmVm86NgvDlywy9o3TnNBJrbHWm3emdLB2dGrxdgc05f621I1kMVSph8U1igCpx3XTdS8blQ=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/aovcheat',
    hide:     false,
    preview:  ['https://cdn.tumadam.com/games/preview/96bcf782-b412-4976-b6c5-0c9cb76a2db3.webp',
    'https://cdn.tumadam.com/games/preview/77d769f7-939a-4c92-b7b8-0dc8e20f343f.webp',
    'https://cdn.tumadam.com/games/preview/b768dd80-04fc-468d-b173-5bfa63f8516c.webp',
    'https://cdn.tumadam.com/games/preview/06b2d32f-1c7d-491e-a413-3a276094fd1d.webp',
    'https://cdn.tumadam.com/games/preview/3032cd62-d49c-45ca-8d39-14aa6b0017dc.webp',
    ],
  },
  {
    name:     'Map/Skin AOV Android',
    meta:     'Cập nhật 2/6 • Dùng Unlock nếu không muốn hắc',
    desc:     'Mod map sáng + unlock skin cho Android. Chọn 64-bit hoặc 32-bit tuỳ máy.\n -Nếu chỉ dùng modskin thì dùng phần unlock thôi',
    img:      'https://i.imgur.com/vKPMWWx.jpeg',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'android',
    url64:    'https://tumadam.com/aov-mapmod-andr-64bit',
    url32:    'https://tumadam.com/aov-mapmod-andr-32bit',
    urlKey:   'https://tumadam.github.io/getkeygameios/andr',
    hide:     false,
    preview:  ['https://cdn.tumadam.com/games/preview/ac599508-ac81-4f4b-9632-dae856b2a8dc.jpeg',
    'https://cdn.tumadam.com/games/preview/4620c619-5386-49db-8d78-c2697c8747b3.jpeg',
    'https://cdn.tumadam.com/games/preview/dd007f19-76e7-404b-865f-71637db092a3.jpeg',
    ],
  },
  {
    name:     'Pupg iOS V2',
    meta:     'Cập nhật 5/6',
    desc:     'PUBG V2 Bắn Kín Diễn Như K Có Hack(Aim Nên Cho Bụng)\n-Mod Skin Cần Tải TN',
    img:      'https://tumadam.com/_next/image?url=https%3A%2F%2Fcdn.tumadam.com%2Fgames%2Ficon%2F412c9c52-c2df-4d65-b6ec-4c58a85234a5.webp&w=256&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/pubg-mobile-vn',
    hide:     false,
    preview:  ['https://cdn.tumadam.com/games/preview/af940d6a-1ae0-426e-af74-d3cedf9385c4.jpg',
    'https://cdn.tumadam.com/games/preview/dea48a86-f138-4fd4-bb21-0f7971fc7f84.jpg',
    'https://cdn.tumadam.com/games/preview/2f2b010f-cbf5-41d8-a90e-4cb58c2fcc4e.jpg',
    ],
  },
  {
    name:     'PUPG iOS V2.1(Mod Skin Sẽ Văng)',
    meta:     'Cập nhật 3/6',
    desc:     'Bản V2.1 Pupg iOS(Bắn Kín), Mod Skin Sẽ Bị Văng.\n- Aim Chuẩn Hơn.',
    img:      'https://tumadam.com/_next/image?url=https%3A%2F%2Fcdn.tumadam.com%2Fgames%2Ficon%2F412c9c52-c2df-4d65-b6ec-4c58a85234a5.webp&w=256&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://ipas.cc/vvrbgh',
    hide:     true,
    preview:  [
      'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1780461989442-8a1i1y-IMG_7985.png&w=1920&q=75',
      'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1780461989443-htp5vf-IMG_7986.png&w=1920&q=75',
      'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1780461989443-q9toc-IMG_7988.png&w=1920&q=75',
    ],
  },
  {
    name:     'Roblox iOS Client Delta',
    meta:     'Cập nhật 5/6',
    desc:     'Roblox iOS tích hợp Bypass Key — chạy script trong game.',
    img:      'https://tumadam.com/_next/image?url=https%3A%2F%2Fcdn.tumadam.com%2Fgames%2Ficon%2Ff50e2394-dcb6-4063-89ff-126faed25f26.png&w=256&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/roblox-vn',
    hide:     false,
    preview:  [
      'https://cdn.tumadam.com/games/preview/571bdf45-d629-4d6d-b53e-f46b010c7f84.webp',
      'https://cdn.tumadam.com/games/preview/a487499c-9fac-46bd-9d56-e2f0b4c61a43.webp',
      'https://cdn.tumadam.com/games/preview/2027fd1c-9d4d-4166-b64d-231255b774a8.webp',
      'https://cdn.tumadam.com/games/preview/c99f101f-190b-4c00-b1be-6761b8198c28.webp',
    ],
  },
];

/* =============================================
   DATA — GET KEY
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
    name:      'Get Key Pupg iOS',
    desc:      'Vượt 2 Link • Key 1 Ngày',
    iconClass: 'ios',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://tumadam.github.io/getkeygameios/pupg',
    hide:      false,
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
   DATA — PLAYLIST
   ============================================= */
const PLAYLIST = [
  { title: 'Sound 1', src: 'https://files.catbox.moe/by3qnj.mp3' },
  { title: 'Sound 2', src: 'https://files.catbox.moe/r3samf.mov' },
  { title: 'Sound 3', src: 'https://files.catbox.moe/fas7ph.mov' },
  { title: 'Sound 4', src: 'https://files.catbox.moe/br8qom.mp4' },
  { title: 'Sound 5', src: 'https://files.catbox.moe/6ihyha.mp4' },
  { title: 'Sound 6', src: 'https://files.catbox.moe/0j29qi.mp4' },
];

/* =============================================
   DATA — MOD FILES
   type: 'zip' | 'ios' | 'ipa'
   hide: false = hiện, true = ẩn
   ============================================= */
const MOD_FILES = [
  {
    name:  'File Mod AOV iOS (IPA)',
    meta:  'Cập nhật 5/6',
    desc:  'File IPA mod skin + map sáng cho iOS.',
    type:  'ios',
    url:   'https://github.com/tumadam/tumadam.github.io/releases/download/fileskinaov/5.6.Files.Mod.33.Skin.iOS.zip',
    hide:  false,
    // Hướng dẫn hiện trong bảng khi bấm nút — để [] nếu không cần
    guide: {
      title: '🛠️ Fix Trận Ảo AOV iOS',
      steps: [
        {
          heading: 'Trận ảo là gì?',
          body:    'Trận Ảo là hiện tướng đối thủ tự đi vô trụ?tự huỷ,đánh k giống người thật,nói chung là như phá game',
        },
        {
          heading: 'Cách Fix Nếu Gặp',
          body:    'Về Unlock Skin Bạn Chỉ Cần Thoát Game Vô Lại Là Được',
        },
        {
          heading: 'Về Mod Files',
          body:    'Bạn Chỉ Cần Bật Menu Lên Chọn Xoá Mod Skin,Force Update(Ở gần nút mod files)',
        },
                {
          heading: 'Báo Cáo Admin',
          body:    'Nhắn tin qua tele@tumadam2507 và báo skin bạn vừa gặp lỗi trận(nhớ nói cụ thể mod files hay unlock).',
        },
      ],
    },
  },
  {
    name:  'File Mod AOV Android (ZIP)',
    meta:  'Cập nhật 2/6',
    desc:  'Giải nén và copy vào thư mục game.',
    type:  'zip',
    url:   'https://tumadam.com/files/aov-mod-andr.zip',
    hide:  true,
    guide: null,
  },
];

/* =============================================
   DATA — VIDEO HƯỚNG DẪN
   url: link bất kỳ — YouTube, Catbox .mov/.mp4, Google Drive, v.v.
   thumb: (tuỳ chọn) link ảnh thumbnail — bỏ trống sẽ dùng icon mặc định
   ============================================= */
const VIDEOS = [
  {
    // Link Telegram không nhúng được → dùng type 'external' để mở tab mới
    name:  'Hướng dẫn Mod File AOV iOS',
    meta:  'Xem trên Telegram',
    url:   'https://t.me/tumadammod1/1749',
    thumb: '',    // để trống = icon mặc định
    hide:  false,
  },
  {
    name:  'Hướng dẫn Cài App iOS',
    meta:  'Video hướng dẫn chi tiết',
    url:   'https://files.catbox.moe/2psucu.mov',
    thumb: '',    // để trống = icon mặc định
    hide:  false,
  },
  {
    name:  'Hướng dẫn chuyển tài nguyên liên quân',
    meta:  'Video hướng dẫn chi tiết',
    url:   'https://cdn.tumadam.com/games/preview/0e8f69c2-2517-4038-8130-662d271c894b.mov',
    thumb: '',
    hide:  false,
  },
];
const TYPED_STRINGS = [
  'I am Van Man',
  "I'm a Developer & Modder",
  'Top 1 Hacker DakLak =))',
  'Welcome to my Website! ❤️',
  'Scroll down to explore 👇',
];

/* =============================================
   PLATFORM BADGE
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
   RENDER — GAME CARD
   ============================================= */
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

  const previewImgs = game.preview && game.preview.length > 0
    ? game.preview : [game.img];
  el.dataset.preview = JSON.stringify(previewImgs);
  el.dataset.name    = game.name;
  el.dataset.desc    = game.desc || game.meta || '';

  const countBadge = previewImgs.length > 1
    ? `<span class="preview-count">${previewImgs.length}</span>` : '';

  el.innerHTML = `
    <img class="game-thumb"
         src="${game.img}"
         onerror="this.src='${game.fallback}'"
         alt="${game.name}">
    <div class="game-info">
      <div class="game-name">${game.name}</div>
      <div class="game-meta">
        <span class="game-meta-dot"></span>${game.meta}
      </div>
      <div class="game-row-badges">
        ${platformBadge(game.type)}
        <button class="game-preview-btn" type="button">
          <i class="bi bi-images"></i> Preview ${countBadge}
        </button>
      </div>
    </div>
    <div class="game-dl-btn ${game.type}">
      <i class="bi bi-cloud-arrow-down-fill"></i>
    </div>
  `;
  return el;
}

/* =============================================
   RENDER — KEY CARD
   ============================================= */
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
   RENDER — MOD FILE CARD
   ============================================= */
function renderModCard(mod) {
  if (mod.hide === true) return null;

  const iconClass = mod.type === 'ios' ? 'ios' : 'zip';
  const iconName  = mod.type === 'ios' ? 'bi-apple' : 'bi-file-zip-fill';

  const el = document.createElement('div');
  el.className = 'mod-card-wrap';

  // Lưu guide data nếu có
  if (mod.guide) el.dataset.guide = JSON.stringify(mod.guide);

  el.innerHTML = `
    <a class="mod-card" href="${mod.url}" target="_blank" rel="noopener">
      <div class="mod-icon ${iconClass}">
        <i class="bi ${iconName}"></i>
      </div>
      <div class="mod-info">
        <div class="mod-name">${mod.name}</div>
        <div class="mod-meta"><span class="mod-meta-dot"></span>${mod.meta}</div>
        ${mod.desc ? `<div class="mod-desc">${mod.desc}</div>` : ''}
      </div>
      <div class="mod-dl-btn">
        <i class="bi bi-cloud-arrow-down-fill"></i>
      </div>
    </a>
    ${mod.guide ? `
    <button class="mod-guide-btn" type="button">
      <i class="bi bi-tools"></i> Hướng dẫn Fix Trận Ảo
    </button>` : ''}
  `;
  return el;
}

/* =============================================
   RENDER — VIDEO CARD
   ============================================= */
/* =============================================
   VIDEO HELPER — detect loại link, trả về embed URL và thumbnail
   Hỗ trợ: YouTube, Catbox, MP4 trực tiếp, Google Drive
   ============================================= */
function parseVideoUrl(url) {
  if (!url) return { type: 'unknown', embed: '', thumb: '' };

  // YouTube: watch?v=ID hoặc youtu.be/ID
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (ytMatch) {
    const id = ytMatch[1];
    return {
      type:  'youtube',
      embed: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`,
      thumb: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    };
  }

  // Direct video file: .mp4 .mov .webm .ogg
  if (/\.(mp4|mov|webm|ogg)(\?|$)/i.test(url)) {
    return { type: 'direct', embed: url, thumb: '' };
  }

  // Google Drive: /file/d/ID/view
  const gdMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (gdMatch) {
    return {
      type:  'gdrive',
      embed: `https://drive.google.com/file/d/${gdMatch[1]}/preview`,
      thumb: '',
    };
  }

  // Telegram / t.me → không nhúng được, mở tab ngoài
  if (/t\.me\//i.test(url)) {
    return { type: 'external', embed: url, thumb: '' };
  }

  // Mặc định: thử nhúng iframe
  return { type: 'generic', embed: url, thumb: '' };
}

function renderVidCard(vid) {
  if (vid.hide === true) return null;

  const info  = parseVideoUrl(vid.url);
  // Validate thumb — phải bắt đầu bằng http để tránh lỗi img src="video"
  const rawThumb = vid.thumb || info.thumb || '';
  const thumb = rawThumb.startsWith('http') ? rawThumb : '';

  const el = document.createElement('div');
  el.className       = 'vid-card';
  el.dataset.vidUrl  = vid.url;
  el.dataset.vidType = info.type;
  el.dataset.embed   = info.embed;
  el.dataset.thumb   = thumb;
  el.dataset.name    = vid.name;

  // Icon khác nhau cho external (Telegram)
  const placeholderIcon = info.type === 'external' ? 'bi-telegram' : 'bi-film';
  const thumbHtml = thumb
    ? `<img src="${thumb}" alt="${vid.name}" loading="lazy">`
    : `<div class="vid-thumb-placeholder"><i class="bi ${placeholderIcon}"></i></div>`;

  // External: hiện label "Xem →" thay vì play
  const playHtml = info.type === 'external'
    ? `<div class="vid-play-icon external"><i class="bi bi-box-arrow-up-right"></i></div>`
    : `<div class="vid-play-icon"><i class="bi bi-play-fill"></i></div>`;

  el.innerHTML = `
    <div class="vid-thumb-wrap">
      ${thumbHtml}
      ${playHtml}
    </div>
    <div class="vid-info">
      <div class="vid-name">${vid.name}</div>
      <div class="vid-meta">${vid.meta}</div>
    </div>
  `;
  return el;
}

/* =============================================
   MOUNT SECTIONS
   ============================================= */
function mountSections() {
  const gameGrid = document.getElementById('gameGrid');
  const keyGrid  = document.getElementById('keyGrid');
  const modGrid  = document.getElementById('modGrid');
  const vidGrid  = document.getElementById('vidGrid');

  if (gameGrid) GAMES.forEach(g    => { const el = renderGameCard(g);  if (el) gameGrid.appendChild(el); });
  if (keyGrid)  KEYS.forEach(k     => { const el = renderKeyCard(k);   if (el) keyGrid.appendChild(el);  });
  if (modGrid)  MOD_FILES.forEach(m => { const el = renderModCard(m);  if (el) modGrid.appendChild(el);  });
  if (vidGrid)  VIDEOS.forEach(v    => { const el = renderVidCard(v);  if (el) vidGrid.appendChild(el);  });
}

/* =============================================
   GUIDE MODAL — Hướng dẫn Fix Trận Ảo
   ============================================= */
function initGuideModal() {
  const modal   = document.getElementById('guideModal');
  const titleEl = document.getElementById('guideModalTitle');
  const bodyEl  = document.getElementById('guideModalBody');
  const closeBtn = document.getElementById('guideModalClose');
  if (!modal) return;

  // Delegate click từ mod grid
  const modGrid = document.getElementById('modGrid');
  if (modGrid) {
    modGrid.addEventListener('click', e => {
      const btn = e.target.closest('.mod-guide-btn');
      if (!btn) return;
      e.preventDefault();
      const wrap = btn.closest('.mod-card-wrap');
      if (!wrap || !wrap.dataset.guide) return;

      const guide = JSON.parse(wrap.dataset.guide);
      titleEl.textContent = guide.title;

      // Render steps
      bodyEl.innerHTML = guide.steps.map(s => `
        <div class="guide-step">
          <div class="guide-step-heading">${s.heading}</div>
          <div class="guide-step-body">${s.body}</div>
        </div>
      `).join('');

      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeGuide() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeGuide);
  modal.addEventListener('click', e => { if (e.target === modal) closeGuide(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeGuide();
  });
}
function initVideoModal() {
  const modal     = document.getElementById('videoModal');
  const title     = document.getElementById('videoModalTitle');
  const closeBtn  = document.getElementById('videoModalClose');
  const container = modal ? modal.querySelector('.video-container') : null;
  if (!modal || !container) return;

  function buildPlayer(embed, type, thumb, name) {
    container.innerHTML = '';

    if (type === 'direct') {
      // ── Direct MP4/MOV — custom poster + play overlay ──
      // Poster layer
      if (thumb) {
        const img = document.createElement('img');
        img.src       = thumb;
        img.className = 'vid-poster';
        img.alt       = name;
        container.appendChild(img);
      } else {
        const ph = document.createElement('div');
        ph.className   = 'vid-poster-placeholder';
        ph.innerHTML   = `<i class="bi bi-film"></i><span>${name}</span>`;
        container.appendChild(ph);
      }

      // Play overlay button
      const overlay = document.createElement('div');
      overlay.className = 'vid-overlay';
      overlay.innerHTML = `<div class="vid-play-big"><i class="bi bi-play-fill"></i></div>`;
      container.appendChild(overlay);

      // Click play → remove overlay, inject <video>
      overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
        // Remove poster
        container.querySelectorAll('.vid-poster,.vid-poster-placeholder').forEach(el => el.remove());

        const v = document.createElement('video');
        v.src      = embed;
        v.controls = true;
        v.autoplay = true;
        v.playsInline = true; // iOS requirement
        v.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;background:#000;';
        container.appendChild(v);
        v.play().catch(() => {});
      });

    } else {
      // ── YouTube / GDrive / iframe ──
      // Show poster with play button first
      if (thumb) {
        const img = document.createElement('img');
        img.src       = thumb;
        img.className = 'vid-poster';
        img.alt       = name;
        container.appendChild(img);
      } else {
        const ph = document.createElement('div');
        ph.className = 'vid-poster-placeholder';
        ph.innerHTML = `<i class="bi bi-youtube"></i><span>${name}</span>`;
        container.appendChild(ph);
      }

      // Play overlay
      const overlay = document.createElement('div');
      overlay.className = 'vid-overlay';
      overlay.innerHTML = `<div class="vid-play-big"><i class="bi bi-play-fill"></i></div>`;
      container.appendChild(overlay);

      // Click play → remove poster+overlay, inject iframe with autoplay
      overlay.addEventListener('click', () => {
        container.innerHTML = '';
        const fr = document.createElement('iframe');
        // Add autoplay param
        const sep = embed.includes('?') ? '&' : '?';
        fr.src             = embed + (embed.includes('autoplay') ? '' : sep + 'autoplay=1');
        fr.frameBorder     = '0';
        fr.allow           = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        fr.allowFullscreen = true;
        fr.style.cssText   = 'position:absolute;inset:0;width:100%;height:100%;';
        container.appendChild(fr);
      });
    }
  }

  function openVideo(embed, type, thumb, name) {
    // External (Telegram, v.v.) → mở tab mới, không dùng modal
    if (type === 'external') {
      window.open(embed, '_blank', 'noopener');
      return;
    }
    title.textContent = name;
    buildPlayer(embed, type, thumb, name);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    container.innerHTML = '';
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Delegate click từ vid grid
  const vidGrid = document.getElementById('vidGrid');
  if (vidGrid) {
    vidGrid.addEventListener('click', e => {
      const card = e.target.closest('.vid-card');
      if (!card) return;
      openVideo(
        card.dataset.embed,
        card.dataset.vidType,
        card.dataset.thumb || '',
        card.dataset.name  || 'Video'
      );
    });
  }

  closeBtn.addEventListener('click', closeVideo);
  modal.addEventListener('click', e => { if (e.target === modal) closeVideo(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeVideo();
  });
}

/* =============================================
   MODAL LOGIC
   ============================================= */
const androidModal = document.getElementById('androidArch');
const iosModal     = document.getElementById('iosVersionPopup');

function openAndroidModal(url64, url32, urlKey) {
  document.getElementById('apk64').href  = url64  || '#';
  document.getElementById('apk32').href  = url32  || '#';
  const btnKey = document.getElementById('apkKey');
  btnKey.href  = urlKey || '#';
  btnKey.style.display = urlKey ? 'flex' : 'none';
  androidModal.classList.add('show');
}

function closeAllModals() {
  androidModal.classList.remove('show');
  iosModal.classList.remove('show');
}

[androidModal, iosModal].forEach(modal => {
  modal.addEventListener('click', e => { if (e.target === modal) closeAllModals(); });
});
document.querySelectorAll('.modal-cancel').forEach(btn => {
  btn.addEventListener('click', closeAllModals);
});

/* =============================================
   GAME GRID CLICK — FIX: dùng stopPropagation
   để preview không bubble lên card rồi mở lại
   ============================================= */
function bindGameGrid() {
  const gameGrid = document.getElementById('gameGrid');
  if (!gameGrid) return;

  gameGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.game-card');
    if (!card) return;

    // Bấm nút Preview — dừng bubble để card không xử lý thêm
    const previewBtn = e.target.closest('.game-preview-btn');
    if (previewBtn) {
      e.stopPropagation();
      const imgs = JSON.parse(card.dataset.preview || '[]');
      const name = card.dataset.name || 'Preview';
      const desc = card.dataset.desc || '';
      openPreviewModal(name, imgs, desc);
      return;
    }

    // Bấm nút tải (dl-btn) hoặc vùng card còn lại
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

  const open  = () => { nav.classList.add('open'); overlay.classList.add('open'); fab.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { nav.classList.remove('open'); overlay.classList.remove('open'); fab.classList.remove('open'); document.body.style.overflow = ''; };

  fab.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));
}

/* =============================================
   THEME — auto detect ngày/đêm, user có thể override
   ============================================= */
function initTheme() {
  const html  = document.documentElement;
  const btn   = document.getElementById('themeToggle');
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    icon.className    = theme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
    label.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  }

  // Nếu user đã bấm trước → dùng lại
  // Chưa bấm → tự detect: 6h–18h = light, còn lại = dark
  function getDefaultTheme() {
    const saved = localStorage.getItem('tm_theme');
    if (saved) return saved;
    const h = new Date().getHours();
    return (h >= 6 && h < 18) ? 'light' : 'dark';
  }

  applyTheme(getDefaultTheme());

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('tm_theme', next);
  });
}

/* =============================================
   TYPED.JS — chạy 1 lần rồi dừng
   ============================================= */
function initTyped() {
  const el = document.getElementById('GioiThieu');
  if (!el || typeof Typed === 'undefined') return;
  new Typed('#GioiThieu', {
    strings:    TYPED_STRINGS,
    typeSpeed:  60,
    backSpeed:  30,
    loop:       false,
    showCursor: true,
    cursorChar: '|',
    onComplete: (self) => {
      setTimeout(() => { if (self.cursor) self.cursor.style.display = 'none'; }, 1200);
    },
  });
}

/* =============================================
   SPLASH
   ============================================= */
function initSplash() {
  const splash = document.getElementById('introSplash');
  if (!splash) return;
  setTimeout(() => splash.classList.add('hide'), 2800);
  setTimeout(() => splash.remove(), 3500);
}

/* =============================================
   MUSIC — shuffle random, autoplay on interaction
   ============================================= */
function initMusic() {
  const audio = document.getElementById('bgMusic');
  if (!audio) return;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let queue = shuffle(PLAYLIST);
  let idx   = Math.floor(Math.random() * queue.length);

  function loadTrack(i) { audio.src = queue[i].src; }

  function playNext() {
    idx = (idx + 1) % queue.length;
    if (idx === 0) queue = shuffle(PLAYLIST);
    loadTrack(idx);
    audio.play().catch(() => {});
  }

  audio.volume = 0.45;
  audio.addEventListener('ended', playNext);
  loadTrack(idx);
  audio.play().catch(() => {});

  const start = () => {
    audio.play().catch(() => {});
    window.removeEventListener('click',      start);
    window.removeEventListener('touchstart', start);
    window.removeEventListener('keydown',    start);
  };
  window.addEventListener('click',      start, { once: true });
  window.addEventListener('touchstart', start, { once: true });
  window.addEventListener('keydown',    start, { once: true });
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const style = document.createElement('style');
  style.textContent = `.reveal{opacity:0;transform:translateY(18px);transition:opacity .5s ease,transform .5s ease}.reveal.visible{opacity:1;transform:translateY(0)}`;
  document.head.appendChild(style);
  const targets = document.querySelectorAll('.game-card,.key-card,.quick-card,.help-card');
  targets.forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = `${(i % 4) * 60}ms`; });
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  targets.forEach(el => obs.observe(el));
}

/* =============================================
   IMAGE PREVIEW MODAL
   ============================================= */
let previewCurrent = 0;
let previewTotal   = 0;

function openPreviewModal(name, imgs, desc) {
  const modal   = document.getElementById('imgPreviewModal');
  const track   = document.getElementById('previewTrack');
  const dots    = document.getElementById('previewDots');
  const title   = document.getElementById('previewTitle');
  const descEl  = document.getElementById('previewDesc');
  const counter = document.getElementById('previewCounter');

  title.textContent = name;
  track.innerHTML   = '';
  dots.innerHTML    = '';
  previewCurrent    = 0;
  previewTotal      = imgs.length;

  // Mô tả — dùng innerHTML + replace \n → <br> để xuống dòng
  if (descEl) {
    if (desc) {
      descEl.innerHTML     = desc.replace(/\n/g, '<br>');
      descEl.style.display = 'block';
    } else {
      descEl.style.display = 'none';
    }
  }

  imgs.forEach((src, i) => {
    const img = document.createElement('img');
    img.src     = src;
    img.alt     = `${name} - ảnh ${i + 1}`;
    img.loading = 'lazy';
    track.appendChild(img);

    const dot = document.createElement('div');
    dot.className = 'img-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToPreview(i));
    dots.appendChild(dot);
  });

  const multi = imgs.length > 1;
  dots.style.display = multi ? 'flex' : 'none';
  document.getElementById('previewPrev').style.display = multi ? 'flex' : 'none';
  document.getElementById('previewNext').style.display = multi ? 'flex' : 'none';

  updatePreviewSlide();
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function goToPreview(idx) {
  previewCurrent = (idx + previewTotal) % previewTotal;
  updatePreviewSlide();
}

function updatePreviewSlide() {
  const track   = document.getElementById('previewTrack');
  const dots    = document.getElementById('previewDots');
  const counter = document.getElementById('previewCounter');
  if (track) track.style.transform = `translateX(-${previewCurrent * 100}%)`;
  if (dots) dots.querySelectorAll('.img-dot').forEach((d, i) => d.classList.toggle('active', i === previewCurrent));
  if (counter) {
    counter.textContent   = previewTotal > 1 ? `${previewCurrent + 1} / ${previewTotal}` : '';
    counter.style.display = previewTotal > 1 ? 'block' : 'none';
  }
}

function closePreviewModal() {
  const modal = document.getElementById('imgPreviewModal');
  if (modal) modal.classList.remove('show');
  document.body.style.overflow = '';
}

function initPreviewModal() {
  const modal = document.getElementById('imgPreviewModal');
  if (!modal) return;

  document.getElementById('previewClose').addEventListener('click', closePreviewModal);
  document.getElementById('previewPrev').addEventListener('click', () => goToPreview(previewCurrent - 1));
  document.getElementById('previewNext').addEventListener('click', () => goToPreview(previewCurrent + 1));

  modal.addEventListener('click', e => { if (e.target === modal) closePreviewModal(); });

  let touchStartX = 0;
  const track = document.getElementById('previewTrack');
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goToPreview(dx < 0 ? previewCurrent + 1 : previewCurrent - 1);
  });

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('show')) return;
    if (e.key === 'ArrowLeft')  goToPreview(previewCurrent - 1);
    if (e.key === 'ArrowRight') goToPreview(previewCurrent + 1);
    if (e.key === 'Escape')     closePreviewModal();
  });
}

/* =============================================
   CLOCK WIDGET
   ============================================= */
function initClock() {
  const widget  = document.getElementById('clockWidget');
  const timeEl  = document.getElementById('clockTime');
  const greetEl = document.getElementById('clockGreeting');
  const iconEl  = document.getElementById('clockIcon');
  if (!widget) return;

  const PERIODS = [
    { id: 'midnight',  from:  0, to:  5, icon: 'bi-moon-stars-fill',     greeting: 'Sục Cặc Hay Gì Giờ Này Chưa Ngủ?'    },
    { id: 'dawn',      from:  5, to:  9, icon: 'bi-sunrise-fill',         greeting: 'Good Morning! 🌅'     },
    { id: 'morning',   from:  9, to: 12, icon: 'bi-brightness-high-fill', greeting: 'Ăn Sáng Chưa Thằng Em? '   },
    { id: 'noon',      from: 12, to: 14, icon: 'bi-sun-fill',             greeting: 'Trưa Rồi Lọ Đi'   },
    { id: 'afternoon', from: 14, to: 18, icon: 'bi-cloud-sun-fill',       greeting: 'Good Afternoon! 🌿'   },
    { id: 'evening',   from: 18, to: 22, icon: 'bi-sunset-fill',          greeting: 'Good Evening! 🌇'     },
    { id: 'night',     from: 22, to: 24, icon: 'bi-moon-fill',            greeting: 'Good Night! 🌙'        },
  ];

  const getPeriod = h => PERIODS.find(p => h >= p.from && h < p.to) || PERIODS[0];
  const pad = n => String(n).padStart(2, '0');

  let lastPeriodId  = null;
  let greetingShown = false;

  function tick() {
    const now = new Date();
    const p   = getPeriod(now.getHours());
    timeEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    if (p.id !== lastPeriodId) {
      widget.className = `clock-widget period-${p.id}`;
      iconEl.innerHTML = `<i class="bi ${p.icon}"></i>`;
      lastPeriodId = p.id;
    }
  }

  function showGreeting() {
    if (greetingShown) return;
    greetingShown = true;
    const p = getPeriod(new Date().getHours());
    greetEl.textContent = p.greeting;
    greetEl.classList.remove('hide');
    setTimeout(() => greetEl.classList.add('hide'), 10000);
  }

  tick();
  showGreeting();
  setInterval(tick, 1000);
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('loading');
  initTheme();
  initClock();
  initSplash();
  mountSections();
  bindGameGrid();
  initMenu();
  initTyped();
  initMusic();
  initPreviewModal();
  initVideoModal();
  initGuideModal();
  requestAnimationFrame(initScrollReveal);
});
