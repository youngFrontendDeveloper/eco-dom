/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/progress/edit.js"
/*!*************************************!*\
  !*** ./src/blocks/progress/edit.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ImageField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImageField */ "./src/components/ImageField.js");
/* harmony import */ var _components_StepArrows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/StepArrows */ "./src/components/StepArrows.js");
/* harmony import */ var _assets_img_progress_foundation_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/progress/foundation.webp */ "./assets/img/progress/foundation.webp");
/* harmony import */ var _assets_img_progress_assembly_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/img/progress/assembly.webp */ "./assets/img/progress/assembly.webp");
/* harmony import */ var _assets_img_progress_engineering_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/img/progress/engineering.webp */ "./assets/img/progress/engineering.webp");
/* harmony import */ var _assets_img_progress_finishing_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/img/progress/finishing.webp */ "./assets/img/progress/finishing.webp");
/* harmony import */ var _assets_img_progress_review_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/img/progress/review.webp */ "./assets/img/progress/review.webp");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












// Фото по умолчанию — по позиции вкладки (как в render.php).

const DEFAULTS = [_assets_img_progress_foundation_webp__WEBPACK_IMPORTED_MODULE_6__, _assets_img_progress_assembly_webp__WEBPACK_IMPORTED_MODULE_7__, _assets_img_progress_engineering_webp__WEBPACK_IMPORTED_MODULE_8__, _assets_img_progress_finishing_webp__WEBPACK_IMPORTED_MODULE_9__, _assets_img_progress_review_webp__WEBPACK_IMPORTED_MODULE_10__];
const EMPTY_TAB = {
  label: '',
  imageId: 0,
  imageUrl: '',
  videoUrl: '',
  steps: []
};
function Edit({
  attributes,
  setAttributes
}) {
  const {
    heading,
    tabs
  } = attributes;
  const [active, setActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const index = Math.min(active, tabs.length - 1);
  const tab = tabs[index];
  const imageOf = i => tabs[i].imageUrl || DEFAULTS[i] || DEFAULTS[0];
  const nextIndex = (index + 1) % tabs.length;
  const update = patch => setAttributes({
    tabs: tabs.map((t, i) => i === index ? {
      ...t,
      ...patch
    } : t)
  });
  const updateStep = (n, value) => {
    const steps = [...(tab.steps || [])];
    steps[n] = value;
    update({
      steps: steps.filter((s, i) => s !== '' || i < steps.length - 1)
    });
  };
  const removeTab = () => {
    setAttributes({
      tabs: tabs.filter((_, i) => i !== index)
    });
    setActive(Math.max(0, index - 1));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Вкладка', 'ecodom')}: ${tab.label || index + 1}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Название', 'ecodom'),
          value: tab.label,
          onChange: v => update({
            label: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ImageField__WEBPACK_IMPORTED_MODULE_4__["default"], {
          url: tab.imageUrl,
          onSelect: m => update({
            imageId: m.id,
            imageUrl: m.url
          }),
          onRemove: () => update({
            imageId: 0,
            imageUrl: ''
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ссылка на видео (mp4, YouTube, Vimeo)', 'ecodom'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Если указана, на фото появится кнопка play.', 'ecodom'),
          value: tab.videoUrl,
          onChange: v => update({
            videoUrl: v
          }),
          style: {
            marginTop: 16
          }
        }), [0, 1, 2, 3].map(n => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Подпись этапа', 'ecodom')} ${n + 1}`,
          help: n === 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Подписи со стрелками видны на десктопе от 1400 px.', 'ecodom') : undefined,
          value: (tab.steps || [])[n] || '',
          onChange: v => updateStep(n, v)
        }, n)), tabs.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "link",
          isDestructive: true,
          onClick: removeTab,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Удалить вкладку', 'ecodom')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Все вкладки', 'ecodom'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          onClick: () => {
            setAttributes({
              tabs: [...tabs, {
                ...EMPTY_TAB,
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Новая вкладка', 'ecodom')
              }]
            });
            setActive(tabs.length);
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Добавить вкладку', 'ecodom')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
        className: 'eco-light progress'
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "eco-light__stage progress__stage",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_StepArrows__WEBPACK_IMPORTED_MODULE_5__.StepDefs, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
          tagName: "h2",
          className: "progress__heading",
          value: heading,
          onChange: v => setAttributes({
            heading: v
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Заголовок', 'ecodom'),
          allowedFormats: []
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "progress__tabs",
          role: "tablist",
          children: tabs.map((t, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
            type: "button",
            className: `progress__tab${i === index ? ' is-active' : ''}`,
            onClick: () => setActive(i),
            children: t.label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Без названия', 'ecodom')
          }, i))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "progress__panel",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "progress__card",
            children: [tabs.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
              className: "progress__next",
              src: imageOf(nextIndex),
              alt: ""
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
              className: "progress__photo",
              src: imageOf(index),
              alt: ""
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_StepArrows__WEBPACK_IMPORTED_MODULE_5__["default"], {
            steps: tab.steps
          })]
        }, index)]
      })
    })]
  });
}

/***/ },

/***/ "./src/blocks/progress/index.js"
/*!**************************************!*\
  !*** ./src/blocks/progress/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/progress/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/progress/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/progress/edit.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => null // динамический блок: HTML строит render.php
});

/***/ },

