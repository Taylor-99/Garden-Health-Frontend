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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CreateReply = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { postId } = router.query; // Get the dynamic id from the URL\n    const [replyForm, setReplyForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        post: \"\",\n        image: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchPost = async ()=>{\n        try {\n            console.log(\"id = \", postId);\n            const response = await fetch(\"http://localhost:4000/social/post/\".concat(postId), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data1 = await response.json();\n            setPost(data1);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPost();\n    }, [\n        postId\n    ]);\n    const handlePostReply = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/social/create/\".concat(postId), {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                },\n                body: JSON.stringify(replyForm)\n            });\n            await response.json();\n            if (response.ok) {\n                console.log(\"reply created\");\n                // Redirect or perform an action on successful login\n                navigate.replace(\"/social/replies/\".concat(postId));\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setReplyFormData({\n            ...replyForm,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-lg shadow-md p-4 mb-4 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.userImage,\n                                className: \"w-10 h-10 rounded-full mr-2\",\n                                alt: \"User Avatar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: post.userName\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-screen-md w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-4 text-center\",\n                                children: post.post\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.image,\n                                className: \"w-full rounded-lg mb-4 mx-auto\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mt-4 text-center\",\n                        children: \"Create Reply\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 116,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handlePostReply();\n                        },\n                        className: \"mt-4 space-y-4 mx-auto max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"post\",\n                                onChange: handleChange,\n                                placeholder: \"Reply to this post\",\n                                value: replyForm.post,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 124,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 132,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"image\",\n                                onChange: handleChange,\n                                placeholder: \"Upload an image\",\n                                value: replyForm.image,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 134,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 142,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 143,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\",\n                                className: \"bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 145,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateReply, \"ykFf2jOTC/SVKyJmGIrrSHWSsGI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateReply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CreateReply));\nvar _c, _c1;\n$RefreshReg$(_c, \"CreateReply\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL2NyZWF0ZXJlcGx5L1twb3N0SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBQ0g7QUFDVjtBQUNvQjtBQUNKO0FBRTdDLE1BQU1RLGNBQWM7O0lBRWhCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVNLE1BQU0sRUFBRSxHQUFHRCxPQUFPRSxLQUFLLEVBQUUsa0NBQWtDO0lBRW5FLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUN2Q2EsTUFBTTtRQUNOQyxPQUFPO0lBQ1g7SUFFQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2lCLFFBQVEsR0FBR2Ysd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBQ3RDLE1BQU0sQ0FBQ1csTUFBTUssUUFBUSxHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNtQixTQUFTQyxXQUFXLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNcUIsV0FBV2xCLHNEQUFTQTtJQUUxQixNQUFNbUIsWUFBWTtRQUVkLElBQUk7WUFDQUMsUUFBUUMsR0FBRyxDQUFDLFNBQVNmO1lBQ3JCLE1BQU1nQixXQUFXLE1BQU1DLE1BQU0scUNBQTRDLE9BQVBqQixTQUFVO2dCQUN4RWtCLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFosUUFBUWEsS0FBSztnQkFDMUM7WUFDSjtZQUVBLE1BQU1DLFFBQU8sTUFBTU4sU0FBU08sSUFBSTtZQUNoQ2QsUUFBUWE7WUFDUlgsV0FBVztRQUNmLEVBQUUsT0FBT0wsT0FBTztZQUNaUSxRQUFRUixLQUFLLENBQUMsVUFBVUEsTUFBTWtCLE9BQU87UUFDekM7SUFDSjtJQUVBaEMsZ0RBQVNBLENBQUM7UUFFTnFCO0lBRUosR0FBRztRQUFDYjtLQUFPO0lBRVgsTUFBTXlCLGtCQUFrQjtRQUNwQixJQUFJO1lBRUEsTUFBTVQsV0FBVyxNQUFNQyxNQUFNLHVDQUE4QyxPQUFQakIsU0FBVTtnQkFDMUUwQixRQUFRO2dCQUNSUixhQUFhO2dCQUNiQyxTQUFTO29CQUNMLGdCQUFnQjtvQkFDaEJDLGVBQWUsVUFBd0IsT0FBZFosUUFBUWEsS0FBSztnQkFDMUM7Z0JBQ0FNLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzNCO1lBQ3pCO1lBRUEsTUFBTWMsU0FBU08sSUFBSTtZQUVuQixJQUFJUCxTQUFTYyxFQUFFLEVBQUU7Z0JBQ2JoQixRQUFRQyxHQUFHLENBQUM7Z0JBRVosb0RBQW9EO2dCQUNwREgsU0FBU21CLE9BQU8sQ0FBQyxtQkFBMEIsT0FBUC9CO1lBQ3hDLE9BQU87Z0JBQ0hPLFNBQVNlLEtBQUtFLE9BQU87WUFDekI7UUFDSixFQUFFLE9BQU9RLEtBQUs7WUFDVnpCLFNBQVM7UUFDYjtJQUNKO0lBRUEsTUFBTTBCLGVBQWUsQ0FBQ0M7UUFDbEJDLGlCQUFpQjtZQUNiLEdBQUdqQyxTQUFTO1lBQ1osQ0FBQ2dDLEVBQUVFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSztRQUNuQztJQUNKO0lBR0YscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDM0MsMERBQU1BO2dCQUFDNEMsVUFBUzs7Ozs7OzBCQUVqQiw4REFBQ0M7Ozs7OzBCQUVELDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNN0MsT0FBTzhDLElBQUk7Z0JBQUlMLFdBQVU7MEJBQTJFOzs7Ozs7MEJBSTNILDhEQUFDRTs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFFRCw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNNO2dDQUFJQyxLQUFNM0MsS0FBSzRDLFNBQVM7Z0NBQUdSLFdBQVU7Z0NBQThCUyxLQUFJOzs7Ozs7MENBQ3hFLDhEQUFDQztnQ0FBR1YsV0FBVTswQ0FBbUJwQyxLQUFLK0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUVsRCw4REFBQ1Q7Ozs7O2tDQUNELDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNVO2dDQUFFVixXQUFVOzBDQUFxQnBDLEtBQUtBLElBQUk7Ozs7OzswQ0FFM0MsOERBQUMwQztnQ0FBSUMsS0FBSzNDLEtBQUtDLEtBQUs7Z0NBQUVtQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXhDLDhEQUFDWTtnQkFBUVosV0FBVTs7a0NBQ2YsOERBQUNhO3dCQUFHYixXQUFVO2tDQUF5Qzs7Ozs7O29CQUV0RGxDLHVCQUFTLDhEQUFDNEM7d0JBQUVJLE9BQU87NEJBQUVDLE9BQU87d0JBQU07a0NBQUlqRDs7Ozs7O2tDQUV2Qyw4REFBQ2tEO3dCQUFLQyxVQUFVLENBQUN2Qjs0QkFDVEEsRUFBRXdCLGNBQWM7NEJBQ2hCbkQsU0FBUzs0QkFDVGtCO3dCQUNKO3dCQUFHZSxXQUFVOzswQ0FFYiw4REFBQ21CO2dDQUFNQyxNQUFLO2dDQUNadkIsTUFBSztnQ0FDTHdCLFVBQVU1QjtnQ0FDVjZCLGFBQVk7Z0NBQ1p4QixPQUFPcEMsVUFBVUUsSUFBSTtnQ0FDckJvQyxXQUFVOzs7Ozs7MENBR1YsOERBQUNFOzs7OzswQ0FFRCw4REFBQ2lCO2dDQUFNQyxNQUFLO2dDQUNadkIsTUFBSztnQ0FDTHdCLFVBQVU1QjtnQ0FDVjZCLGFBQVk7Z0NBQ1p4QixPQUFPcEMsVUFBVUcsS0FBSztnQ0FDdEJtQyxXQUFVOzs7Ozs7MENBR1YsOERBQUNFOzs7OzswQ0FDRCw4REFBQ0E7Ozs7OzBDQUVELDhEQUFDaUI7Z0NBQU1DLE1BQUs7Z0NBQ1p0QixPQUFNO2dDQUFTRSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekM7R0FqSk0xQzs7UUFFYUosa0RBQVNBO1FBU05ELG9EQUFVQTtRQUlYQyxrREFBU0E7OztLQWZ4Qkk7QUFtSk4sK0RBQWUsTUFBQUYsZ0VBQVFBLENBQUNFLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NvY2lhbC9jcmVhdGVyZXBseS9bcG9zdElkXS5qc3g/ODM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcblxuY29uc3QgQ3JlYXRlUmVwbHkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHBvc3RJZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBHZXQgdGhlIGR5bmFtaWMgaWQgZnJvbSB0aGUgVVJMXG5cbiAgICBjb25zdCBbcmVwbHlGb3JtLCBzZXRSZXBseUZvcm1dID0gdXNlU3RhdGUoe1xuICAgICAgICBwb3N0OiBcIlwiLFxuICAgICAgICBpbWFnZTogXCJcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcbiAgICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgZmV0Y2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkID0gXCIsIHBvc3RJZClcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zb2NpYWwvcG9zdC8ke3Bvc3RJZH1gLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBzZXRQb3N0KGRhdGEpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBmZXRjaFBvc3QoKTtcblxuICAgIH0sIFtwb3N0SWRdKTtcblxuICAgIGNvbnN0IGhhbmRsZVBvc3RSZXBseSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NvY2lhbC9jcmVhdGUvJHtwb3N0SWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwbHlGb3JtKSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVwbHkgY3JlYXRlZFwiKVxuXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJlY3Qgb3IgcGVyZm9ybSBhbiBhY3Rpb24gb24gc3VjY2Vzc2Z1bCBsb2dpblxuICAgICAgICAgICAgICAgIG5hdmlnYXRlLnJlcGxhY2UoYC9zb2NpYWwvcmVwbGllcy8ke3Bvc3RJZH1gKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNldEVycm9yKCdOZXR3b3JrIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRSZXBseUZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLnJlcGx5Rm9ybSwgXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwIG14LWF1dG9cIiA+XG4gICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJTb2NpYWxcIiAvPlxuXG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMCBob3Zlcjp0ZXh0LWVtZXJhbGQtOTAwIGZvbnQtc2VtaWJvbGQgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNCBtYi00IHctZnVsbFwiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMlwiID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHBvc3QudXNlckltYWdlIH0gY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBtci0yXCIgYWx0PVwiVXNlciBBdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgIDxwICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCIgPnsgcG9zdC51c2VyTmFtZSB9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIHctZnVsbFwiID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCIgPntwb3N0LnBvc3R9PC9wPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBtYi00IG14LWF1dG9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbXQtNCB0ZXh0LWNlbnRlclwiPkNyZWF0ZSBSZXBseTwvaDI+XG5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yfTwvcD59XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUG9zdFJlcGx5KClcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktNCBteC1hdXRvIG1heC13LW1kXCI+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgbmFtZT1cInBvc3RcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBseSB0byB0aGlzIHBvc3RcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXBseUZvcm0ucG9zdH0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkIHB4LTMgcHktMiBtdC0xIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVcGxvYWQgYW4gaW1hZ2UnXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JlcGx5Rm9ybS5pbWFnZX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkIHB4LTMgcHktMiBtdC0xIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPVwiYmctbGltZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBob3ZlcjpiZy1saW1lLTYwMCBjdXJzb3ItcG9pbnRlciBteC1hdXRvIGJsb2NrXCIgLz5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKENyZWF0ZVJlcGx5KSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsIkxpbmsiLCJ3aXRoQXV0aCIsIk5hdkJhciIsIkNyZWF0ZVJlcGx5Iiwicm91dGVyIiwicG9zdElkIiwicXVlcnkiLCJyZXBseUZvcm0iLCJzZXRSZXBseUZvcm0iLCJwb3N0IiwiaW1hZ2UiLCJlcnJvciIsInNldEVycm9yIiwiY29va2llcyIsInNldFBvc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm5hdmlnYXRlIiwiZmV0Y2hQb3N0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsIm1lc3NhZ2UiLCJoYW5kbGVQb3N0UmVwbHkiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicmVwbGFjZSIsImVyciIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRSZXBseUZvcm1EYXRhIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZU5hbWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwiaW1nIiwic3JjIiwidXNlckltYWdlIiwiYWx0IiwicCIsInVzZXJOYW1lIiwic2VjdGlvbiIsImgyIiwic3R5bGUiLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/social/createreply/[postId].jsx\n"));

/***/ })

});