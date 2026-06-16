/* DQX Translation Project — main.js */

// ----- Sticky header -------------------------------------------------------
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:100%;pointer-events:none;';
  document.body.prepend(sentinel);
  new IntersectionObserver(
    ([e]) => header.classList.toggle('is-stuck', !e.isIntersecting),
    { rootMargin: '-1px 0px 0px 0px', threshold: [1] }
  ).observe(sentinel);
})();

// ----- Mobile nav toggle ---------------------------------------------------
(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  nav.querySelectorAll('.nav__links a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('is-open'));
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) nav.classList.remove('is-open');
  });
})();

// ----- Active nav link -----------------------------------------------------
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    // Match by filename
    const hrefFile = href.split('/').pop().replace('.html', '') || 'index';
    const pathFile = path.split('/').pop().replace('.html', '') || 'index';
    if (hrefFile === pathFile) {
      a.classList.add('is-active');
    }
  });
})();

// ----- Scroll reveal -------------------------------------------------------
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    }),
    { threshold: 0.10, rootMargin: '0px 0px -36px 0px' }
  );
  items.forEach(el => obs.observe(el));
})();

// ----- Accordion -----------------------------------------------------------
(function () {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('is-open');
      btn.classList.toggle('is-open', !isOpen);
      const body = btn.nextElementSibling;
      if (body) body.classList.toggle('is-open', !isOpen);
    });
  });
})();

// ----- Image lightbox ------------------------------------------------------
(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Image preview');

  const img = document.createElement('img');
  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.setAttribute('aria-label', 'Close preview');
  closeBtn.innerHTML = '&times;';

  overlay.appendChild(closeBtn);
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    img.src = '';
  }

  // Wire up all content images
  document.querySelectorAll('.content img').forEach(el => {
    el.addEventListener('click', () => open(el.src, el.alt));
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Also wire up any images added later (e.g. in troubleshoot cards)
  document.querySelectorAll('.troubleshoot-card img, .guide-img').forEach(el => {
    el.addEventListener('click', () => open(el.src, el.alt));
  });
})();
