"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utility_models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2686);
/* harmony import */ var _utility_models_User__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utility_models_User__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2048);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);



(0,_utility_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
async function handler(req, res) {
    const { method  } = req;
    switch(method){
        case "GET":
            res.status(405).json({
                message: "GET requests not allowed"
            });
            break;
        case "POST":
            try {
                let password = req.body.pword;
                bcrypt__WEBPACK_IMPORTED_MODULE_2___default().genSalt(10, function(saltError, salt) {
                    if (saltError) {
                        res.status(400).json({
                            message: "Something went wrong generating salt for hashing!",
                            error: saltError
                        });
                    }
                    bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(password, salt, async function(hashError, hash) {
                        if (hashError) {
                            res.status(400).json({
                                message: "Something went wrong hashing password!",
                                error: hashError
                            });
                        }
                        const newUserObj = {
                            full_name: req.body.fname,
                            email: req.body.email,
                            password: hash
                        };
                        const newUser = await _utility_models_User__WEBPACK_IMPORTED_MODULE_0___default().create(newUserObj);
                        res.status(200).json({
                            message: "User Created!"
                        });
                    });
                });
            } catch (err) {
                res.status(400).json({
                    message: "Something went wrong!",
                    error: err
                });
            }
            break;
        case "PUT":
            res.status(405).json({
                message: "PUT requests not allowed"
            });
            break;
        case "PATCH":
            res.status(405).json({
                message: "PATCH requests not allowed"
            });
            break;
        case "DELETE":
            res.status(405).json({
                message: "Delete requests not allowed"
            });
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [26], () => (__webpack_exec__(2745)));
module.exports = __webpack_exports__;

})();