/***/ "./src/components/ImageField.js"
/*!**************************************!*\
  !*** ./src/components/ImageField.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageField)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/** Общий компонент выбора картинки из медиатеки. */

function ImageField({
  url,
  onSelect,
  onRemove
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: onSelect,
      allowedTypes: ['image'],
      render: ({
        open
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: url,
          alt: "",
          style: {
            maxWidth: '100%',
            marginBottom: 8
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: open,
          children: url ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Заменить', 'ecodom') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Выбрать картинку', 'ecodom')
        }), url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "link",
          isDestructive: true,
          onClick: onRemove,
          style: {
            marginLeft: 8
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Убрать', 'ecodom')
        })]
      })
    })
  });
}

/***/ },

/***/ "./src/components/StepArrows.js"
/*!**************************************!*\
  !*** ./src/components/StepArrows.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STEP_ARROWS: () => (/* binding */ STEP_ARROWS),
/* harmony export */   StepDefs: () => (/* binding */ StepDefs),
/* harmony export */   "default": () => (/* binding */ StepArrows)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// Подписи этапов со стрелками вокруг фото («Ход строительства», десктоп ≥1400px).
// Разметка зеркалит render.php блока progress. Положение подписей — из макета,
// кривые стрелок приблизительные (точные векторы из Figma были недоступны).
const STEP_ARROWS = ['M 40 -6 C 40 -40 70 -64 120 -78',
// Этап 1 — справа внизу
'M 50 -6 C 50 -40 20 -64 -30 -78',
// Этап 2 — слева внизу
'M 100 36 C 100 66 130 88 175 100',
// Этап 3 — справа вверху
'M 40 36 C 40 66 10 88 -35 100' // Этап 4 — слева вверху
];

/** Один раз на блок: маркер-наконечник для стрелок. */
function StepDefs() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    className: "steps-defs",
    width: "0",
    height: "0",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("marker", {
        id: "step-arrowhead",
        viewBox: "0 0 10 10",
        refX: "8",
        refY: "5",
        markerWidth: "7",
        markerHeight: "7",
        orient: "auto-start-reverse",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
          d: "M 1 1 L 9 5 L 1 9",
          fill: "none",
          stroke: "#1f252d",
          strokeWidth: "1.2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })
    })
  });
}
function StepArrows({
  steps = []
}) {
  return steps.slice(0, 4).map((label, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
    className: `step step--${i + 1}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: "step__n",
      children: ["\u042D\u0442\u0430\u043F ", i + 1]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "step__label",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      className: "step__arrow",
      width: "1",
      height: "1",
      overflow: "visible",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: STEP_ARROWS[i],
        fill: "none",
        stroke: "#1f252d",
        strokeWidth: "1",
        strokeLinecap: "round",
        markerEnd: "url(#step-arrowhead)"
      })
    })]
  }, i));
}

/***/ },

/***/ "./src/blocks/progress/style.scss"
/*!****************************************!*\
  !*** ./src/blocks/progress/style.scss ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./assets/img/progress/assembly.webp"
/*!*******************************************!*\
  !*** ./assets/img/progress/assembly.webp ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/assembly.bcf25b43.webp";

/***/ },

/***/ "./assets/img/progress/engineering.webp"
/*!**********************************************!*\
  !*** ./assets/img/progress/engineering.webp ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/engineering.04b76b57.webp";

/***/ },

/***/ "./assets/img/progress/finishing.webp"
/*!********************************************!*\
  !*** ./assets/img/progress/finishing.webp ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/finishing.6fc9bf71.webp";

/***/ },

/***/ "./assets/img/progress/foundation.webp"
/*!*********************************************!*\
  !*** ./assets/img/progress/foundation.webp ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/foundation.95ab5dd8.webp";

/***/ },

/***/ "./assets/img/progress/review.webp"
/*!*****************************************!*\
  !*** ./assets/img/progress/review.webp ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/review.e341e43e.webp";

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/blocks/progress/block.json"
/*!****************************************!*\
  !*** ./src/blocks/progress/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ecodom/progress","title":"Ход строительства","category":"ecodom","icon":"hammer","description":"Вкладки этапов строительства: на десктопе вертикальные слева, на мобильных горизонтальные. У вкладки своё фото, видео и подписи этапов.","attributes":{"heading":{"type":"string","default":"Ход строительства"},"tabs":{"type":"array","default":[{"label":"Фундамент","imageId":0,"imageUrl":"","videoUrl":"","steps":["Земельные работы","Армирование","Устройство опалубки","Заливка бетона"]},{"label":"Сборка и Монтаж дома","imageId":0,"imageUrl":"","videoUrl":"","steps":[]},{"label":"Инженерные системы","imageId":0,"imageUrl":"","videoUrl":"","steps":[]},{"label":"Отделка","imageId":0,"imageUrl":"","videoUrl":"","steps":[]},{"label":"Отзыв клиента","imageId":0,"imageUrl":"","videoUrl":"","steps":[]}]}},"supports":{"align":["full"],"html":false},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./view.js","render":"file:./render.php"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		const document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"progress/index": 0,
/******/ 			"progress/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkecodom_theme"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["progress/style-index"], () => (__webpack_require__("./src/blocks/progress/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map