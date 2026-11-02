/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/calculator/edit.js"
/*!***************************************!*\
  !*** ./src/blocks/calculator/edit.js ***!
  \***************************************/
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
/* harmony import */ var _assets_img_calculator_house_1_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/img/calculator/house-1.webp */ "./assets/img/calculator/house-1.webp");
/* harmony import */ var _assets_img_calculator_house_2_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/calculator/house-2.webp */ "./assets/img/calculator/house-2.webp");
/* harmony import */ var _assets_img_calculator_house_3_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/img/calculator/house-3.webp */ "./assets/img/calculator/house-3.webp");
/* harmony import */ var _assets_img_calculator_house_4_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/img/calculator/house-4.webp */ "./assets/img/calculator/house-4.webp");
/* harmony import */ var _assets_img_calculator_house_5_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/img/calculator/house-5.webp */ "./assets/img/calculator/house-5.webp");
/* harmony import */ var _assets_img_calculator_house_6_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/img/calculator/house-6.webp */ "./assets/img/calculator/house-6.webp");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












const FIRST_STEP_IMAGES = [_assets_img_calculator_house_1_webp__WEBPACK_IMPORTED_MODULE_5__, _assets_img_calculator_house_2_webp__WEBPACK_IMPORTED_MODULE_6__, _assets_img_calculator_house_3_webp__WEBPACK_IMPORTED_MODULE_7__, _assets_img_calculator_house_4_webp__WEBPACK_IMPORTED_MODULE_8__, _assets_img_calculator_house_5_webp__WEBPACK_IMPORTED_MODULE_9__, _assets_img_calculator_house_6_webp__WEBPACK_IMPORTED_MODULE_10__];
const pad = n => String(n).padStart(2, '0');
const CheckIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("svg", {
  className: "calc__check-icon",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("path", {
    d: "M7 12.5l3.2 3.2L17 8.8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});

/**
 * Предпросмотр делаем на клиенте, а не через ServerSideRender: все атрибуты калькулятора
 * в адресной строке (~10 КБ) превышают лимит Apache (8190 байт) и запрос падал.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const {
    eyebrow,
    heading,
    steps,
    nextText,
    finalTitle,
    finalHint,
    submitText,
    consent
  } = attributes;
  const total = steps.length;
  const [active, setActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 0..total-1 — шаги, total — форма
  const isForm = active >= total;
  const step = isForm ? null : steps[active];
  const updateStep = (si, patch) => setAttributes({
    steps: steps.map((s, i) => i === si ? {
      ...s,
      ...patch
    } : s)
  });
  const updateOption = (si, oi, patch) => updateStep(si, {
    options: steps[si].options.map((o, i) => i === oi ? {
      ...o,
      ...patch
    } : o)
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Заголовки', 'ecodom'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Надпись над заголовком', 'ecodom'),
          value: eyebrow,
          onChange: v => setAttributes({
            eyebrow: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Заголовок', 'ecodom'),
          value: heading,
          onChange: v => setAttributes({
            heading: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Кнопка «Далее»', 'ecodom'),
          value: nextText,
          onChange: v => setAttributes({
            nextText: v
          })
        })]
      }), steps.map((s, si) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Шаг', 'ecodom')} ${si + 1}: ${s.question}`,
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "tertiary",
          onClick: () => setActive(si),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Показать этот шаг в блоке', 'ecodom')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Вопрос', 'ecodom'),
          value: s.question,
          onChange: v => updateStep(si, {
            question: v
          })
        }), s.options.map((option, oi) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          style: {
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: '1px solid #ddd'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Вариант', 'ecodom')} ${oi + 1}`,
            value: option.label,
            onChange: v => updateOption(si, oi, {
              label: v
            })
          }), s.layout !== 'tiles' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ImageField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            url: option.imageUrl,
            onSelect: m => updateOption(si, oi, {
              imageId: m.id,
              imageUrl: m.url
            }),
            onRemove: () => updateOption(si, oi, {
              imageId: 0,
              imageUrl: ''
            })
          }), s.options.length > 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "link",
            isDestructive: true,
            onClick: () => updateStep(si, {
              options: s.options.filter((_, i) => i !== oi)
            }),
            style: {
              display: 'block',
              marginTop: 8
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Удалить вариант', 'ecodom')
          })]
        }, oi)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          onClick: () => updateStep(si, {
            options: [...s.options, {
              label: '',
              imageId: 0,
              imageUrl: ''
            }]
          }),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Добавить вариант', 'ecodom')
        })]
      }, si)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Форма заявки', 'ecodom'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "tertiary",
          onClick: () => setActive(total),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Показать форму в блоке', 'ecodom')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Заголовок', 'ecodom'),
          value: finalTitle,
          onChange: v => setAttributes({
            finalTitle: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Подсказка про мессенджер', 'ecodom'),
          value: finalHint,
          onChange: v => setAttributes({
            finalHint: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Текст кнопки', 'ecodom'),
          value: submitText,
          onChange: v => setAttributes({
            submitText: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Согласие', 'ecodom'),
          value: consent,
          onChange: v => setAttributes({
            consent: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "components-base-control__help",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Заявки приходят на почту администратора и сохраняются в разделе «Заявки».', 'ecodom')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
        className: 'eco-light calc'
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "eco-light__stage calc__stage",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: "eco-light__line"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "calc__eyebrow",
          children: eyebrow
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
          className: "calc__heading",
          children: heading
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "calc__panel",
          children: [!isForm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: `calc__step calc__step--${step.layout}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
              className: "calc__question",
              children: step.question
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "calc__options",
              children: step.options.map((option, oi) => {
                const img = option.imageUrl || (active === 0 ? FIRST_STEP_IMAGES[oi] : '');
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  className: "calc__option",
                  children: step.layout === 'tiles' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                    className: "calc__tile",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                      className: "calc__check",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(CheckIcon, {})
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                      className: "calc__label",
                      children: option.label
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                    className: "calc__card",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                      className: "calc__img",
                      style: img ? {
                        backgroundImage: `url(${img})`
                      } : undefined
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                      className: "calc__check",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(CheckIcon, {})
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                      className: "calc__label",
                      children: option.label
                    })]
                  })
                }, oi);
              })
            })]
          }), isForm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "calc__step calc__step--final",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
              className: "calc__question",
              children: finalTitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
              className: "calc__hint",
              children: finalHint
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "calc__messengers",
              children: ['Telegram', 'Viber', 'What’s App'].map(name => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                className: "calc__messenger",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  className: "calc__messenger-icon"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  className: "calc__messenger-name",
                  children: name
                })]
              }, name))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "calc__fields",
              children: ['Ваше имя', 'Телефон', 'Электронная почта (не обязательно)'].map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                className: "calc__field",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                  children: label
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input", {
                  type: "text",
                  disabled: true
                })]
              }, label))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
              className: "calc__submit",
              children: submitText
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
              className: "calc__consent",
              children: consent
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: "calc__progress",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
              className: "calc__progress-fill",
              style: {
                width: `${Math.min(active + 1, total) / total * 100}%`
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
            className: "calc__counter",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("b", {
              className: "calc__current",
              children: pad(Math.min(active + 1, total))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("i", {
              children: "/"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
              className: "calc__total",
              children: pad(total)
            })]
          }), !isForm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: "calc__next",
            children: nextText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          style: {
            position: 'absolute',
            left: 52,
            bottom: 16,
            display: 'flex',
            gap: 6
          },
          children: [...steps.map((_, i) => i + 1), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Форма', 'ecodom')].map((label, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: i === active ? 'primary' : 'secondary',
            size: "small",
            onClick: () => setActive(i),
            children: label
          }, i))
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/blocks/calculator/index.js"
/*!****************************************!*\
  !*** ./src/blocks/calculator/index.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/calculator/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/calculator/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/calculator/edit.js");




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

/***/ "./src/blocks/calculator/style.scss"
/*!******************************************!*\
  !*** ./src/blocks/calculator/style.scss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./assets/img/calculator/house-1.webp"
/*!********************************************!*\
  !*** ./assets/img/calculator/house-1.webp ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/house-1.08629f18.webp";

/***/ },

/***/ "./assets/img/calculator/house-2.webp"
/*!********************************************!*\
  !*** ./assets/img/calculator/house-2.webp ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/house-2.30f6123c.webp";

/***/ },

/***/ "./assets/img/calculator/house-3.webp"
/*!********************************************!*\
  !*** ./assets/img/calculator/house-3.webp ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/house-3.cbc5eabd.webp";

/***/ },

/***/ "./assets/img/calculator/house-4.webp"
/*!********************************************!*\
  !*** ./assets/img/calculator/house-4.webp ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/house-4.06914ee4.webp";

/***/ },

