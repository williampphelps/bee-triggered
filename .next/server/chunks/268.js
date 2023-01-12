"use strict";
exports.id = 268;
exports.ids = [268];
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

/***/ 6927:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(1185));
const MachineSchema = new _mongoose.default.Schema({
    name: String,
    location: String,
    status: String,
    last_seen: Date,
    first_seen: Date,
    company: _mongoose.default.ObjectId,
    user: _mongoose.default.ObjectId,
    mac_prefix: String,
    max_suffix: String,
    config: {
        "device-node_id": String,
        "ip-ignorelist": [],
        "git-enabled": Boolean,
        "git-port": Number,
        "ftp-enabled": Boolean,
        "ftp-port": Number,
        "ftp-banner": String,
        "http-banner": String,
        "http-enabled": Boolean,
        "http-port": Number,
        "http-skin": String,
        "http-skin-list": [
            {
                desc: String,
                name: String
            }
        ],
        "httpproxy-enabled": Boolean,
        "httpproxy-port": Number,
        "httpproxy-skin": String,
        "httpproxy-skin-list": [
            {
                desc: String,
                name: String
            }
        ],
        logger: {
            class: String,
            kwargs: {
                formatters: {
                    plain: {
                        format: String
                    }
                },
                handlers: {}
            }
        },
        "portscan-enabled": Boolean,
        "portscan-ingore_localhost": Boolean,
        "portscan-logfile": String,
        "portscan-synrate": Number,
        "portscan-nmaposrate": Number,
        "portscan-lorate": Number,
        "smb-auditfile": String,
        "smb-enabled": Boolean,
        "smb-workgroup": String,
        "smb-sharename": String,
        "smb-configfile": String,
        "mysql-enabled": Boolean,
        "mysql-port": Number,
        "mysql-banner": String,
        "ssh-enabled": Boolean,
        "ssh-port": Number,
        "ssh-version": String,
        "redis-enabled": Boolean,
        "redis-port": Number,
        "rdp-enabled": Boolean,
        "rdp-port": Number,
        "sip-enabled": Boolean,
        "sip-port": Number,
        "snmp-enabled": Boolean,
        "snmp-port": Number,
        "ntp-enabled": Boolean,
        "ntp-port": Number,
        "tftp-enabled": Boolean,
        "tftp-port": Number,
        "tcpbanner-maxnum": Number,
        "tcpbanner-enabled": Boolean,
        "tcpbanner_1-enabled": Boolean,
        "tcpbanner_1-port": Number,
        "tcpbanner_1-datareceivedbanner": String,
        "tcpbanner_1-initbanner": String,
        "tcpbanner_1-alertstring-enabled": Boolean,
        "tcpbanner_1-alertstring": String,
        "tcpbanner_1-keep-alive-enabled": Boolean,
        "tcpbanner_1-keep_alive_secret": String,
        "tcpbanner_1-keep_alive_probes": Number,
        "tcpbanner_1-keep_alive_interval": Number,
        "tcpbanner_1-keep_alive_idle": Number,
        "telnet-enabled": Boolean,
        "telnet-port": Number,
        "telnet-banner": String,
        "telnet-honeycreds": [
            {
                username: String,
                password: String
            }
        ],
        "mssql-enabled": Boolean,
        "mssql-version": String,
        "mssql-port": Number,
        "vnc-enabled": Boolean,
        "vnc-port": Number
    }
});
module.exports = _mongoose.default.models.Machine || _mongoose.default.model("Machine", MachineSchema);


/***/ })

};
;