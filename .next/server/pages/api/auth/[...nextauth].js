"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


const authOptions = {
    // your configs
    providers: [
        credentials_default()({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter Email Address Here..."
                },
                password: {
                    label: "Password",
                    type: "pword",
                    placeholder: "Enter Password Here..."
                }
            },
            async authorize (credentials, req) {
                const res = await fetch("http://192.168.1.130:3000" + "/api/auth/signin", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }
                return null;
            }
        })
    ],
    callbacks: {
        jwt: ({ token , user  })=>{
            if (user) {
                token.user = {
                    id: user._id,
                    full_name: user.full_name,
                    email: user.email
                };
            }
            return token;
        },
        session: ({ session , token  })=>{
            if (token) {
                session.user = token.user;
            }
            return session;
        }
    },
    pages: {
        signIn: "/account/signin"
    },
    secret: "Nv5i3dEydezmUAcmm6se+SklwaY4HD1AbRtpw9yIcv4=",
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: "Nv5i3dEydezmUAcmm6se+SklwaY4HD1AbRtpw9yIcv4=",
        encryption: true
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2509));
module.exports = __webpack_exports__;

})();