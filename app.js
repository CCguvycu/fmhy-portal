// All data sourced exclusively from https://fmhy.net/ — raw markdown from github.com/fmhy/FMHY wiki
var RAW_BASE = 'https://raw.githubusercontent.com/wiki/fmhy/FMHY/';

var CATEGORIES = [
  {
    icon: '🔒',
    title: 'Ad-block / Privacy',
    desc: 'Learn how to block ads, trackers and other nasty things. Reclaim control over your browsing experience.',
    url: 'https://fmhy.net/privacy',
    raw: RAW_BASE + 'Adblock.md',
    tag: 'Privacy',
    color: '#68d391',
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    desc: 'Explore the world of AI and machine learning — free models, tools, UIs, and research resources.',
    url: 'https://fmhy.net/ai',
    raw: RAW_BASE + 'Artificial-Intelligence.md',
    tag: 'AI',
    color: '#9f7aea',
  },
  {
    icon: '🎬',
    title: 'Streaming',
    desc: 'Stream, download, torrent and binge all your favourite movies and shows — entirely for free.',
    url: 'https://fmhy.net/video',
    raw: RAW_BASE + 'Streaming.md',
    tag: 'Video',
    color: '#fc8181',
  },
  {
    icon: '🎵',
    title: 'Listening',
    desc: 'Free audio content — songs, podcasts, ambient sound, music discovery, and related media.',
    url: 'https://fmhy.net/audio',
    raw: RAW_BASE + 'Music.md',
    tag: 'Audio',
    color: '#f6ad55',
  },
  {
    icon: '🎮',
    title: 'Gaming',
    desc: 'Download and play all your favourite games or emulate some old but gold ones. Mods, tools, and more.',
    url: 'https://fmhy.net/gaming',
    raw: RAW_BASE + 'Gaming.md',
    tag: 'Gaming',
    color: '#63b3ed',
  },
  {
    icon: '📚',
    title: 'Reading',
    desc: "Whether you're a bookworm, otaku or comic book fan — find your favourite literature here for free.",
    url: 'https://fmhy.net/reading',
    raw: RAW_BASE + 'Reading.md',
    tag: 'Books',
    color: '#fbd38d',
  },
  {
    icon: '⬇️',
    title: 'Downloading',
    desc: 'Direct download links for software, movies, shows, music, games and other media content.',
    url: 'https://fmhy.net/downloading',
    raw: RAW_BASE + 'Downloading.md',
    tag: 'Download',
    color: '#76e4f7',
  },
  {
    icon: '🌊',
    title: 'Torrenting',
    desc: 'Download your favourite media using the BitTorrent protocol. Safe sites, clients, and guides.',
    url: 'https://fmhy.net/torrenting',
    raw: RAW_BASE + 'Torrenting.md',
    tag: 'Torrent',
    color: '#f687b3',
  },
  {
    icon: '🎓',
    title: 'Educational',
    desc: 'Free learning resources for all ages — courses, tools, simulations, and academic content.',
    url: 'https://fmhy.net/educational',
    raw: RAW_BASE + 'Educational.md',
    tag: 'Learn',
    color: '#68d391',
  },
  {
    icon: '📱',
    title: 'Android / iOS',
    desc: 'Free apps, tools, APKs, tweaks, and resources for Android and iOS mobile platforms.',
    url: 'https://fmhy.net/mobile',
    raw: RAW_BASE + 'Mobile.md',
    tag: 'Mobile',
    color: '#9f7aea',
  },
  {
    icon: '🐧',
    title: 'Linux / macOS',
    desc: 'The $HOME of Linux and macOS — software, tools, configs, and resources for Unix users.',
    url: 'https://fmhy.net/linux-macos',
    raw: RAW_BASE + 'Linux.md',
    tag: 'Linux',
    color: '#fc8181',
  },
  {
    icon: '🌐',
    title: 'Non-English',
    desc: 'International language content — free media and resources in languages other than English.',
    url: 'https://fmhy.net/non-english',
    raw: RAW_BASE + 'Non-Eng.md',
    tag: 'Global',
    color: '#f6ad55',
  },
  {
    icon: '🗂️',
    title: 'Miscellaneous',
    desc: "Food, travel, news, shopping, entertainment, and everything else that doesn't fit neatly elsewhere.",
    url: 'https://fmhy.net/misc',
    raw: RAW_BASE + 'Misc.md',
    tag: 'Misc',
    color: '#63b3ed',
  },
  {
    icon: '🎌',
    title: 'Watch Anime',
    desc: 'Stream thousands of anime series and movies for free — subbed and dubbed. Powered by Animetsu.',
    url: 'https://animetsu.cc/home',
    site: 'https://animetsu.cc/home',
    tag: 'Watch',
    color: '#f687b3',
  },
];

