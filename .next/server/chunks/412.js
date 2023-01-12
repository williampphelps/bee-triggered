"use strict";
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 6328:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 2048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

let connection = {};
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://wmphelps:FxY4hIVbuzEdBP9F@cluster0.3dq4o.mongodb.net/beeTriggered?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 3876:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(1185));
const LogSchema = new _mongoose.default.Schema({
    dst_host: String,
    dst_port: Number,
    local_time: Date,
    local_time_adjusted: Date,
    logdata: {},
    logtype: Number,
    node_id: String,
    src_host: String,
    src_port: Number,
    utc_time: Date,
    read_status: String
});
module.exports = _mongoose.default.models.Log || _mongoose.default.model("Log", LogSchema);


/***/ })

};
;