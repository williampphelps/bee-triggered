"use strict";
(() => {
var exports = {};
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2109:
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
    const { id  } = req.query;
    const body = req.body;
    switch(method){
        case "GET":
            // Return Log with ID
            try {
                const log = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().findById(id);
                res.status(200).json(log);
            } catch (e) {
                res.status(400).json({
                    error: e
                });
            }
            break;
        case "POST":
            // Create new Log with ID
            try {
                const newLog = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().create(JSON.parse(body));
                res.status(200).json(newLog);
            } catch (e1) {
                res.status(400).json({
                    error: e1
                });
            }
            break;
        case "PUT":
            // Update Log with ID or Create one if not exist
            try {
                const exists = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().exists({
                    _id: id
                });
                if (!exists) {
                    const newLog1 = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().create(JSON.parse(body));
                    res.status(200).json(newLog1);
                }
                const updatedLog1 = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndUpdate(id, body);
                res.status(200).json(updatedLog1);
            } catch (e2) {
                res.status(400).json({
                    error: e2
                });
            }
            break;
        case "PATCH":
            // Update Log with ID
            try {
                console.log(body);
                const updatedLog2 = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndUpdate(id, JSON.parse(body));
                res.status(200).json(updatedLog2);
            } catch (e3) {
                res.status(400).json({
                    error: e3
                });
            }
            break;
        case "DELETE":
            // Delete Log
            try {
                const deletedLog = await _utility_models_Log__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndDelete(id);
                res.status(200).json(updatedLog);
            } catch (e4) {
                res.status(400).json({
                    error: e4
                });
            }
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
var __webpack_exports__ = __webpack_require__.X(0, [412], () => (__webpack_exec__(2109)));
module.exports = __webpack_exports__;

})();