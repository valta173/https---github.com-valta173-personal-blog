/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst page = document.getElementById('page');\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event => {\r\n\tif (body.classList.contains('show-sidebar')) {\r\n\t\tcloseSidebar();\r\n\t} else {\r\n\t\tshowSidebar();\r\n\t}\r\n});\r\n\r\n\r\nfunction showSidebar() {\r\n\tlet mask = document.createElement('div');\r\n\tmask.classList.add('page__mask');\r\n\tmask.addEventListener('click', closeSidebar);\r\n\tpage.appendChild(mask);\r\n\r\n\tbody.classList.add('show-sidebar');\r\n}\r\n\r\nfunction closeSidebar() {\r\n\tbody.classList.remove('show-sidebar');\r\n\tdocument.querySelector('.page__mask').remove();\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\n\r\nmodalBtn.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n\t\tlet $this = event.currentTarget;\r\n\t\tlet modalId = $this.getAttribute('data-modal');\r\n\t\tlet modal = document.getElementById(modalId);\r\n\t\tlet modalContent = modal.querySelector('.modal__content');\r\n\r\n\t\tmodalContent.addEventListener('click', event => {\r\n\t\t\tevent.stopPropagation();\r\n\t\t});\r\n\r\n\t\tmodal.classList.add('show');\r\n\t\tbody.classList.add('no-scroll');\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tmodalContent.style.transform = 'none';\r\n\t\t\tmodalContent.style.opacity = '1';\r\n\t\t}, 1);\r\n\t});\r\n});\r\n\r\n\r\nmodalClose.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n\t\tlet currentModal = event.currentTarget.closest('.modal');\r\n\r\n\t\tcurrentModal.classList.remove('show');\r\n\t\tbody.classList.remove('no-scroll');\r\n\t});\r\n});\r\n\r\n\r\nmodal.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n\t\tlet currentModal = event.currentTarget;\r\n\r\n\t\tcloseModal(currentModal);\r\n\t});\r\n});\r\n\r\n\r\nfunction closeModal(currentModal) {\r\n\tlet modalContent = currentModal.querySelector('.modal__content');\r\n\tmodalContent.removeAttribute('style');\r\n\r\n\tsetTimeout(() => {\r\n\t\tcurrentModal.classList.remove('show');\r\n\t\tbody.classList.remove('no-scroll');\r\n\t}, 200);\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/taxtarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/taxtarea.js ***!
  \***********************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\ntextArea.forEach(item => {\r\n\tlet textAreaH = item.offsetHeight;\r\n\r\n\titem.addEventListener('input', event => {\r\n\t\tlet $this = event.target;\r\n\r\n\t\t$this.style.height = textAreaH + 'px';\r\n\t\t$this.style.height = $this.scrollHeight + 'px';\r\n\t});\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/taxtarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/taxtarea.js"]();
/******/ 	
/******/ })()
;