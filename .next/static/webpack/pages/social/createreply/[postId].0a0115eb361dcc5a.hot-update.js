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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CreateReply = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { postId } = router.query; // Get the dynamic id from the URL\n    const [replyForm, setReplyForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        post: \"\",\n        image: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchPost = async ()=>{\n        try {\n            console.log(\"id = \", postId);\n            const response = await fetch(\"http://localhost:4000/social/post/\".concat(postId), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data1 = await response.json();\n            setPost(data1);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPost();\n    }, [\n        postId\n    ]);\n    const handlePostReply = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/social/create/\".concat(postId), {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                },\n                body: JSON.stringify(replyForm)\n            });\n            await response.json();\n            if (response.ok) {\n                console.log(\"reply created\");\n                // Redirect or perform an action on successful login\n                navigate.replace(\"/social/replies/\".concat(postId));\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setReplyFormData({\n            ...reply,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-lg shadow-md p-4 mb-4 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.userImage,\n                                className: \"w-10 h-10 rounded-full mr-2\",\n                                alt: \"User Avatar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: post.userName\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-screen-md w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-4 text-center\",\n                                children: post.post\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.image,\n                                className: \"w-full rounded-lg mb-4 mx-auto\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mt-4 text-center\",\n                        children: \"Create Reply\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 116,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handlePostReply();\n                        },\n                        className: \"mt-4 space-y-4 mx-auto max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"post\",\n                                onChange: handleChange,\n                                placeholder: \"Reply to this post\",\n                                value: replyForm.post,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 124,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 132,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"image\",\n                                onChange: handleChange,\n                                placeholder: \"Upload an image\",\n                                value: replyForm.image,\n                                className: \"w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 134,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 142,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 143,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\",\n                                className: \"bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                                lineNumber: 145,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/createreply/[postId].jsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateReply, \"ykFf2jOTC/SVKyJmGIrrSHWSsGI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateReply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CreateReply));\nvar _c, _c1;\n$RefreshReg$(_c, \"CreateReply\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL2NyZWF0ZXJlcGx5L1twb3N0SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBQ0g7QUFDVjtBQUNvQjtBQUNKO0FBRTdDLE1BQU1RLGNBQWM7O0lBRWhCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVNLE1BQU0sRUFBRSxHQUFHRCxPQUFPRSxLQUFLLEVBQUUsa0NBQWtDO0lBRW5FLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUN2Q2EsTUFBTTtRQUNOQyxPQUFPO0lBQ1g7SUFFQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2lCLFFBQVEsR0FBR2Ysd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBQ3RDLE1BQU0sQ0FBQ1csTUFBTUssUUFBUSxHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNtQixTQUFTQyxXQUFXLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNcUIsV0FBV2xCLHNEQUFTQTtJQUUxQixNQUFNbUIsWUFBWTtRQUVkLElBQUk7WUFDQUMsUUFBUUMsR0FBRyxDQUFDLFNBQVNmO1lBQ3JCLE1BQU1nQixXQUFXLE1BQU1DLE1BQU0scUNBQTRDLE9BQVBqQixTQUFVO2dCQUN4RWtCLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFosUUFBUWEsS0FBSztnQkFDMUM7WUFDSjtZQUVBLE1BQU1DLFFBQU8sTUFBTU4sU0FBU08sSUFBSTtZQUNoQ2QsUUFBUWE7WUFDUlgsV0FBVztRQUNmLEVBQUUsT0FBT0wsT0FBTztZQUNaUSxRQUFRUixLQUFLLENBQUMsVUFBVUEsTUFBTWtCLE9BQU87UUFDekM7SUFDSjtJQUVBaEMsZ0RBQVNBLENBQUM7UUFFTnFCO0lBRUosR0FBRztRQUFDYjtLQUFPO0lBRVgsTUFBTXlCLGtCQUFrQjtRQUNwQixJQUFJO1lBRUEsTUFBTVQsV0FBVyxNQUFNQyxNQUFNLHVDQUE4QyxPQUFQakIsU0FBVTtnQkFDMUUwQixRQUFRO2dCQUNSUixhQUFhO2dCQUNiQyxTQUFTO29CQUNMLGdCQUFnQjtvQkFDaEJDLGVBQWUsVUFBd0IsT0FBZFosUUFBUWEsS0FBSztnQkFDMUM7Z0JBQ0FNLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzNCO1lBQ3pCO1lBRUEsTUFBTWMsU0FBU08sSUFBSTtZQUVuQixJQUFJUCxTQUFTYyxFQUFFLEVBQUU7Z0JBQ2JoQixRQUFRQyxHQUFHLENBQUM7Z0JBRVosb0RBQW9EO2dCQUNwREgsU0FBU21CLE9BQU8sQ0FBQyxtQkFBMEIsT0FBUC9CO1lBQ3hDLE9BQU87Z0JBQ0hPLFNBQVNlLEtBQUtFLE9BQU87WUFDekI7UUFDSixFQUFFLE9BQU9RLEtBQUs7WUFDVnpCLFNBQVM7UUFDYjtJQUNKO0lBRUEsTUFBTTBCLGVBQWUsQ0FBQ0M7UUFDbEJDLGlCQUFpQjtZQUNiLEdBQUdDLEtBQUs7WUFDUixDQUFDRixFQUFFRyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFSixFQUFFRyxNQUFNLENBQUNFLEtBQUs7UUFDbkM7SUFDSjtJQUdGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQzVDLDBEQUFNQTtnQkFBQzZDLFVBQVM7Ozs7OzswQkFFakIsOERBQUNDOzs7OzswQkFFRCw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTTlDLE9BQU8rQyxJQUFJO2dCQUFJTCxXQUFVOzBCQUEyRTs7Ozs7OzBCQUkzSCw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBRUQsOERBQUNIO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDTTtnQ0FBSUMsS0FBTTVDLEtBQUs2QyxTQUFTO2dDQUFHUixXQUFVO2dDQUE4QlMsS0FBSTs7Ozs7OzBDQUN4RSw4REFBQ0M7Z0NBQUdWLFdBQVU7MENBQW1CckMsS0FBS2dELFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFbEQsOERBQUNUOzs7OztrQ0FDRCw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDVTtnQ0FBRVYsV0FBVTswQ0FBcUJyQyxLQUFLQSxJQUFJOzs7Ozs7MENBRTNDLDhEQUFDMkM7Z0NBQUlDLEtBQUs1QyxLQUFLQyxLQUFLO2dDQUFFb0MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl4Qyw4REFBQ1k7Z0JBQVFaLFdBQVU7O2tDQUNmLDhEQUFDYTt3QkFBR2IsV0FBVTtrQ0FBeUM7Ozs7OztvQkFFdERuQyx1QkFBUyw4REFBQzZDO3dCQUFFSSxPQUFPOzRCQUFFQyxPQUFPO3dCQUFNO2tDQUFJbEQ7Ozs7OztrQ0FFdkMsOERBQUNtRDt3QkFBS0MsVUFBVSxDQUFDeEI7NEJBQ1RBLEVBQUV5QixjQUFjOzRCQUNoQnBELFNBQVM7NEJBQ1RrQjt3QkFDSjt3QkFBR2dCLFdBQVU7OzBDQUViLDhEQUFDbUI7Z0NBQU1DLE1BQUs7Z0NBQ1p2QixNQUFLO2dDQUNMd0IsVUFBVTdCO2dDQUNWOEIsYUFBWTtnQ0FDWnhCLE9BQU9yQyxVQUFVRSxJQUFJO2dDQUNyQnFDLFdBQVU7Ozs7OzswQ0FHViw4REFBQ0U7Ozs7OzBDQUVELDhEQUFDaUI7Z0NBQU1DLE1BQUs7Z0NBQ1p2QixNQUFLO2dDQUNMd0IsVUFBVTdCO2dDQUNWOEIsYUFBWTtnQ0FDWnhCLE9BQU9yQyxVQUFVRyxLQUFLO2dDQUN0Qm9DLFdBQVU7Ozs7OzswQ0FHViw4REFBQ0U7Ozs7OzBDQUNELDhEQUFDQTs7Ozs7MENBRUQsOERBQUNpQjtnQ0FBTUMsTUFBSztnQ0FDWnRCLE9BQU07Z0NBQVNFLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QztHQWpKTTNDOztRQUVhSixrREFBU0E7UUFTTkQsb0RBQVVBO1FBSVhDLGtEQUFTQTs7O0tBZnhCSTtBQW1KTiwrREFBZSxNQUFBRixnRUFBUUEsQ0FBQ0UsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc29jaWFsL2NyZWF0ZXJlcGx5L1twb3N0SWRdLmpzeD84Mzc2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXInO1xuXG5jb25zdCBDcmVhdGVSZXBseSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgcG9zdElkIH0gPSByb3V0ZXIucXVlcnk7IC8vIEdldCB0aGUgZHluYW1pYyBpZCBmcm9tIHRoZSBVUkxcblxuICAgIGNvbnN0IFtyZXBseUZvcm0sIHNldFJlcGx5Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHBvc3Q6IFwiXCIsXG4gICAgICAgIGltYWdlOiBcIlwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBmZXRjaFBvc3QgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWQgPSBcIiwgcG9zdElkKVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NvY2lhbC9wb3N0LyR7cG9zdElkfWAsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFBvc3QoZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGZldGNoUG9zdCgpO1xuXG4gICAgfSwgW3Bvc3RJZF0pO1xuXG4gICAgY29uc3QgaGFuZGxlUG9zdFJlcGx5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc29jaWFsL2NyZWF0ZS8ke3Bvc3RJZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBseUZvcm0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXBseSBjcmVhdGVkXCIpXG5cbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCBvciBwZXJmb3JtIGFuIGFjdGlvbiBvbiBzdWNjZXNzZnVsIGxvZ2luXG4gICAgICAgICAgICAgICAgbmF2aWdhdGUucmVwbGFjZShgL3NvY2lhbC9yZXBsaWVzLyR7cG9zdElkfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFJlcGx5Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4ucmVwbHksIFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTEwMCBteC1hdXRvXCIgPlxuICAgICAgICA8TmF2QmFyIHBhZ2VOYW1lPVwiU29jaWFsXCIgLz5cblxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC03MDAgaG92ZXI6dGV4dC1lbWVyYWxkLTkwMCBmb250LXNlbWlib2xkIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgR28gQmFja1xuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTQgbWItNCB3LWZ1bGxcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTJcIiA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eyBwb3N0LnVzZXJJbWFnZSB9IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItMlwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICA8cCAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiID57IHBvc3QudXNlck5hbWUgfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1tZCB3LWZ1bGxcIiA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlclwiID57cG9zdC5wb3N0fTwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgbWItNCBteC1hdXRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG10LTQgdGV4dC1jZW50ZXJcIj5DcmVhdGUgUmVwbHk8L2gyPlxuXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvcn08L3A+fVxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignJyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVBvc3RSZXBseSgpXG4gICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTQgbXgtYXV0byBtYXgtdy1tZFwiPlxuXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwb3N0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwbHkgdG8gdGhpcyBwb3N0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVwbHlGb3JtLnBvc3R9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgcm91bmRlZCBweC0zIHB5LTIgbXQtMSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyZWVuLTYwMFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXBsb2FkIGFuIGltYWdlJ1xuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXBseUZvcm0uaW1hZ2V9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgcm91bmRlZCBweC0zIHB5LTIgbXQtMSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyZWVuLTYwMFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLWxpbWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctbGltZS02MDAgY3Vyc29yLXBvaW50ZXIgbXgtYXV0byBibG9ja1wiIC8+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChDcmVhdGVSZXBseSkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJDcmVhdGVSZXBseSIsInJvdXRlciIsInBvc3RJZCIsInF1ZXJ5IiwicmVwbHlGb3JtIiwic2V0UmVwbHlGb3JtIiwicG9zdCIsImltYWdlIiwiZXJyb3IiLCJzZXRFcnJvciIsImNvb2tpZXMiLCJzZXRQb3N0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJuYXZpZ2F0ZSIsImZldGNoUG9zdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJtZXNzYWdlIiwiaGFuZGxlUG9zdFJlcGx5IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInJlcGxhY2UiLCJlcnIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0UmVwbHlGb3JtRGF0YSIsInJlcGx5IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZU5hbWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwiaW1nIiwic3JjIiwidXNlckltYWdlIiwiYWx0IiwicCIsInVzZXJOYW1lIiwic2VjdGlvbiIsImgyIiwic3R5bGUiLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/social/createreply/[postId].jsx\n"));

/***/ })

});