/* ============================================================
   УСАДЬБА — script.js
   ============================================================ */

/* ============================================================
   1. PAGE TRANSITIONS
   ============================================================ */
(function () {
  // Fade-in handled by CSS (body animation: fadeIn)
  // Fade-out on internal link clicks
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Only handle relative links to .html pages (same-origin navigation)
    const isInternal =
      !href.startsWith('http') &&
      !href.startsWith('mailto') &&
      !href.startsWith('tel') &&
      !href.startsWith('#') &&
      !link.hasAttribute('target');

    if (isInternal) {
      e.preventDefault();
      document.body.classList.add('page-fade-out');
      setTimeout(function () {
        window.location.href = href;
      }, 300);
    }
  });
})();

/* ============================================================
   2. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();

/* ============================================================
   3. HAMBURGER MENU
   ============================================================ */
(function () {
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!burger || !mobileNav) return;

  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
})();

/* ============================================================
   4. ACTIVE NAV LINK
   ============================================================ */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ============================================================
   5. HEADER SCROLL SHADOW
   ============================================================ */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      header.style.borderBottomColor = 'rgba(42,42,42,0.8)';
    } else {
      header.style.borderBottomColor = 'var(--border)';
    }
  }, { passive: true });
})();

/* ============================================================
   6. SMOOTH SCROLL for anchor links
   ============================================================ */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

/* ============================================================
   7. PREFERS-REDUCED-MOTION
   ============================================================ */
(function () {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    // Disable scroll reveal animations — show everything immediately
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
