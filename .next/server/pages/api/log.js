"use strict";
(() => {
var exports = {};
exports.id = 183;
exports.ids = [183];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utility_models_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3876);
/* harmony import */ var _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utility_models_Log__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2048);


(0,_utility_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
async function handler(req, res) {
    const { method  } = req;
    switch(method){
        case "GET":
            try {
                const logs = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().find({}, null, {
                    sort: {
                        local_time: -1
                    }
                });
                res.status(200).json(logs);
            } catch (e) {
                console.log(e);
                res.status(400).json({
                    message: e
                });
            }
            break;
        case "POST":
            try {
                const message = JSON.parse(req.body.message);
                if (message.logtype >= 0) {
                    const newLog = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().create(message);
                }
                res.status(200).json({
                    message: "ok"
                });
            } catch (e1) {
                console.log(e1);
                res.status(200).json({
                    message: "not ok"
                });
            }
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [412], () => (__webpack_exec__(5418)));
module.exports = __webpack_exports__;

})();