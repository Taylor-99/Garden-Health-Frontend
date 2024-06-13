"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/social/createreply/[postId]",{

/***/ "./src/pages/social/createreply/[postId].jsx":
/*!***************************************************!*\
  !*** ./src/pages/social/createreply/[postId].jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_ReplyPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ReplyPost */ \"./src/pages/social/components/ReplyPost.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CreateReply = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { postId } = router.query; // Get the dynamic id from the URL\n    const [replyForm, setReplyForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        reply: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchPost = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/social/post/\".concat(postId), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data1 = await response.json();\n            setPost(data1);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPost();\n    }, [\n        postId\n    ]);\n    const handlePostReply = async ()=>{\n        try {\n            const formData = new FormData();\n            formData.append(\"image\", file);\n            formData.append(\"post\", postFormData.post);\n            const response = await fetch(\"http://localhost:4000/social/create/\".concat(postId), {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                },\n                body: JSON.stringify(replyForm)\n            });\n            await response.json();\n            if (response.ok) {\n                console.log(\"reply created\");\n                // Redirect or perform an action on successful login\n                navigate.replace(\"/social/replies/\".concat(postId));\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setReplyForm({\n            ...replyForm,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReplyPost__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                postid: postId\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mt-4 text-center\",\n                        children: \"Create Reply\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 106,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handlePostReply();\n                        },\n                        className: \"mt-4 space-y-4 mx-auto max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"reply\",\n                                onChange: handleChange,\n                                placeholder: \"Reply to this post\",\n                                value: replyForm.reply,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 114,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 122,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"image\",\n                                onChange: handleChange,\n                                placeholder: \"Upload an image\",\n                                value: replyForm.image,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 124,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 132,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 133,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\",\n                                className: \"bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 135,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateReply, \"ElvWVz3IGM6AEdnQ2QbMCbp5h5Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateReply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CreateReply));\nvar _c, _c1;\n$RefreshReg$(_c, \"CreateReply\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL2NyZWF0ZXJlcGx5L1twb3N0SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDSDtBQUNVO0FBQ0o7QUFDRTtBQUUvQyxNQUFNUSxjQUFjOztJQUVoQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFNLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVuRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7UUFDdkNhLE9BQU87SUFDWDtJQUVBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQixRQUFRLEdBQUdkLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUN0QyxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1tQixXQUFXaEIsc0RBQVNBO0lBRTFCLE1BQU1pQixZQUFZO1FBRWQsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxxQ0FBNEMsT0FBUGIsU0FBVTtnQkFDeEVjLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFQsUUFBUVUsS0FBSztnQkFDMUM7WUFDSjtZQUVBLE1BQU1DLFFBQU8sTUFBTU4sU0FBU08sSUFBSTtZQUNoQ0MsUUFBUUY7WUFDUkcsV0FBVztRQUNmLEVBQUUsT0FBT2hCLE9BQU87WUFDWmlCLFFBQVFqQixLQUFLLENBQUMsVUFBVUEsTUFBTWtCLE9BQU87UUFDekM7SUFDSjtJQUVBL0IsZ0RBQVNBLENBQUM7UUFFTm1CO0lBRUosR0FBRztRQUFDWDtLQUFPO0lBRVgsTUFBTXdCLGtCQUFrQjtRQUNwQixJQUFJO1lBRUEsTUFBTUMsV0FBVyxJQUFJQztZQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFNBQVNuQjtZQUN6QmlCLFNBQVNFLE1BQU0sQ0FBQyxRQUFRQyxhQUFhQyxJQUFJO1lBRXpDLE1BQU1qQixXQUFXLE1BQU1DLE1BQU0sdUNBQThDLE9BQVBiLFNBQVU7Z0JBQzFFOEIsUUFBUTtnQkFDUmhCLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ0wsZ0JBQWdCO29CQUNoQkMsZUFBZSxVQUF3QixPQUFkVCxRQUFRVSxLQUFLO2dCQUMxQztnQkFDQWMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDL0I7WUFDekI7WUFFQSxNQUFNVSxTQUFTTyxJQUFJO1lBRW5CLElBQUlQLFNBQVNzQixFQUFFLEVBQUU7Z0JBQ2JaLFFBQVFhLEdBQUcsQ0FBQztnQkFFWixvREFBb0Q7Z0JBQ3BEekIsU0FBUzBCLE9BQU8sQ0FBQyxtQkFBMEIsT0FBUHBDO1lBQ3hDLE9BQU87Z0JBQ0hNLFNBQVNZLEtBQUtLLE9BQU87WUFDekI7UUFDSixFQUFFLE9BQU9jLEtBQUs7WUFDVi9CLFNBQVM7UUFDYjtJQUNKO0lBRUEsTUFBTWdDLGVBQWUsQ0FBQ0M7UUFDbEJwQyxhQUFhO1lBQ1QsR0FBR0QsU0FBUztZQUNaLENBQUNxQyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFDbkM7SUFDSjtJQUdGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ2hELDBEQUFNQTtnQkFBQ2lELFVBQVM7Ozs7OzswQkFFakIsOERBQUNDOzs7OzswQkFFRCw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTWpELE9BQU9rRCxJQUFJO2dCQUFJTCxXQUFVOzBCQUEyRTs7Ozs7OzBCQUkzSCw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBRUQsOERBQUNqRCw2REFBU0E7Z0JBQUNxRCxRQUFRbEQ7Ozs7OzswQkFFbkIsOERBQUNtRDtnQkFBUVAsV0FBVTs7a0NBQ2YsOERBQUNRO3dCQUFHUixXQUFVO2tDQUF5Qzs7Ozs7O29CQUV0RHZDLHVCQUFTLDhEQUFDZ0Q7d0JBQUVDLE9BQU87NEJBQUVDLE9BQU87d0JBQU07a0NBQUlsRDs7Ozs7O2tDQUV2Qyw4REFBQ21EO3dCQUFLQyxVQUFVLENBQUNsQjs0QkFDVEEsRUFBRW1CLGNBQWM7NEJBQ2hCcEQsU0FBUzs0QkFDVGtCO3dCQUNKO3dCQUFHb0IsV0FBVTs7MENBRWIsOERBQUNlO2dDQUFNQyxNQUFLO2dDQUNabkIsTUFBSztnQ0FDTG9CLFVBQVV2QjtnQ0FDVndCLGFBQVk7Z0NBQ1pwQixPQUFPeEMsVUFBVUUsS0FBSztnQ0FDdEJ3QyxXQUFVOzs7Ozs7MENBR1YsOERBQUNFOzs7OzswQ0FFRCw4REFBQ2E7Z0NBQU1DLE1BQUs7Z0NBQ1puQixNQUFLO2dDQUNMb0IsVUFBVXZCO2dDQUNWd0IsYUFBWTtnQ0FDWnBCLE9BQU94QyxVQUFVNkQsS0FBSztnQ0FDdEJuQixXQUFVOzs7Ozs7MENBR1YsOERBQUNFOzs7OzswQ0FDRCw4REFBQ0E7Ozs7OzBDQUVELDhEQUFDYTtnQ0FBTUMsTUFBSztnQ0FDWmxCLE9BQU07Z0NBQVNFLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QztHQXZJTTlDOztRQUVhSixrREFBU0E7UUFRTkQsb0RBQVVBO1FBR1hDLGtEQUFTQTs7O0tBYnhCSTtBQXlJTiwrREFBZSxNQUFBSCxnRUFBUUEsQ0FBQ0csWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc29jaWFsL2NyZWF0ZXJlcGx5L1twb3N0SWRdLmpzeD84Mzc2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGgnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgUmVwbHlQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVwbHlQb3N0J1xuXG5jb25zdCBDcmVhdGVSZXBseSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgcG9zdElkIH0gPSByb3V0ZXIucXVlcnk7IC8vIEdldCB0aGUgZHluYW1pYyBpZCBmcm9tIHRoZSBVUkxcblxuICAgIGNvbnN0IFtyZXBseUZvcm0sIHNldFJlcGx5Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHJlcGx5OiBcIlwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NvY2lhbC9wb3N0LyR7cG9zdElkfWAsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFBvc3QoZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGZldGNoUG9zdCgpO1xuXG4gICAgfSwgW3Bvc3RJZF0pO1xuXG4gICAgY29uc3QgaGFuZGxlUG9zdFJlcGx5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0JywgcG9zdEZvcm1EYXRhLnBvc3QpXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zb2NpYWwvY3JlYXRlLyR7cG9zdElkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcGx5Rm9ybSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcGx5IGNyZWF0ZWRcIilcblxuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IG9yIHBlcmZvcm0gYW4gYWN0aW9uIG9uIHN1Y2Nlc3NmdWwgbG9naW5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5yZXBsYWNlKGAvc29jaWFsL3JlcGxpZXMvJHtwb3N0SWR9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZXRFcnJvcignTmV0d29yayBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UmVwbHlGb3JtKHtcbiAgICAgICAgICAgIC4uLnJlcGx5Rm9ybSwgXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwIG14LWF1dG9cIiA+XG4gICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJTb2NpYWxcIiAvPlxuXG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMCBob3Zlcjp0ZXh0LWVtZXJhbGQtOTAwIGZvbnQtc2VtaWJvbGQgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICA8UmVwbHlQb3N0IHBvc3RpZD17cG9zdElkfSAvPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbXQtNCB0ZXh0LWNlbnRlclwiPkNyZWF0ZSBSZXBseTwvaDI+XG5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yfTwvcD59XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUG9zdFJlcGx5KClcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktNCBteC1hdXRvIG1heC13LW1kXCI+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlcGx5XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwbHkgdG8gdGhpcyBwb3N0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVwbHlGb3JtLnJlcGx5fSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIHJvdW5kZWQgcHgtMyBweS0yIG10LTEgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmVlbi02MDBcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VwbG9hZCBhbiBpbWFnZSdcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVwbHlGb3JtLmltYWdlfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIHJvdW5kZWQgcHgtMyBweS0yIG10LTEgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmVlbi02MDBcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1saW1lLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWxpbWUtNjAwIGN1cnNvci1wb2ludGVyIG14LWF1dG8gYmxvY2tcIiAvPlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQ3JlYXRlUmVwbHkpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwidXNlUm91dGVyIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJSZXBseVBvc3QiLCJDcmVhdGVSZXBseSIsInJvdXRlciIsInBvc3RJZCIsInF1ZXJ5IiwicmVwbHlGb3JtIiwic2V0UmVwbHlGb3JtIiwicmVwbHkiLCJlcnJvciIsInNldEVycm9yIiwiY29va2llcyIsImZpbGUiLCJzZXRGaWxlIiwibmF2aWdhdGUiLCJmZXRjaFBvc3QiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJzZXRQb3N0Iiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaGFuZGxlUG9zdFJlcGx5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3RGb3JtRGF0YSIsInBvc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwibG9nIiwicmVwbGFjZSIsImVyciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlTmFtZSIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImJhY2siLCJwb3N0aWQiLCJzZWN0aW9uIiwiaDIiLCJwIiwic3R5bGUiLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/social/createreply/[postId].jsx\n"));

/***/ })

});