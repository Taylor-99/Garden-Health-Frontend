"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/components/NavBar.jsx":
/*!*****************************************!*\
  !*** ./src/pages/components/NavBar.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withAuth */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavBar = (props)=>{\n    _s();\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"token\",\n        \"user\"\n    ]);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const userName = cookies.user;\n        if (userName) {\n            setUsername(userName);\n        }\n    }, []);\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLogout = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/auth/logout\", {\n                method: \"get\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            if (response.ok) {\n                removeCookie(\"token\");\n                navigate.replace(\"/auth\");\n            } else {\n                console.log(data.message);\n            }\n        } catch (err) {\n            console.log(\"Network error\");\n        }\n    };\n    const closeDropdown = ()=>{\n        setIsDropdownOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex justify-between items-center px-4 bg-green-900 py-2 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white font-semibold text-xl\",\n                    children: props.pageName\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex items-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white text-base mr-4\",\n                            children: [\n                                \"Welcome \",\n                                username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleDropdown,\n                                    className: \"text-white font-semibold px-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"ml-1 text-2xl\",\n                                            children: \"☰\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, undefined),\n                                isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/dashboard\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/plantjournal/garden\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Plant Journal\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/wellnessjournal/mood\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Wellness Journal\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/social\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Social\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/profile\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"View Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    handleLogout();\n                                                    closeDropdown();\n                                                },\n                                                className: \"w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                value: \"Logout\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/components/NavBar.jsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"1QqDzOHrd7nN4oBSBfLOGSC4IXY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(NavBar));\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OYXZCYXIuanN4PzA0OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuL3dpdGhBdXRoJ1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJywgJ3VzZXInXSk7XG5cbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBjb25zdCB1c2VyTmFtZSA9IGNvb2tpZXMudXNlcjsgaWYgKHVzZXJOYW1lKSB7IHNldFVzZXJuYW1lKHVzZXJOYW1lKTsgfSB9LCBbXSk7XG5cbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oIWlzRHJvcGRvd25PcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2F1dGgvbG9nb3V0Jywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDb29raWUoXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5yZXBsYWNlKCcvYXV0aCcpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmV0d29yayBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtNCBiZy1ncmVlbi05MDAgcHktMiB3LWZ1bGxcIj5cblxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC14bFwiID57cHJvcHMucGFnZU5hbWV9PC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIFwiID5cblxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWJhc2UgbXItNFwiPldlbGNvbWUge3VzZXJuYW1lfTwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC0yeGxcIj4mIzk3NzY7PC9zcGFuPiB7LyogSGFtYnVyZ2VyIGljb24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2lzRHJvcGRvd25PcGVuICYmIChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbWRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wbGFudGpvdXJuYWwvZ2FyZGVuXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktMjAwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFudCBKb3VybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi93ZWxsbmVzc2pvdXJuYWwvbW9vZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTIwMFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsbG5lc3MgSm91cm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc29jaWFsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktMjAwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb2NpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUxvZ291dCgpOyBjbG9zZURyb3Bkb3duKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IHB4LTQgcHktMiB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIkxvZ291dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoTmF2QmFyKTsiXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsIndpdGhBdXRoIiwiTmF2QmFyIiwicHJvcHMiLCJuYXZpZ2F0ZSIsImlzRHJvcGRvd25PcGVuIiwic2V0SXNEcm9wZG93bk9wZW4iLCJjb29raWVzIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJOYW1lIiwidXNlciIsInRvZ2dsZURyb3Bkb3duIiwiaGFuZGxlTG9nb3V0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsIm9rIiwicmVtb3ZlQ29va2llIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsImVyciIsImNsb3NlRHJvcGRvd24iLCJkaXYiLCJuYXYiLCJjbGFzc05hbWUiLCJoMSIsInBhZ2VOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJ1bCIsImxpIiwiaHJlZiIsImlucHV0IiwidHlwZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/NavBar.jsx\n"));

/***/ })

});