"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./components/header/navbar.tsx":
/*!**************************************!*\
  !*** ./components/header/navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\nvar ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref[0], setShow = ref[1];\nvar showDropdown = function(e) {\n    setShow(!show);\n};\nvar hideDropdown = function(e) {\n    setShow(false);\n};\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n        bg: \"transparent\",\n        variant: \"dark\",\n        expand: \"lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {\n                href: \"#home\",\n                className: \"App-logo\",\n                children: \"AdStichr\"\n            }, void 0, false, {\n                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {\n                \"aria-controls\": \"basic-navbar-nav\"\n            }, void 0, false, {\n                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {\n                id: \"basic-navbar-nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                    className: \"ml-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                            href: \"#home\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                            href: \"#link\",\n                            children: \"Link\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown, {\n                            title: \"Dropdown\",\n                            id: \"collasible-nav-dropdown\",\n                            show: show,\n                            onMouseEnter: showDropdown,\n                            onMouseLeave: hideDropdown,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {\n                                    href: \"#action/3.1\",\n                                    children: \"Action\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {\n                                    href: \"#action/3.2\",\n                                    children: \"Another action\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {\n                                    href: \"#action/3.3\",\n                                    children: \"Something\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Divider, {}, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {\n                                    href: \"#action/3.4\",\n                                    children: \"Separated link\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\navbar.tsx\",\n        lineNumber: 17,\n        columnNumber: 13\n    }, this);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9uYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQTBCO0FBQ2dDO0FBQ3pCO0FBRWpDLElBQXdCSSxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSnZDLElBSVcsR0FBYUEsR0FBZSxHQUE1QixFQUpYLE9BSW9CLEdBQUlBLEdBQWUsR0FBbkI7QUFDcEIsSUFBTUcsWUFBWSxHQUFHLFNBQUNDLENBQUMsRUFBRztJQUN0QkYsT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQyxDQUFDO0NBQ2xCO0FBQ0QsSUFBTUksWUFBWSxHQUFHRCxTQUFBQSxDQUFDLEVBQUk7SUFDdEJGLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNsQjtBQUVELFNBQVNJLE1BQU0sR0FBRztJQUdkLHFCQUNRLDhEQUFDUixtREFBTTtRQUFDUyxFQUFFLEVBQUMsYUFBYTtRQUFDQyxPQUFPLEVBQUMsTUFBTTtRQUFDQyxNQUFNLEVBQUMsSUFBSTs7MEJBQ25ELDhEQUFDWCx5REFBWTtnQkFBQ2EsSUFBSSxFQUFDLE9BQU87Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzBCQUFDLFVBQVE7Ozs7O29CQUFlOzBCQUN2RSw4REFBQ2QsMERBQWE7Z0JBQUNnQixlQUFhLEVBQUMsa0JBQWtCOzs7OztvQkFBRzswQkFDbEQsOERBQUNoQiw0REFBZTtnQkFBQ2tCLEVBQUUsRUFBQyxrQkFBa0I7MEJBQ2xDLDRFQUFDbkIsZ0RBQUc7b0JBQUNlLFNBQVMsRUFBQyxTQUFTOztzQ0FDeEIsOERBQUNmLHFEQUFROzRCQUFDYyxJQUFJLEVBQUMsT0FBTztzQ0FBQyxNQUFJOzs7OztnQ0FBVztzQ0FDdEMsOERBQUNkLHFEQUFROzRCQUFDYyxJQUFJLEVBQUMsT0FBTztzQ0FBQyxNQUFJOzs7OztnQ0FBVztzQ0FDdEMsOERBQUNaLHdEQUFXOzRCQUFDbUIsS0FBSyxFQUFDLFVBQVU7NEJBQzFDRixFQUFFLEVBQUMseUJBQXlCOzRCQUM1QmYsSUFBSSxFQUFFQSxJQUFJOzRCQUNWa0IsWUFBWSxFQUFFaEIsWUFBWTs0QkFDMUJpQixZQUFZLEVBQUVmLFlBQVk7OzhDQUVULDhEQUFDTiw2REFBZ0I7b0NBQUNZLElBQUksRUFBQyxhQUFhOzhDQUFDLFFBQU07Ozs7O3dDQUFtQjs4Q0FDOUQsOERBQUNaLDZEQUFnQjtvQ0FBQ1ksSUFBSSxFQUFDLGFBQWE7OENBQUMsZ0JBQWM7Ozs7O3dDQUFtQjs4Q0FDdEUsOERBQUNaLDZEQUFnQjtvQ0FBQ1ksSUFBSSxFQUFDLGFBQWE7OENBQUMsV0FBUzs7Ozs7d0NBQW1COzhDQUNqRSw4REFBQ1osZ0VBQW1COzs7O3dDQUFHOzhDQUN2Qiw4REFBQ0EsNkRBQWdCO29DQUFDWSxJQUFJLEVBQUMsYUFBYTs4Q0FBQyxnQkFBYzs7Ozs7d0NBQW1COzs7Ozs7Z0NBQzVEOzs7Ozs7d0JBQ1I7Ozs7O29CQUVROzs7Ozs7WUFDVCxDQUNoQjtDQUNKO0FBNUJRTCxLQUFBQSxNQUFNO0FBNkJmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvbmF2YmFyLnRzeD9hYjg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge05hdiwgTmF2YmFyLCBOYXZEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3Qgc2hvd0Ryb3Bkb3duID0gKGUpPT57XG4gICAgc2V0U2hvdyghc2hvdyk7XG59XG5jb25zdCBoaWRlRHJvcGRvd24gPSBlID0+IHtcbiAgICBzZXRTaG93KGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2YmFyIGJnPVwidHJhbnNwYXJlbnRcIiB2YXJpYW50PVwiZGFya1wiIGV4cGFuZD1cImxnXCI+XG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiIGNsYXNzTmFtZT1cIkFwcC1sb2dvXCI+QWRTdGljaHI8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPkhvbWU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5MaW5rPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJEcm9wZG93blwiIFxuICAgaWQ9XCJjb2xsYXNpYmxlLW5hdi1kcm9wZG93blwiIFxuICAgc2hvdz17c2hvd31cbiAgIG9uTW91c2VFbnRlcj17c2hvd0Ryb3Bkb3dufSBcbiAgIG9uTW91c2VMZWF2ZT17aGlkZURyb3Bkb3dufVxuICAgPlxuICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj5BY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiPkFub3RoZXIgYWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjNcIj5Tb21ldGhpbmc8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlNlcGFyYXRlZCBsaW5rPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPC9OYXY+XG5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdiIsIk5hdmJhciIsIk5hdkRyb3Bkb3duIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInNob3dEcm9wZG93biIsImUiLCJoaWRlRHJvcGRvd24iLCJIZWFkZXIiLCJiZyIsInZhcmlhbnQiLCJleHBhbmQiLCJCcmFuZCIsImhyZWYiLCJjbGFzc05hbWUiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsIkxpbmsiLCJ0aXRsZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIkl0ZW0iLCJEaXZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/navbar.tsx\n");

/***/ })

});