/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/openVideo.js"
/*!*************************************!*\
  !*** ./src/components/openVideo.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openVideo)
/* harmony export */ });
// Общий для блоков показ видео в модальном окне <dialog> (mp4, YouTube, Vimeo).
const embedUrl = url => {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  if (yt) {
    return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`;
  }
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  return vimeo ? `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` : null;
};
function openVideo(url) {
  const dialog = document.createElement('dialog');
  dialog.className = 'video-dialog';
  const embed = embedUrl(url);
  const media = document.createElement(embed ? 'iframe' : 'video');
  if (embed) {
    media.src = embed;
    media.allow = 'autoplay; fullscreen';
    media.allowFullscreen = true;
  } else {
    media.src = url;
    media.controls = true;
    media.autoplay = true;
  }
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'video-dialog__close';
  close.setAttribute('aria-label', 'Закрыть');
  close.textContent = '×';
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => dialog.remove());
  dialog.addEventListener('click', e => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
  dialog.append(close, media);
  document.body.append(dialog);
  dialog.showModal();
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/blocks/houses/view.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_openVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/openVideo */ "./src/components/openVideo.js");

document.querySelectorAll('.houses__video[data-video]').forEach(btn => {
  btn.addEventListener('click', () => (0,_components_openVideo__WEBPACK_IMPORTED_MODULE_0__["default"])(btn.dataset.video));
});

// Вкладки: клик и стрелки (←/→, Home, End).
document.querySelectorAll('.houses').forEach(section => {
  const tabs = [...section.querySelectorAll('[role="tab"]')];
  const panels = [...section.querySelectorAll('[role="tabpanel"]')];
  const select = (index, focus = false) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', on);
      tab.classList.toggle('is-active', on);
      tab.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
      if (on && focus) {
        tab.focus();
      }
    });
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', e => {
      const last = tabs.length - 1;
      const next = {
        ArrowRight: i === last ? 0 : i + 1,
        ArrowLeft: i === 0 ? last : i - 1,
        Home: 0,
        End: last
      }[e.key];
      if (next !== undefined) {
        e.preventDefault();
        select(next, true);
      }
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map