/* Yanapakuy - JS mínimo: navegación móvil + año en footer */
(() => {
  const navBtn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      const isOpen = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!isOpen));
      navBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  const y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());
})();