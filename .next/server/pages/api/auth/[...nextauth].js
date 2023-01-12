"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    // your configs\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email Address\",\n                    type: \"email\",\n                    placeholder: \"Enter Email Address Here...\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"pword\",\n                    placeholder: \"Enter Password Here...\"\n                }\n            },\n            async authorize (credentials, req) {\n                const res = await fetch(\"http://192.168.1.130:3000\" + \"/api/auth/signin\", {\n                    method: \"POST\",\n                    body: JSON.stringify(credentials),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const user = await res.json();\n                if (res.ok && user) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ],\n    callbacks: {\n        jwt: ({ token , user  })=>{\n            if (user) {\n                token.user = {\n                    id: user._id,\n                    full_name: user.full_name,\n                    email: user.email\n                };\n            }\n            return token;\n        },\n        session: ({ session , token  })=>{\n            if (token) {\n                session.user = token.user;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/account/signin\"\n    },\n    secret: \"Nv5i3dEydezmUAcmm6se+SklwaY4HD1AbRtpw9yIcv4=\",\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: \"Nv5i3dEydezmUAcmm6se+SklwaY4HD1AbRtpw9yIcv4=\",\n        encryption: true\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNpQztBQUUzRCxNQUFNRSxjQUFjO0lBQ3pCLGVBQWU7SUFDZkMsV0FBVztRQUNURixzRUFBbUJBLENBQUM7WUFDbEJHLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFDTEMsT0FBTztvQkFDUEMsTUFBTTtvQkFDTkMsYUFBYTtnQkFDZjtnQkFDQUMsVUFBVTtvQkFDUkgsT0FBTztvQkFDUEMsTUFBTTtvQkFDTkMsYUFBYTtnQkFDZjtZQUNGO1lBQ0EsTUFBTUUsV0FBVU4sV0FBVyxFQUFFTyxHQUFHLEVBQUU7Z0JBQ2hDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUMsMkJBQWtCLEdBQUcsb0JBQW9CO29CQUMvREcsUUFBUTtvQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDaEI7b0JBQ3JCaUIsU0FBUzt3QkFBRSxnQkFBZ0I7b0JBQW1CO2dCQUNoRDtnQkFFQSxNQUFNQyxPQUFPLE1BQU1WLElBQUlXLElBQUk7Z0JBRTNCLElBQUlYLElBQUlZLEVBQUUsSUFBSUYsTUFBTTtvQkFDbEIsT0FBT0E7Z0JBQ1QsQ0FBQztnQkFDRCxPQUFPLElBQUk7WUFDYjtRQUNGO0tBQ0Q7SUFDREcsV0FBVztRQUNUQyxLQUFLLENBQUMsRUFBRUMsTUFBSyxFQUFFTCxLQUFJLEVBQUUsR0FBSztZQUN4QixJQUFJQSxNQUFNO2dCQUNSSyxNQUFNTCxJQUFJLEdBQUc7b0JBQ1hNLElBQUlOLEtBQUtPLEdBQUc7b0JBQ1pDLFdBQVdSLEtBQUtRLFNBQVM7b0JBQ3pCekIsT0FBT2lCLEtBQUtqQixLQUFLO2dCQUNuQjtZQUNGLENBQUM7WUFDRCxPQUFPc0I7UUFDVDtRQUNBSSxTQUFTLENBQUMsRUFBRUEsUUFBTyxFQUFFSixNQUFLLEVBQUUsR0FBSztZQUMvQixJQUFJQSxPQUFPO2dCQUNUSSxRQUFRVCxJQUFJLEdBQUdLLE1BQU1MLElBQUk7WUFDM0IsQ0FBQztZQUNELE9BQU9TO1FBQ1Q7SUFDRjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxRQUFRcEIsOENBQTJCO0lBQ25DaUIsU0FBUztRQUNQSyxVQUFVO0lBQ1o7SUFDQVYsS0FBSztRQUNIUSxRQUFRcEIsOENBQTJCO1FBQ25DdUIsWUFBWSxJQUFJO0lBQ2xCO0FBQ0YsRUFBRTtBQUVGLGlFQUFldEMsZ0RBQVFBLENBQUNFLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92MS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICAvLyB5b3VyIGNvbmZpZ3NcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIGxhYmVsOiBcIkVtYWlsIEFkZHJlc3NcIixcbiAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRW1haWwgQWRkcmVzcyBIZXJlLi4uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgbGFiZWw6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICB0eXBlOiBcInB3b3JkXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgUGFzc3dvcmQgSGVyZS4uLlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LlNFUlZFUiArIFwiL2FwaS9hdXRoL3NpZ25pblwiLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyksXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICBpZiAocmVzLm9rICYmIHVzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGp3dDogKHsgdG9rZW4sIHVzZXIgfSkgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4udXNlciA9IHtcbiAgICAgICAgICBpZDogdXNlci5faWQsXG4gICAgICAgICAgZnVsbF9uYW1lOiB1c2VyLmZ1bGxfbmFtZSxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIHNlc3Npb246ICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2FjY291bnQvc2lnbmluXCIsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIGp3dDoge1xuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICAgIGVuY3J5cHRpb246IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVIiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ1c2VyIiwianNvbiIsIm9rIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJpZCIsIl9pZCIsImZ1bGxfbmFtZSIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsInN0cmF0ZWd5IiwiZW5jcnlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();