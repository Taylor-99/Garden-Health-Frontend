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

/***/ "./src/pages/social/createpost/index.jsx":
/*!***********************************************!*\
  !*** ./src/pages/social/createpost/index.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CreatePost = ()=>{\n    _s();\n    const [postFormData, setPostFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleCreatePost = async ()=>{\n        try {\n            const formData = new FormData();\n            formData.append(\"image\", file);\n            formData.append(\"post\", postFormData);\n            console.log(\"Sending data\");\n            const response = await fetch(\"http://localhost:4000/social/create\", {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                },\n                body: formData\n            });\n            await response.json();\n            if (response.ok) {\n                console.log(\"post created\");\n                // Redirect or perform an action on successful login\n                router.replace(\"/social\");\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setPostFormData({\n            ...postFormData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleFileChange = (event)=>{\n        setFile(event.target.files[0]); // Get the first file from the file input\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mt-4 text-center\",\n                        children: \"Create Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        encType: \"multipart/formdata\",\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handleCreatePost();\n                        },\n                        className: \"mt-4 space-y-4 mx-auto max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"post\",\n                                onChange: handleChange,\n                                placeholder: \"What's on your Mind? Share your ideas, events or achievements\",\n                                value: postFormData,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"plantImage\",\n                                className: \"block\",\n                                children: \"Upload an image (optional): \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                name: \"image\",\n                                onChange: handleChange,\n                                placeholder: \"Upload an image\",\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\",\n                                className: \"bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreatePost, \"8GUdI54YxsquMiS7nnKrqI+XDco=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CreatePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CreatePost));\nvar _c, _c1;\n$RefreshReg$(_c, \"CreatePost\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T3pDO0dBN0dNdEM7O1FBTWdCSixvREFBVUE7UUFFYkUsa0RBQVNBOzs7S0FSdEJFO0FBK0dOLCtEQUFlLE1BQUFELG9FQUFRQSxDQUFDQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zb2NpYWwvY3JlYXRlcG9zdC9pbmRleC5qc3g/NmExZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXIuanN4J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoLmpzeCc7XG5cbmNvbnN0IENyZWF0ZVBvc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcG9zdEZvcm1EYXRhLCBzZXRQb3N0Rm9ybURhdGFdID0gdXNlU3RhdGUoXCJcIik7IFxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVQb3N0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0JywgcG9zdEZvcm1EYXRhKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgZGF0YVwiKVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NvY2lhbC9jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBjcmVhdGVkXCIpXG5cbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCBvciBwZXJmb3JtIGFuIGFjdGlvbiBvbiBzdWNjZXNzZnVsIGxvZ2luXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9zb2NpYWwnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNldEVycm9yKCdOZXR3b3JrIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQb3N0Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4ucG9zdEZvcm1EYXRhLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7IC8vIEdldCB0aGUgZmlyc3QgZmlsZSBmcm9tIHRoZSBmaWxlIGlucHV0XG4gICAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwIG14LWF1dG9cIj5cbiAgICAgICAgPE5hdkJhciBwYWdlTmFtZT0nU29jaWFsJyAvPlxuXG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMCBob3Zlcjp0ZXh0LWVtZXJhbGQtOTAwIGZvbnQtc2VtaWJvbGQgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC04XCI+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbXQtNCB0ZXh0LWNlbnRlclwiPkNyZWF0ZSBQb3N0PC9oMj5cblxuICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+fVxuXG4gICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgICAgICBlbmNUeXBlID0gJ211bHRpcGFydC9mb3JtZGF0YSdcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgICAgICAgICAgIGhhbmRsZUNyZWF0ZVBvc3QoKVxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTQgbXgtYXV0byBtYXgtdy1tZFwiPlxuXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwb3N0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIG9uIHlvdXIgTWluZD8gU2hhcmUgeW91ciBpZGVhcywgZXZlbnRzIG9yIGFjaGlldmVtZW50c1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bvc3RGb3JtRGF0YX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkIHB4LTMgcHktMiBtdC0xIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBsYW50SW1hZ2VcIiBjbGFzc05hbWU9XCJibG9ja1wiID5VcGxvYWQgYW4gaW1hZ2UgKG9wdGlvbmFsKTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVcGxvYWQgYW4gaW1hZ2UnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkIHB4LTMgcHktMiBtdC0xIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPVwiYmctbGltZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBob3ZlcjpiZy1saW1lLTYwMCBjdXJzb3ItcG9pbnRlciBteC1hdXRvIGJsb2NrXCIgLz5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChDcmVhdGVQb3N0KTsiXSwibmFtZXMiOlsiTmF2QmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJMaW5rIiwidXNlUm91dGVyIiwid2l0aEF1dGgiLCJDcmVhdGVQb3N0IiwicG9zdEZvcm1EYXRhIiwic2V0UG9zdEZvcm1EYXRhIiwiZmlsZSIsInNldEZpbGUiLCJlcnJvciIsInNldEVycm9yIiwiY29va2llcyIsInJvdXRlciIsImhhbmRsZUNyZWF0ZVBvc3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJib2R5IiwianNvbiIsIm9rIiwicmVwbGFjZSIsImRhdGEiLCJtZXNzYWdlIiwiZXJyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsImZpbGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZU5hbWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwic2VjdGlvbiIsImgyIiwicCIsImZvcm0iLCJlbmNUeXBlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImh0bWxGb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/social/createpost/index.jsx\n"));

/***/ })

});