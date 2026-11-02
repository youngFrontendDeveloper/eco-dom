/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/estimate/edit.js"
/*!*************************************!*\
  !*** ./src/blocks/estimate/edit.js ***!
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
/* harmony import */ var _components_ScheduleCalendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ScheduleCalendar */ "./src/components/ScheduleCalendar.js");
/* harmony import */ var _assets_img_estimate_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/estimate.webp */ "./assets/img/estimate.webp");
/* harmony import */ var _assets_img_project_house_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/img/project-house.webp */ "./assets/img/project-house.webp");
/* harmony import */ var _assets_img_phone_frame_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/img/phone-frame.webp */ "./assets/img/phone-frame.webp");
/* harmony import */ var _assets_img_phone_screen_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/img/phone-screen.webp */ "./assets/img/phone-screen.webp");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











const DEFAULT_IMAGES = {
  estimate: _assets_img_estimate_webp__WEBPACK_IMPORTED_MODULE_6__,
  project: _assets_img_project_house_webp__WEBPACK_IMPORTED_MODULE_7__,
  report: _assets_img_phone_screen_webp__WEBPACK_IMPORTED_MODULE_9__
};
const TYPE_LABELS = {
  estimate: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Смета', 'ecodom'),
  project: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Проект дома', 'ecodom'),
  schedule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('График работ', 'ecodom'),
  report: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Отчётность', 'ecodom')
};
function Edit({
  attributes,
  setAttributes
}) {
  const {
    slides,
    autoplay
  } = attributes;
  const [active, setActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const index = Math.min(active, slides.length - 1);
  const slide = slides[index];
  const update = patch => setAttributes({
    slides: slides.map((s, i) => i === index ? {
      ...s,
      ...patch
    } : s)
  });
  const updateChip = (n, value) => {
    const chips = [...(slide.chips || [])];
    chips[n] = value;
    update({
      chips
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Слайд', 'ecodom')}: ${TYPE_LABELS[slide.type] || index + 1}`,
        children: [slide.type !== 'schedule' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            style: {
              marginTop: 0
            },
            children: slide.type === 'report' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Скриншот на экране телефона', 'ecodom') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Изображение', 'ecodom')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_ImageField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            url: slide.imageUrl,
            onSelect: m => update({
              imageId: m.id,
              imageUrl: m.url
            }),
            onRemove: () => update({
              imageId: 0,
              imageUrl: ''
            })
          })]
        }), slide.type === 'schedule' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Месяц в календаре', 'ecodom'),
            value: slide.month,
            onChange: v => update({
              month: v
            })
          }), [0, 1, 2].map(n => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Этап', 'ecodom')} ${n + 1}`,
            value: (slide.chips || [])[n] || '',
            onChange: v => updateChip(n, v)
          }, n))]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Слайдер', 'ecodom'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Автопрокрутка', 'ecodom'),
          checked: autoplay,
          onChange: v => setAttributes({
            autoplay: v
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("section", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
        className: 'eco-light estimate'
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "eco-light__stage estimate__stage",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: `estimate__slide estimate__slide--${slide.type}`,
          children: [slide.type === 'project' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "estimate__panel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "estimate__text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "h2",
              className: "estimate__heading",
              value: slide.heading,
              onChange: v => update({
                heading: v
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Заголовок', 'ecodom'),
              allowedFormats: []
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "p",
              className: "estimate__paragraph",
              value: slide.text,
              onChange: v => update({
                text: v
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Текст', 'ecodom'),
              allowedFormats: ['core/link']
            })]
          }), (slide.type === 'estimate' || slide.type === 'project') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            className: "estimate__image",
            src: slide.imageUrl || DEFAULT_IMAGES[slide.type],
            alt: ""
          }), slide.type === 'schedule' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_ScheduleCalendar__WEBPACK_IMPORTED_MODULE_5__["default"], {
            month: slide.month,
            chips: slide.chips,
            onMonthChange: v => update({
              month: v
            })
          }), slide.type === 'report' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "phone",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
              className: "phone__screen",
              src: slide.imageUrl || DEFAULT_IMAGES.report,
              alt: ""
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
              className: "phone__frame",
              src: _assets_img_phone_frame_webp__WEBPACK_IMPORTED_MODULE_8__,
              alt: ""
            })]
          })]
        }, index), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "estimate__dots",
          children: slides.map((s, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
            type: "button",
            className: `estimate__dot${i === index ? ' is-active' : ''}`,
            "aria-label": TYPE_LABELS[s.type],
            onClick: () => setActive(i)
          }, i))
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/blocks/estimate/index.js"
/*!**************************************!*\
  !*** ./src/blocks/estimate/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/estimate/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/estimate/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/estimate/edit.js");




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

/***/ "./src/components/ScheduleCalendar.js"
/*!********************************************!*\
  !*** ./src/components/ScheduleCalendar.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CALENDAR_DAYS: () => (/* binding */ CALENDAR_DAYS),
