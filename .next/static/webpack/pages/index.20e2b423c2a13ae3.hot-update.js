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

/***/ "./components/header/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/header/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_SubNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/SubNav */ \"./components/header/SubNav.tsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        name: \"Menu1\",\n        path: \"/menu\",\n        children: [\n            {\n                name: \"menudropdown1\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {}, void 0, false, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 15\n                }, undefined),\n                path: \"/menu\"\n            },\n            {\n                name: \"menudropdown1\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {}, void 0, false, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 15\n                }, undefined),\n                path: \"/menu\"\n            },\n            {\n                name: \"menudropdown3\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {}, void 0, false, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 15\n                }, undefined),\n                path: \"/menu\"\n            }\n        ]\n    },\n    {\n        name: \"Menu2\",\n        path: \"/menu\",\n        children: []\n    },\n    {\n        name: \"Menu3\",\n        path: \"/menu\",\n        children: [\n            {\n                name: \"menudropdown1\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {}, void 0, false, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 15\n                }, undefined),\n                path: \"/menu\"\n            },\n            {\n                name: \"menudropdown1\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {}, void 0, false, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 15\n                }, undefined),\n                path: \"/menu\"\n            },\n            {\n                name: \"menudropdown3\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {}, void 0, false, {\n                    fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 15\n                }, undefined),\n                path: \"/menu\"\n            }\n        ]\n    },\n    {\n        name: \"Menu4\",\n        path: \"/menu\",\n        children: []\n    }\n];\nvar Navbar = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), contentMenu = ref[0], setContentMenu = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getContentMenu();\n    }, []);\n    var getContentMenu = function() {\n        setContentMenu(items);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex flex-col gap-4\",\n            style: {\n                display: \"inline-flex\"\n            },\n            children: contentMenu && contentMenu.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: contentMenu.map(function(menu, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_SubNav__WEBPACK_IMPORTED_MODULE_2__.SubNav, {\n                        props: menu\n                    }, void 0, false, {\n                        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\gurpreet sir\\\\Eco\\\\components\\\\header\\\\Navbar.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkQ7QUFDZjtBQUVGOztBQUUxQyxJQUFNSSxLQUFLLEdBQUc7SUFDWjtRQUNFQyxJQUFJLEVBQUUsT0FBTztRQUNiQyxJQUFJLEVBQUUsT0FBTztRQUNiQyxRQUFRLEVBQUU7WUFDUjtnQkFDRUYsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCRyxJQUFJLGdCQUFFLDhEQUFDUixxRUFBYzs7Ozs2QkFBSztnQkFDMUJNLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRDtnQkFDRUQsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCRyxJQUFJLGdCQUFFLDhEQUFDUixxRUFBYzs7Ozs2QkFBSztnQkFDMUJNLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRDtnQkFDRUQsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCRyxJQUFJLGdCQUFFLDhEQUFDUixxRUFBYzs7Ozs2QkFBSztnQkFDMUJNLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRjtLQUNGO0lBQ0Q7UUFDRUQsSUFBSSxFQUFFLE9BQU87UUFDYkMsSUFBSSxFQUFFLE9BQU87UUFDYkMsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNEO1FBQ0VGLElBQUksRUFBRSxPQUFPO1FBQ2JDLElBQUksRUFBRSxPQUFPO1FBQ2JDLFFBQVEsRUFBRTtZQUNSO2dCQUNFRixJQUFJLEVBQUUsZUFBZTtnQkFDckJHLElBQUksZ0JBQUUsOERBQUNSLHFFQUFjOzs7OzZCQUFFO2dCQUN2Qk0sSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFRCxJQUFJLEVBQUUsZUFBZTtnQkFDckJHLElBQUksZ0JBQUUsOERBQUNSLHFFQUFjOzs7OzZCQUFLO2dCQUMxQk0sSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFRCxJQUFJLEVBQUUsZUFBZTtnQkFDckJHLElBQUksZ0JBQUUsOERBQUNSLHFFQUFjOzs7OzZCQUFLO2dCQUMxQk0sSUFBSSxFQUFFLE9BQU87YUFDZDtTQUNGO0tBQ0Y7SUFDRDtRQUNFRCxJQUFJLEVBQUUsT0FBTztRQUNiQyxJQUFJLEVBQUUsT0FBTztRQUNiQyxRQUFRLEVBQUUsRUFBRTtLQUNiO0NBQ0Y7QUFFTSxJQUFNRSxNQUFNLEdBQUcsV0FBTTs7O0lBRTFCLElBQXNDUCxHQUFtQyxHQUFuQ0EsK0NBQVEsQ0FBd0IsRUFBRSxDQUFDLEVBOUQzRSxXQThEb0IsR0FBb0JBLEdBQW1DLEdBQXZELEVBOURwQixjQThEb0MsR0FBSUEsR0FBbUMsR0FBdkM7SUFFbENELGdEQUFTLENBQUMsV0FBTTtRQUNkVyxjQUFjLEVBQUUsQ0FBQztLQUNsQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTUEsY0FBYyxHQUFHLFdBQU07UUFDM0JELGNBQWMsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7S0FDdkI7SUFFRCxxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUMsRUFBRTtrQkFDZiw0RUFBQ0MsSUFBRTtZQUFDRCxTQUFTLEVBQUMscUJBQXFCO1lBQUNFLEtBQUssRUFBRTtnQkFBQ0MsT0FBTyxFQUFDLGFBQWE7YUFBQztzQkFDL0RQLFdBQVcsSUFBSUEsV0FBVyxDQUFDUSxNQUFNLEdBQUcsQ0FBQyxrQkFDcEM7MEJBQ0dSLFdBQVcsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDLElBQWtCLEVBQUVDLEtBQUs7eUNBQ3pDLDhEQUFDbEIsa0RBQU07d0JBQUNtQixLQUFLLEVBQUVGLElBQUk7Ozs7OzhCQUFJO2lCQUN4QixDQUFDOzZCQUNEOzs7OztpQkFFRjs7Ozs7YUFDRCxDQUNOO0NBQ0gsQ0FBQztHQXpCV1gsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL05hdmJhci50c3g/OWFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVzQ2lyY2xlSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJQ29udGVudE1lbnUgfSBmcm9tICcuLi9oZWFkZXIvSU1lbnUnO1xyXG5pbXBvcnQgeyBTdWJOYXYgfSBmcm9tICcuLi9oZWFkZXIvU3ViTmF2JztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiTWVudTFcIixcclxuICAgIHBhdGg6IFwiL21lbnVcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIm1lbnVkcm9wZG93bjFcIixcclxuICAgICAgICBpY29uOiA8UGx1c0NpcmNsZUljb24gICAvPixcclxuICAgICAgICBwYXRoOiBcIi9tZW51XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwibWVudWRyb3Bkb3duMVwiLFxyXG4gICAgICAgIGljb246IDxQbHVzQ2lyY2xlSWNvbiAgIC8+LFxyXG4gICAgICAgIHBhdGg6IFwiL21lbnVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJtZW51ZHJvcGRvd24zXCIsXHJcbiAgICAgICAgaWNvbjogPFBsdXNDaXJjbGVJY29uICAgLz4sXHJcbiAgICAgICAgcGF0aDogXCIvbWVudVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTWVudTJcIixcclxuICAgIHBhdGg6IFwiL21lbnVcIixcclxuICAgIGNoaWxkcmVuOiBbXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNZW51M1wiLFxyXG4gICAgcGF0aDogXCIvbWVudVwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwibWVudWRyb3Bkb3duMVwiLFxyXG4gICAgICAgIGljb246IDxQbHVzQ2lyY2xlSWNvbi8+LFxyXG4gICAgICAgIHBhdGg6IFwiL21lbnVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJtZW51ZHJvcGRvd24xXCIsXHJcbiAgICAgICAgaWNvbjogPFBsdXNDaXJjbGVJY29uICAgLz4sXHJcbiAgICAgICAgcGF0aDogXCIvbWVudVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIm1lbnVkcm9wZG93bjNcIixcclxuICAgICAgICBpY29uOiA8UGx1c0NpcmNsZUljb24gICAvPixcclxuICAgICAgICBwYXRoOiBcIi9tZW51XCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNZW51NFwiLFxyXG4gICAgcGF0aDogXCIvbWVudVwiLFxyXG4gICAgY2hpbGRyZW46IFtdXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbY29udGVudE1lbnUsIHNldENvbnRlbnRNZW51XSA9IHVzZVN0YXRlPElDb250ZW50TWVudVtdIHwgbnVsbD4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q29udGVudE1lbnUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldENvbnRlbnRNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0Q29udGVudE1lbnUoaXRlbXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC00JyBzdHlsZT17e2Rpc3BsYXk6XCJpbmxpbmUtZmxleFwifX0+XHJcbiAgICAgICAge2NvbnRlbnRNZW51ICYmIGNvbnRlbnRNZW51Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb250ZW50TWVudS5tYXAoKG1lbnU6IElDb250ZW50TWVudSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8U3ViTmF2IHByb3BzPXttZW51fSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJQbHVzQ2lyY2xlSWNvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3ViTmF2IiwiaXRlbXMiLCJuYW1lIiwicGF0aCIsImNoaWxkcmVuIiwiaWNvbiIsIk5hdmJhciIsImNvbnRlbnRNZW51Iiwic2V0Q29udGVudE1lbnUiLCJnZXRDb250ZW50TWVudSIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwic3R5bGUiLCJkaXNwbGF5IiwibGVuZ3RoIiwibWFwIiwibWVudSIsImluZGV4IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/Navbar.tsx\n");

/***/ })

});