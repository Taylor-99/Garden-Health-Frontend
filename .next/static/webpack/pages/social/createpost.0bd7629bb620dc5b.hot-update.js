"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/social/createpost",{

/***/ "./src/pages/components/NavBar.jsx":
/*!*****************************************!*\
  !*** ./src/pages/components/NavBar.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withAuth */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavBar = (props)=>{\n    _s();\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"token\",\n        \"user\"\n    ]);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const userName = cookies.user;\n        if (userName) {\n            setUsername(userName);\n        }\n    }, []);\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLogout = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/auth/logout\", {\n                method: \"get\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            if (response.ok) {\n                removeCookie(\"token\");\n                removeCookie(\"user\");\n                navigate.replace(\"/auth\");\n            }\n        } catch (err) {\n            crossOriginIsolated.log(err);\n            console.log(\"Network error\");\n        }\n    };\n    const closeDropdown = ()=>{\n        setIsDropdownOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex justify-between items-center px-4 bg-green-900 py-2 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white font-semibold text-xl\",\n                    children: props.pageName\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex items-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white text-base mr-4\",\n                            children: [\n                                \"Welcome \",\n                                username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleDropdown,\n                                    className: \"text-white font-semibold px-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"ml-1 text-2xl\",\n                                            children: \"☰\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, undefined),\n                                isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/dashboard\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/plantjournal/garden\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Plant Journal\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/wellnessjournal/mood\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Wellness Journal\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/social\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Social\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/profile\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"View Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    handleLogout();\n                                                    closeDropdown();\n                                                },\n                                                className: \"w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                value: \"Logout\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 117,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"1QqDzOHrd7nN4oBSBfLOGSC4IXY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(NavBar));\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OYXZCYXIuanN4PzA0OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuL3dpdGhBdXRoJ1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJywgJ3VzZXInXSk7XG5cbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBjb25zdCB1c2VyTmFtZSA9IGNvb2tpZXMudXNlcjsgaWYgKHVzZXJOYW1lKSB7IHNldFVzZXJuYW1lKHVzZXJOYW1lKTsgfSB9LCBbXSk7XG5cbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oIWlzRHJvcGRvd25PcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2F1dGgvbG9nb3V0Jywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDb29raWUoXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgICByZW1vdmVDb29raWUoXCJ1c2VyXCIpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlLnJlcGxhY2UoJy9hdXRoJylcblxuICAgICAgICAgICAgfSBcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luSXNvbGF0ZWQubG9nKGVycilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXR3b3JrIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC00IGJnLWdyZWVuLTkwMCBweS0yIHctZnVsbFwiPlxuXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCIgPntwcm9wcy5wYWdlTmFtZX08L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIgXCIgPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtYmFzZSBtci00XCI+V2VsY29tZSB7dXNlcm5hbWV9PC9oMT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LTJ4bFwiPiYjOTc3Njs8L3NwYW4+IHsvKiBIYW1idXJnZXIgaWNvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIG10LTIgdy00OCBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1tZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3BsYW50am91cm5hbC9nYXJkZW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50IEpvdXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3dlbGxuZXNzam91cm5hbC9tb29kXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktMjAwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxsbmVzcyBKb3VybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zb2NpYWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvY2lhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTIwMFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTG9nb3V0KCk7IGNsb3NlRHJvcGRvd24oKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiTG9nb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChOYXZCYXIpOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJwcm9wcyIsIm5hdmlnYXRlIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsImNvb2tpZXMiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlck5hbWUiLCJ1c2VyIiwidG9nZ2xlRHJvcGRvd24iLCJoYW5kbGVMb2dvdXQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwib2siLCJyZW1vdmVDb29raWUiLCJyZXBsYWNlIiwiZXJyIiwiY3Jvc3NPcmlnaW5Jc29sYXRlZCIsImxvZyIsImNvbnNvbGUiLCJjbG9zZURyb3Bkb3duIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYWdlTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwidWwiLCJsaSIsImhyZWYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/NavBar.jsx\n"));

/***/ })

});