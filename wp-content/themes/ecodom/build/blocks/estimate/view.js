/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./src/blocks/estimate/view.js ***!
  \*************************************/
// Слайдер «Чёткая смета»: точки, автопрокрутка (пауза при наведении/фокусе), свайп.
const INTERVAL = 6000;
document.querySelectorAll('.estimate').forEach(section => {
  const slides = [...section.querySelectorAll('.estimate__slide')];
  const dots = [...section.querySelectorAll('.estimate__dot')];
  if (slides.length < 2) {
    return;
  }
  let current = 0;
  let timer = null;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const autoplay = section.dataset.autoplay === '1' && !reduceMotion;
  const show = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.hidden = i !== current;
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === current);
      dot.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  };
  const stop = () => {
    clearInterval(timer);
    timer = null;
  };
  const start = () => {
    if (autoplay && !timer) {
      timer = setInterval(() => show(current + 1), INTERVAL);
    }
  };
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      show(i);
      stop();
      start();
    });
  });
  section.addEventListener('mouseenter', stop);
  section.addEventListener('mouseleave', start);
  section.addEventListener('focusin', stop);
  section.addEventListener('focusout', start);

  // свайп на тач-устройствах
  let startX = null;
  section.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, {
    passive: true
  });
  section.addEventListener('touchend', e => {
    if (startX === null) {
      return;
    }
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) {
      show(current + (dx < 0 ? 1 : -1));
    }
  });

  // автопрокрутка только пока секция видна
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => entry.isIntersecting ? start() : stop(), {
      threshold: 0.4
    }).observe(section);
  } else {
    start();
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map