"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utility_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2048);
/* harmony import */ var _utility_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2686);
/* harmony import */ var _utility_models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utility_models_User__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);



(0,_utility_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
async function handler(req, res) {
    const { method  } = req;
    switch(method){
        case "GET":
            res.status(405).json({
                message: "GET not allowed"
            });
            break;
        case "POST":
            try {
                _utility_models_User__WEBPACK_IMPORTED_MODULE_1___default().findOne({
                    email: req.body.email
                }, function(findError, user) {
                    if (user) {
                        bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(req.body.pword, user.password, function(compareError, result) {
                            if (result) {
                                res.status(200).json(user);
                            } else {
                                res.status(400).json({
                                    error: "Incorrect Username or Password"
                                });
                            }
                            if (compareError && !result) {
                                res.status(400).json({
                                    message: "Something went wrong while comparing passwords!",
                                    error: compareError
                                });
                            }
                        });
                    } else {
                        res.status(400).json({
                            message: "Something went wrong!",
                            error: findError
                        });
                    }
                });
            } catch (err) {
                res.status(400).json({
                    message: "Something went wrong!"
                });
            }
            break;
        case "PUT":
            res.status(405).json({
                message: "PUT not allowed"
            });
            break;
        case "PATCH":
            res.status(405).json({
                message: "PATCH not allowed"
            });
            break;
        case "DELETE":
            res.status(405).json({
                message: "DELETE not allowed"
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
var __webpack_exports__ = __webpack_require__.X(0, [26], () => (__webpack_exec__(7626)));
module.exports = __webpack_exports__;

})();