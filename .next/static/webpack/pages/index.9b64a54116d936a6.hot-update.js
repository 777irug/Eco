"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header/index.tsx":
/*!*************************************!*\
  !*** ./components/header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-onclickoutside */ \"./node_modules/use-onclickoutside/dist/use-onclickoutside.browser.esm.js\");\n/* harmony import */ var _assets_icons_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/logo */ \"./assets/icons/logo/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar */ \"./components/header/navbar.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function(param) {\n    var isErrorPage = param.isErrorPage;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.cart;\n    }).cartItems;\n    var arrayPaths = [\n        \"/\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!arrayPaths.includes(router.pathname) || isErrorPage ? false : true), onTop = ref[0], setOnTop = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), menuOpen = ref1[0], setMenuOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), searchOpen = ref2[0], setSearchOpen = ref2[1];\n    var navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var headerClass = function() {\n        if (window.pageYOffset === 0) {\n            setOnTop(true);\n        } else {\n            setOnTop(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!arrayPaths.includes(router.pathname) || isErrorPage) {\n            return;\n        }\n        headerClass();\n        window.onscroll = function() {\n            headerClass();\n        };\n    }, []);\n    var closeMenu = function() {\n        setMenuOpen(false);\n    };\n    var closeSearch = function() {\n        setSearchOpen(false);\n    };\n    // on click outside\n    (0,use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(navRef, closeMenu);\n    (0,use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(searchRef, closeSearch);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"site-header \".concat(!onTop ? \"site-header--fixed\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"site-logo\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 40\n                                }, _this),\n                                \"ECO\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 14\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    ref: navRef,\n                    className: \"site-nav \".concat(menuOpen ? \"site-nav--open\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/products\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"myNavbar\", {}, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 16\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"#About\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"#Contact\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"site-nav__btn\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Account\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 45\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-header__actions\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            ref: searchRef,\n                            className: \"search-form-wrapper \".concat(searchOpen ? \"search-form--active\" : \"\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"search-form\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"icon-cancel\",\n                                            onClick: function() {\n                                                return setSearchOpen(!searchOpen);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"search\",\n                                            placeholder: \"Enter the product you are looking for\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    onClick: function() {\n                                        return setSearchOpen(!searchOpen);\n                                    },\n                                    className: \"icon-search\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-cart\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"icon-cart\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, _this),\n                                    cartItems.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"btn-cart__count\",\n                                        children: cartItems.length\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"site-header__btn-avatar\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"icon-avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 57\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setMenuOpen(true);\n                            },\n                            className: \"site-header__btn-menu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"btn-hamburger\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 42\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"NKleAbVsHmpFdfg4xkVd/2szJPc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVCw4REFBQzVCLGtEQUFJOzRCQUFDOEIsSUFBSSxFQUFDLE9BQU87c0NBQ2hCLDRFQUFDSyxRQUFNO2dDQUFDUCxTQUFTLEVBQUMsVUFBVTs7a0RBQzFCLDhEQUFDVSxHQUFDO3dDQUFDVixTQUFTLEVBQUMsV0FBVzs7Ozs7NkNBQUs7b0NBQzVCckIsU0FBUyxDQUFDcUMsTUFBTSxHQUFHLENBQUMsa0JBQ25CLDhEQUFDQyxNQUFJO3dDQUFDakIsU0FBUyxFQUFDLGlCQUFpQjtrREFBRXJCLFNBQVMsQ0FBQ3FDLE1BQU07Ozs7OzZDQUFROzs7Ozs7cUNBRXREOzs7OztpQ0FDSjtzQ0FDUCw4REFBQzVDLGtEQUFJOzRCQUFDOEIsSUFBSSxFQUFDLFFBQVE7c0NBQ2pCLDRFQUFDSyxRQUFNO2dDQUFDUCxTQUFTLEVBQUMseUJBQXlCOzBDQUFDLDRFQUFDVSxHQUFDO29DQUFDVixTQUFTLEVBQUMsYUFBYTs7Ozs7eUNBQUs7Ozs7O3FDQUFTOzs7OztpQ0FDL0U7c0NBQ1AsOERBQUNPLFFBQU07NEJBQ0xJLE9BQU8sRUFBRTt1Q0FBTXZCLFdBQVcsQ0FBQyxJQUFJLENBQUM7NkJBQUE7NEJBQ2hDWSxTQUFTLEVBQUMsdUJBQXVCO3NDQUNqQyw0RUFBQ1UsR0FBQztnQ0FBQ1YsU0FBUyxFQUFDLGVBQWU7MENBQUMsNEVBQUNpQixNQUFJOzs7O3lDQUFROzs7OztxQ0FBSTs7Ozs7aUNBQ3ZDOzs7Ozs7eUJBQ0w7Ozs7OztpQkFDRjs7Ozs7YUFDQyxDQUNWO0NBQ0Y7R0FyRkt6QyxNQUFNOztRQUNLRixrREFBUztRQUNGTCxvREFBVztRQXFDakNDLDBEQUFpQjtRQUNqQkEsMERBQWlCOzs7QUF4Q2JNLEtBQUFBLE1BQU07QUF3RlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3g/YTI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlT25DbGlja091dHNpZGUgZnJvbSAndXNlLW9uY2xpY2tvdXRzaWRlJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2xvZ28nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnc3RvcmUnO1xyXG5pbXBvcnQge215TmF2YmFyfSBmcm9tICcuL25hdmJhcic7XHJcbnR5cGUgSGVhZGVyVHlwZSA9IHtcclxuICBpc0Vycm9yUGFnZT86IEJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGlzRXJyb3JQYWdlIH06IEhlYWRlclR5cGUpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGNhcnRJdGVtcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpICA9PiBzdGF0ZS5jYXJ0KTtcclxuICBjb25zdCBhcnJheVBhdGhzID0gWycvJ107ICBcclxuXHJcbiAgY29uc3QgW29uVG9wLCBzZXRPblRvcF0gPSB1c2VTdGF0ZSgoICFhcnJheVBhdGhzLmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSkgfHwgaXNFcnJvclBhZ2UgKSA/IGZhbHNlIDogdHJ1ZSk7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaE9wZW4sIHNldFNlYXJjaE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBzZWFyY2hSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhlYWRlckNsYXNzID0gKCkgPT4ge1xyXG4gICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKSB7XHJcbiAgICAgIHNldE9uVG9wKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0T25Ub3AoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFhcnJheVBhdGhzLmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSkgfHwgaXNFcnJvclBhZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlckNsYXNzKCk7XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaGVhZGVyQ2xhc3MoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRNZW51T3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIHNldFNlYXJjaE9wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gb24gY2xpY2sgb3V0c2lkZVxyXG4gIHVzZU9uQ2xpY2tPdXRzaWRlKG5hdlJlZiwgY2xvc2VNZW51KTtcclxuICB1c2VPbkNsaWNrT3V0c2lkZShzZWFyY2hSZWYsIGNsb3NlU2VhcmNoKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2BzaXRlLWhlYWRlciAkeyFvblRvcCA/ICdzaXRlLWhlYWRlci0tZml4ZWQnIDogJyd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPjxoMSBjbGFzc05hbWU9XCJzaXRlLWxvZ29cIj48TG9nbyAvPkVDTzwvaDE+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8bmF2IHJlZj17bmF2UmVmfSBjbGFzc05hbWU9e2BzaXRlLW5hdiAke21lbnVPcGVuID8gJ3NpdGUtbmF2LS1vcGVuJyA6ICcnfWB9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICA8YT48bXlOYXZiYXIvPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxhPiNBYm91dDwvYT5cclxuICAgICAgICAgIDxhPiNDb250YWN0PC9hPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaXRlLW5hdl9fYnRuXCI+PHA+QWNjb3VudDwvcD48L2J1dHRvbj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRlcl9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiByZWY9e3NlYXJjaFJlZn0gY2xhc3NOYW1lPXtgc2VhcmNoLWZvcm0td3JhcHBlciAke3NlYXJjaE9wZW4gPyAnc2VhcmNoLWZvcm0tLWFjdGl2ZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtgc2VhcmNoLWZvcm1gfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNhbmNlbFwiIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaE9wZW4oIXNlYXJjaE9wZW4pfT48L2k+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIHByb2R1Y3QgeW91IGFyZSBsb29raW5nIGZvclwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT4gIFxyXG4gICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hPcGVuKCFzZWFyY2hPcGVuKX0gIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY2FydFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FydFwiPjwvaT5cclxuICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tY2FydF9fY291bnRcIj57Y2FydEl0ZW1zLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaXRlLWhlYWRlcl9fYnRuLWF2YXRhclwiPjxpIGNsYXNzTmFtZT1cImljb24tYXZhdGFyXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4odHJ1ZSl9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWhlYWRlcl9fYnRuLW1lbnVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnRuLWhhbWJ1cmdlclwiPjxzcGFuPjwvc3Bhbj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTZWxlY3RvciIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiTG9nbyIsIkxpbmsiLCJSZWFjdCIsInVzZVJvdXRlciIsIm15TmF2YmFyIiwiSGVhZGVyIiwiaXNFcnJvclBhZ2UiLCJyb3V0ZXIiLCJjYXJ0SXRlbXMiLCJzdGF0ZSIsImNhcnQiLCJhcnJheVBhdGhzIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsIm9uVG9wIiwic2V0T25Ub3AiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwic2VhcmNoT3BlbiIsInNldFNlYXJjaE9wZW4iLCJuYXZSZWYiLCJzZWFyY2hSZWYiLCJoZWFkZXJDbGFzcyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwib25zY3JvbGwiLCJjbG9zZU1lbnUiLCJjbG9zZVNlYXJjaCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJhIiwiaDEiLCJuYXYiLCJyZWYiLCJidXR0b24iLCJwIiwiZm9ybSIsImkiLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/index.tsx\n");

/***/ })

});