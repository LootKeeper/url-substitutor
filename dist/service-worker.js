/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 342:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultHandler = void 0;
var _1 = __webpack_require__(118);
var defaultHandler = function (message, _, sendResponse) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, navigationDb, navigation, navigationDb, navigation, index, newNav, navigationDb, navigation, navToUpdate;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(message && message.type)) return [3 /*break*/, 8];
                console.log({ TEST: true, message: message });
                _a = message.type;
                switch (_a) {
                    case _1.MessageType.GET_ALL: return [3 /*break*/, 1];
                    case _1.MessageType.ADD: return [3 /*break*/, 3];
                    case _1.MessageType.UPDATE_BY_ID: return [3 /*break*/, 5];
                }
                return [3 /*break*/, 7];
            case 1: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 2:
                navigationDb = _b.sent();
                navigation = navigationDb.navigation;
                console.log({ TEST: true, navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 8];
            case 3: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 4:
                navigationDb = _b.sent();
                navigation = navigationDb.navigation;
                index = navigation.length;
                newNav = { id: index, name: message.payload.name, host: message.payload.host };
                navigation.push(newNav);
                console.log({ TEST: true, navigation: navigation });
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 8];
            case 5: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 6:
                navigationDb = _b.sent();
                navigation = navigationDb.navigation;
                navToUpdate = navigation[message.payload.id];
                navToUpdate.host = message.payload.host;
                navToUpdate.name = message.payload.name;
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 8];
            case 7:
                {
                    sendResponse({});
                }
                _b.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.defaultHandler = defaultHandler;


/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType["GET_ALL"] = "GET_ALL";
    MessageType["GET_BY_ID"] = "GET_BY_ID";
    MessageType["UPDATE_BY_ID"] = "UPDATE";
    MessageType["ADD"] = "ADD";
})(MessageType || (exports.MessageType = MessageType = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var handler_1 = __webpack_require__(342);
chrome.runtime.onInstalled.addListener(function (_a) {
    var reason = _a.reason;
    if (reason === 'install') {
        var navigation = [];
        chrome.storage.local.set({
            navigation: navigation
        });
    }
});
chrome.runtime.onMessage.addListener(function (message, _, sendResponse) {
    (0, handler_1.defaultHandler)(message, _, sendResponse);
    return true;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBCQUFXO0FBQ2IsQ0FBQyxFQUxXLFdBQVcsMkJBQVgsV0FBVyxRQUt0Qjs7Ozs7OztVQ1BEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUNyQkEseUNBQW1FO0FBR25FLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFDLEVBQVU7UUFBUixNQUFNO0lBQzlDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQU0sVUFBVSxHQUFpQixFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLFVBQVU7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQUMsT0FBZ0IsRUFBRSxDQUFRLEVBQUUsWUFBNEI7SUFDNUYsNEJBQWMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL21lc3NhZ2UvaGFuZGxlci50cyIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL21lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlVHlwZSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiQHJvb3QvZmVhdHVyZS9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zZVNlbmRlciA9IChlOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdEhhbmRsZXIgPSBhc3luYyAobWVzc2FnZTogTWVzc2FnZSwgXzogbmV2ZXIsIHNlbmRSZXNwb25zZTogUmVzcG9uc2VTZW5kZXIpID0+IHtcclxuICBpZiAobWVzc2FnZSAmJiBtZXNzYWdlLnR5cGUpIHtcclxuICAgIGNvbnNvbGUubG9nKHsgVEVTVDogdHJ1ZSwgbWVzc2FnZSB9KTtcclxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuR0VUX0FMTDoge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25EYiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnbmF2aWdhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uRGIubmF2aWdhdGlvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IFRFU1Q6IHRydWUsIG5hdmlnYXRpb24gfSk7XHJcblxyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5BREQ6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRGIgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ25hdmlnYXRpb24nKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbkRiLm5hdmlnYXRpb247XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuYXZpZ2F0aW9uLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBuZXdOYXY6IE5hdmlnYXRpb24gPSB7IGlkOiBpbmRleCwgbmFtZTogbWVzc2FnZS5wYXlsb2FkLm5hbWUsIGhvc3Q6IG1lc3NhZ2UucGF5bG9hZC5ob3N0IH07XHJcbiAgICAgICAgbmF2aWdhdGlvbi5wdXNoKG5ld05hdik7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBURVNUOiB0cnVlLCBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbmF2aWdhdGlvbiB9KTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5VUERBVEVfQllfSUQ6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRGIgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ25hdmlnYXRpb24nKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbkRiLm5hdmlnYXRpb247XHJcbiAgICAgICAgY29uc3QgbmF2VG9VcGRhdGUgPSBuYXZpZ2F0aW9uW21lc3NhZ2UucGF5bG9hZC5pZF07XHJcbiAgICAgICAgbmF2VG9VcGRhdGUuaG9zdCA9IG1lc3NhZ2UucGF5bG9hZC5ob3N0O1xyXG4gICAgICAgIG5hdlRvVXBkYXRlLm5hbWUgPSBtZXNzYWdlLnBheWxvYWQubmFtZTtcclxuXHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgbmF2aWdhdGlvbiB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBuYXZpZ2F0aW9uIH0pO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHt9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiQHJvb3QvZmVhdHVyZS9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XHJcbiAgR0VUX0FMTCA9ICdHRVRfQUxMJyxcclxuICBHRVRfQllfSUQgPSAnR0VUX0JZX0lEJyxcclxuICBVUERBVEVfQllfSUQgPSAnVVBEQVRFJyxcclxuICBBREQgPSAnQUREJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9IEdldEFsbE1lc3NhZ2UgfCBBZGRNZXNzYWdlIHwgVXBkYXRlTWVzc2FnZTtcclxuXHJcbmV4cG9ydCB0eXBlIEJhc2VNZXNzYWdlPFQ+ID0ge1xyXG4gIHBheWxvYWQ6IFRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0QWxsTWVzc2FnZSA9IHtcclxuICB0eXBlOiBNZXNzYWdlVHlwZS5HRVRfQUxMO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGRNZXNzYWdlID0ge1xyXG4gIHR5cGU6IE1lc3NhZ2VUeXBlLkFERDtcclxufSAmIEJhc2VNZXNzYWdlPFBpY2s8TmF2aWdhdGlvbiwgJ2hvc3QnIHwgJ25hbWUnPj5cclxuXHJcbmV4cG9ydCB0eXBlIFVwZGF0ZU1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogTWVzc2FnZVR5cGUuVVBEQVRFX0JZX0lEO1xyXG59ICYgQmFzZU1lc3NhZ2U8TmF2aWdhdGlvbj47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBkZWZhdWx0SGFuZGxlciwgUmVzcG9uc2VTZW5kZXIgfSBmcm9tICcuL21lc3NhZ2UvaGFuZGxlcic7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdAcm9vdC9mZWF0dXJlL25hdmlnYXRpb24nO1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKHsgcmVhc29uIH0pID0+IHtcclxuICBpZiAocmVhc29uID09PSAnaW5zdGFsbCcpIHtcclxuICAgIGNvbnN0IG5hdmlnYXRpb246IE5hdmlnYXRpb25bXSA9IFtdO1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcclxuICAgICAgbmF2aWdhdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG59KVxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlOiBNZXNzYWdlLCBfOiBuZXZlciwgc2VuZFJlc3BvbnNlOiBSZXNwb25zZVNlbmRlcikgPT4ge1xyXG4gIGRlZmF1bHRIYW5kbGVyKG1lc3NhZ2UsIF8sIHNlbmRSZXNwb25zZSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==