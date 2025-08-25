// Sticky header shadow + mobile nav
(function () {
  const header = document.querySelector('.js-header');
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.js-nav-toggle');
  const mq = matchMedia('(max-width: 900px)');

  function onScroll() {
    if (window.scrollY > 8) header.classList.add('header--scrolled');
    else header.classList.remove('header--scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('is-locked', open);
    });
  }

  // Close menu on link click (mobile)
  nav?.addEventListener('click', (e) => {
    const t = e.target;
    if (t.matches('.nav__link')) {
      nav.classList.remove('nav--open');
      toggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
    }
  });
  document.querySelectorAll('.form__field--file').forEach(field => {
    const input = field.querySelector('.form__control[type="file"]');
    const text = field.querySelector('.form__file-text');

    input.addEventListener('change', () => {
      if (input.files.length > 0) {
        text.textContent = input.files[0].name;
      } else {
        text.textContent = 'Прикрепить файл';
      }
    });
  });
  document.querySelectorAll('.form__field--range').forEach(field => {
    const input = field.querySelector('input[type="range"]');
    const output = field.querySelector('.range-value');

    if (input && output) {
      const updateValue = () => {
        output.textContent = `${input.value}%`;
      };
      updateValue(); // установить начальное значение
      input.addEventListener('input', updateValue);
    }
  });

})();
