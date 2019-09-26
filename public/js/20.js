(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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
    Avatar: _Shared_tuis_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["post"]
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
          _c("div", { staticClass: "w-2/3" }, [
            _c("div", { staticClass: "w-full h-68 lg:my-2 p-4" }, [
              _c("img", {
                staticClass: "object-fill w-full h-full",
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
                _c("div", { staticClass: "pt-8" }, [
                  _c("span", [_vm._v("Category:")]),
                  _vm._v(" \n\t\t\t\t\t\t"),
                  _c("span", { staticClass: "text-sm text-green-400" }, [
                    _vm._v(_vm._s(_vm.post.category.category_name))
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("p", { staticClass: "text-2xl tracking-wider pt-8" }, [
                    _c("u", [_vm._v("Comments")])
                  ])
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-1/3" }, [
            _c("div", { staticClass: "mt-6 bg-gray-200" }, [
              _c(
                "h3",
                { staticClass: "bg-teal-300 py-2 pl-4 text-xl shadow" },
                [_vm._v("Popular Posts")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "h-96 p-4" }, [_vm._v("vgfgrgrg")])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Post/Show.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Post/Show.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_c283d45a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=c283d45a&scoped=true& */ "./resources/js/Pages/Post/Show.vue?vue&type=template&id=c283d45a&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Post/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! exports provided: default */
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



/***/ })

}]);