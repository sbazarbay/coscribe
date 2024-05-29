/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("http");

/***/ })
/******/ 	]);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const express_1 = tslib_1.__importDefault(__webpack_require__(2));
const body_parser_1 = tslib_1.__importDefault(__webpack_require__(3));
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(4));
const socket_io_1 = __webpack_require__(5);
const http_1 = tslib_1.__importDefault(__webpack_require__(6));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/notes')
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
app.get('/', (req, res) => {
    res.send('Notes Service is running');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map