const ECOSYSTEM = [
  {
    icon: '🛡️',
    name: 'FMHY SafeGuard',
    desc: 'Browser extension to flag safe/unsafe sites',
    url: 'https://github.com/fmhy/FMHY-SafeGuard',
  },
  {
    icon: '🔖',
    name: 'Bookmarks',
    desc: 'Official FMHY bookmarks collection',
    url: 'https://github.com/fmhy/bookmarks',
  },
  {
    icon: '🔍',
    name: 'SearXNG',
    desc: 'FMHY self-hosted privacy search engine',
    url: 'https://searx.fmhy.net/',
  },
  {
    icon: '🏠',
    name: 'Startpage',
    desc: 'FMHY custom browser startpage',
    url: 'https://fmhy.net/startpage',
  },
  {
    icon: '🆕',
    name: 'Changelog',
    desc: 'Latest site additions and updates',
    url: 'https://fmhy.net/posts/changelog-sites',
  },
  {
    icon: '💬',
    name: 'Reddit Community',
    desc: 'r/FREEMEDIAHECKYEAH — discussion and finds',
    url: 'https://reddit.com/r/FREEMEDIAHECKYEAH',
  },
  {
    icon: '📖',
    name: 'Beginners Guide',
    desc: "Start here if you're new to free media",
    url: 'https://fmhy.net/beginners-guide',
  },
  {
    icon: '✏️',
    name: 'Contribute',
    desc: 'Help improve and expand the wiki',
    url: 'https://fmhy.net/other/contributing',
  },
  {
    icon: '🗂️',
    name: 'Backups',
    desc: 'Official FMHY data backups',
    url: 'https://fmhy.net/other/backups',
  },
  {
    icon: '❓',
    name: 'FAQ',
    desc: 'Frequently asked questions about FMHY',
    url: 'https://fmhy.net/other/FAQ',
  },
];

// ── Lightweight markdown renderer (FMHY/Reddit dialect) ──
function inlineMd(text) {
  // Links first: [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(_, t, u) {
    return '<a href="' + u + '" target="_blank" rel="noopener">' + t + '</a>';
  });
  // Bold **text**
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic *text* (lone asterisks, not triple)
  text = text.replace(/(^|[^*])\*([^*\n]+)\*([^*]|$)/g, '$1<em>$2</em>$3');
  // Inline code
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  return text;
}

