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
    var _a, navigationDb, navigation, navigationDb, navigation, index, newNav, navigationDb, navigation, idToUpdate_1, indexToRemove, navToUpdate, _b, host, name_1, navigationDb, navigation, idToRemove_1, indexToRemove;
    return __generator(this, function (_c) {
        switch (_c.label) {
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
                navigationDb = _c.sent();
                navigation = navigationDb.navigation;
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 10];
            case 3: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 4:
                navigationDb = _c.sent();
                navigation = navigationDb.navigation;
                index = navigation.length;
                newNav = { id: index, name: message.payload.name, host: message.payload.host };
                navigation.push(newNav);
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 6:
                navigationDb = _c.sent();
                navigation = navigationDb.navigation;
                idToUpdate_1 = message.payload.id;
                indexToRemove = navigation.findIndex(function (nav) { return nav.id === idToUpdate_1; });
                navToUpdate = navigation[indexToRemove];
                _b = message.payload, host = _b.host, name_1 = _b.name;
                if (typeof host === 'string') {
                    navToUpdate.host = message.payload.host;
                }
                if (typeof name_1 === 'string') {
                    navToUpdate.name = message.payload.name;
                }
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                return [3 /*break*/, 10];
            case 7: return [4 /*yield*/, chrome.storage.local.get('navigation')];
            case 8:
                navigationDb = _c.sent();
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
                _c.label = 10;
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
    var _a, tab, tab, nextHost, newUrl, tab, url, tab, path, newUrl;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(message && message.type)) return [3 /*break*/, 14];
                _a = message.type;
                switch (_a) {
                    case _1.TabType.GET_URL: return [3 /*break*/, 1];
                    case _1.TabType.SET_URL: return [3 /*break*/, 3];
                    case _1.TabType.GET_PATH: return [3 /*break*/, 7];
                    case _1.TabType.SET_PATH: return [3 /*break*/, 9];
                }
                return [3 /*break*/, 13];
            case 1: return [4 /*yield*/, (0, helper_1.getCurrentTab)()];
            case 2:
                tab = _b.sent();
                if (tab) {
                    sendResponse({ url: tab.url });
                }
                sendResponse({});
                return [3 /*break*/, 14];
            case 3: return [4 /*yield*/, (0, helper_1.getCurrentTab)()];
            case 4:
                tab = _b.sent();
                nextHost = message.payload.url;
                if (!tab) return [3 /*break*/, 6];
                newUrl = (0, helper_1.changeHost)(tab.url, nextHost);
                return [4 /*yield*/, chrome.tabs.update(tab.id, { url: newUrl.toString() })];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6:
                sendResponse({});
                return [3 /*break*/, 14];
            case 7: return [4 /*yield*/, (0, helper_1.getCurrentTab)()];
            case 8:
                tab = _b.sent();
                if (tab) {
                    url = new URL(tab.url);
                    if (url.pathname) {
                        sendResponse({ success: true, payload: { path: url.pathname } });
                        return [2 /*return*/];
                    }
                }
                sendResponse({ success: false });
                return [3 /*break*/, 14];
            case 9: return [4 /*yield*/, (0, helper_1.getCurrentTab)()];
            case 10:
                tab = _b.sent();
                path = message.payload.path;
                if (!tab) return [3 /*break*/, 12];
                newUrl = (0, helper_1.changePath)(tab.url, path);
                return [4 /*yield*/, chrome.tabs.update(tab.id, { url: newUrl })];
            case 11:
                _b.sent();
                sendResponse({ success: true });
                return [2 /*return*/];
            case 12:
                sendResponse({ success: false });
                return [3 /*break*/, 14];
            case 13:
                {
                    sendResponse({});
                }
                _b.label = 14;
            case 14: return [2 /*return*/];
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
exports.changePath = exports.changeHost = exports.getCurrentTab = void 0;
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
var changePath = function (currentUrl, newPath) {
    var url = new URL(currentUrl);
    var newUrl = new URL(url.origin);
    return newUrl + newPath;
};
exports.changePath = changePath;


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TabType = void 0;
var TabType;
(function (TabType) {
    TabType["GET_URL"] = "GET_URL";
    TabType["SET_URL"] = "SET_URL";
    TabType["GET_PATH"] = "GET_PATH";
    TabType["SET_PATH"] = "SET_PATH";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrZ3JvdW5kL21lc3NhZ2UvaGFuZGxlci50cyIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL21lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC9uYXZpZ2F0aW9uL2hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC9uYXZpZ2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvdGFiL2hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC90YWIvaGVscGVyLnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvdGFiL2luZGV4LnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSwgVHlwZSB9IGZyb20gXCIuXCI7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0SGFuZGxlciBhcyBuYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gJ2JhY2tncm91bmQvbmF2aWdhdGlvbi9oYW5kbGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEhhbmRsZXIgYXMgdGFiSGFuZGxlciB9IGZyb20gXCJiYWNrZ3JvdW5kL3RhYi9oYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zZVNlbmRlciA9IChlOiB1bmtub3duKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIYW5kbGVyID0gYXN5bmMgKG1lc3NhZ2U6IE1lc3NhZ2UsIF86IG5ldmVyLCBzZW5kUmVzcG9uc2U6IFJlc3BvbnNlU2VuZGVyKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2UgJiYgbWVzc2FnZS50eXBlKSB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIFR5cGUuTkFWOiB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkhhbmRsZXIobWVzc2FnZS5wYXlsb2FkLCBfLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVHlwZS5UQUI6IHtcclxuICAgICAgICB0YWJIYW5kbGVyKG1lc3NhZ2UucGF5bG9hZCwgXywgc2VuZFJlc3BvbnNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHt9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IE5hdk1lc3NhZ2VQYXlsb2FkIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IFRhYk1lc3NhZ2VQYXlsb2FkIH0gZnJvbSAnLi4vdGFiL2luZGV4JztcclxuXHJcbmV4cG9ydCBlbnVtIFR5cGUge1xyXG4gIFRBQiA9ICdUQUInLFxyXG4gIE5BViA9ICdOQVZJR0FUSU9OJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9IFRhYk1lc3NhZ2UgfCBOYXZNZXNzYWdlO1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZU1lc3NhZ2U8VD4gPSB7XHJcbiAgcGF5bG9hZDogVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUYWJNZXNzYWdlID0ge1xyXG4gIHR5cGU6IFR5cGUuVEFCO1xyXG59ICYgQmFzZU1lc3NhZ2U8VGFiTWVzc2FnZVBheWxvYWQ+XHJcblxyXG5leHBvcnQgdHlwZSBOYXZNZXNzYWdlID0ge1xyXG4gIHR5cGU6IFR5cGUuTkFWO1xyXG59ICYgQmFzZU1lc3NhZ2U8TmF2TWVzc2FnZVBheWxvYWQ+O1xyXG4iLCJpbXBvcnQgeyBOYXZNZXNzYWdlUGF5bG9hZCwgTmF2VHlwZSB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiQHJvb3QvZmVhdHVyZS9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zZVNlbmRlciA9IChlOiB1bmtub3duKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIYW5kbGVyID0gYXN5bmMgKG1lc3NhZ2U6IE5hdk1lc3NhZ2VQYXlsb2FkLCBfOiBuZXZlciwgc2VuZFJlc3BvbnNlOiBSZXNwb25zZVNlbmRlcikgPT4ge1xyXG4gIGlmIChtZXNzYWdlICYmIG1lc3NhZ2UudHlwZSkge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSBOYXZUeXBlLkdFVF9BTEw6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRGIgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ25hdmlnYXRpb24nKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbkRiLm5hdmlnYXRpb247XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbmF2aWdhdGlvbiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5hdlR5cGUuQUREOiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkRiID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCduYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IG5hdmlnYXRpb25EYi5uYXZpZ2F0aW9uIGFzIE5hdmlnYXRpb25bXTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IG5hdmlnYXRpb24ubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG5ld05hdjogTmF2aWdhdGlvbiA9IHsgaWQ6IGluZGV4LCBuYW1lOiBtZXNzYWdlLnBheWxvYWQubmFtZSwgaG9zdDogbWVzc2FnZS5wYXlsb2FkLmhvc3QgfTtcclxuICAgICAgICBuYXZpZ2F0aW9uLnB1c2gobmV3TmF2KTtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTmF2VHlwZS5VUERBVEVfQllfSUQ6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRGIgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ25hdmlnYXRpb24nKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbkRiLm5hdmlnYXRpb24gYXMgTmF2aWdhdGlvbltdO1xyXG4gICAgICAgIGNvbnN0IGlkVG9VcGRhdGUgPSBtZXNzYWdlLnBheWxvYWQuaWQ7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IG5hdmlnYXRpb24uZmluZEluZGV4KChuYXYpID0+IG5hdi5pZCA9PT0gaWRUb1VwZGF0ZSk7XHJcbiAgICAgICAgY29uc3QgbmF2VG9VcGRhdGUgPSBuYXZpZ2F0aW9uW2luZGV4VG9SZW1vdmVdO1xyXG4gICAgICAgIGNvbnN0IHsgaG9zdCwgbmFtZSB9ID0gbWVzc2FnZS5wYXlsb2FkO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaG9zdCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIG5hdlRvVXBkYXRlLmhvc3QgPSBtZXNzYWdlLnBheWxvYWQuaG9zdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgbmF2VG9VcGRhdGUubmFtZSA9IG1lc3NhZ2UucGF5bG9hZC5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTmF2VHlwZS5SRU1PVkVfQllfSUQ6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRGIgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ25hdmlnYXRpb24nKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbkRiLm5hdmlnYXRpb24gYXMgTmF2aWdhdGlvbltdO1xyXG4gICAgICAgIGNvbnN0IGlkVG9SZW1vdmUgPSBtZXNzYWdlLnBheWxvYWQuaWQ7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IG5hdmlnYXRpb24uZmluZEluZGV4KChuYXYpID0+IG5hdi5pZCA9PT0gaWRUb1JlbW92ZSk7XHJcbiAgICAgICAgbmF2aWdhdGlvbi5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XHJcblxyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbmF2aWdhdGlvbiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHt9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiQHJvb3QvZmVhdHVyZS9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IFJlbW92ZUFjdGlvblR5cGUgfSBmcm9tIFwiQHJvb3QvZmVhdHVyZS9uYXZpZ2F0aW9uL25hdmlnYXRpb25TbGljZS9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZW51bSBOYXZUeXBlIHtcclxuICBHRVRfQUxMID0gJ0dFVF9BTEwnLFxyXG4gIEdFVF9CWV9JRCA9ICdHRVRfQllfSUQnLFxyXG4gIFVQREFURV9CWV9JRCA9ICdVUERBVEUnLFxyXG4gIEFERCA9ICdBREQnLFxyXG4gIFJFTU9WRV9CWV9JRCA9ICdSRU1PVkVfQllfSUQnXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5hdk1lc3NhZ2VQYXlsb2FkID0gR2V0QWxsTWVzc2FnZSB8IEFkZE1lc3NhZ2UgfCBVcGRhdGVNZXNzYWdlIHwgUmVtb3ZlTWVzc2FnZTtcclxuXHJcbmV4cG9ydCB0eXBlIEJhc2VOYXZNZXNzYWdlPFQ+ID0ge1xyXG4gIHBheWxvYWQ6IFRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0QWxsTWVzc2FnZSA9IHtcclxuICB0eXBlOiBOYXZUeXBlLkdFVF9BTEw7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZE1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogTmF2VHlwZS5BREQ7XHJcbn0gJiBCYXNlTmF2TWVzc2FnZTxQaWNrPE5hdmlnYXRpb24sICdob3N0JyB8ICduYW1lJz4+XHJcblxyXG5leHBvcnQgdHlwZSBVcGRhdGVNZXNzYWdlID0ge1xyXG4gIHR5cGU6IE5hdlR5cGUuVVBEQVRFX0JZX0lEO1xyXG59ICYgQmFzZU5hdk1lc3NhZ2U8UGFydGlhbDxOYXZpZ2F0aW9uPj47XHJcblxyXG5leHBvcnQgdHlwZSBSZW1vdmVNZXNzYWdlID0ge1xyXG4gIHR5cGU6IE5hdlR5cGUuUkVNT1ZFX0JZX0lEO1xyXG59ICYgQmFzZU5hdk1lc3NhZ2U8UmVtb3ZlQWN0aW9uVHlwZT47IiwiaW1wb3J0IHsgVGFiTWVzc2FnZVBheWxvYWQsIFRhYlR5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IGNoYW5nZUhvc3QsIGNoYW5nZVBhdGgsIGdldEN1cnJlbnRUYWIgfSBmcm9tICcuL2hlbHBlcic7XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNlU2VuZGVyID0gKGU6IHVua25vd24pID0+IHZvaWQ7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SGFuZGxlciA9IGFzeW5jIChcbiAgbWVzc2FnZTogVGFiTWVzc2FnZVBheWxvYWQsXG4gIF86IG5ldmVyLFxuICBzZW5kUmVzcG9uc2U6IFJlc3BvbnNlU2VuZGVyXG4pID0+IHtcbiAgaWYgKG1lc3NhZ2UgJiYgbWVzc2FnZS50eXBlKSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgVGFiVHlwZS5HRVRfVVJMOiB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcbiAgICAgICAgaWYgKHRhYikge1xuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHVybDogdGFiLnVybCB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgVGFiVHlwZS5TRVRfVVJMOiB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcbiAgICAgICAgY29uc3QgbmV4dEhvc3QgPSBtZXNzYWdlLnBheWxvYWQudXJsO1xuICAgICAgICBpZiAodGFiKSB7XG4gICAgICAgICAgY29uc3QgbmV3VXJsID0gY2hhbmdlSG9zdCh0YWIudXJsLCBuZXh0SG9zdCk7XG4gICAgICAgICAgYXdhaXQgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCwgeyB1cmw6IG5ld1VybC50b1N0cmluZygpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNlbmRSZXNwb25zZSh7fSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBUYWJUeXBlLkdFVF9QQVRIOiB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcbiAgICAgICAgaWYgKHRhYikge1xuICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGFiLnVybCk7XG4gICAgICAgICAgaWYgKHVybC5wYXRobmFtZSkge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSwgcGF5bG9hZDogeyBwYXRoOiB1cmwucGF0aG5hbWUgfSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBUYWJUeXBlLlNFVF9QQVRIOiB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IG1lc3NhZ2UucGF5bG9hZC5wYXRoO1xuICAgICAgICBpZiAodGFiKSB7XG4gICAgICAgICAgY29uc3QgbmV3VXJsID0gY2hhbmdlUGF0aCh0YWIudXJsLCBwYXRoKTtcbiAgICAgICAgICBhd2FpdCBjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogbmV3VXJsIH0pO1xuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHt9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCJjb25zdCBjdXJyZW50VGFiUXVlcnlJbmZvID0geyBhY3RpdmU6IHRydWUgfTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRUYWIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoY3VycmVudFRhYlF1ZXJ5SW5mbyk7XG4gIHJldHVybiB0YWI7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlSG9zdCA9IChjdXJyZW50VXJsOiBzdHJpbmcsIG5ld0hvc3Q6IHN0cmluZyk6IFVSTCA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoY3VycmVudFVybCk7XG4gIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwobmV3SG9zdCk7XG5cbiAgdXJsLmhvc3QgPSBuZXdVcmwuaG9zdDtcblxuICByZXR1cm4gdXJsO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhdGggPSAoY3VycmVudFVybDogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKGN1cnJlbnRVcmwpO1xuICBjb25zdCBuZXdVcmwgPSBuZXcgVVJMKHVybC5vcmlnaW4pO1xuICByZXR1cm4gbmV3VXJsICsgbmV3UGF0aDtcbn07XG4iLCJleHBvcnQgZW51bSBUYWJUeXBlIHtcclxuICBHRVRfVVJMID0gJ0dFVF9VUkwnLFxyXG4gIFNFVF9VUkwgPSAnU0VUX1VSTCcsXHJcbiAgR0VUX1BBVEggPSAnR0VUX1BBVEgnLFxyXG4gIFNFVF9QQVRIID0gJ1NFVF9QQVRIJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGFiTWVzc2FnZVBheWxvYWQgPSBHZXRVcmxNZXNzYWdlIHwgU2V0VXJsTWVzc2FnZSB8IEdldFBhdGhNZXNzYWdlIHwgU2V0UGF0aE1lc3NhZ2U7XHJcblxyXG5leHBvcnQgdHlwZSBCYXNlVGFiTWVzc2FnZTxUPiA9IHtcclxuICBwYXlsb2FkOiBUXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFVybE1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogVGFiVHlwZS5HRVRfVVJMO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgU2V0VXJsTWVzc2FnZSA9IHtcclxuICB0eXBlOiBUYWJUeXBlLlNFVF9VUkw7XHJcbn0gJiBCYXNlVGFiTWVzc2FnZTx7IHVybDogc3RyaW5nIH0+XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYXRoTWVzc2FnZSA9IHtcclxuICB0eXBlOiBUYWJUeXBlLkdFVF9QQVRIO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZXRQYXRoTWVzc2FnZSA9IHtcclxuICB0eXBlOiBUYWJUeXBlLlNFVF9QQVRIO1xyXG59ICYgQmFzZVRhYk1lc3NhZ2U8eyBwYXRoOiBzdHJpbmcgfT47XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IGRlZmF1bHRIYW5kbGVyLCBSZXNwb25zZVNlbmRlciB9IGZyb20gJy4vbWVzc2FnZS9oYW5kbGVyJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJ0Byb290L2ZlYXR1cmUvbmF2aWdhdGlvbic7XHJcblxyXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoeyByZWFzb24gfSkgPT4ge1xyXG4gIGlmIChyZWFzb24gPT09ICdpbnN0YWxsJykge1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbjogTmF2aWdhdGlvbltdID0gW107XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xyXG4gICAgICBuYXZpZ2F0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcbn0pXHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2U6IE1lc3NhZ2UsIF86IG5ldmVyLCBzZW5kUmVzcG9uc2U6IFJlc3BvbnNlU2VuZGVyKSA9PiB7XHJcbiAgZGVmYXVsdEhhbmRsZXIobWVzc2FnZSwgXywgc2VuZFJlc3BvbnNlKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9