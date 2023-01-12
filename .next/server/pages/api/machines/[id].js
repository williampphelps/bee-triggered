"use strict";
(() => {
var exports = {};
exports.id = 409;
exports.ids = [409];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6927);
/* harmony import */ var _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utility_models_Machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2048);


(0,_utility_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
async function handler(req, res) {
    const { method  } = req;
    const { id  } = req.query;
    const body = req.body;
    switch(method){
        case "GET":
            // Return Machine with ID
            try {
                const machine = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().findById(id);
                res.status(200).json(machine);
            } catch (e) {
                res.status(400).json({
                    error: e
                });
            }
            break;
        case "POST":
            // Create new Machine with ID
            try {
                const newMachine = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().create(JSON.parse(body));
                res.status(200).json(newMachine);
            } catch (e1) {
                res.status(400).json({
                    error: e1
                });
            }
            break;
        case "PUT":
            // Update Machine with ID or Create one if not exist
            try {
                const exists = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().exists({
                    _id: id
                });
                if (!exists) {
                    const newMachine1 = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().create(JSON.parse(body));
                    res.status(200).json(newMachine1);
                }
                const updatedMachine1 = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndUpdate(id, body);
                res.status(200).json(updatedMachine1);
            } catch (e2) {
                res.status(400).json({
                    error: e2
                });
            }
            break;
        case "PATCH":
            // Update Machine with ID
            try {
                console.log(body);
                const updatedMachine2 = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndUpdate(id, JSON.parse(body));
                res.status(200).json(updatedMachine2);
            } catch (e3) {
                res.status(400).json({
                    error: e3
                });
            }
            break;
        case "DELETE":
            // Delete Machine
            try {
                const deletedMachine = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndDelete(id);
                res.status(200).json(updatedMachine);
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
var __webpack_exports__ = __webpack_require__.X(0, [268], () => (__webpack_exec__(2124)));
module.exports = __webpack_exports__;

})();