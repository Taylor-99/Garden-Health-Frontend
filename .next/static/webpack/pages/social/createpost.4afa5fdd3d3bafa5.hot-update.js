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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CreatePost = ()=>{\n    _s();\n    const [postFormData, setPostFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        post: \"\"\n    });\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"token\"\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleCreatePost = async ()=>{\n        try {\n            const formData = new FormData();\n            formData.append(\"image\", file);\n            formData.append(\"post\", postFormData.post);\n            const response = await fetch(\"http://localhost:4000/social/create\", {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                },\n                body: formData\n            });\n            await response.json();\n            if (response.ok) {\n                console.log(\"post created\");\n                // Redirect or perform an action on successful login\n                router.replace(\"/social\");\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setPostFormData({\n            ...plantFormData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleFileChange = (event)=>{\n        setFile(event.target.files[0]); // Get the first file from the file input\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mt-4 text-center\",\n                        children: \"Create Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        encType: \"multipart/formdata\",\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handleCreatePost();\n                        },\n                        className: \"mt-4 space-y-4 mx-auto max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"post\",\n                                onChange: handleChange,\n                                placeholder: \"What's on your Mind? Share your ideas, events or achievements\",\n                                value: postFormData,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"image\",\n                                className: \"block\",\n                                children: \"Upload an image (optional): \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                name: \"image\",\n                                onChange: handleFileChange,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\",\n                                className: \"bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createpost/index.jsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreatePost, \"VSZ/HoFST61araTXlvhcpHp6eWc=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CreatePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CreatePost));\nvar _c, _c1;\n$RefreshReg$(_c, \"CreatePost\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUE7UUFFYkMsa0RBQVNBOzs7S0FUdEJFO0FBOEdOLCtEQUFlLE1BQUFELG9FQUFRQSxDQUFDQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zb2NpYWwvY3JlYXRlcG9zdC9pbmRleC5qc3g/NmExZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXIuanN4J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoLmpzeCc7XG5cbmNvbnN0IENyZWF0ZVBvc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcG9zdEZvcm1EYXRhLCBzZXRQb3N0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBwb3N0OiBcIlwiIH0pOyBcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncG9zdCcsIHBvc3RGb3JtRGF0YS5wb3N0KVxuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc29jaWFsL2NyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IGNyZWF0ZWRcIilcblxuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IG9yIHBlcmZvcm0gYW4gYWN0aW9uIG9uIHN1Y2Nlc3NmdWwgbG9naW5cbiAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL3NvY2lhbCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFBvc3RGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5wbGFudEZvcm1EYXRhLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7IC8vIEdldCB0aGUgZmlyc3QgZmlsZSBmcm9tIHRoZSBmaWxlIGlucHV0XG4gICAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwIG14LWF1dG9cIj5cbiAgICAgICAgPE5hdkJhciBwYWdlTmFtZT0nU29jaWFsJyAvPlxuXG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMCBob3Zlcjp0ZXh0LWVtZXJhbGQtOTAwIGZvbnQtc2VtaWJvbGQgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC04XCI+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbXQtNCB0ZXh0LWNlbnRlclwiPkNyZWF0ZSBQb3N0PC9oMj5cblxuICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+fVxuXG4gICAgICAgICAgICA8Zm9ybSBcbiAgICAgICAgICAgICAgICBlbmNUeXBlID0gJ211bHRpcGFydC9mb3JtZGF0YSdcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgICAgICAgICAgIGhhbmRsZUNyZWF0ZVBvc3QoKVxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTQgbXgtYXV0byBtYXgtdy1tZFwiPlxuXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cInBvc3RcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBNaW5kPyBTaGFyZSB5b3VyIGlkZWFzLCBldmVudHMgb3IgYWNoaWV2ZW1lbnRzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cG9zdEZvcm1EYXRhfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIHJvdW5kZWQgcHgtMyBweS0yIG10LTEgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmVlbi02MDBcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIiBjbGFzc05hbWU9XCJibG9ja1wiID5VcGxvYWQgYW4gaW1hZ2UgKG9wdGlvbmFsKTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIHJvdW5kZWQgcHgtMyBweS0yIG10LTEgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmVlbi02MDBcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1saW1lLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWxpbWUtNjAwIGN1cnNvci1wb2ludGVyIG14LWF1dG8gYmxvY2tcIiAvPlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKENyZWF0ZVBvc3QpOyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsIndpdGhBdXRoIiwiQ3JlYXRlUG9zdCIsInBvc3RGb3JtRGF0YSIsInNldFBvc3RGb3JtRGF0YSIsInBvc3QiLCJmaWxlIiwic2V0RmlsZSIsImVycm9yIiwic2V0RXJyb3IiLCJjb29raWVzIiwicm91dGVyIiwiaGFuZGxlQ3JlYXRlUG9zdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiYm9keSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicGxhbnRGb3JtRGF0YSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsImZpbGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZU5hbWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwic2VjdGlvbiIsImgyIiwicCIsImZvcm0iLCJlbmNUeXBlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/social/createpost/index.jsx\n"));

/***/ })

});