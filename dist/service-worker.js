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
var handler_2 = __webpack_require__(862);
var defaultHandler = function (message, _, sendResponse) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (message && message.type) {
            switch (message.type) {
                case _1.Type.NAV: {
                    (0, handler_1.defaultHandler)(message.payload, _, sendResponse);
                    break;
                }
                case _1.Type.TAB: {
                    (0, handler_2.defaultHandler)(message.payload, _, sendResponse);
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
    var _a, navigationDb, navigation, navigationDb, navigation, index, newNav, navigationDb, navigation, idToUpdate_1, indexToRemove, navToUpdate, navigationDb, navigation, idToRemove_1, indexToRemove;
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
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 6:
                navigationDb = _b.sent();
                navigation = navigationDb.navigation;
                idToUpdate_1 = message.payload.id;
                indexToRemove = navigation.findIndex(function (nav) { return nav.id === idToUpdate_1; });
                navToUpdate = navigation[indexToRemove];
                navToUpdate.host = message.payload.host;
                navToUpdate.name = message.payload.name;
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 10];
            case 7: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 8:
                navigationDb = _b.sent();
                navigation = navigationDb.navigation;
                idToRemove_1 = message.payload.id;
                indexToRemove = navigation.findIndex(function (nav) { return nav.id === idToRemove_1; });
                navigation.splice(indexToRemove, 1);
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


/***/ }),

/***/ 862:
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
var _1 = __webpack_require__(6);
var helper_1 = __webpack_require__(864);
var defaultHandler = function (message, _, sendResponse) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, tab, tab, nextHost, newUrl;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(message && message.type)) return [3 /*break*/, 6];
                _a = message.type;
                switch (_a) {
                    case _1.TabType.GET_URL: return [3 /*break*/, 1];
                    case _1.TabType.SET_URL: return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, (0, helper_1.getCurrentTab)()];
            case 2:
                tab = _b.sent();
                if (tab) {
                    sendResponse({ url: tab.url });
                }
                sendResponse({});
                return [3 /*break*/, 6];
            case 3: return [4 /*yield*/, (0, helper_1.getCurrentTab)()];
            case 4:
                tab = _b.sent();
                nextHost = message.payload.url;
                if (tab) {
                    newUrl = (0, helper_1.changeHost)(tab.url, nextHost);
                    chrome.tabs.update(tab.id, { url: newUrl.toString() });
                }
                return [3 /*break*/, 6];
            case 5:
                {
                    sendResponse({});
                }
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.defaultHandler = defaultHandler;


/***/ }),

