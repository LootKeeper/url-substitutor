/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var message_1 = __webpack_require__(118);
chrome.runtime.onInstalled.addListener(function (_a) {
    var reason = _a.reason;
    if (reason === 'install') {
        chrome.storage.local.set({
            navigation: []
        });
    }
});
chrome.runtime.onMessage.addListener(function (message, _, sendResponse) {
    if (message && message.type) {
        console.log({ TEST: true, message: message });
        switch (message.type) {
            case message_1.MessageType.GET_ALL: {
                var navigation = chrome.storage.local.get('navigation');
                console.log({ TEST: true, navigation: navigation });
                sendResponse({ navigation: navigation });
                break;
            }
            case message_1.MessageType.ADD: {
                var navigation = chrome.storage.local.get('navigation');
                var index = navigation.length;
                var newNav = { id: index, name: message.payload.name, host: message.payload.host };
                navigation.push(newNav);
                console.log({ TEST: true, navigation: navigation });
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                break;
            }
            case message_1.MessageType.UPDATE_BY_ID: {
                var navigation = chrome.storage.local.get('navigation');
                var navToUpdate = navigation[message.payload.id];
                navToUpdate.host = message.payload.host;
                navToUpdate.name = message.payload.name;
                chrome.storage.local.set({ navigation: navigation });
                sendResponse({ navigation: navigation });
                break;
            }
            default: {
                sendResponse({});
            }
        }
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBRXhDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsY0FBRSxDQUFDLENBQUM7Z0JBQ3pDLFlBQVksQ0FBQyxFQUFFLFVBQVUsY0FBRSxDQUFDLENBQUM7Z0JBRTdCLE1BQU07WUFDUixDQUFDO1lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDUixZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJsLXN1YnN0aXR1dG9yLy4vYmFja2dyb3VuZC9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovL3VybC1zdWJzdGl0dXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91cmwtc3Vic3RpdHV0b3IvLi9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCJAcm9vdC9mZWF0dXJlL25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcclxuICBHRVRfQUxMID0gJ0dFVF9BTEwnLFxyXG4gIEdFVF9CWV9JRCA9ICdHRVRfQllfSUQnLFxyXG4gIFVQREFURV9CWV9JRCA9ICdVUERBVEUnLFxyXG4gIEFERCA9ICdBREQnLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZXNzYWdlID0gR2V0QWxsTWVzc2FnZSB8IEFkZE1lc3NhZ2UgfCBVcGRhdGVNZXNzYWdlO1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZU1lc3NhZ2U8VD4gPSB7XHJcbiAgcGF5bG9hZDogVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRBbGxNZXNzYWdlID0ge1xyXG4gIHR5cGU6IE1lc3NhZ2VUeXBlLkdFVF9BTEw7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZE1lc3NhZ2UgPSB7XHJcbiAgdHlwZTogTWVzc2FnZVR5cGUuQUREO1xyXG59ICYgQmFzZU1lc3NhZ2U8UGljazxOYXZpZ2F0aW9uLCAnaG9zdCcgfCAnbmFtZSc+PlxyXG5cclxuZXhwb3J0IHR5cGUgVXBkYXRlTWVzc2FnZSA9IHtcclxuICB0eXBlOiBNZXNzYWdlVHlwZS5VUERBVEVfQllfSUQ7XHJcbn0gJiBCYXNlTWVzc2FnZTxOYXZpZ2F0aW9uPjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVR5cGUgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnQHJvb3QvZmVhdHVyZS9uYXZpZ2F0aW9uJztcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCh7IHJlYXNvbiB9KSA9PiB7XHJcbiAgaWYgKHJlYXNvbiA9PT0gJ2luc3RhbGwnKSB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xyXG4gICAgICBuYXZpZ2F0aW9uOiBbXVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KVxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlOiBNZXNzYWdlLCBfOiBuZXZlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2UgJiYgbWVzc2FnZS50eXBlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh7IFRFU1Q6IHRydWUsIG1lc3NhZ2UgfSk7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkdFVF9BTEw6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gKGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnbmF2aWdhdGlvbicpIGFzIHVua25vd24gYXMgTmF2aWdhdGlvbltdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IFRFU1Q6IHRydWUsIG5hdmlnYXRpb24gfSk7XHJcblxyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5BREQ6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gKGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnbmF2aWdhdGlvbicpIGFzIHVua25vd24gYXMgTmF2aWdhdGlvbltdKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuYXZpZ2F0aW9uLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBuZXdOYXY6IE5hdmlnYXRpb24gPSB7IGlkOiBpbmRleCwgbmFtZTogbWVzc2FnZS5wYXlsb2FkLm5hbWUsIGhvc3Q6IG1lc3NhZ2UucGF5bG9hZC5ob3N0IH07XHJcbiAgICAgICAgbmF2aWdhdGlvbi5wdXNoKG5ld05hdik7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBURVNUOiB0cnVlLCBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG5hdmlnYXRpb24gfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbmF2aWdhdGlvbiB9KTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5VUERBVEVfQllfSUQ6IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uID0gKGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnbmF2aWdhdGlvbicpIGFzIHVua25vd24gYXMgTmF2aWdhdGlvbltdKTtcclxuICAgICAgICBjb25zdCBuYXZUb1VwZGF0ZSA9IG5hdmlnYXRpb25bbWVzc2FnZS5wYXlsb2FkLmlkXTtcclxuICAgICAgICBuYXZUb1VwZGF0ZS5ob3N0ID0gbWVzc2FnZS5wYXlsb2FkLmhvc3Q7XHJcbiAgICAgICAgbmF2VG9VcGRhdGUubmFtZSA9IG1lc3NhZ2UucGF5bG9hZC5uYW1lO1xyXG5cclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBuYXZpZ2F0aW9uIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG5hdmlnYXRpb24gfSk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==