/* harmony export */   CALENDAR_WEEKDAYS: () => (/* binding */ CALENDAR_WEEKDAYS),
/* harmony export */   "default": () => (/* binding */ ScheduleCalendar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// Календарь-иллюстрация со слайда «Распределение графика работ».
// Разметка зеркалит render.php блока estimate. Числа взяты из макета.
const CALENDAR_WEEKDAYS = ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'];

// [число, 'muted' — дни соседних месяцев, 'sel' — отмеченные этапы]
const CALENDAR_DAYS = [[27, 'muted'], [28, 'muted'], [29, 'muted'], [30, 'muted'], [1], [2], [3], [4], [5], [6], [7], [8], [9, 'sel'], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19], [20], [21, 'sel'], [22], [23], [24], [25], [26], [27], [28], [29, 'sel'], [30], [31], [1, 'muted'], [2, 'muted'], [3, 'muted'], [4, 'muted'], [5, 'muted'], [6, 'muted'], [7, 'muted']];
function ScheduleCalendar({
  month,
  chips = [],
  onMonthChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "calendar",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "calendar__head",
      children: [onMonthChange ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        className: "calendar__month",
        value: month,
        onChange: e => onMonthChange(e.target.value)
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "calendar__month",
        children: month
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "calendar__arrows",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15 5l-7 7 7 7",
            fill: "none",
            stroke: "#5f5f5f",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9 5l7 7-7 7",
            fill: "none",
            stroke: "#5f5f5f",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "calendar__grid",
      children: [CALENDAR_WEEKDAYS.map((d, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "calendar__cell calendar__cell--weekday",
        children: d
      }, `w${i}`)), CALENDAR_DAYS.map(([day, mod], i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: `calendar__cell${mod ? ` calendar__cell--${mod}` : ''}`,
        children: day
      }, i))]
    }), chips.slice(0, 3).map((label, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: `calendar__chip calendar__chip--${i + 1}`,
      children: label
    }, i))]
  });
}

/***/ },

/***/ "./src/blocks/estimate/style.scss"
/*!****************************************!*\
  !*** ./src/blocks/estimate/style.scss ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./assets/img/estimate.webp"
/*!**********************************!*\
  !*** ./assets/img/estimate.webp ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/estimate.a847a99c.webp";

/***/ },

/***/ "./assets/img/phone-frame.webp"
/*!*************************************!*\
  !*** ./assets/img/phone-frame.webp ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/phone-frame.0d774da8.webp";

/***/ },

/***/ "./assets/img/phone-screen.webp"
/*!**************************************!*\
  !*** ./assets/img/phone-screen.webp ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/phone-screen.c71624ad.webp";

/***/ },

/***/ "./assets/img/project-house.webp"
/*!***************************************!*\
  !*** ./assets/img/project-house.webp ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/project-house.78a765a9.webp";

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

/***/ "./src/blocks/estimate/block.json"
/*!****************************************!*\
  !*** ./src/blocks/estimate/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ecodom/estimate","title":"Чёткая смета (слайдер)","category":"ecodom","icon":"slides","description":"Светлая секция-слайдер из четырёх слайдов: смета, проект дома, график работ (календарь) и отчётность (телефон).","attributes":{"slides":{"type":"array","default":[{"type":"estimate","heading":"Чёткая смета","text":"Перед началом работ вы получаете подробную смету, где расписаны материалы, конструкции и этапы строительства. Цена фиксируется в договоре и не меняется по ходу работ — никаких скрытых платежей и доплат в процессе.","imageId":0,"imageUrl":"","month":"","chips":[]},{"type":"project","heading":"Проект дома","text":"Наши архитекторы разработают проект каркасного дома под Ваш участок, бюджет и образ жизни. Вы заранее увидите планировку, фасады и 3D-визуализацию и сможете внести правки до начала строительства.","imageId":0,"imageUrl":"","month":"","chips":[]},{"type":"schedule","heading":"Распределение графика работ","text":"Мы заранее расписываем сроки каждого этапа: фундамент, возведение стен и кровли, внутренняя и внешняя отделка. Вы всегда знаете, что происходит на объекте и когда дом будет готов к заселению.","imageId":0,"imageUrl":"","month":"Август 2022","chips":["Фундамент","Возведение стен","Отделка"]},{"type":"report","heading":"Отчётность по выполнению работы","text":"Каждую неделю вы получаете фото- и видеоотчёт о ходе строительства. Следить за выполнением работ можно со смартфона, не выезжая на объект, а все вопросы быстро решаются с вашим персональным менеджером.","imageId":0,"imageUrl":"","month":"","chips":[]}]},"autoplay":{"type":"boolean","default":true}},"supports":{"align":["full"],"html":false},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./view.js","render":"file:./render.php"}');

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
/******/ 			"estimate/index": 0,
/******/ 			"estimate/style-index": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["estimate/style-index"], () => (__webpack_require__("./src/blocks/estimate/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map