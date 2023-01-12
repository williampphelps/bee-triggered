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
exports.id = "pages/api/machines/[id]";
exports.ids = ["pages/api/machines/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdjEvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/ZTBhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./pages/api/machines/[id]/index.js":
/*!******************************************!*\
  !*** ./pages/api/machines/[id]/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utility/models/Machine */ \"(api)/./utility/models/Machine.js\");\n/* harmony import */ var _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utility_models_Machine__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utility_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/dbConnect */ \"(api)/./utility/dbConnect.js\");\n\n\n(0,_utility_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nasync function handler(req, res) {\n    const { method  } = req;\n    const { id  } = req.query;\n    const body = req.body;\n    switch(method){\n        case \"GET\":\n            // Return Machine with ID\n            try {\n                const machine = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().findById(id);\n                res.status(200).json(machine);\n            } catch (e) {\n                res.status(400).json({\n                    error: e\n                });\n            }\n            break;\n        case \"POST\":\n            // Create new Machine with ID\n            try {\n                const newMachine = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().create(JSON.parse(body));\n                res.status(200).json(newMachine);\n            } catch (e1) {\n                res.status(400).json({\n                    error: e1\n                });\n            }\n            break;\n        case \"PUT\":\n            // Update Machine with ID or Create one if not exist\n            try {\n                const exists = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().exists({\n                    _id: id\n                });\n                if (!exists) {\n                    const newMachine1 = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().create(JSON.parse(body));\n                    res.status(200).json(newMachine1);\n                }\n                const updatedMachine1 = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndUpdate(id, body);\n                res.status(200).json(updatedMachine1);\n            } catch (e2) {\n                res.status(400).json({\n                    error: e2\n                });\n            }\n            break;\n        case \"PATCH\":\n            // Update Machine with ID\n            try {\n                console.log(body);\n                const updatedMachine2 = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndUpdate(id, JSON.parse(body));\n                res.status(200).json(updatedMachine2);\n            } catch (e3) {\n                res.status(400).json({\n                    error: e3\n                });\n            }\n            break;\n        case \"DELETE\":\n            // Delete Machine\n            try {\n                const deletedMachine = await _utility_models_Machine__WEBPACK_IMPORTED_MODULE_0___default().findByIdAndDelete(id);\n                res.status(200).json(updatedMachine);\n            } catch (e4) {\n                res.status(400).json({\n                    error: e4\n                });\n            }\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFjaGluZXMvW2lkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBQ0g7QUFDM0NDLDhEQUFTQTtBQUNNLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBRW5CLE1BQU0sRUFBRUcsR0FBRSxFQUFFLEdBQUdILElBQUlJLEtBQUs7SUFFeEIsTUFBTUMsT0FBT0wsSUFBSUssSUFBSTtJQUVyQixPQUFRSDtRQUNOLEtBQUs7WUFDSCx5QkFBeUI7WUFDekIsSUFBSTtnQkFDRixNQUFNSSxVQUFVLE1BQU1ULHVFQUFnQixDQUFDTTtnQkFDdkNGLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1lBQ3ZCLEVBQUUsT0FBT0ksR0FBRztnQkFDVlQsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUUsT0FBT0Q7Z0JBQUU7WUFDbEM7WUFDQSxLQUFNO1FBQ1IsS0FBSztZQUNILDZCQUE2QjtZQUM3QixJQUFJO2dCQUNGLE1BQU1FLGFBQWEsTUFBTWYscUVBQWMsQ0FBQ2lCLEtBQUtDLEtBQUssQ0FBQ1Y7Z0JBQ25ESixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRztZQUN2QixFQUFFLE9BQU9GLElBQUc7Z0JBQ1ZULElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVFLE9BQU9EO2dCQUFFO1lBQ2xDO1lBQ0EsS0FBTTtRQUNSLEtBQUs7WUFDSCxvREFBb0Q7WUFDcEQsSUFBSTtnQkFDRixNQUFNTSxTQUFTLE1BQU1uQixxRUFBYyxDQUFDO29CQUFFb0IsS0FBS2Q7Z0JBQUc7Z0JBQzlDLElBQUksQ0FBQ2EsUUFBUTtvQkFDWCxNQUFNSixjQUFhLE1BQU1mLHFFQUFjLENBQUNpQixLQUFLQyxLQUFLLENBQUNWO29CQUNuREosSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0c7Z0JBQ3ZCLENBQUM7Z0JBQ0QsTUFBTU0sa0JBQWlCLE1BQU1yQixnRkFBeUIsQ0FBQ00sSUFBSUU7Z0JBQzNESixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUztZQUN2QixFQUFFLE9BQU9SLElBQUc7Z0JBQ1ZULElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVFLE9BQU9EO2dCQUFFO1lBQ2xDO1lBQ0EsS0FBTTtRQUNSLEtBQUs7WUFDSCx5QkFBeUI7WUFDekIsSUFBSTtnQkFDRlUsUUFBUUMsR0FBRyxDQUFDaEI7Z0JBQ1osTUFBTWEsa0JBQWlCLE1BQU1yQixnRkFBeUIsQ0FBQ00sSUFBSVcsS0FBS0MsS0FBSyxDQUFDVjtnQkFDdEVKLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNTO1lBQ3ZCLEVBQUUsT0FBT1IsSUFBRztnQkFDVlQsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUUsT0FBT0Q7Z0JBQUU7WUFDbEM7WUFDQSxLQUFNO1FBQ1IsS0FBSztZQUNILGlCQUFpQjtZQUNqQixJQUFJO2dCQUNGLE1BQU1ZLGlCQUFpQixNQUFNekIsZ0ZBQXlCLENBQUNNO2dCQUN2REYsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1M7WUFDdkIsRUFBRSxPQUFPUixJQUFHO2dCQUNWVCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRSxPQUFPRDtnQkFBRTtZQUNsQztZQUNBLEtBQU07SUFDVjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92MS8uL3BhZ2VzL2FwaS9tYWNoaW5lcy9baWRdL2luZGV4LmpzPzBjNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hY2hpbmUgZnJvbSBcIi91dGlsaXR5L21vZGVscy9NYWNoaW5lXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIvdXRpbGl0eS9kYkNvbm5lY3RcIjtcbmRiQ29ubmVjdCgpO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuXG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcblxuICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAvLyBSZXR1cm4gTWFjaGluZSB3aXRoIElEXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBtYWNoaW5lID0gYXdhaXQgTWFjaGluZS5maW5kQnlJZChpZCk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1hY2hpbmUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIC8vIENyZWF0ZSBuZXcgTWFjaGluZSB3aXRoIElEXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdNYWNoaW5lID0gYXdhaXQgTWFjaGluZS5jcmVhdGUoSlNPTi5wYXJzZShib2R5KSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld01hY2hpbmUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBVVFwiOlxuICAgICAgLy8gVXBkYXRlIE1hY2hpbmUgd2l0aCBJRCBvciBDcmVhdGUgb25lIGlmIG5vdCBleGlzdFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXhpc3RzID0gYXdhaXQgTWFjaGluZS5leGlzdHMoeyBfaWQ6IGlkIH0pO1xuICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgIGNvbnN0IG5ld01hY2hpbmUgPSBhd2FpdCBNYWNoaW5lLmNyZWF0ZShKU09OLnBhcnNlKGJvZHkpKTtcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdNYWNoaW5lKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cGRhdGVkTWFjaGluZSA9IGF3YWl0IE1hY2hpbmUuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIGJvZHkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkTWFjaGluZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGUgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUEFUQ0hcIjpcbiAgICAgIC8vIFVwZGF0ZSBNYWNoaW5lIHdpdGggSURcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRNYWNoaW5lID0gYXdhaXQgTWFjaGluZS5maW5kQnlJZEFuZFVwZGF0ZShpZCwgSlNPTi5wYXJzZShib2R5KSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVwZGF0ZWRNYWNoaW5lKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZSB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJERUxFVEVcIjpcbiAgICAgIC8vIERlbGV0ZSBNYWNoaW5lXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkZWxldGVkTWFjaGluZSA9IGF3YWl0IE1hY2hpbmUuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkTWFjaGluZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGUgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hY2hpbmUiLCJkYkNvbm5lY3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaWQiLCJxdWVyeSIsImJvZHkiLCJtYWNoaW5lIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwiZSIsImVycm9yIiwibmV3TWFjaGluZSIsImNyZWF0ZSIsIkpTT04iLCJwYXJzZSIsImV4aXN0cyIsIl9pZCIsInVwZGF0ZWRNYWNoaW5lIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlZE1hY2hpbmUiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/machines/[id]/index.js\n");

