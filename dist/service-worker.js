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
var handler_1 = __webpack_require__(1);
var defaultHandler = function (message, _, sendResponse) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (message && message.type) {
            console.log({ TEST: true, message: message });
            switch (message.type) {
                case _1.Type.NAV: {
                    (0, handler_1.defaultHandler)(message.payload, _, sendResponse);
                    break;
                }
                default: {
                    sendResponse({});
                }
            }
        }
        return [2 /*return*/];
    });
}); };
exports.defaultHandler = defaultHandler;


/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Type = void 0;
var Type;
(function (Type) {
    Type["TAB"] = "TAB";
    Type["NAV"] = "NAVIGATION";
})(Type || (exports.Type = Type = {}));


/***/ }),

/***/ 1:
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
var index_1 = __webpack_require__(233);
var defaultHandler = function (message, _, sendResponse) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, navigationDb, navigation, navigationDb, navigation, index, newNav, navigationDb, navigation, navToUpdate, navigationDb, navigation, idToRemove;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(message && message.type)) return [3 /*break*/, 10];
                _a = message.type;
                switch (_a) {
                    case index_1.NavType.GET_ALL: return [3 /*break*/, 1];
                    case index_1.NavType.ADD: return [3 /*break*/, 3];
                    case index_1.NavType.UPDATE_BY_ID: return [3 /*break*/, 5];
                    case index_1.NavType.REMOVE_BY_ID: return [3 /*break*/, 7];
                }
                return [3 /*break*/, 9];
            case 1: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 2:
                navigationDb = _b.sent();
                navigation = navigationDb.navigation;
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 10];
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
                return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 6:
                navigationDb = _b.sent();
                navigation = navigationDb.navigation;
                navToUpdate = navigation[message.payload.id];
                navToUpdate.host = message.payload.host;
                navToUpdate.name = message.payload.name;
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 10];
            case 7: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 8:
                navigationDb = _b.sent();
                navigation = navigationDb.navigation;
                idToRemove = message.payload.id;
                navigation.splice(idToRemove, 1);
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 10];
            case 9:
                {
                    sendResponse({});
                }
                _b.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.defaultHandler = defaultHandler;


/***/ }),