/***/ 864:
/***/ (function(__unused_webpack_module, exports) {


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
exports.changeHost = exports.getCurrentTab = void 0;
var currentTabQueryInfo = { active: true };
var getCurrentTab = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tab;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, chrome.tabs.query(currentTabQueryInfo)];
            case 1:
                tab = (_a.sent())[0];
                return [2 /*return*/, tab];
        }
    });
}); };
exports.getCurrentTab = getCurrentTab;
var changeHost = function (currentUrl, newHost) {
    var url = new URL(currentUrl);
    var newUrl = new URL(newHost);
    url.host = newUrl.host;
    return url;
};
exports.changeHost = changeHost;


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TabType = void 0;
var TabType;
(function (TabType) {
    TabType["GET_URL"] = "GET_URL";
    TabType["SET_URL"] = "SET_URL";
})(TabType || (exports.TabType = TabType = {}));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7Ozs7Ozs7QUNyQkEseUNBQW1FO0FBR25FLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFDLEVBQVU7UUFBUixNQUFNO0lBQzlDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQU0sVUFBVSxHQUFpQixFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLFVBQVU7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQUMsT0FBZ0IsRUFBRSxDQUFRLEVBQUUsWUFBNEI7SUFDNUYsNEJBQWMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL21lc3NhZ2UvaGFuZGxlci50cyIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL21lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC9uYXZpZ2F0aW9uL2hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC9uYXZpZ2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvdGFiL2hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC90YWIvaGVscGVyLnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvdGFiL2luZGV4LnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSwgVHlwZSB9IGZyb20gXCIuXCI7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0SGFuZGxlciBhcyBuYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gJ2JhY2tncm91bmQvbmF2aWdhdGlvbi9oYW5kbGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEhhbmRsZXIgYXMgdGFiSGFuZGxlciB9IGZyb20gXCJiYWNrZ3JvdW5kL3RhYi9oYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zZVNlbmRlciA9IChlOiB1bmtub3duKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIYW5kbGVyID0gYXN5bmMgKG1lc3NhZ2U6IE1lc3NhZ2UsIF86IG5ldmVyLCBzZW5kUmVzcG9uc2U6IFJlc3BvbnNlU2VuZGVyKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2UgJiYgbWVzc2FnZS50eXBlKSB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIFR5cGUuTkFWOiB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkhhbmRsZXIobWVzc2FnZS5wYXlsb2FkLCBfLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVHlwZS5UQUI6IHtcclxuICAgICAgICB0YWJIYW5kbGVyKG1lc3NhZ2UucGF5bG9hZCwgXywgc2VuZFJlc3BvbnNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHt9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IE5hdk1lc3NhZ2VQYXlsb2FkIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IFRhYk1lc3NhZ2VQYXlsb2FkIH0gZnJvbSAnLi4vdGFiL2luZGV4JztcclxuXHJcbmV4cG9ydCBlbnVtIFR5cGUge1xyXG4gIFRBQiA9ICdUQUInLFxyXG4gIE5BViA9ICdOQVZJR0FUSU9OJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9IFRhYk1lc3NhZ2UgfCBOYXZNZXNzYWdlO1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZU1lc3NhZ2U8VD4gPSB7XHJcbiAgcGF5bG9hZDogVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUYWJNZXNzYWdlID0ge1xyXG4gIHR5cGU6IFR5cGUuVEFCO1xyXG59ICYgQmFzZU1lc3NhZ2U8VGFiTWVzc2FnZVBheWxvYWQ+XHJcblxyXG5leHBvcnQgdHlwZSBOYXZNZXNzYWdlID0ge1xyXG4gIHR5cGU6IFR5cGUuTkFWO1xyXG59ICYgQmFzZU1lc3NhZ2U8TmF2TWVzc2FnZVBheWxvYWQ+O1xyXG4iLCJpbXBvcnQgeyBOYXZNZXNzYWdlUGF5bG9hZCwgTmF2VHlwZSB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiQHJvb3QvZmVhdHVyZS9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zZVNlbmRlciA9IChlOiB1bmtub3duKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIYW5kbGVyID0gYXN5bmMgKG1lc3NhZ2U6IE5hdk1lc3NhZ2VQYXlsb2FkLCBfOiBuZXZlciwgc2VuZFJlc3BvbnNlOiBSZXNwb25zZVNlbmRlcikgPT4ge1xyXG4gIGlmIChtZXNzYWdlICYmIG1lc3NhZ2UudHlwZSkge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSBOYXZUeXBlLkdFVF9BTEw6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRGIgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ25hdmlnYXRpb24nKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbkRiLm5hdmlnYXRpb247XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbmF2aWdhdGlvbiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5hdlR5cGUuQUREOiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkRiID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCduYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IG5hdmlnYXRpb25EYi5uYXZpZ2F0aW9uIGFzIE5hdmlnYXRpb25bXTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IG5hdmlnYXRpb24ubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG5ld05hdjogTmF2aWdhdGlvbiA9IHsgaWQ6IGluZGV4LCBuYW1lOiBtZXNzYWdlLnBheWxvYWQubmFtZSwgaG9zdDogbWVzc2FnZS5wYXlsb2FkLmhvc3QgfTtcclxuICAgICAgICBuYXZpZ2F0aW9uLnB1c2gobmV3TmF2KTtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTmF2VHlwZS5VUERBVEVfQllfSUQ6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRGIgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ25hdmlnYXRpb24nKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbkRiLm5hdmlnYXRpb24gYXMgTmF2aWdhdGlvbltdO1xyXG4gICAgICAgIGNvbnN0IGlkVG9VcGRhdGUgPSBtZXNzYWdlLnBheWxvYWQuaWQ7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IG5hdmlnYXRpb24uZmluZEluZGV4KChuYXYpID0+IG5hdi5pZCA9PT0gaWRUb1VwZGF0ZSk7XHJcbiAgICAgICAgY29uc3QgbmF2VG9VcGRhdGUgPSBuYXZpZ2F0aW9uW2luZGV4VG9SZW1vdmVdO1xyXG4gICAgICAgIG5hdlRvVXBkYXRlLmhvc3QgPSBtZXNzYWdlLnBheWxvYWQuaG9zdDtcclxuICAgICAgICBuYXZUb1VwZGF0ZS5uYW1lID0gbWVzc2FnZS5wYXlsb2FkLm5hbWU7XHJcblxyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbmF2aWdhdGlvbiB9KTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOYXZUeXBlLlJFTU9WRV9CWV9JRDoge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25EYiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnbmF2aWdhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uRGIubmF2aWdhdGlvbiBhcyBOYXZpZ2F0aW9uW107XHJcbiAgICAgICAgY29uc3QgaWRUb1JlbW92ZSA9IG1lc3NhZ2UucGF5bG9hZC5pZDtcclxuICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gbmF2aWdhdGlvbi5maW5kSW5kZXgoKG5hdikgPT4gbmF2LmlkID09PSBpZFRvUmVtb3ZlKTtcclxuICAgICAgICBuYXZpZ2F0aW9uLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcclxuXHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgbmF2aWdhdGlvbiB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCJAcm9vdC9mZWF0dXJlL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgUmVtb3ZlQWN0aW9uVHlwZSB9IGZyb20gXCJAcm9vdC9mZWF0dXJlL25hdmlnYXRpb24vbmF2aWdhdGlvblNsaWNlL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIE5hdlR5cGUge1xyXG4gIEdFVF9BTEwgPSAnR0VUX0FMTCcsXHJcbiAgR0VUX0JZX0lEID0gJ0dFVF9CWV9JRCcsXHJcbiAgVVBEQVRFX0JZX0lEID0gJ1VQREFURScsXHJcbiAgQUREID0gJ0FERCcsXHJcbiAgUkVNT1ZFX0JZX0lEID0gJ1JFTU9WRV9CWV9JRCdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTmF2TWVzc2FnZVBheWxvYWQgPSBHZXRBbGxNZXNzYWdlIHwgQWRkTWVzc2FnZSB8IFVwZGF0ZU1lc3NhZ2UgfCBSZW1vdmVNZXNzYWdlO1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZU5hdk1lc3NhZ2U8VD4gPSB7XHJcbiAgcGF5bG9hZDogVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRBbGxNZXNzYWdlID0ge1xyXG4gIHR5cGU6IE5hdlR5cGUuR0VUX0FMTDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWRkTWVzc2FnZSA9IHtcclxuICB0eXBlOiBOYXZUeXBlLkFERDtcclxufSAmIEJhc2VOYXZNZXNzYWdlPFBpY2s8TmF2aWdhdGlvbiwgJ2hvc3QnIHwgJ25hbWUnPj5cclxuXHJcbmV4cG9ydCB0eXBlIFVwZGF0ZU1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogTmF2VHlwZS5VUERBVEVfQllfSUQ7XHJcbn0gJiBCYXNlTmF2TWVzc2FnZTxOYXZpZ2F0aW9uPjtcclxuXHJcbmV4cG9ydCB0eXBlIFJlbW92ZU1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogTmF2VHlwZS5SRU1PVkVfQllfSUQ7XHJcbn0gJiBCYXNlTmF2TWVzc2FnZTxSZW1vdmVBY3Rpb25UeXBlPjsiLCJpbXBvcnQgeyBUYWJNZXNzYWdlUGF5bG9hZCwgVGFiVHlwZSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IGNoYW5nZUhvc3QsIGdldEN1cnJlbnRUYWIgfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zZVNlbmRlciA9IChlOiB1bmtub3duKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIYW5kbGVyID0gYXN5bmMgKG1lc3NhZ2U6IFRhYk1lc3NhZ2VQYXlsb2FkLCBfOiBuZXZlciwgc2VuZFJlc3BvbnNlOiBSZXNwb25zZVNlbmRlcikgPT4ge1xyXG4gIGlmIChtZXNzYWdlICYmIG1lc3NhZ2UudHlwZSkge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSBUYWJUeXBlLkdFVF9VUkw6IHtcclxuICAgICAgICBjb25zdCB0YWIgPSBhd2FpdCBnZXRDdXJyZW50VGFiKCk7XHJcbiAgICAgICAgaWYgKHRhYikge1xyXG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgdXJsOiB0YWIudXJsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVGFiVHlwZS5TRVRfVVJMOiB7XHJcbiAgICAgICAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xyXG4gICAgICAgIGNvbnN0IG5leHRIb3N0ID0gbWVzc2FnZS5wYXlsb2FkLnVybDtcclxuICAgICAgICBpZiAodGFiKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdVcmwgPSBjaGFuZ2VIb3N0KHRhYi51cmwsIG5leHRIb3N0KTtcclxuICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWIuaWQsIHsgdXJsOiBuZXdVcmwudG9TdHJpbmcoKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7fSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJjb25zdCBjdXJyZW50VGFiUXVlcnlJbmZvID0geyBhY3RpdmU6IHRydWUgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VGFiID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoY3VycmVudFRhYlF1ZXJ5SW5mbyk7XHJcbiAgcmV0dXJuIHRhYjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZUhvc3QgPSAoY3VycmVudFVybDogc3RyaW5nLCBuZXdIb3N0OiBzdHJpbmcpOiBVUkwgPT4ge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoY3VycmVudFVybCk7XHJcbiAgY29uc3QgbmV3VXJsID0gbmV3IFVSTChuZXdIb3N0KTtcclxuXHJcblxyXG4gIHVybC5ob3N0ID0gbmV3VXJsLmhvc3Q7XHJcblxyXG4gIHJldHVybiB1cmw7XHJcbn0iLCJleHBvcnQgZW51bSBUYWJUeXBlIHtcclxuICBHRVRfVVJMID0gJ0dFVF9VUkwnLFxyXG4gIFNFVF9VUkwgPSAnU0VUX1VSTCcsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRhYk1lc3NhZ2VQYXlsb2FkID0gR2V0VXJsTWVzc2FnZSB8IFNldFVybE1lc3NhZ2U7XHJcblxyXG5leHBvcnQgdHlwZSBCYXNlVGFiTWVzc2FnZTxUPiA9IHtcclxuICBwYXlsb2FkOiBUXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFVybE1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogVGFiVHlwZS5HRVRfVVJMO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgU2V0VXJsTWVzc2FnZSA9IHtcclxuICB0eXBlOiBUYWJUeXBlLlNFVF9VUkw7XHJcbn0gJiBCYXNlVGFiTWVzc2FnZTx7IHVybDogc3RyaW5nIH0+XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IGRlZmF1bHRIYW5kbGVyLCBSZXNwb25zZVNlbmRlciB9IGZyb20gJy4vbWVzc2FnZS9oYW5kbGVyJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJ0Byb290L2ZlYXR1cmUvbmF2aWdhdGlvbic7XHJcblxyXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoeyByZWFzb24gfSkgPT4ge1xyXG4gIGlmIChyZWFzb24gPT09ICdpbnN0YWxsJykge1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbjogTmF2aWdhdGlvbltdID0gW107XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xyXG4gICAgICBuYXZpZ2F0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcbn0pXHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2U6IE1lc3NhZ2UsIF86IG5ldmVyLCBzZW5kUmVzcG9uc2U6IFJlc3BvbnNlU2VuZGVyKSA9PiB7XHJcbiAgZGVmYXVsdEhhbmRsZXIobWVzc2FnZSwgXywgc2VuZFJlc3BvbnNlKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9