/***/ }),

/***/ "(api)/./utility/dbConnect.js":
/*!******************************!*\
  !*** ./utility/dbConnect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://wmphelps:FxY4hIVbuzEdBP9F@cluster0.3dq4o.mongodb.net/beeTriggered?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsaXR5L2RiQ29ubmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsYUFBYSxDQUFDO0FBRWxCLGVBQWVDLFlBQVk7SUFDekIsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQzFCO0lBQ0YsQ0FBQztJQUNELE1BQU1DLEtBQUssTUFBTUosdURBQWdCLENBQUNNLDZHQUF1QixFQUFFO1FBQ3pERyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7SUFDMUI7SUFFQVQsV0FBV0UsV0FBVyxHQUFHQyxHQUFHTyxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO0FBQ3ZEO0FBRUEsaUVBQWVWLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92MS8uL3V0aWxpdHkvZGJDb25uZWN0LmpzPzhlNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5sZXQgY29ubmVjdGlvbiA9IHt9O1xuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIH0pO1xuXG4gIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utility/dbConnect.js\n");

/***/ }),

/***/ "(api)/./utility/models/Machine.js":
/*!***********************************!*\
  !*** ./utility/models/Machine.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst MachineSchema = new _mongoose.default.Schema({\n    name: String,\n    location: String,\n    status: String,\n    last_seen: Date,\n    first_seen: Date,\n    company: _mongoose.default.ObjectId,\n    user: _mongoose.default.ObjectId,\n    mac_prefix: String,\n    max_suffix: String,\n    config: {\n        \"device-node_id\": String,\n        \"ip-ignorelist\": [],\n        \"git-enabled\": Boolean,\n        \"git-port\": Number,\n        \"ftp-enabled\": Boolean,\n        \"ftp-port\": Number,\n        \"ftp-banner\": String,\n        \"http-banner\": String,\n        \"http-enabled\": Boolean,\n        \"http-port\": Number,\n        \"http-skin\": String,\n        \"http-skin-list\": [\n            {\n                desc: String,\n                name: String\n            }\n        ],\n        \"httpproxy-enabled\": Boolean,\n        \"httpproxy-port\": Number,\n        \"httpproxy-skin\": String,\n        \"httpproxy-skin-list\": [\n            {\n                desc: String,\n                name: String\n            }\n        ],\n        logger: {\n            class: String,\n            kwargs: {\n                formatters: {\n                    plain: {\n                        format: String\n                    }\n                },\n                handlers: {}\n            }\n        },\n        \"portscan-enabled\": Boolean,\n        \"portscan-ingore_localhost\": Boolean,\n        \"portscan-logfile\": String,\n        \"portscan-synrate\": Number,\n        \"portscan-nmaposrate\": Number,\n        \"portscan-lorate\": Number,\n        \"smb-auditfile\": String,\n        \"smb-enabled\": Boolean,\n        \"smb-workgroup\": String,\n        \"smb-sharename\": String,\n        \"smb-configfile\": String,\n        \"mysql-enabled\": Boolean,\n        \"mysql-port\": Number,\n        \"mysql-banner\": String,\n        \"ssh-enabled\": Boolean,\n        \"ssh-port\": Number,\n        \"ssh-version\": String,\n        \"redis-enabled\": Boolean,\n        \"redis-port\": Number,\n        \"rdp-enabled\": Boolean,\n        \"rdp-port\": Number,\n        \"sip-enabled\": Boolean,\n        \"sip-port\": Number,\n        \"snmp-enabled\": Boolean,\n        \"snmp-port\": Number,\n        \"ntp-enabled\": Boolean,\n        \"ntp-port\": Number,\n        \"tftp-enabled\": Boolean,\n        \"tftp-port\": Number,\n        \"tcpbanner-maxnum\": Number,\n        \"tcpbanner-enabled\": Boolean,\n        \"tcpbanner_1-enabled\": Boolean,\n        \"tcpbanner_1-port\": Number,\n        \"tcpbanner_1-datareceivedbanner\": String,\n        \"tcpbanner_1-initbanner\": String,\n        \"tcpbanner_1-alertstring-enabled\": Boolean,\n        \"tcpbanner_1-alertstring\": String,\n        \"tcpbanner_1-keep-alive-enabled\": Boolean,\n        \"tcpbanner_1-keep_alive_secret\": String,\n        \"tcpbanner_1-keep_alive_probes\": Number,\n        \"tcpbanner_1-keep_alive_interval\": Number,\n        \"tcpbanner_1-keep_alive_idle\": Number,\n        \"telnet-enabled\": Boolean,\n        \"telnet-port\": Number,\n        \"telnet-banner\": String,\n        \"telnet-honeycreds\": [\n            {\n                username: String,\n                password: String\n            }\n        ],\n        \"mssql-enabled\": Boolean,\n        \"mssql-version\": String,\n        \"mssql-port\": Number,\n        \"vnc-enabled\": Boolean,\n        \"vnc-port\": Number\n    }\n});\nmodule.exports = _mongoose.default.models.Machine || _mongoose.default.model(\"Machine\", MachineSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsaXR5L21vZGVscy9NYWNoaW5lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OzsyRUFBcUIsMEJBQVU7QUFFL0IsTUFBTUEsZ0JBQWdCLElBQUlDLGlCQUFRLENBQUNDLE1BQU0sQ0FBQztJQUN4Q0MsTUFBTUM7SUFDTkMsVUFBVUQ7SUFDVkUsUUFBUUY7SUFDUkcsV0FBV0M7SUFDWEMsWUFBWUQ7SUFDWkUsU0FBU1QsaUJBQVEsQ0FBQ1UsUUFBUTtJQUMxQkMsTUFBTVgsaUJBQVEsQ0FBQ1UsUUFBUTtJQUN2QkUsWUFBWVQ7SUFDWlUsWUFBWVY7SUFDWlcsUUFBUTtRQUNOLGtCQUFrQlg7UUFDbEIsaUJBQWlCLEVBQUU7UUFDbkIsZUFBZVk7UUFDZixZQUFZQztRQUNaLGVBQWVEO1FBQ2YsWUFBWUM7UUFDWixjQUFjYjtRQUNkLGVBQWVBO1FBQ2YsZ0JBQWdCWTtRQUNoQixhQUFhQztRQUNiLGFBQWFiO1FBQ2Isa0JBQWtCO1lBQ2hCO2dCQUNFYyxNQUFNZDtnQkFDTkQsTUFBTUM7WUFDUjtTQUNEO1FBQ0QscUJBQXFCWTtRQUNyQixrQkFBa0JDO1FBQ2xCLGtCQUFrQmI7UUFDbEIsdUJBQXVCO1lBQ3JCO2dCQUNFYyxNQUFNZDtnQkFDTkQsTUFBTUM7WUFDUjtTQUNEO1FBQ0RlLFFBQVE7WUFDTkMsT0FBT2hCO1lBQ1BpQixRQUFRO2dCQUNOQyxZQUFZO29CQUNWQyxPQUFPO3dCQUNMQyxRQUFRcEI7b0JBQ1Y7Z0JBQ0Y7Z0JBQ0FxQixVQUFVLENBQUM7WUFDYjtRQUNGO1FBQ0Esb0JBQW9CVDtRQUNwQiw2QkFBNkJBO1FBQzdCLG9CQUFvQlo7UUFDcEIsb0JBQW9CYTtRQUNwQix1QkFBdUJBO1FBQ3ZCLG1CQUFtQkE7UUFDbkIsaUJBQWlCYjtRQUNqQixlQUFlWTtRQUNmLGlCQUFpQlo7UUFDakIsaUJBQWlCQTtRQUNqQixrQkFBa0JBO1FBQ2xCLGlCQUFpQlk7UUFDakIsY0FBY0M7UUFDZCxnQkFBZ0JiO1FBQ2hCLGVBQWVZO1FBQ2YsWUFBWUM7UUFDWixlQUFlYjtRQUNmLGlCQUFpQlk7UUFDakIsY0FBY0M7UUFDZCxlQUFlRDtRQUNmLFlBQVlDO1FBQ1osZUFBZUQ7UUFDZixZQUFZQztRQUNaLGdCQUFnQkQ7UUFDaEIsYUFBYUM7UUFDYixlQUFlRDtRQUNmLFlBQVlDO1FBQ1osZ0JBQWdCRDtRQUNoQixhQUFhQztRQUNiLG9CQUFvQkE7UUFDcEIscUJBQXFCRDtRQUNyQix1QkFBdUJBO1FBQ3ZCLG9CQUFvQkM7UUFDcEIsa0NBQWtDYjtRQUNsQywwQkFBMEJBO1FBQzFCLG1DQUFtQ1k7UUFDbkMsMkJBQTJCWjtRQUMzQixrQ0FBa0NZO1FBQ2xDLGlDQUFpQ1o7UUFDakMsaUNBQWlDYTtRQUNqQyxtQ0FBbUNBO1FBQ25DLCtCQUErQkE7UUFDL0Isa0JBQWtCRDtRQUNsQixlQUFlQztRQUNmLGlCQUFpQmI7UUFDakIscUJBQXFCO1lBQ25CO2dCQUNFc0IsVUFBVXRCO2dCQUNWdUIsVUFBVXZCO1lBQ1o7U0FDRDtRQUNELGlCQUFpQlk7UUFDakIsaUJBQWlCWjtRQUNqQixjQUFjYTtRQUNkLGVBQWVEO1FBQ2YsWUFBWUM7SUFDZDtBQUNGO0FBRUFXLE9BQU9DLE9BQU8sR0FDWjVCLGlCQUFRLENBQUM2QixNQUFNLENBQUNDLE9BQU8sSUFBSTlCLGlCQUFRLENBQUMrQixLQUFLLENBQUMsV0FBV2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdjEvLi91dGlsaXR5L21vZGVscy9NYWNoaW5lLmpzPzljZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNYWNoaW5lU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IFN0cmluZyxcbiAgbG9jYXRpb246IFN0cmluZyxcbiAgc3RhdHVzOiBTdHJpbmcsXG4gIGxhc3Rfc2VlbjogRGF0ZSxcbiAgZmlyc3Rfc2VlbjogRGF0ZSxcbiAgY29tcGFueTogbW9uZ29vc2UuT2JqZWN0SWQsXG4gIHVzZXI6IG1vbmdvb3NlLk9iamVjdElkLFxuICBtYWNfcHJlZml4OiBTdHJpbmcsXG4gIG1heF9zdWZmaXg6IFN0cmluZyxcbiAgY29uZmlnOiB7XG4gICAgXCJkZXZpY2Utbm9kZV9pZFwiOiBTdHJpbmcsXG4gICAgXCJpcC1pZ25vcmVsaXN0XCI6IFtdLFxuICAgIFwiZ2l0LWVuYWJsZWRcIjogQm9vbGVhbixcbiAgICBcImdpdC1wb3J0XCI6IE51bWJlcixcbiAgICBcImZ0cC1lbmFibGVkXCI6IEJvb2xlYW4sXG4gICAgXCJmdHAtcG9ydFwiOiBOdW1iZXIsXG4gICAgXCJmdHAtYmFubmVyXCI6IFN0cmluZyxcbiAgICBcImh0dHAtYmFubmVyXCI6IFN0cmluZyxcbiAgICBcImh0dHAtZW5hYmxlZFwiOiBCb29sZWFuLFxuICAgIFwiaHR0cC1wb3J0XCI6IE51bWJlcixcbiAgICBcImh0dHAtc2tpblwiOiBTdHJpbmcsXG4gICAgXCJodHRwLXNraW4tbGlzdFwiOiBbXG4gICAgICB7XG4gICAgICAgIGRlc2M6IFN0cmluZyxcbiAgICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFwiaHR0cHByb3h5LWVuYWJsZWRcIjogQm9vbGVhbixcbiAgICBcImh0dHBwcm94eS1wb3J0XCI6IE51bWJlcixcbiAgICBcImh0dHBwcm94eS1za2luXCI6IFN0cmluZyxcbiAgICBcImh0dHBwcm94eS1za2luLWxpc3RcIjogW1xuICAgICAge1xuICAgICAgICBkZXNjOiBTdHJpbmcsXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBsb2dnZXI6IHtcbiAgICAgIGNsYXNzOiBTdHJpbmcsXG4gICAgICBrd2FyZ3M6IHtcbiAgICAgICAgZm9ybWF0dGVyczoge1xuICAgICAgICAgIHBsYWluOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IFN0cmluZyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVyczoge30sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJwb3J0c2Nhbi1lbmFibGVkXCI6IEJvb2xlYW4sXG4gICAgXCJwb3J0c2Nhbi1pbmdvcmVfbG9jYWxob3N0XCI6IEJvb2xlYW4sXG4gICAgXCJwb3J0c2Nhbi1sb2dmaWxlXCI6IFN0cmluZyxcbiAgICBcInBvcnRzY2FuLXN5bnJhdGVcIjogTnVtYmVyLFxuICAgIFwicG9ydHNjYW4tbm1hcG9zcmF0ZVwiOiBOdW1iZXIsXG4gICAgXCJwb3J0c2Nhbi1sb3JhdGVcIjogTnVtYmVyLFxuICAgIFwic21iLWF1ZGl0ZmlsZVwiOiBTdHJpbmcsXG4gICAgXCJzbWItZW5hYmxlZFwiOiBCb29sZWFuLFxuICAgIFwic21iLXdvcmtncm91cFwiOiBTdHJpbmcsXG4gICAgXCJzbWItc2hhcmVuYW1lXCI6IFN0cmluZyxcbiAgICBcInNtYi1jb25maWdmaWxlXCI6IFN0cmluZyxcbiAgICBcIm15c3FsLWVuYWJsZWRcIjogQm9vbGVhbixcbiAgICBcIm15c3FsLXBvcnRcIjogTnVtYmVyLFxuICAgIFwibXlzcWwtYmFubmVyXCI6IFN0cmluZyxcbiAgICBcInNzaC1lbmFibGVkXCI6IEJvb2xlYW4sXG4gICAgXCJzc2gtcG9ydFwiOiBOdW1iZXIsXG4gICAgXCJzc2gtdmVyc2lvblwiOiBTdHJpbmcsXG4gICAgXCJyZWRpcy1lbmFibGVkXCI6IEJvb2xlYW4sXG4gICAgXCJyZWRpcy1wb3J0XCI6IE51bWJlcixcbiAgICBcInJkcC1lbmFibGVkXCI6IEJvb2xlYW4sXG4gICAgXCJyZHAtcG9ydFwiOiBOdW1iZXIsXG4gICAgXCJzaXAtZW5hYmxlZFwiOiBCb29sZWFuLFxuICAgIFwic2lwLXBvcnRcIjogTnVtYmVyLFxuICAgIFwic25tcC1lbmFibGVkXCI6IEJvb2xlYW4sXG4gICAgXCJzbm1wLXBvcnRcIjogTnVtYmVyLFxuICAgIFwibnRwLWVuYWJsZWRcIjogQm9vbGVhbixcbiAgICBcIm50cC1wb3J0XCI6IE51bWJlcixcbiAgICBcInRmdHAtZW5hYmxlZFwiOiBCb29sZWFuLFxuICAgIFwidGZ0cC1wb3J0XCI6IE51bWJlcixcbiAgICBcInRjcGJhbm5lci1tYXhudW1cIjogTnVtYmVyLFxuICAgIFwidGNwYmFubmVyLWVuYWJsZWRcIjogQm9vbGVhbixcbiAgICBcInRjcGJhbm5lcl8xLWVuYWJsZWRcIjogQm9vbGVhbixcbiAgICBcInRjcGJhbm5lcl8xLXBvcnRcIjogTnVtYmVyLFxuICAgIFwidGNwYmFubmVyXzEtZGF0YXJlY2VpdmVkYmFubmVyXCI6IFN0cmluZyxcbiAgICBcInRjcGJhbm5lcl8xLWluaXRiYW5uZXJcIjogU3RyaW5nLFxuICAgIFwidGNwYmFubmVyXzEtYWxlcnRzdHJpbmctZW5hYmxlZFwiOiBCb29sZWFuLFxuICAgIFwidGNwYmFubmVyXzEtYWxlcnRzdHJpbmdcIjogU3RyaW5nLFxuICAgIFwidGNwYmFubmVyXzEta2VlcC1hbGl2ZS1lbmFibGVkXCI6IEJvb2xlYW4sXG4gICAgXCJ0Y3BiYW5uZXJfMS1rZWVwX2FsaXZlX3NlY3JldFwiOiBTdHJpbmcsXG4gICAgXCJ0Y3BiYW5uZXJfMS1rZWVwX2FsaXZlX3Byb2Jlc1wiOiBOdW1iZXIsXG4gICAgXCJ0Y3BiYW5uZXJfMS1rZWVwX2FsaXZlX2ludGVydmFsXCI6IE51bWJlcixcbiAgICBcInRjcGJhbm5lcl8xLWtlZXBfYWxpdmVfaWRsZVwiOiBOdW1iZXIsXG4gICAgXCJ0ZWxuZXQtZW5hYmxlZFwiOiBCb29sZWFuLFxuICAgIFwidGVsbmV0LXBvcnRcIjogTnVtYmVyLFxuICAgIFwidGVsbmV0LWJhbm5lclwiOiBTdHJpbmcsXG4gICAgXCJ0ZWxuZXQtaG9uZXljcmVkc1wiOiBbXG4gICAgICB7XG4gICAgICAgIHVzZXJuYW1lOiBTdHJpbmcsXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgXCJtc3NxbC1lbmFibGVkXCI6IEJvb2xlYW4sXG4gICAgXCJtc3NxbC12ZXJzaW9uXCI6IFN0cmluZyxcbiAgICBcIm1zc3FsLXBvcnRcIjogTnVtYmVyLFxuICAgIFwidm5jLWVuYWJsZWRcIjogQm9vbGVhbixcbiAgICBcInZuYy1wb3J0XCI6IE51bWJlcixcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIG1vbmdvb3NlLm1vZGVscy5NYWNoaW5lIHx8IG1vbmdvb3NlLm1vZGVsKFwiTWFjaGluZVwiLCBNYWNoaW5lU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJNYWNoaW5lU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwibG9jYXRpb24iLCJzdGF0dXMiLCJsYXN0X3NlZW4iLCJEYXRlIiwiZmlyc3Rfc2VlbiIsImNvbXBhbnkiLCJPYmplY3RJZCIsInVzZXIiLCJtYWNfcHJlZml4IiwibWF4X3N1ZmZpeCIsImNvbmZpZyIsIkJvb2xlYW4iLCJOdW1iZXIiLCJkZXNjIiwibG9nZ2VyIiwiY2xhc3MiLCJrd2FyZ3MiLCJmb3JtYXR0ZXJzIiwicGxhaW4iLCJmb3JtYXQiLCJoYW5kbGVycyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiTWFjaGluZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utility/models/Machine.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/machines/[id]/index.js"));
module.exports = __webpack_exports__;

})();