/***/ 233:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NavType = void 0;
var NavType;
(function (NavType) {
    NavType["GET_ALL"] = "GET_ALL";
    NavType["GET_BY_ID"] = "GET_BY_ID";
    NavType["UPDATE_BY_ID"] = "UPDATE";
    NavType["ADD"] = "ADD";
    NavType["REMOVE_BY_ID"] = "REMOVE_BY_ID";
})(NavType || (exports.NavType = NavType = {}));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyx1QkFBUCxPQUFPLFFBTWxCOzs7Ozs7O1VDVEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3JCQSx5Q0FBbUU7QUFHbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFVBQUMsRUFBVTtRQUFSLE1BQU07SUFDOUMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDekIsSUFBTSxVQUFVLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDdkIsVUFBVTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBQyxPQUFnQixFQUFFLENBQVEsRUFBRSxZQUE0QjtJQUM1Riw0QkFBYyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDekMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvbWVzc2FnZS9oYW5kbGVyLnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvbWVzc2FnZS9pbmRleC50cyIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL25hdmlnYXRpb24vaGFuZGxlci50cyIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL25hdmlnYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZNZXNzYWdlUGF5bG9hZCB9IGZyb20gXCJiYWNrZ3JvdW5kL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgVHlwZSB9IGZyb20gXCIuXCI7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0SGFuZGxlciBhcyBuYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gJy4uL25hdmlnYXRpb24vaGFuZGxlcic7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zZVNlbmRlciA9IChlOiB1bmtub3duKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIYW5kbGVyID0gYXN5bmMgKG1lc3NhZ2U6IE1lc3NhZ2UsIF86IG5ldmVyLCBzZW5kUmVzcG9uc2U6IFJlc3BvbnNlU2VuZGVyKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2UgJiYgbWVzc2FnZS50eXBlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh7IFRFU1Q6IHRydWUsIG1lc3NhZ2UgfSk7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIFR5cGUuTkFWOiB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkhhbmRsZXIobWVzc2FnZS5wYXlsb2FkIGFzIE5hdk1lc3NhZ2VQYXlsb2FkLCBfLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTmF2TWVzc2FnZVBheWxvYWQgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2luZGV4JztcclxuXHJcbmV4cG9ydCBlbnVtIFR5cGUge1xyXG4gIFRBQiA9ICdUQUInLFxyXG4gIE5BViA9ICdOQVZJR0FUSU9OJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9IFRhYk1lc3NhZ2UgfCBOYXZNZXNzYWdlO1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZU1lc3NhZ2U8VD4gPSB7XHJcbiAgcGF5bG9hZDogVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUYWJNZXNzYWdlID0ge1xyXG4gIHR5cGU6IFR5cGUuVEFCO1xyXG59ICYgQmFzZU1lc3NhZ2U8dW5rbm93bj5cclxuXHJcbmV4cG9ydCB0eXBlIE5hdk1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogVHlwZS5OQVY7XHJcbn0gJiBCYXNlTWVzc2FnZTxOYXZNZXNzYWdlUGF5bG9hZD47XHJcbiIsImltcG9ydCB7IE5hdk1lc3NhZ2VQYXlsb2FkLCBOYXZUeXBlIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCJAcm9vdC9mZWF0dXJlL25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCB0eXBlIFJlc3BvbnNlU2VuZGVyID0gKGU6IGFueSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGFuZGxlciA9IGFzeW5jIChtZXNzYWdlOiBOYXZNZXNzYWdlUGF5bG9hZCwgXzogbmV2ZXIsIHNlbmRSZXNwb25zZTogUmVzcG9uc2VTZW5kZXIpID0+IHtcclxuICBpZiAobWVzc2FnZSAmJiBtZXNzYWdlLnR5cGUpIHtcclxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgTmF2VHlwZS5HRVRfQUxMOiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkRiID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCduYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IG5hdmlnYXRpb25EYi5uYXZpZ2F0aW9uO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOYXZUeXBlLkFERDoge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25EYiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnbmF2aWdhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uRGIubmF2aWdhdGlvbjtcclxuICAgICAgICBjb25zdCBpbmRleCA9IG5hdmlnYXRpb24ubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG5ld05hdjogTmF2aWdhdGlvbiA9IHsgaWQ6IGluZGV4LCBuYW1lOiBtZXNzYWdlLnBheWxvYWQubmFtZSwgaG9zdDogbWVzc2FnZS5wYXlsb2FkLmhvc3QgfTtcclxuICAgICAgICBuYXZpZ2F0aW9uLnB1c2gobmV3TmF2KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IFRFU1Q6IHRydWUsIG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgbmF2aWdhdGlvbiB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBuYXZpZ2F0aW9uIH0pO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5hdlR5cGUuVVBEQVRFX0JZX0lEOiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkRiID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCduYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IG5hdmlnYXRpb25EYi5uYXZpZ2F0aW9uO1xyXG4gICAgICAgIGNvbnN0IG5hdlRvVXBkYXRlID0gbmF2aWdhdGlvblttZXNzYWdlLnBheWxvYWQuaWRdO1xyXG4gICAgICAgIG5hdlRvVXBkYXRlLmhvc3QgPSBtZXNzYWdlLnBheWxvYWQuaG9zdDtcclxuICAgICAgICBuYXZUb1VwZGF0ZS5uYW1lID0gbWVzc2FnZS5wYXlsb2FkLm5hbWU7XHJcblxyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbmF2aWdhdGlvbiB9KTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOYXZUeXBlLlJFTU9WRV9CWV9JRDoge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25EYiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnbmF2aWdhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uRGIubmF2aWdhdGlvbiBhcyBOYXZpZ2F0aW9uW107XHJcbiAgICAgICAgY29uc3QgaWRUb1JlbW92ZSA9IG1lc3NhZ2UucGF5bG9hZC5pZDtcclxuICAgICAgICBuYXZpZ2F0aW9uLnNwbGljZShpZFRvUmVtb3ZlLCAxKTtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7fSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIkByb290L2ZlYXR1cmUvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBSZW1vdmVBY3Rpb25UeXBlIH0gZnJvbSBcIkByb290L2ZlYXR1cmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uU2xpY2UvYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gTmF2VHlwZSB7XHJcbiAgR0VUX0FMTCA9ICdHRVRfQUxMJyxcclxuICBHRVRfQllfSUQgPSAnR0VUX0JZX0lEJyxcclxuICBVUERBVEVfQllfSUQgPSAnVVBEQVRFJyxcclxuICBBREQgPSAnQUREJyxcclxuICBSRU1PVkVfQllfSUQgPSAnUkVNT1ZFX0JZX0lEJ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOYXZNZXNzYWdlUGF5bG9hZCA9IEdldEFsbE1lc3NhZ2UgfCBBZGRNZXNzYWdlIHwgVXBkYXRlTWVzc2FnZSB8IFJlbW92ZU1lc3NhZ2U7XHJcblxyXG5leHBvcnQgdHlwZSBCYXNlTmF2TWVzc2FnZTxUPiA9IHtcclxuICBwYXlsb2FkOiBUXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEFsbE1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogTmF2VHlwZS5HRVRfQUxMO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGRNZXNzYWdlID0ge1xyXG4gIHR5cGU6IE5hdlR5cGUuQUREO1xyXG59ICYgQmFzZU5hdk1lc3NhZ2U8UGljazxOYXZpZ2F0aW9uLCAnaG9zdCcgfCAnbmFtZSc+PlxyXG5cclxuZXhwb3J0IHR5cGUgVXBkYXRlTWVzc2FnZSA9IHtcclxuICB0eXBlOiBOYXZUeXBlLlVQREFURV9CWV9JRDtcclxufSAmIEJhc2VOYXZNZXNzYWdlPE5hdmlnYXRpb24+O1xyXG5cclxuZXhwb3J0IHR5cGUgUmVtb3ZlTWVzc2FnZSA9IHtcclxuICB0eXBlOiBOYXZUeXBlLlJFTU9WRV9CWV9JRDtcclxufSAmIEJhc2VOYXZNZXNzYWdlPFJlbW92ZUFjdGlvblR5cGU+OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHsgZGVmYXVsdEhhbmRsZXIsIFJlc3BvbnNlU2VuZGVyIH0gZnJvbSAnLi9tZXNzYWdlL2hhbmRsZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnQHJvb3QvZmVhdHVyZS9uYXZpZ2F0aW9uJztcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCh7IHJlYXNvbiB9KSA9PiB7XHJcbiAgaWYgKHJlYXNvbiA9PT0gJ2luc3RhbGwnKSB7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uW10gPSBbXTtcclxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XHJcbiAgICAgIG5hdmlnYXRpb25cclxuICAgIH0pO1xyXG4gIH1cclxufSlcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZTogTWVzc2FnZSwgXzogbmV2ZXIsIHNlbmRSZXNwb25zZTogUmVzcG9uc2VTZW5kZXIpID0+IHtcclxuICBkZWZhdWx0SGFuZGxlcihtZXNzYWdlLCBfLCBzZW5kUmVzcG9uc2UpO1xyXG4gIHJldHVybiB0cnVlO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=