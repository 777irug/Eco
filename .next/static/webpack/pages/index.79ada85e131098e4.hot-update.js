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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-onclickoutside */ \"./node_modules/use-onclickoutside/dist/use-onclickoutside.browser.esm.js\");\n/* harmony import */ var _assets_icons_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/logo */ \"./assets/icons/logo/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar */ \"./components/header/navbar.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function(param) {\n    var isErrorPage = param.isErrorPage;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.cart;\n    }).cartItems;\n    var arrayPaths = [\n        \"/\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!arrayPaths.includes(router.pathname) || isErrorPage ? false : true), onTop = ref[0], setOnTop = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), menuOpen = ref1[0], setMenuOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), searchOpen = ref2[0], setSearchOpen = ref2[1];\n    var navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var headerClass = function() {\n        if (window.pageYOffset === 0) {\n            setOnTop(true);\n        } else {\n            setOnTop(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!arrayPaths.includes(router.pathname) || isErrorPage) {\n            return;\n        }\n        headerClass();\n        window.onscroll = function() {\n            headerClass();\n        };\n    }, []);\n    var closeMenu = function() {\n        setMenuOpen(false);\n    };\n    var closeSearch = function() {\n        setSearchOpen(false);\n    };\n    // on click outside\n    (0,use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(navRef, closeMenu);\n    (0,use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(searchRef, closeSearch);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"site-header \".concat(!onTop ? \"site-header--fixed\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"site-logo\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 40\n                                }, _this),\n                                \"ECO\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 14\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    ref: navRef,\n                    className: \"site-nav \".concat(menuOpen ? \"site-nav--open\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/products\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_7__.MyNavbar, {}, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 16\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"site-nav__btn\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Account\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 45\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"site-header__actions\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            ref: searchRef,\n                            className: \"search-form-wrapper \".concat(searchOpen ? \"search-form--active\" : \"\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"search-form\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"icon-cancel\",\n                                            onClick: function() {\n                                                return setSearchOpen(!searchOpen);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"search\",\n                                            placeholder: \"Enter the product you are looking for\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    onClick: function() {\n                                        return setSearchOpen(!searchOpen);\n                                    },\n                                    className: \"icon-search\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-cart\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"icon-cart\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, _this),\n                                    cartItems.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"btn-cart__count\",\n                                        children: cartItems.length\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"site-header__btn-avatar\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"icon-avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 57\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setMenuOpen(true);\n                            },\n                            className: \"site-header__btn-menu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"btn-hamburger\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 42\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"NKleAbVsHmpFdfg4xkVd/2szJPc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7O2tEQUMxQiw4REFBQ1UsR0FBQzt3Q0FBQ1YsU0FBUyxFQUFDLFdBQVc7Ozs7OzZDQUFLO29DQUM1QnJCLFNBQVMsQ0FBQ3FDLE1BQU0sR0FBRyxDQUFDLGtCQUNuQiw4REFBQ0MsTUFBSTt3Q0FBQ2pCLFNBQVMsRUFBQyxpQkFBaUI7a0RBQUVyQixTQUFTLENBQUNxQyxNQUFNOzs7Ozs2Q0FBUTs7Ozs7O3FDQUV0RDs7Ozs7aUNBQ0o7c0NBQ1AsOERBQUM1QyxrREFBSTs0QkFBQzhCLElBQUksRUFBQyxRQUFRO3NDQUNqQiw0RUFBQ0ssUUFBTTtnQ0FBQ1AsU0FBUyxFQUFDLHlCQUF5QjswQ0FBQyw0RUFBQ1UsR0FBQztvQ0FBQ1YsU0FBUyxFQUFDLGFBQWE7Ozs7O3lDQUFLOzs7OztxQ0FBUzs7Ozs7aUNBQy9FO3NDQUNQLDhEQUFDTyxRQUFNOzRCQUNMSSxPQUFPLEVBQUU7dUNBQU12QixXQUFXLENBQUMsSUFBSSxDQUFDOzZCQUFBOzRCQUNoQ1ksU0FBUyxFQUFDLHVCQUF1QjtzQ0FDakMsNEVBQUNVLEdBQUM7Z0NBQUNWLFNBQVMsRUFBQyxlQUFlOzBDQUFDLDRFQUFDaUIsTUFBSTs7Ozt5Q0FBUTs7Ozs7cUNBQUk7Ozs7O2lDQUN2Qzs7Ozs7O3lCQUNMOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0MsQ0FDVjtDQUNGO0dBcEZLekMsTUFBTTs7UUFDS0Ysa0RBQVM7UUFDRkwsb0RBQVc7UUFxQ2pDQywwREFBaUI7UUFDakJBLDBEQUFpQjs7O0FBeENiTSxLQUFBQSxNQUFNO0FBdUZaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4P2EyNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gJ3VzZS1vbmNsaWNrb3V0c2lkZSc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9sb2dvJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ3N0b3JlJztcclxuaW1wb3J0IHtNeU5hdmJhcn0gZnJvbSAnLi9uYXZiYXInO1xyXG50eXBlIEhlYWRlclR5cGUgPSB7XHJcbiAgaXNFcnJvclBhZ2U/OiBCb29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBpc0Vycm9yUGFnZSB9OiBIZWFkZXJUeXBlKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBjYXJ0SXRlbXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSAgPT4gc3RhdGUuY2FydCk7XHJcbiAgY29uc3QgYXJyYXlQYXRocyA9IFsnLyddOyAgXHJcblxyXG4gIGNvbnN0IFtvblRvcCwgc2V0T25Ub3BdID0gdXNlU3RhdGUoKCAhYXJyYXlQYXRocy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpIHx8IGlzRXJyb3JQYWdlICkgPyBmYWxzZSA6IHRydWUpO1xyXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2hPcGVuLCBzZXRTZWFyY2hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoZWFkZXJDbGFzcyA9ICgpID0+IHtcclxuICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCkge1xyXG4gICAgICBzZXRPblRvcCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9uVG9wKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighYXJyYXlQYXRocy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpIHx8IGlzRXJyb3JQYWdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXJDbGFzcygpO1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhlYWRlckNsYXNzKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0TWVudU9wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2VTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vIG9uIGNsaWNrIG91dHNpZGVcclxuICB1c2VPbkNsaWNrT3V0c2lkZShuYXZSZWYsIGNsb3NlTWVudSk7XHJcbiAgdXNlT25DbGlja091dHNpZGUoc2VhcmNoUmVmLCBjbG9zZVNlYXJjaCk7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgc2l0ZS1oZWFkZXIgJHshb25Ub3AgPyAnc2l0ZS1oZWFkZXItLWZpeGVkJyA6ICcnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT48aDEgY2xhc3NOYW1lPVwic2l0ZS1sb2dvXCI+PExvZ28gLz5FQ088L2gxPjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPG5hdiByZWY9e25hdlJlZn0gY2xhc3NOYW1lPXtgc2l0ZS1uYXYgJHttZW51T3BlbiA/ICdzaXRlLW5hdi0tb3BlbicgOiAnJ31gfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgPGE+PE15TmF2YmFyLz48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaXRlLW5hdl9fYnRuXCI+PHA+QWNjb3VudDwvcD48L2J1dHRvbj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRlcl9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiByZWY9e3NlYXJjaFJlZn0gY2xhc3NOYW1lPXtgc2VhcmNoLWZvcm0td3JhcHBlciAke3NlYXJjaE9wZW4gPyAnc2VhcmNoLWZvcm0tLWFjdGl2ZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtgc2VhcmNoLWZvcm1gfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNhbmNlbFwiIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaE9wZW4oIXNlYXJjaE9wZW4pfT48L2k+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIHByb2R1Y3QgeW91IGFyZSBsb29raW5nIGZvclwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT4gIFxyXG4gICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hPcGVuKCFzZWFyY2hPcGVuKX0gIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY2FydFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FydFwiPjwvaT5cclxuICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tY2FydF9fY291bnRcIj57Y2FydEl0ZW1zLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaXRlLWhlYWRlcl9fYnRuLWF2YXRhclwiPjxpIGNsYXNzTmFtZT1cImljb24tYXZhdGFyXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4odHJ1ZSl9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWhlYWRlcl9fYnRuLW1lbnVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnRuLWhhbWJ1cmdlclwiPjxzcGFuPjwvc3Bhbj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTZWxlY3RvciIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiTG9nbyIsIkxpbmsiLCJSZWFjdCIsInVzZVJvdXRlciIsIk15TmF2YmFyIiwiSGVhZGVyIiwiaXNFcnJvclBhZ2UiLCJyb3V0ZXIiLCJjYXJ0SXRlbXMiLCJzdGF0ZSIsImNhcnQiLCJhcnJheVBhdGhzIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsIm9uVG9wIiwic2V0T25Ub3AiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwic2VhcmNoT3BlbiIsInNldFNlYXJjaE9wZW4iLCJuYXZSZWYiLCJzZWFyY2hSZWYiLCJoZWFkZXJDbGFzcyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwib25zY3JvbGwiLCJjbG9zZU1lbnUiLCJjbG9zZVNlYXJjaCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJhIiwiaDEiLCJuYXYiLCJyZWYiLCJidXR0b24iLCJwIiwiZm9ybSIsImkiLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/index.tsx\n");

/***/ })

});