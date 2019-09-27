(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Post/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Post/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Avatar */ "./resources/js/Shared/tuis/Avatar.vue");
/* harmony import */ var _Shared_tuis_TextareaInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/TextareaInput */ "./resources/js/Shared/tuis/TextareaInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    Avatar: _Shared_tuis_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"],
    TextareaInput: _Shared_tuis_TextareaInput__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ["post"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TextareaInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/TextareaInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      "default": function _default() {
        return "textarea-input-".concat(this._uid);
      }
    },
    value: String,
    label: String,
    disabled: {
      type: Boolean,
      "default": false
    },
    errors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    helpText: {
      type: String
    },
    stats: {
      type: Boolean,
      "default": false
    },
    rows: {
      type: Number,
      "default": 4
    },
    classes: {
      type: [String, Array]
    }
  },
  data: function data() {
    return {
      textareaValue: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$on("input", function (e) {
      _this.textareaValue = e;
    });
    setTimeout(function () {
      autosize__WEBPACK_IMPORTED_MODULE_0___default()(_this.$refs.textarea);
    }, 0); // on update
    // setTimeout(() => {
    // autosize.update(this.$refs.textarea);
    // }, 0);
  },
  watch: {
    textareaValue: function textareaValue() {}
  },
  computed: {
    linesCount: function linesCount() {
      if (this.textareaValue) {
        // Count the number of new line characters
        return this.textareaValue.split(/\r\n|\r|\n/).length;
      } else {
        return 0;
      }
    },
    wordsCount: function wordsCount() {
      if (this.textareaValue) {
        var s = this.textareaValue; // Turn new line cahracters into white-spaces

        s = s.replace(/\n/g, " "); // Exclude start and end white-spaces

        s = s.replace(/(^\s*)|(\s*$)/gi, ""); // Turn 2 or more duplicate white-spaces into 1

        s = s.replace(/\s\s+/gi, " "); // Return the number of spaces

        return s.split(" ").length;
      } else {
        return 0;
      }
    },
    charactersCount: function charactersCount() {
      if (this.textareaValue) {
        return this.textareaValue.split("").length;
      } else {
        return 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Post/Show.vue?vue&type=template&id=c283d45a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Post/Show.vue?vue&type=template&id=c283d45a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("layout", [
        _c("div", { staticClass: "flex flex-wrap" }, [
          _c("div", { staticClass: "w-full md:w-2/3" }, [
            _c("div", { staticClass: "w-full h-68 lg:my-2 p-4" }, [
              _c("img", {
                staticClass: "object-fill w-full h-full rounded",
                attrs: { src: _vm.post.image_full_path }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "w-full pl-4" },
              [
                _c("div", { staticClass: "text-3xl" }, [
                  _vm._v(_vm._s(_vm.post.title))
                ]),
                _vm._v(" "),
                _c("avatar", {
                  staticClass: "mr-3",
                  attrs: { name: _vm.post.user.name, color: "blue" }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-sm" }, [
                  _vm._v(_vm._s(_vm.post.user.name))
                ]),
                _vm._v(" \n\t\t\t\t\t"),
                _c("span", { staticClass: "text-sm text-gray-600" }, [
                  _vm._v("in")
                ]),
                _vm._v(" \n\t\t\t\t\t"),
                _c("span", { staticClass: "text-sm" }, [
                  _vm._v(_vm._s(_vm.post.category.category_name))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "pt-4 text-sm tracking-widest text-gray-700 leading-relaxed text-justify"
                  },
                  [_vm._v(_vm._s(_vm.post.description))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "pt-4" }, [
                  _c("span", [_vm._v("Category:")]),
                  _vm._v(" \n\t\t\t\t\t\t"),
                  _c("span", { staticClass: "text-sm text-green-400" }, [
                    _vm._v(_vm._s(_vm.post.category.category_name))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "pt-8 pb-6" },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "text-2xl tracking-wider border-b-2 border-gray-800 inline-block mb-4"
                      },
                      [_vm._v("6 Comments")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "py-6 flex" }, [
                      _c(
                        "div",
                        [
                          _c("avatar", {
                            attrs: { name: _vm.post.user.name, color: "blue" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "pl-4" }, [
                        _c("p", { staticClass: "text-lg" }, [
                          _vm._v("John Doe")
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-sm text-gray-500 tracking-wider uppercase py-1"
                          },
                          [_vm._v("January 26,2018")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "text-sm tracking-wide text-gray-700"
                          },
                          [
                            _vm._v(
                              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quod ea cum quam necessitatibus laudantium similique ipsum tenetur. Nulla, recusandae rem. Itaque commodi cupiditate perspiciatis omnis minus, autem quibusdam est!"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "bg-gray-700 text-white px-4 py-1 mt-3 rounded"
                          },
                          [_vm._v("Reply")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "py-6 flex" }, [
                      _c(
                        "div",
                        [
                          _c("avatar", {
                            attrs: { name: _vm.post.user.name, color: "blue" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "pl-4" }, [
                        _c("p", { staticClass: "text-lg" }, [
                          _vm._v("John Doe")
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-sm text-gray-500 tracking-wider uppercase py-1"
                          },
                          [_vm._v("January 26,2018")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "text-sm tracking-wide text-gray-700"
                          },
                          [
                            _vm._v(
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos explicabo accusantium aperiam eum deleniti assumenda dolores dolor, sint odit expedita neque repellat, necessitatibus sed, quod fuga. Accusamus, possimus autem."
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "bg-gray-700 text-white px-4 py-1 mt-3 rounded"
                          },
                          [_vm._v("Reply")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "py-6 flex" }, [
                      _c(
                        "div",
                        [
                          _c("avatar", {
                            attrs: { name: _vm.post.user.name, color: "blue" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "pl-4" }, [
                        _c("p", { staticClass: "text-lg" }, [
                          _vm._v("John Doe")
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-sm text-gray-500 tracking-wider uppercase py-1"
                          },
                          [_vm._v("January 26,2018")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "text-sm tracking-wide text-gray-700"
                          },
                          [
                            _vm._v(
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aliquid nulla asperiores excepturi placeat quaerat officiis illo. Dolorum soluta nemo aliquid quam iste alias nulla cupiditate consectetur. Voluptatem, voluptatum nihil!"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "bg-gray-700 text-white px-4 py-1 mt-3 rounded"
                          },
                          [_vm._v("Reply")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("textarea-input")
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full md:w-1/3 pl-4 md:pl-12 mt-8 md:mt-3" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "text-2xl tracking-wider border-b-2 border-gray-800 inline-block"
                },
                [_vm._v("Popular Posts")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex mt-4" }, [
                _c(
                  "div",
                  { staticClass: "text-3xl text-gray-500 inline-block" },
                  [_vm._v("01")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mt-2 pl-2" }, [
                  _c("div", { staticClass: "text-gray-800" }, [
                    _vm._v("Needs to Meet Its Audience Where They Are")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-gray-600 text-sm mt-3" }, [
                    _vm._v("\n\t\t\t\t\t\t\tCategory Name:\n\t\t\t\t\t\t\t"),
                    _c(
                      "span",
                      { staticClass: "text-sm text-teal-600 tracking-wider" },
                      [_vm._v(_vm._s(_vm.post.category.category_name))]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-gray-800 text-sm flex items-center" },
                    [
                      _c("div", [
                        _vm._v(
                          _vm._s(_vm.post.published_at_formated) + " Rating:  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "12",
                              height: "12",
                              viewBox: "0 0 20 20"
                            }
                          },
                          [
                            _c("path", {
                              staticStyle: { fill: "#d69e2e" },
                              attrs: {
                                d:
                                  "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                              }
                            })
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex mt-4" }, [
                _c(
                  "div",
                  { staticClass: "text-3xl text-gray-500 inline-block" },
                  [_vm._v("02")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mt-2 pl-2" }, [
                  _c("div", { staticClass: "text-gray-800" }, [
                    _vm._v("Needs to Meet Its Audience Where They Are")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-gray-600 text-sm mt-3" }, [
                    _vm._v("\n\t\t\t\t\t\t\tCategory Name:\n\t\t\t\t\t\t\t"),
                    _c(
                      "span",
                      { staticClass: "text-sm text-teal-600 tracking-wider" },
                      [_vm._v(_vm._s(_vm.post.category.category_name))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-gray-800 text-sm" }, [
                    _vm._v(_vm._s(_vm.post.published_at_formated))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex mt-4 mb-8" }, [
                _c(
                  "div",
                  { staticClass: "text-3xl text-gray-500 inline-block" },
                  [_vm._v("03")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mt-2 pl-2" }, [
                  _c("div", { staticClass: "text-gray-800" }, [
                    _vm._v("Needs to Meet Its Audience Where They Are")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-gray-600 text-sm mt-3" }, [
                    _vm._v("\n\t\t\t\t\t\t\tCategory Name:\n\t\t\t\t\t\t\t"),
                    _c(
                      "span",
                      { staticClass: "text-sm text-teal-600 tracking-wider" },
                      [_vm._v(_vm._s(_vm.post.category.category_name))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-gray-800 text-sm" }, [
                    _vm._v(_vm._s(_vm.post.published_at_formated))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "text-green-400 hover:text-green-600 underline uppercase",
                  attrs: { href: "#" }
                },
                [_vm._v("See all popular")]
              )
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TextareaInput.vue?vue&type=template&id=028bb9b0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/TextareaInput.vue?vue&type=template&id=028bb9b0& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.label
      ? _c("label", { staticClass: "mb-1 block", attrs: { for: _vm.id } }, [
          _vm._v(_vm._s(_vm.label))
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "relative" }, [
      _c(
        "textarea",
        _vm._b(
          {
            ref: "textarea",
            staticClass:
              "px-2 py-2 leading-normal block w-full border-2 text-grey-800 bg-white font-sans rounded-lg text-left appearance-none focus:border-blue-500 outline-none",
            class: { "border-red-400": _vm.errors.length },
            attrs: {
              id: _vm.id,
              rows: _vm.rows,
              type: "textarea",
              classes: _vm.classes,
              disabled: _vm.disabled
            },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                return _vm.$emit("input", $event.target.value)
              },
              keydown: function($event) {
                return _vm.$emit("keydown", $event)
              }
            }
          },
          "textarea",
          _vm.$attrs,
          false
        )
      ),
      _vm._v(" "),
      _vm.helpText
        ? _c("small", { staticClass: "d-block form-text text-muted" }, [
            _vm._v(_vm._s(_vm.helpText))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.errors.length
        ? _c("div", { staticClass: "text-red-600 mt-2 text-sm" }, [
            _vm._v(_vm._s(_vm.errors[0]))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.errors.length
        ? _c(
            "svg",
            {
              staticClass: "absolute text-red-600 fill-current",
              staticStyle: { top: "12px", right: "12px" },
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
                }
              })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.stats
        ? _c("div", { staticClass: "textarea-stats my-1" }, [
            _c("ul", { staticClass: "inline text-sm text-gray-500 mb-0" }, [
              _c("li", { staticClass: "list-inline-item" }, [
                _vm._v("Lines: " + _vm._s(_vm.linesCount || 0))
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-inline-item" }, [
                _vm._v("Words: " + _vm._s(_vm.wordsCount || 0))
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-inline-item" }, [
                _vm._v("Characters: " + _vm._s(_vm.charactersCount || 0))
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Post/Show.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Post/Show.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_c283d45a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=c283d45a&scoped=true& */ "./resources/js/Pages/Post/Show.vue?vue&type=template&id=c283d45a&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Post/Show.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_c283d45a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_c283d45a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c283d45a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Post/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Post/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Post/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Post/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Post/Show.vue?vue&type=template&id=c283d45a&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Post/Show.vue?vue&type=template&id=c283d45a&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_c283d45a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=c283d45a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Post/Show.vue?vue&type=template&id=c283d45a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_c283d45a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_c283d45a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/TextareaInput.vue":
/*!****************************************************!*\
  !*** ./resources/js/Shared/tuis/TextareaInput.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextareaInput_vue_vue_type_template_id_028bb9b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaInput.vue?vue&type=template&id=028bb9b0& */ "./resources/js/Shared/tuis/TextareaInput.vue?vue&type=template&id=028bb9b0&");
/* harmony import */ var _TextareaInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextareaInput.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/TextareaInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TextareaInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextareaInput_vue_vue_type_template_id_028bb9b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextareaInput_vue_vue_type_template_id_028bb9b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/TextareaInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/TextareaInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/tuis/TextareaInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TextareaInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TextareaInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/TextareaInput.vue?vue&type=template&id=028bb9b0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Shared/tuis/TextareaInput.vue?vue&type=template&id=028bb9b0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaInput_vue_vue_type_template_id_028bb9b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TextareaInput.vue?vue&type=template&id=028bb9b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TextareaInput.vue?vue&type=template&id=028bb9b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaInput_vue_vue_type_template_id_028bb9b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaInput_vue_vue_type_template_id_028bb9b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);