function renderMd(md) {
  var lines  = md.split('\n');
  var html   = '';
  var inList = false;
  var inSub  = false;   // nested sub-list

  // Skip the boilerplate "Back to Wiki Index" header block (first ~5 lines)
  var start = 0;
  for (var i = 0; i < Math.min(10, lines.length); i++) {
    if (/Back to Wiki Index/i.test(lines[i])) { start = i + 2; break; }
  }

  for (var i = start; i < lines.length; i++) {
    var line = lines[i];
    var trimmed = line.trim();

    // Horizontal rule: *** or --- alone on a line
    if (/^\*{3,}$/.test(trimmed) || /^-{3,}$/.test(trimmed)) {
      if (inSub) { html += '</ul>'; inSub = false; }
      if (inList) { html += '</ul>'; inList = false; }
      html += '<hr>';
      continue;
    }

    // Headings
    var hm = trimmed.match(/^(#{1,6})\s+(.+)/);
    if (hm) {
      if (inSub) { html += '</ul>'; inSub = false; }
      if (inList) { html += '</ul>'; inList = false; }
      var lvl = hm[1].length;
      html += '<h' + lvl + '>' + inlineMd(hm[2]) + '</h' + lvl + '>';
      continue;
    }

    // Nested list item (indented * or -)
    var nested = line.match(/^[ \t]{2,}[*\-]\s+(.+)/);
    if (nested) {
      if (!inList) { html += '<ul>'; inList = true; }
      if (!inSub)  { html += '<ul>'; inSub = true; }
      html += '<li>' + inlineMd(nested[1]) + '</li>';
      continue;
    }

    // Top-level list item
    var lm = trimmed.match(/^[*\-]\s+(.+)/);
    if (lm) {
      if (inSub) { html += '</ul>'; inSub = false; }
      if (!inList) { html += '<ul>'; inList = true; }
      html += '<li>' + inlineMd(lm[1]) + '</li>';
      continue;
    }

    // Empty line
    if (trimmed === '') {
      if (inSub)  { html += '</ul>'; inSub = false; }
      if (inList) { html += '</ul>'; inList = false; }
      continue;
    }

    // Paragraph
    if (inSub)  { html += '</ul>'; inSub = false; }
    if (inList) { html += '</ul>'; inList = false; }
    html += '<p>' + inlineMd(trimmed) + '</p>';
  }

  if (inSub)  html += '</ul>';
  if (inList) html += '</ul>';
  return html;
}

// ── Modal ──
var backdrop     = document.getElementById('modalBackdrop');
var modalTitle   = document.getElementById('modalTitle');
var modalIcon    = document.getElementById('modalIcon');
var modalOpenBtn = document.getElementById('modalOpenBtn');
var modalLoader  = document.getElementById('modalLoader');
var modalError   = document.getElementById('modalError');
var modalErrorMsg  = document.getElementById('modalErrorMsg');
var modalErrorLink = document.getElementById('modalErrorLink');
var modalContent = document.getElementById('modalContent');
var closeBtn     = document.getElementById('modalCloseBtn');

// ── Site Viewer (right panel) ──
var siteFrame          = document.getElementById('siteFrame');
var siteUrlPill        = document.getElementById('siteUrlPill');
var siteExtBtn         = document.getElementById('siteExtBtn');
var sitePlaceholder    = document.getElementById('sitePlaceholder');
var siteBlockedFull    = document.getElementById('siteBlockedFull');
var siteBlockedFullLink = document.getElementById('siteBlockedFullLink');
var blockTimer         = null;

function openSite(url) {
  siteUrlPill.textContent     = url;
  siteExtBtn.href             = url;
  siteExtBtn.style.visibility = 'visible';
  siteBlockedFullLink.href    = url;

  // Hide placeholder and blocked state, show iframe
  sitePlaceholder.classList.add('hidden');
  siteBlockedFull.classList.remove('visible');
  siteFrame.classList.add('visible');
  siteFrame.src = url;

  // Detection: if load fires and contentDocument is accessible (null/error page),
  // the site was blocked. Cross-origin success always throws SecurityError.
  clearTimeout(blockTimer);
  siteFrame.onload = function() {
    try {
      // For cross-origin success, this throws SecurityError — do nothing
      var doc = siteFrame.contentDocument;
      // If we reach here without throwing, the page is same-origin or an error page
      // Check if it's a blank/error page (blocked)
      if (!doc || !doc.body || doc.body.innerHTML.trim() === '') {
        showBlocked(url);
      }
    } catch (e) {
      // SecurityError = cross-origin page loaded fine — all good
    }
  };

  // Safety timeout: if still loading after 12s with no content, assume blocked
  blockTimer = setTimeout(function() {
    try {
      var doc = siteFrame.contentDocument;
      if (!doc || !doc.body || doc.body.innerHTML.trim() === '') {
        showBlocked(url);
      }
    } catch (e) { /* cross-origin success */ }
  }, 12000);
}

function showBlocked(url) {
  siteFrame.classList.remove('visible');
  siteBlockedFull.classList.add('visible');
  siteBlockedFullLink.href = url;
}

function resetSitePanel() {
  clearTimeout(blockTimer);
  siteFrame.onload = null;
  siteFrame.classList.remove('visible');
  siteFrame.src = '';
  siteBlockedFull.classList.remove('visible');
  sitePlaceholder.classList.remove('hidden');
  siteUrlPill.textContent     = 'No site selected';
  siteExtBtn.style.visibility = 'hidden';
}

// Intercept all link clicks inside the rendered markdown
document.getElementById('modalContent').addEventListener('click', function(e) {
  var link = e.target.closest('a');
  if (!link) return;
  var href = link.getAttribute('href');
  if (!href || href.startsWith('#')) return;
  // Only intercept http/https links — let mailto etc. pass through
  if (!/^https?:\/\//i.test(href)) return;
  e.preventDefault();
  openSite(href);
});

function showLoader() {
  modalLoader.classList.remove('hidden');
  modalError.classList.remove('visible');
  modalContent.classList.remove('visible');
}
function showError(msg, url) {
  modalLoader.classList.add('hidden');
  modalErrorMsg.textContent = msg;
  modalErrorLink.href = url;
  modalError.classList.add('visible');
  modalContent.classList.remove('visible');
}
function showContent(html) {
  modalLoader.classList.add('hidden');
  modalError.classList.remove('visible');
  modalContent.innerHTML = html;
  modalContent.scrollTop = 0;
  modalContent.classList.add('visible');
}

function openModal(cat) {
  modalIcon.textContent  = cat.icon;
  modalTitle.textContent = cat.title;
  modalOpenBtn.href      = cat.url;

  resetSitePanel();
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  showLoader();
  fetch(cat.raw)
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(function(md) { showContent(renderMd(md)); })
    .catch(function(err) {
      showError('Could not load "' + cat.title + '" (' + err.message + '). Open it directly on FMHY:', cat.url);
    });
}

function closeModal() {
  resetSitePanel();
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(function() { modalContent.innerHTML = ''; }, 250);
}

closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', function(e) {
  if (e.target === backdrop) closeModal();
});

// ── Render categories ──
function renderCategories(filter) {
  var grid = document.getElementById('cardGrid');
  var q = (filter || '').toLowerCase();

  grid.innerHTML = '';
  CATEGORIES.forEach(function(cat) {
    var match = !q
      || cat.title.toLowerCase().includes(q)
      || cat.desc.toLowerCase().includes(q)
      || cat.tag.toLowerCase().includes(q);

    var isDirect = !!cat.site;
    var arrow    = isDirect ? '↗' : '→';

    var card = document.createElement('div');
    card.className = 'cat-card' + (match ? '' : ' hidden') + (isDirect ? ' cat-card--launch' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.style.setProperty('--card-color', cat.color);
    card.style.cursor = 'pointer';
    card.innerHTML =
      '<div class="card-icon">' + cat.icon + '</div>' +
      '<div class="card-title">' + cat.title + '</div>' +
      '<div class="card-desc">' + cat.desc + '</div>' +
      '<div class="card-tag">' + cat.tag + '</div>' +
      '<div class="card-arrow">' + arrow + '</div>';

    function handleClick() {
      if (isDirect) {
        window.open(cat.site, '_blank', 'noopener,noreferrer');
      } else {
        openModal(cat);
      }
    }
    card.addEventListener('click', handleClick);
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); }
    });
    grid.appendChild(card);
  });
}

