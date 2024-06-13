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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_ReplyPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ReplyPost */ \"./src/pages/social/components/ReplyPost.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CreateReply = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { postId } = router.query; // Get the dynamic id from the URL\n    const [replyForm, setReplyForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        reply: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const fetchPost = async () => {\n    //     try {\n    //         const response = await fetch(`http://localhost:4000/social/post/${postId}`, {\n    //             credentials: 'include',\n    //             headers: {\n    //                 Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header\n    //             }\n    //         });\n    //         const data = await response.json()\n    //         setPost(data)\n    //         setLoading(false)\n    //     } catch (error) {\n    //         console.error('Error:', error.message);\n    //     }\n    // };\n    // useEffect(() => {\n    //     fetchPost();\n    // }, [postId]);\n    const handlePostReply = async ()=>{\n        try {\n            const formData = new FormData();\n            formData.append(\"image\", file);\n            formData.append(\"post\", replyForm.reply);\n            const response = await fetch(\"http://localhost:4000/social/create/\".concat(postId), {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                },\n                body: formData\n            });\n            await response.json();\n            if (response.ok) {\n                // Redirect or perform an action on successful login\n                navigate.replace(\"/social/replies/\".concat(postId));\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setReplyForm({\n            ...replyForm,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleFileChange = (event)=>{\n        setFile(event.target.files[0]); // Get the first file from the file input\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReplyPost__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                postid: postId\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mt-4 text-center\",\n                        children: \"Create Reply\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 106,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        encType: \"multipart/formdata\",\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handlePostReply();\n                        },\n                        className: \"mt-4 space-y-4 mx-auto max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"reply\",\n                                onChange: handleChange,\n                                placeholder: \"Reply to this post\",\n                                value: replyForm.reply,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 124,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"image\",\n                                className: \"block\",\n                                children: \"Upload an image (optional): \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                name: \"image\",\n                                onChange: handleFileChange,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 127,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 133,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 134,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\",\n                                className: \"bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 136,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden-Health-Frontend/src/pages/social/createreply/[postId].jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateReply, \"7D78PQip+M7CKld/jqZoNRyzXwY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateReply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CreateReply));\nvar _c, _c1;\n$RefreshReg$(_c, \"CreateReply\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL2NyZWF0ZXJlcGx5L1twb3N0SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDSDtBQUNVO0FBQ0o7QUFDRTtBQUUvQyxNQUFNUSxjQUFjOztJQUVoQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFNLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVuRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7UUFDdkNhLE9BQU87SUFDWDtJQUVBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQixRQUFRLEdBQUdkLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUN0QyxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1tQixXQUFXaEIsc0RBQVNBO0lBRTFCLGtDQUFrQztJQUVsQyxZQUFZO0lBQ1osd0ZBQXdGO0lBQ3hGLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsNkdBQTZHO0lBQzdHLGdCQUFnQjtJQUNoQixjQUFjO0lBRWQsNkNBQTZDO0lBQzdDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGtEQUFrRDtJQUNsRCxRQUFRO0lBQ1IsS0FBSztJQUVMLG9CQUFvQjtJQUVwQixtQkFBbUI7SUFFbkIsZ0JBQWdCO0lBRWhCLE1BQU1pQixrQkFBa0I7UUFDcEIsSUFBSTtZQUVBLE1BQU1DLFdBQVcsSUFBSUM7WUFDckJELFNBQVNFLE1BQU0sQ0FBQyxTQUFTTjtZQUN6QkksU0FBU0UsTUFBTSxDQUFDLFFBQVFaLFVBQVVFLEtBQUs7WUFFdkMsTUFBTVcsV0FBVyxNQUFNQyxNQUFNLHVDQUE4QyxPQUFQaEIsU0FBVTtnQkFDMUVpQixRQUFRO2dCQUNSQyxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRiLFFBQVFjLEtBQUs7Z0JBQzFDO2dCQUNBQyxNQUFNVjtZQUNWO1lBRUEsTUFBTUcsU0FBU1EsSUFBSTtZQUVuQixJQUFJUixTQUFTUyxFQUFFLEVBQUU7Z0JBQ2Isb0RBQW9EO2dCQUNwRGQsU0FBU2UsT0FBTyxDQUFDLG1CQUEwQixPQUFQekI7WUFDeEM7UUFFSixFQUFFLE9BQU8wQixLQUFLO1lBQ1ZwQixTQUFTO1FBQ2I7SUFDSjtJQUVBLE1BQU1xQixlQUFlLENBQUNDO1FBQ2xCekIsYUFBYTtZQUNULEdBQUdELFNBQVM7WUFDWixDQUFDMEIsRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQ25DO0lBQ0o7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDdEJ4QixRQUFRd0IsTUFBTUosTUFBTSxDQUFDSyxLQUFLLENBQUMsRUFBRSxHQUFHLHlDQUF5QztJQUMzRTtJQUdKLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ3hDLDBEQUFNQTtnQkFBQ3lDLFVBQVM7Ozs7OzswQkFFakIsOERBQUNDOzs7OzswQkFFRCw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTXpDLE9BQU8wQyxJQUFJO2dCQUFJTCxXQUFVOzBCQUEyRTs7Ozs7OzBCQUkzSCw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBRUQsOERBQUN6Qyw2REFBU0E7Z0JBQUM2QyxRQUFRMUM7Ozs7OzswQkFFbkIsOERBQUMyQztnQkFBUVAsV0FBVTs7a0NBQ2YsOERBQUNRO3dCQUFHUixXQUFVO2tDQUF5Qzs7Ozs7O29CQUV0RC9CLHVCQUFTLDhEQUFDd0M7d0JBQUVDLE9BQU87NEJBQUVDLE9BQU87d0JBQU07a0NBQUkxQzs7Ozs7O2tDQUV2Qyw4REFBQzJDO3dCQUNHQyxTQUFVO3dCQUNWQyxVQUFVLENBQUN0Qjs0QkFDWEEsRUFBRXVCLGNBQWM7NEJBQ2hCN0MsU0FBUzs0QkFDVEs7d0JBQ0o7d0JBQUd5QixXQUFVOzswQ0FFVCw4REFBQ2dCO2dDQUNEdEIsTUFBSztnQ0FDTHVCLFVBQVUxQjtnQ0FDVjJCLGFBQVk7Z0NBQ1p2QixPQUFPN0IsVUFBVUUsS0FBSztnQ0FDdEJnQyxXQUFVOzs7Ozs7MENBR1YsOERBQUNFOzs7OzswQ0FFRCw4REFBQ2lCO2dDQUFNQyxTQUFRO2dDQUFRcEIsV0FBVTswQ0FBUzs7Ozs7OzBDQUMxQyw4REFBQ3FCO2dDQUFNQyxNQUFLO2dDQUNaNUIsTUFBSztnQ0FDTHVCLFVBQVVyQjtnQ0FDVkksV0FBVTs7Ozs7OzBDQUdWLDhEQUFDRTs7Ozs7MENBQ0QsOERBQUNBOzs7OzswQ0FFRCw4REFBQ21CO2dDQUFNQyxNQUFLO2dDQUNaM0IsT0FBTTtnQ0FBU0ssV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpDO0dBeElNdEM7O1FBRWFKLGtEQUFTQTtRQVFORCxvREFBVUE7UUFHWEMsa0RBQVNBOzs7S0FieEJJO0FBMElOLCtEQUFlLE1BQUFILGdFQUFRQSxDQUFDRyxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zb2NpYWwvY3JlYXRlcmVwbHkvW3Bvc3RJZF0uanN4PzgzNzYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBSZXBseVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9SZXBseVBvc3QnXG5cbmNvbnN0IENyZWF0ZVJlcGx5ID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwb3N0SWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gR2V0IHRoZSBkeW5hbWljIGlkIGZyb20gdGhlIFVSTFxuXG4gICAgY29uc3QgW3JlcGx5Rm9ybSwgc2V0UmVwbHlGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcmVwbHk6IFwiXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xuXG4gICAgLy8gY29uc3QgZmV0Y2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc29jaWFsL3Bvc3QvJHtwb3N0SWR9YCwge1xuICAgIC8vICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgLy8gICAgICAgICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIC8vICAgICAgICAgc2V0UG9zdChkYXRhKVxuICAgIC8vICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAvLyAgICAgZmV0Y2hQb3N0KCk7XG5cbiAgICAvLyB9LCBbcG9zdElkXSk7XG5cbiAgICBjb25zdCBoYW5kbGVQb3N0UmVwbHkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3QnLCByZXBseUZvcm0ucmVwbHkpXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zb2NpYWwvY3JlYXRlLyR7cG9zdElkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVkaXJlY3Qgb3IgcGVyZm9ybSBhbiBhY3Rpb24gb24gc3VjY2Vzc2Z1bCBsb2dpblxuICAgICAgICAgICAgICAgIG5hdmlnYXRlLnJlcGxhY2UoYC9zb2NpYWwvcmVwbGllcy8ke3Bvc3RJZH1gKVxuICAgICAgICAgICAgfSBcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNldEVycm9yKCdOZXR3b3JrIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRSZXBseUZvcm0oe1xuICAgICAgICAgICAgLi4ucmVwbHlGb3JtLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7IC8vIEdldCB0aGUgZmlyc3QgZmlsZSBmcm9tIHRoZSBmaWxlIGlucHV0XG4gICAgICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS0xMDAgbXgtYXV0b1wiID5cbiAgICAgICAgPE5hdkJhciBwYWdlTmFtZT1cIlNvY2lhbFwiIC8+XG5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfSBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNzAwIGhvdmVyOnRleHQtZW1lcmFsZC05MDAgZm9udC1zZW1pYm9sZCBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDxSZXBseVBvc3QgcG9zdGlkPXtwb3N0SWR9IC8+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtdC00IHRleHQtY2VudGVyXCI+Q3JlYXRlIFJlcGx5PC9oMj5cblxuICAgICAgICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57ZXJyb3J9PC9wPn1cblxuICAgICAgICAgICAgPGZvcm0gXG4gICAgICAgICAgICAgICAgZW5jVHlwZSA9ICdtdWx0aXBhcnQvZm9ybWRhdGEnXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVQb3N0UmVwbHkoKVxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTQgbXgtYXV0byBtYXgtdy1tZFwiPlxuXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBseVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGx5IHRvIHRoaXMgcG9zdFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JlcGx5Rm9ybS5yZXBseX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkIHB4LTMgcHktMiBtdC0xIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCIgY2xhc3NOYW1lPVwiYmxvY2tcIiA+VXBsb2FkIGFuIGltYWdlIChvcHRpb25hbCk6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkIHB4LTMgcHktMiBtdC0xIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPVwiYmctbGltZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBob3ZlcjpiZy1saW1lLTYwMCBjdXJzb3ItcG9pbnRlciBteC1hdXRvIGJsb2NrXCIgLz5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKENyZWF0ZVJlcGx5KSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsIndpdGhBdXRoIiwiTmF2QmFyIiwiUmVwbHlQb3N0IiwiQ3JlYXRlUmVwbHkiLCJyb3V0ZXIiLCJwb3N0SWQiLCJxdWVyeSIsInJlcGx5Rm9ybSIsInNldFJlcGx5Rm9ybSIsInJlcGx5IiwiZXJyb3IiLCJzZXRFcnJvciIsImNvb2tpZXMiLCJmaWxlIiwic2V0RmlsZSIsIm5hdmlnYXRlIiwiaGFuZGxlUG9zdFJlcGx5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJib2R5IiwianNvbiIsIm9rIiwicmVwbGFjZSIsImVyciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJmaWxlcyIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2VOYW1lIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwiYmFjayIsInBvc3RpZCIsInNlY3Rpb24iLCJoMiIsInAiLCJzdHlsZSIsImNvbG9yIiwiZm9ybSIsImVuY1R5cGUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/social/createreply/[postId].jsx\n"));

/***/ })

});