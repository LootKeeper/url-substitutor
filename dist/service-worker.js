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
    var _a, tab, tab, nextHost, newUrl;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(message && message.type)) return [3 /*break*/, 8];
                _a = message.type;
                switch (_a) {
                    case _1.TabType.GET_URL: return [3 /*break*/, 1];
                    case _1.TabType.SET_URL: return [3 /*break*/, 3];
                }
                return [3 /*break*/, 7];
            case 1: return [4 /*yield*/, (0, helper_1.getCurrentTab)()];
            case 2:
                tab = _b.sent();
                if (tab) {
                    sendResponse({ url: tab.url });
                }
                sendResponse({});
                return [3 /*break*/, 8];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ2ZELElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNqQiw4QkFBbUI7SUFDbkIsOEJBQW1CO0FBQ3JCLENBQUMsRUFIVyxPQUFPLHVCQUFQLE9BQU8sUUFHbEI7Ozs7Ozs7VUNIRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDckJBLHlDQUFtRTtBQUduRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBQyxFQUFVO1FBQVIsTUFBTTtJQUM5QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFNLFVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN2QixVQUFVO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFDLE9BQWdCLEVBQUUsQ0FBUSxFQUFFLFlBQTRCO0lBQzVGLDRCQUFjLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6QyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC9tZXNzYWdlL2hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvbmF2aWdhdGlvbi9oYW5kbGVyLnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvbmF2aWdhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL3RhYi9oYW5kbGVyLnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci8uL2JhY2tncm91bmQvdGFiL2hlbHBlci50cyIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL3RhYi9pbmRleC50cyIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UsIFR5cGUgfSBmcm9tIFwiLlwiO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdEhhbmRsZXIgYXMgbmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tICdiYWNrZ3JvdW5kL25hdmlnYXRpb24vaGFuZGxlcic7XHJcbmltcG9ydCB7IGRlZmF1bHRIYW5kbGVyIGFzIHRhYkhhbmRsZXIgfSBmcm9tIFwiYmFja2dyb3VuZC90YWIvaGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVzcG9uc2VTZW5kZXIgPSAoZTogdW5rbm93bikgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGFuZGxlciA9IGFzeW5jIChtZXNzYWdlOiBNZXNzYWdlLCBfOiBuZXZlciwgc2VuZFJlc3BvbnNlOiBSZXNwb25zZVNlbmRlcikgPT4ge1xyXG4gIGlmIChtZXNzYWdlICYmIG1lc3NhZ2UudHlwZSkge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSBUeXBlLk5BVjoge1xyXG4gICAgICAgIG5hdmlnYXRpb25IYW5kbGVyKG1lc3NhZ2UucGF5bG9hZCwgXywgc2VuZFJlc3BvbnNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFR5cGUuVEFCOiB7XHJcbiAgICAgICAgdGFiSGFuZGxlcihtZXNzYWdlLnBheWxvYWQsIF8sIHNlbmRSZXNwb25zZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7fSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBOYXZNZXNzYWdlUGF5bG9hZCB9IGZyb20gJy4uL25hdmlnYXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBUYWJNZXNzYWdlUGF5bG9hZCB9IGZyb20gJy4uL3RhYi9pbmRleCc7XHJcblxyXG5leHBvcnQgZW51bSBUeXBlIHtcclxuICBUQUIgPSAnVEFCJyxcclxuICBOQVYgPSAnTkFWSUdBVElPTicsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE1lc3NhZ2UgPSBUYWJNZXNzYWdlIHwgTmF2TWVzc2FnZTtcclxuXHJcbmV4cG9ydCB0eXBlIEJhc2VNZXNzYWdlPFQ+ID0ge1xyXG4gIHBheWxvYWQ6IFRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGFiTWVzc2FnZSA9IHtcclxuICB0eXBlOiBUeXBlLlRBQjtcclxufSAmIEJhc2VNZXNzYWdlPFRhYk1lc3NhZ2VQYXlsb2FkPlxyXG5cclxuZXhwb3J0IHR5cGUgTmF2TWVzc2FnZSA9IHtcclxuICB0eXBlOiBUeXBlLk5BVjtcclxufSAmIEJhc2VNZXNzYWdlPE5hdk1lc3NhZ2VQYXlsb2FkPjtcclxuIiwiaW1wb3J0IHsgTmF2TWVzc2FnZVBheWxvYWQsIE5hdlR5cGUgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIkByb290L2ZlYXR1cmUvbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVzcG9uc2VTZW5kZXIgPSAoZTogdW5rbm93bikgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGFuZGxlciA9IGFzeW5jIChtZXNzYWdlOiBOYXZNZXNzYWdlUGF5bG9hZCwgXzogbmV2ZXIsIHNlbmRSZXNwb25zZTogUmVzcG9uc2VTZW5kZXIpID0+IHtcclxuICBpZiAobWVzc2FnZSAmJiBtZXNzYWdlLnR5cGUpIHtcclxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgTmF2VHlwZS5HRVRfQUxMOiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkRiID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCduYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IG5hdmlnYXRpb25EYi5uYXZpZ2F0aW9uO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOYXZUeXBlLkFERDoge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25EYiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnbmF2aWdhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uRGIubmF2aWdhdGlvbiBhcyBOYXZpZ2F0aW9uW107XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuYXZpZ2F0aW9uLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBuZXdOYXY6IE5hdmlnYXRpb24gPSB7IGlkOiBpbmRleCwgbmFtZTogbWVzc2FnZS5wYXlsb2FkLm5hbWUsIGhvc3Q6IG1lc3NhZ2UucGF5bG9hZC5ob3N0IH07XHJcbiAgICAgICAgbmF2aWdhdGlvbi5wdXNoKG5ld05hdik7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgbmF2aWdhdGlvbiB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBuYXZpZ2F0aW9uIH0pO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5hdlR5cGUuVVBEQVRFX0JZX0lEOiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkRiID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCduYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IG5hdmlnYXRpb25EYi5uYXZpZ2F0aW9uIGFzIE5hdmlnYXRpb25bXTtcclxuICAgICAgICBjb25zdCBpZFRvVXBkYXRlID0gbWVzc2FnZS5wYXlsb2FkLmlkO1xyXG4gICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSBuYXZpZ2F0aW9uLmZpbmRJbmRleCgobmF2KSA9PiBuYXYuaWQgPT09IGlkVG9VcGRhdGUpO1xyXG4gICAgICAgIGNvbnN0IG5hdlRvVXBkYXRlID0gbmF2aWdhdGlvbltpbmRleFRvUmVtb3ZlXTtcclxuICAgICAgICBjb25zdCB7IGhvc3QsIG5hbWUgfSA9IG1lc3NhZ2UucGF5bG9hZDtcclxuICAgICAgICBpZiAodHlwZW9mIGhvc3QgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBuYXZUb1VwZGF0ZS5ob3N0ID0gbWVzc2FnZS5wYXlsb2FkLmhvc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIG5hdlRvVXBkYXRlLm5hbWUgPSBtZXNzYWdlLnBheWxvYWQubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgbmF2aWdhdGlvbiB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBuYXZpZ2F0aW9uIH0pO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5hdlR5cGUuUkVNT1ZFX0JZX0lEOiB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkRiID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCduYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IG5hdmlnYXRpb25EYi5uYXZpZ2F0aW9uIGFzIE5hdmlnYXRpb25bXTtcclxuICAgICAgICBjb25zdCBpZFRvUmVtb3ZlID0gbWVzc2FnZS5wYXlsb2FkLmlkO1xyXG4gICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSBuYXZpZ2F0aW9uLmZpbmRJbmRleCgobmF2KSA9PiBuYXYuaWQgPT09IGlkVG9SZW1vdmUpO1xyXG4gICAgICAgIG5hdmlnYXRpb24uc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xyXG5cclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7fSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIkByb290L2ZlYXR1cmUvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBSZW1vdmVBY3Rpb25UeXBlIH0gZnJvbSBcIkByb290L2ZlYXR1cmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uU2xpY2UvYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gTmF2VHlwZSB7XHJcbiAgR0VUX0FMTCA9ICdHRVRfQUxMJyxcclxuICBHRVRfQllfSUQgPSAnR0VUX0JZX0lEJyxcclxuICBVUERBVEVfQllfSUQgPSAnVVBEQVRFJyxcclxuICBBREQgPSAnQUREJyxcclxuICBSRU1PVkVfQllfSUQgPSAnUkVNT1ZFX0JZX0lEJ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOYXZNZXNzYWdlUGF5bG9hZCA9IEdldEFsbE1lc3NhZ2UgfCBBZGRNZXNzYWdlIHwgVXBkYXRlTWVzc2FnZSB8IFJlbW92ZU1lc3NhZ2U7XHJcblxyXG5leHBvcnQgdHlwZSBCYXNlTmF2TWVzc2FnZTxUPiA9IHtcclxuICBwYXlsb2FkOiBUXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEFsbE1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogTmF2VHlwZS5HRVRfQUxMO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGRNZXNzYWdlID0ge1xyXG4gIHR5cGU6IE5hdlR5cGUuQUREO1xyXG59ICYgQmFzZU5hdk1lc3NhZ2U8UGljazxOYXZpZ2F0aW9uLCAnaG9zdCcgfCAnbmFtZSc+PlxyXG5cclxuZXhwb3J0IHR5cGUgVXBkYXRlTWVzc2FnZSA9IHtcclxuICB0eXBlOiBOYXZUeXBlLlVQREFURV9CWV9JRDtcclxufSAmIEJhc2VOYXZNZXNzYWdlPFBhcnRpYWw8TmF2aWdhdGlvbj4+O1xyXG5cclxuZXhwb3J0IHR5cGUgUmVtb3ZlTWVzc2FnZSA9IHtcclxuICB0eXBlOiBOYXZUeXBlLlJFTU9WRV9CWV9JRDtcclxufSAmIEJhc2VOYXZNZXNzYWdlPFJlbW92ZUFjdGlvblR5cGU+OyIsImltcG9ydCB7IFRhYk1lc3NhZ2VQYXlsb2FkLCBUYWJUeXBlIH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgY2hhbmdlSG9zdCwgZ2V0Q3VycmVudFRhYiB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmV4cG9ydCB0eXBlIFJlc3BvbnNlU2VuZGVyID0gKGU6IHVua25vd24pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdEhhbmRsZXIgPSBhc3luYyAobWVzc2FnZTogVGFiTWVzc2FnZVBheWxvYWQsIF86IG5ldmVyLCBzZW5kUmVzcG9uc2U6IFJlc3BvbnNlU2VuZGVyKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2UgJiYgbWVzc2FnZS50eXBlKSB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIFRhYlR5cGUuR0VUX1VSTDoge1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcclxuICAgICAgICBpZiAodGFiKSB7XHJcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoeyB1cmw6IHRhYi51cmwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7fSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBUYWJUeXBlLlNFVF9VUkw6IHtcclxuICAgICAgICBjb25zdCB0YWIgPSBhd2FpdCBnZXRDdXJyZW50VGFiKCk7XHJcbiAgICAgICAgY29uc3QgbmV4dEhvc3QgPSBtZXNzYWdlLnBheWxvYWQudXJsO1xyXG4gICAgICAgIGlmICh0YWIpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGNoYW5nZUhvc3QodGFiLnVybCwgbmV4dEhvc3QpO1xyXG4gICAgICAgICAgYXdhaXQgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCwgeyB1cmw6IG5ld1VybC50b1N0cmluZygpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiY29uc3QgY3VycmVudFRhYlF1ZXJ5SW5mbyA9IHsgYWN0aXZlOiB0cnVlIH07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFRhYiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KGN1cnJlbnRUYWJRdWVyeUluZm8pO1xyXG4gIHJldHVybiB0YWI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VIb3N0ID0gKGN1cnJlbnRVcmw6IHN0cmluZywgbmV3SG9zdDogc3RyaW5nKTogVVJMID0+IHtcclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKGN1cnJlbnRVcmwpO1xyXG4gIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwobmV3SG9zdCk7XHJcblxyXG5cclxuICB1cmwuaG9zdCA9IG5ld1VybC5ob3N0O1xyXG5cclxuICByZXR1cm4gdXJsO1xyXG59IiwiZXhwb3J0IGVudW0gVGFiVHlwZSB7XHJcbiAgR0VUX1VSTCA9ICdHRVRfVVJMJyxcclxuICBTRVRfVVJMID0gJ1NFVF9VUkwnLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUYWJNZXNzYWdlUGF5bG9hZCA9IEdldFVybE1lc3NhZ2UgfCBTZXRVcmxNZXNzYWdlO1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZVRhYk1lc3NhZ2U8VD4gPSB7XHJcbiAgcGF5bG9hZDogVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRVcmxNZXNzYWdlID0ge1xyXG4gIHR5cGU6IFRhYlR5cGUuR0VUX1VSTDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFNldFVybE1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogVGFiVHlwZS5TRVRfVVJMO1xyXG59ICYgQmFzZVRhYk1lc3NhZ2U8eyB1cmw6IHN0cmluZyB9PlxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBkZWZhdWx0SGFuZGxlciwgUmVzcG9uc2VTZW5kZXIgfSBmcm9tICcuL21lc3NhZ2UvaGFuZGxlcic7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdAcm9vdC9mZWF0dXJlL25hdmlnYXRpb24nO1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKHsgcmVhc29uIH0pID0+IHtcclxuICBpZiAocmVhc29uID09PSAnaW5zdGFsbCcpIHtcclxuICAgIGNvbnN0IG5hdmlnYXRpb246IE5hdmlnYXRpb25bXSA9IFtdO1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcclxuICAgICAgbmF2aWdhdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG59KVxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlOiBNZXNzYWdlLCBfOiBuZXZlciwgc2VuZFJlc3BvbnNlOiBSZXNwb25zZVNlbmRlcikgPT4ge1xyXG4gIGRlZmF1bHRIYW5kbGVyKG1lc3NhZ2UsIF8sIHNlbmRSZXNwb25zZSk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==