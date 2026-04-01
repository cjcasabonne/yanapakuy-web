/* Yanapakuy — JS: nav, año, scroll reveal */
(() => {
  // Nav toggle
  const navBtn = document.querySelector('[data-nav-toggle]');
  const nav    = document.querySelector('[data-nav]');
  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      navBtn.setAttribute('aria-expanded', String(!open));
    });

    // Cerrar al hacer clic en un enlace del menú
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.setAttribute('data-open', 'false');
        navBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!navBtn.contains(e.target) && !nav.contains(e.target)) {
        nav.setAttribute('data-open', 'false');
        navBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());

  // Scroll reveal
  const targets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && targets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.10 });
    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add('visible'));
  }
})();