/***/ "./assets/img/calculator/house-5.webp"
/*!********************************************!*\
  !*** ./assets/img/calculator/house-5.webp ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/house-5.ed1c45ee.webp";

/***/ },

/***/ "./assets/img/calculator/house-6.webp"
/*!********************************************!*\
  !*** ./assets/img/calculator/house-6.webp ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/house-6.453029cb.webp";

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

/***/ "./src/blocks/calculator/block.json"
/*!******************************************!*\
  !*** ./src/blocks/calculator/block.json ***!
  \******************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ecodom/calculator","title":"Калькулятор стоимости","category":"ecodom","icon":"calculator","description":"Квиз из 7 шагов и форма заявки. Заявки сохраняются в разделе «Заявки» и уходят на почту администратора.","attributes":{"eyebrow":{"type":"string","default":"Пройдите бесплатный тест-калькулятор и"},"heading":{"type":"string","default":"Получите предварительный расчет стоимости дома за 1 минуту"},"steps":{"type":"array","default":[{"question":"Какой дом вы хотите построить?","layout":"cards3","multiple":false,"options":[{"label":"Дом из блоков","imageId":0,"imageUrl":""},{"label":"Каркасный дом","imageId":0,"imageUrl":""},{"label":"Кирпичный дом","imageId":0,"imageUrl":""},{"label":"Дом из профилированного бруса","imageId":0,"imageUrl":""},{"label":"Дом из цилиндрованного бруса","imageId":0,"imageUrl":""},{"label":"Дом из SIP-панелей","imageId":0,"imageUrl":""}]},{"question":"Сколько этажей вам нужно?","layout":"tiles","multiple":false,"options":[{"label":"1 этаж"},{"label":"1 этаж + мансарда"},{"label":"2 этажа"},{"label":"2 этажа + мансарда"},{"label":"3 этажа"},{"label":"Еще не определились"}]},{"question":"Есть ли у вас участок?","layout":"tiles","multiple":false,"options":[{"label":"Участок есть, в черте города"},{"label":"Участок есть за городом далее 100 км"},{"label":"Участок есть за городом до 100 км"},{"label":"Участка нет"}]},{"question":"Выберите желаемые размеры дома","layout":"tiles","multiple":false,"options":[{"label":"Дом до 100 кв.м"},{"label":"До 100-150 кв.м"},{"label":"До 150-200 кв.м"},{"label":"Более 200 кв.м."}]},{"question":"Когда планируете строительство?","layout":"tiles","multiple":false,"options":[{"label":"В ближайшее время"},{"label":"В этом году"},{"label":"В следующем году"},{"label":"Еще не определились"}]},{"question":"Какой стиль ближе?","layout":"cards4","multiple":false,"options":[{"label":"Шале","imageId":0,"imageUrl":""},{"label":"Финская классика","imageId":0,"imageUrl":""},{"label":"Райт","imageId":0,"imageUrl":""},{"label":"Модерн","imageId":0,"imageUrl":""},{"label":"Баухаус","imageId":0,"imageUrl":""},{"label":"Американский стиль","imageId":0,"imageUrl":""},{"label":"Фахверк","imageId":0,"imageUrl":""},{"label":"Классический стиль","imageId":0,"imageUrl":""}]},{"question":"Нужны ли дополнительные строения на участке?","layout":"cards3tall","multiple":true,"options":[{"label":"Гараж","imageId":0,"imageUrl":""},{"label":"Сауна","imageId":0,"imageUrl":""},{"label":"Баня","imageId":0,"imageUrl":""}]}]},"nextText":{"type":"string","default":"Далее"},"finalTitle":{"type":"string","default":"Мы получили данные и приступаем к расчетам"},"finalHint":{"type":"string","default":"Укажите куда выслать расчет стоимости?"},"submitText":{"type":"string","default":"Оставить заявку"},"consent":{"type":"string","default":"Нажимая на кнопку, вы соглашаетесь с условиями политики конфиденциальности"}},"supports":{"align":["full"],"html":false},"editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./view.js","render":"file:./render.php"}');

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
/******/ 			"calculator/index": 0,
/******/ 			"calculator/style-index": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["calculator/style-index"], () => (__webpack_require__("./src/blocks/calculator/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map