// ── Render ecosystem ──
function renderEco() {
  var grid = document.getElementById('ecoGrid');
  ECOSYSTEM.forEach(function(item) {
    var card = document.createElement('a');
    card.className = 'eco-card';
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener';
    card.innerHTML =
      '<span class="eco-icon">' + item.icon + '</span>' +
      '<div class="eco-text">' +
        '<span class="eco-name">' + item.name + '</span>' +
        '<span class="eco-desc">' + item.desc + '</span>' +
      '</div>';
    grid.appendChild(card);
  });
}

// ── Search ──
var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  renderCategories(searchInput.value);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (welcomeBackdrop.classList.contains('open')) {
      closeWelcome();
    } else if (backdrop.classList.contains('open')) {
      closeModal();
    } else {
      searchInput.blur();
      searchInput.value = '';
      renderCategories('');
    }
    return;
  }
  if (e.key === '/' && document.activeElement !== searchInput && !backdrop.classList.contains('open')) {
    e.preventDefault();
    searchInput.focus();
  }
});

// ── Welcome Popup ──
var welcomeBackdrop = document.getElementById('welcomeBackdrop');
var welcomeBtn      = document.getElementById('welcomeBtn');

function closeWelcome() {
  welcomeBackdrop.classList.remove('open');
  welcomeBackdrop.setAttribute('aria-hidden', 'true');
  localStorage.setItem('fmhy-welcomed', '1');
}

welcomeBtn.addEventListener('click', closeWelcome);
welcomeBackdrop.addEventListener('click', function(e) {
  if (e.target === welcomeBackdrop) closeWelcome();
});

// ── Init ──
renderCategories();
renderEco();

// Show welcome if first visit (delay slightly so page renders first)
if (!localStorage.getItem('fmhy-welcomed')) {
  setTimeout(function() {
    welcomeBackdrop.classList.add('open');
    welcomeBackdrop.removeAttribute('aria-hidden');
  }, 300);
}
