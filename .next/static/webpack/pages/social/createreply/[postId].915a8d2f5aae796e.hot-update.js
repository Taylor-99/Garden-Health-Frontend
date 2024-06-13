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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_ReplyPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ReplyPost */ \"./src/pages/social/components/ReplyPost.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CreateReply = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { postId } = router.query; // Get the dynamic id from the URL\n    const [replyForm, setReplyForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        reply: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchPost = async ()=>{\n        try {\n            const formData = new FormData();\n            formData.append(\"image\", file);\n            formData.append(\"post\", replyForm.post);\n            const response = await fetch(\"http://localhost:4000/social/post/\".concat(postId), {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data1 = await response.json();\n            setPost(data1);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPost();\n    }, [\n        postId\n    ]);\n    const handlePostReply = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/social/create/\".concat(postId), {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                },\n                body: JSON.stringify(replyForm)\n            });\n            await response.json();\n            if (response.ok) {\n                console.log(\"reply created\");\n                // Redirect or perform an action on successful login\n                navigate.replace(\"/social/replies/\".concat(postId));\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setReplyForm({\n            ...replyForm,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReplyPost__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                postid: postId\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mt-4 text-center\",\n                        children: \"Create Reply\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 108,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handlePostReply();\n                        },\n                        className: \"mt-4 space-y-4 mx-auto max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"reply\",\n                                onChange: handleChange,\n                                placeholder: \"Reply to this post\",\n                                value: replyForm.reply,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 124,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"image\",\n                                onChange: handleChange,\n                                placeholder: \"Upload an image\",\n                                value: replyForm.image,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 134,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 135,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\",\n                                className: \"bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 137,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateReply, \"ElvWVz3IGM6AEdnQ2QbMCbp5h5Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateReply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CreateReply));\nvar _c, _c1;\n$RefreshReg$(_c, \"CreateReply\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL2NyZWF0ZXJlcGx5L1twb3N0SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDSDtBQUNVO0FBQ0o7QUFDRTtBQUUvQyxNQUFNUSxjQUFjOztJQUVoQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFNLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVuRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7UUFDdkNhLE9BQU87SUFDWDtJQUVBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQixRQUFRLEdBQUdkLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUN0QyxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1tQixXQUFXaEIsc0RBQVNBO0lBRTFCLE1BQU1pQixZQUFZO1FBRWQsSUFBSTtZQUVBLE1BQU1DLFdBQVcsSUFBSUM7WUFDckJELFNBQVNFLE1BQU0sQ0FBQyxTQUFTTjtZQUN6QkksU0FBU0UsTUFBTSxDQUFDLFFBQVFaLFVBQVVhLElBQUk7WUFFdEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHFDQUE0QyxPQUFQakIsU0FBVTtnQkFDeEVrQixRQUFRO2dCQUNSQyxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRkLFFBQVFlLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxNQUFNQyxRQUFPLE1BQU1QLFNBQVNRLElBQUk7WUFDaENDLFFBQVFGO1lBQ1JHLFdBQVc7UUFDZixFQUFFLE9BQU9yQixPQUFPO1lBQ1pzQixRQUFRdEIsS0FBSyxDQUFDLFVBQVVBLE1BQU11QixPQUFPO1FBQ3pDO0lBQ0o7SUFFQXBDLGdEQUFTQSxDQUFDO1FBRU5tQjtJQUVKLEdBQUc7UUFBQ1g7S0FBTztJQUVYLE1BQU02QixrQkFBa0I7UUFDcEIsSUFBSTtZQUVBLE1BQU1iLFdBQVcsTUFBTUMsTUFBTSx1Q0FBOEMsT0FBUGpCLFNBQVU7Z0JBQzFFa0IsUUFBUTtnQkFDUkMsYUFBYTtnQkFDYkMsU0FBUztvQkFDTCxnQkFBZ0I7b0JBQ2hCQyxlQUFlLFVBQXdCLE9BQWRkLFFBQVFlLEtBQUs7Z0JBQzFDO2dCQUNBUSxNQUFNQyxLQUFLQyxTQUFTLENBQUM5QjtZQUN6QjtZQUVBLE1BQU1jLFNBQVNRLElBQUk7WUFFbkIsSUFBSVIsU0FBU2lCLEVBQUUsRUFBRTtnQkFDYk4sUUFBUU8sR0FBRyxDQUFDO2dCQUVaLG9EQUFvRDtnQkFDcER4QixTQUFTeUIsT0FBTyxDQUFDLG1CQUEwQixPQUFQbkM7WUFDeEMsT0FBTztnQkFDSE0sU0FBU2lCLEtBQUtLLE9BQU87WUFDekI7UUFDSixFQUFFLE9BQU9RLEtBQUs7WUFDVjlCLFNBQVM7UUFDYjtJQUNKO0lBRUEsTUFBTStCLGVBQWUsQ0FBQ0M7UUFDbEJuQyxhQUFhO1lBQ1QsR0FBR0QsU0FBUztZQUNaLENBQUNvQyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFDbkM7SUFDSjtJQUdGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQy9DLDBEQUFNQTtnQkFBQ2dELFVBQVM7Ozs7OzswQkFFakIsOERBQUNDOzs7OzswQkFFRCw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTWhELE9BQU9pRCxJQUFJO2dCQUFJTCxXQUFVOzBCQUEyRTs7Ozs7OzBCQUkzSCw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBRUQsOERBQUNoRCw2REFBU0E7Z0JBQUNvRCxRQUFRakQ7Ozs7OzswQkFFbkIsOERBQUNrRDtnQkFBUVAsV0FBVTs7a0NBQ2YsOERBQUNRO3dCQUFHUixXQUFVO2tDQUF5Qzs7Ozs7O29CQUV0RHRDLHVCQUFTLDhEQUFDK0M7d0JBQUVDLE9BQU87NEJBQUVDLE9BQU87d0JBQU07a0NBQUlqRDs7Ozs7O2tDQUV2Qyw4REFBQ2tEO3dCQUFLQyxVQUFVLENBQUNsQjs0QkFDVEEsRUFBRW1CLGNBQWM7NEJBQ2hCbkQsU0FBUzs0QkFDVHVCO3dCQUNKO3dCQUFHYyxXQUFVOzswQ0FFYiw4REFBQ2U7Z0NBQU1DLE1BQUs7Z0NBQ1puQixNQUFLO2dDQUNMb0IsVUFBVXZCO2dDQUNWd0IsYUFBWTtnQ0FDWnBCLE9BQU92QyxVQUFVRSxLQUFLO2dDQUN0QnVDLFdBQVU7Ozs7OzswQ0FHViw4REFBQ0U7Ozs7OzBDQUVELDhEQUFDYTtnQ0FBTUMsTUFBSztnQ0FDWm5CLE1BQUs7Z0NBQ0xvQixVQUFVdkI7Z0NBQ1Z3QixhQUFZO2dDQUNacEIsT0FBT3ZDLFVBQVU0RCxLQUFLO2dDQUN0Qm5CLFdBQVU7Ozs7OzswQ0FHViw4REFBQ0U7Ozs7OzBDQUNELDhEQUFDQTs7Ozs7MENBRUQsOERBQUNhO2dDQUFNQyxNQUFLO2dDQUNabEIsT0FBTTtnQ0FBU0UsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpDO0dBeklNN0M7O1FBRWFKLGtEQUFTQTtRQVFORCxvREFBVUE7UUFHWEMsa0RBQVNBOzs7S0FieEJJO0FBMklOLCtEQUFlLE1BQUFILGdFQUFRQSxDQUFDRyxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zb2NpYWwvY3JlYXRlcmVwbHkvW3Bvc3RJZF0uanN4PzgzNzYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBSZXBseVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9SZXBseVBvc3QnXG5cbmNvbnN0IENyZWF0ZVJlcGx5ID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwb3N0SWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gR2V0IHRoZSBkeW5hbWljIGlkIGZyb20gdGhlIFVSTFxuXG4gICAgY29uc3QgW3JlcGx5Rm9ybSwgc2V0UmVwbHlGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcmVwbHk6IFwiXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgZmV0Y2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3QnLCByZXBseUZvcm0ucG9zdClcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NvY2lhbC9wb3N0LyR7cG9zdElkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFBvc3QoZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGZldGNoUG9zdCgpO1xuXG4gICAgfSwgW3Bvc3RJZF0pO1xuXG4gICAgY29uc3QgaGFuZGxlUG9zdFJlcGx5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc29jaWFsL2NyZWF0ZS8ke3Bvc3RJZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBseUZvcm0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXBseSBjcmVhdGVkXCIpXG5cbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCBvciBwZXJmb3JtIGFuIGFjdGlvbiBvbiBzdWNjZXNzZnVsIGxvZ2luXG4gICAgICAgICAgICAgICAgbmF2aWdhdGUucmVwbGFjZShgL3NvY2lhbC9yZXBsaWVzLyR7cG9zdElkfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFJlcGx5Rm9ybSh7XG4gICAgICAgICAgICAuLi5yZXBseUZvcm0sIFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTEwMCBteC1hdXRvXCIgPlxuICAgICAgICA8TmF2QmFyIHBhZ2VOYW1lPVwiU29jaWFsXCIgLz5cblxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC03MDAgaG92ZXI6dGV4dC1lbWVyYWxkLTkwMCBmb250LXNlbWlib2xkIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgR28gQmFja1xuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgPFJlcGx5UG9zdCBwb3N0aWQ9e3Bvc3RJZH0gLz5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG10LTQgdGV4dC1jZW50ZXJcIj5DcmVhdGUgUmVwbHk8L2gyPlxuXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvcn08L3A+fVxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignJyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVBvc3RSZXBseSgpXG4gICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTQgbXgtYXV0byBtYXgtdy1tZFwiPlxuXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBseVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGx5IHRvIHRoaXMgcG9zdFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JlcGx5Rm9ybS5yZXBseX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkIHB4LTMgcHktMiBtdC0xIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVcGxvYWQgYW4gaW1hZ2UnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JlcGx5Rm9ybS5pbWFnZX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkIHB4LTMgcHktMiBtdC0xIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPVwiYmctbGltZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBob3ZlcjpiZy1saW1lLTYwMCBjdXJzb3ItcG9pbnRlciBteC1hdXRvIGJsb2NrXCIgLz5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKENyZWF0ZVJlcGx5KSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsIndpdGhBdXRoIiwiTmF2QmFyIiwiUmVwbHlQb3N0IiwiQ3JlYXRlUmVwbHkiLCJyb3V0ZXIiLCJwb3N0SWQiLCJxdWVyeSIsInJlcGx5Rm9ybSIsInNldFJlcGx5Rm9ybSIsInJlcGx5IiwiZXJyb3IiLCJzZXRFcnJvciIsImNvb2tpZXMiLCJmaWxlIiwic2V0RmlsZSIsIm5hdmlnYXRlIiwiZmV0Y2hQb3N0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJzZXRQb3N0Iiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaGFuZGxlUG9zdFJlcGx5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImxvZyIsInJlcGxhY2UiLCJlcnIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZU5hbWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwicG9zdGlkIiwic2VjdGlvbiIsImgyIiwicCIsInN0eWxlIiwiY29sb3IiLCJmb3JtIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/social/createreply/[postId].jsx\n"));

/***/ })

});