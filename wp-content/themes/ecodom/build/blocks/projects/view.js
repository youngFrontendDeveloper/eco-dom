/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./src/blocks/projects/view.js ***!
  \*************************************/
// Слайдер проектов: прокрутка стрелками на ширину карточки, состояние disabled на краях.
document.querySelectorAll('.projects').forEach(section => {
  const track = section.querySelector('.projects__track');
  const prev = section.querySelector('.projects__nav--prev');
  const next = section.querySelector('.projects__nav--next');
  if (!track || !prev || !next) {
    return;
  }
  const step = () => {
    const card = track.querySelector('.project-card');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  };
  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 1;
    prev.disabled = track.scrollLeft <= 0;
    next.disabled = track.scrollLeft >= max;
  };
  prev.addEventListener('click', () => track.scrollBy({
    left: -step(),
    behavior: 'smooth'
  }));
  next.addEventListener('click', () => track.scrollBy({
    left: step(),
    behavior: 'smooth'
  }));
  track.addEventListener('scroll', update, {
    passive: true
  });
  window.addEventListener('resize', update);
  update();
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      track.scrollBy({
        left: e.key === 'ArrowRight' ? step() : -step(),
        behavior: 'smooth'
      });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map