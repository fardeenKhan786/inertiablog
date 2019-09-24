(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Post/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Post/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/Badge */ "./resources/js/Shared/tuis/Badge.vue");
/* harmony import */ var _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/BasicTable */ "./resources/js/Shared/tuis/BasicTable.vue");
/* harmony import */ var _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton */ "./resources/js/Shared/tuis/LoadingButton.vue");
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
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_1__["default"],
    BasicTable: _Shared_tuis_BasicTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_2__["default"],
    LoadingButton: _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    Badge: _Shared_tuis_Badge__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["posts"],
  data: function data() {
    return {
      openModal: false,
      deletePostId: null,
      tableHeadings: [{
        title: "Title",
        align: "left",
        type: "text"
      }, {
        title: "Created By",
        align: "left",
        type: "text"
      }, {
        title: "Category",
        align: "left",
        type: "text"
      }, {
        title: "Publish At",
        align: "left",
        type: "text"
      }, {
        title: "Status",
        align: "left",
        type: "text"
      }, {
        title: "Action",
        align: "center",
        type: "text"
      }]
    };
  },
  methods: {
    showModal: function showModal(id) {
      this.openModal = !this.openModal;
      this.deletePostId = null;
      this.deletePostId = id;
    },
    redirect: function redirect(url) {
      location.replace(url);
    },
    deletePost: function deletePost(post) {
      var _this = this;

      // var result = confirm("Are you sure?");
      // if (result == true) {
      // 	this.$inertia
      // 		.delete(`/posts/${post}/delete`)
      // 		.then(res => {})
      // 		.catch();
      // } else {
      // 	return;
      // }
      this.$refs.deleteButton.startLoading();
      this.$inertia["delete"]("/posts/".concat(this.deletePostId, "/delete")).then(function (res) {
        _this.$refs.deleteButton.stoptLoading();
      })["catch"](function () {
        _this.$refs.deleteButton.stopLoading();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Post/Index.vue?vue&type=template&id=7cf5ab6c&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Post/Index.vue?vue&type=template&id=7cf5ab6c& ***!
  \********************************************************************************************************************************************************************************************************/
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
    "layout",
    [
      _c(
        "div",
        { staticClass: "flex items-center mb-6" },
        [
          _c("heading", { staticClass: "mr-3", attrs: { size: "heading" } }, [
            _vm._v("All Posts")
          ]),
          _vm._v(" "),
          _c(
            "loading-button",
            {
              attrs: { size: "small" },
              on: {
                click: function($event) {
                  return _vm.redirect("posts/create")
                }
              }
            },
            [_vm._v("+ Create Post")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "card",
        { attrs: { "is-padding": false } },
        [
          _vm.posts.length > 0
            ? [
                _c(
                  "basic-table",
                  { attrs: { headings: _vm.tableHeadings } },
                  _vm._l(_vm.posts, function(post, postIndex) {
                    return _c(
                      "tr",
                      {
                        key: postIndex,
                        staticClass:
                          "hover:bg-grey-lightest focus-within:bg-grey-lightest"
                      },
                      [
                        _c("td", { staticClass: "border-t" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
                            },
                            [_vm._v(_vm._s(post.title))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "border-t" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
                            },
                            [_vm._v(_vm._s(post.user.name))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "border-t" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
                            },
                            [_vm._v(_vm._s(post.category.category_name))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "border-t" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
                            },
                            [_vm._v(_vm._s(post.publish_at_formated))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "border-t" },
                          [
                            _c("badge", { attrs: { variant: "warning" } }, [
                              _vm._v(_vm._s(post.status == 0 ? "Pending" : ""))
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "border-t text-center" },
                          [
                            _c(
                              "inertia-link",
                              {
                                staticClass: "text-blue-600 mr-3",
                                attrs: { href: "posts/" + post.id + "/edit" }
                              },
                              [_vm._v("Edit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "inertia-link",
                              {
                                staticClass: "text-red-600",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showModal(post.id)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  }),
                  0
                )
              ]
            : [
                _c(
                  "div",
                  { staticClass: "py-16 px-4 text-center" },
                  [
                    _c("heading", { staticClass: "mb-4" }, [
                      _vm._v("No post available here")
                    ]),
                    _vm._v(" "),
                    _c(
                      "loading-button",
                      {
                        on: {
                          click: function($event) {
                            return _vm.redirect("posts/create")
                          }
                        }
                      },
                      [_vm._v("+ Create Post")]
                    )
                  ],
                  1
                )
              ]
        ],
        2
      ),
      _vm._v(" "),
      _c("div", {}, [
        _vm.openModal
          ? _c(
              "div",
              {
                staticClass:
                  "absolute w-ful h-full top-0 bottom-0 left-0 right-0",
                on: {
                  click: function($event) {
                    _vm.openModal = false
                  }
                }
              },
              [
                _c(
                  "card",
                  {
                    staticClass: "shadow-lg max-w-lg mx-auto opacity-100 mt-20",
                    attrs: { "with-footer": "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "footer",
                          fn: function() {
                            return [
                              _c(
                                "loading-button",
                                {
                                  attrs: {
                                    variant: "secondary",
                                    "variant-type": "outline",
                                    type: "button"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.openModal = false
                                    }
                                  }
                                },
                                [_vm._v("Cancel")]
                              ),
                              _vm._v(" "),
                              _c(
                                "loading-button",
                                {
                                  ref: "deleteButton",
                                  on: { click: _vm.deletePost }
                                },
                                [_vm._v("Yes, Delete")]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      false,
                      1863711668
                    )
                  },
                  [
                    _c(
                      "heading",
                      { staticClass: "mb-4", attrs: { size: "heading" } },
                      [_vm._v("Confirm Delete ?")]
                    ),
                    _vm._v(" "),
                    _c("heading", [
                      _vm._v("Once deleted can't be retrive back")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Post/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Post/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_7cf5ab6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7cf5ab6c& */ "./resources/js/Pages/Post/Index.vue?vue&type=template&id=7cf5ab6c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Post/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7cf5ab6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_7cf5ab6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Post/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Post/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Post/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Post/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Post/Index.vue?vue&type=template&id=7cf5ab6c&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Post/Index.vue?vue&type=template&id=7cf5ab6c& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7cf5ab6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=7cf5ab6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Post/Index.vue?vue&type=template&id=7cf5ab6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7cf5ab6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7cf5ab6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);