/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var styles = __webpack_require__(2);
	var aggDirections = __webpack_require__(8);
	var aggGeolocation = __webpack_require__(10);
	var aggMap = __webpack_require__(12);
	var aggPlaces = __webpack_require__(13);
	var aggUtils = __webpack_require__(15);
	var aggMapMenu = __webpack_require__(16);
	var aggSearch = __webpack_require__(19);
	var aggAnimations = __webpack_require__(20);

	angular.module('angular-gmap-gplace', [
	    'ngAnimate',
	    'ngSanitize',
	    'aggGeolocation',
	    'aggMap',
	    'aggPlaces',
	    'aggDirections',
	    'aggUtils',
	    'aggMapMenu',
	    'aggSearch',
	    'aggAnimations'
	]);




/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@keyframes aggPulsate {\n  0% {\n    transform: scale(0.1);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  to {\n    transform: scale(1.2);\n    opacity: 0; } }\n\n.locMarker {\n  position: absolute;\n  margin-top: -50px;\n  margin-left: -50px;\n  transform: rotateX(55deg); }\n\n.locMarker:after {\n  display: block;\n  width: 100px;\n  height: 100px;\n  content: '';\n  animation: aggPulsate 1s ease-out;\n  animation-delay: 1.1s;\n  animation-iteration-count: infinite;\n  opacity: 0;\n  border-radius: 50%;\n  box-shadow: 0 0 6px 3px #f93c11; }\n\n.markerCenter {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  margin-top: -7.5px;\n  margin-left: -7.5px; }\n\n.aggBack {\n  color: white; }\n\n.aggClear {\n  color: white;\n  float: right; }\n  .aggClear span {\n    font-size: .5em; }\n  .aggClear.colored {\n    color: #ff4b33; }\n\n/* Menu Button */\n#aggMenuBtn {\n  position: absolute;\n  text-align: center;\n  top: 2%;\n  right: 0;\n  color: rgba(39, 39, 39, 0.91);\n  width: 7%;\n  border-radius: 5px;\n  border: thin rgba(0, 0, 0, 0.91);\n  background-color: #eae6e3;\n  box-shadow: -3px 5px 2px 0 rgba(0, 0, 0, 0.35);\n  transition: .5s ease all; }\n  @media (min-width: 992px) {\n    #aggMenuBtn {\n      width: 3.75%; } }\n\n/* Menu */\n#aggMenu {\n  background-color: transparent;\n  position: absolute;\n  top: 2%;\n  right: -75%;\n  height: 95%;\n  width: 75%;\n  transition: .5s ease all;\n  border-radius: 5px;\n  overflow: hidden;\n  /* Search box and results */ }\n  @media (min-width: 992px) {\n    #aggMenu {\n      right: -25%;\n      width: 25%; }\n      #aggMenu.animateDirections {\n        width: 35%;\n        right: -35%; } }\n  #aggMenu ul {\n    list-style: none;\n    padding: 0;\n    display: inline-block;\n    margin-left: 5px; }\n  #aggMenu #aggSearch {\n    height: 100%;\n    width: 80%;\n    background-color: #eae6e3;\n    border: thin;\n    border-radius: 5px;\n    font-size: 1.25em;\n    position: absolute;\n    left: 0;\n    border-right: 1px solid #c4c0bd; }\n    #aggMenu #aggSearch:focus {\n      outline: none; }\n  #aggMenu .genSearch {\n    width: 100%;\n    height: 42px;\n    position: relative;\n    background-color: #eae6e3;\n    box-shadow: -3px 5px 2px 0 rgba(0, 0, 0, 0.35); }\n  #aggMenu .searchResults {\n    position: absolute;\n    top: 7%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: .75em;\n    overflow: auto;\n    background-color: #f5f1ee; }\n    #aggMenu .searchResults hr {\n      background-color: #3f3f3f; }\n  #aggMenu .resultsList {\n    width: 100%; }\n    #aggMenu .resultsList li:first-child {\n      margin-top: 1em; }\n    #aggMenu .resultsList img {\n      float: right; }\n    #aggMenu .resultsList .aggResult li {\n      font-size: .95em;\n      color: #1d1d1d; }\n      #aggMenu .resultsList .aggResult li:first-child {\n        font-weight: bold;\n        font-size: .95em; }\n    #aggMenu .resultsList .aggResult .openNow {\n      font-size: .75em;\n      color: #72a078; }\n\n/* Directions search box and results */\n/* Info Box */\n.infoBox {\n  background-color: #3f3f3f;\n  width: 300px;\n  border-radius: 15px; }\n\n.ibHeader {\n  width: 100%;\n  background-color: #1d1d1d;\n  color: #72a078;\n  padding: 2px;\n  border-radius: 15px 15px 0 0; }\n  .ibHeader h3, .ibHeader hr {\n    margin: 0; }\n\n.ibBody {\n  color: #72a078;\n  font-size: 16px; }\n  .ibBody ul {\n    list-style: none; }\n\n.directIcon {\n  background: url(" + __webpack_require__(5) + ") no-repeat;\n  height: 100%;\n  width: 16.5%;\n  position: absolute;\n  right: 0; }\n\n.directControls {\n  background-color: #f93c11;\n  width: 100%; }\n\n.directBtnBar {\n  width: 95%;\n  margin: 0 auto;\n  text-align: center; }\n  .directBtnBar .searchType {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    border: none;\n    margin: 0 16px 16px 16px;\n    background-color: #f93c11; }\n    @media (max-width: 1350px) {\n      .directBtnBar .searchType {\n        margin: 0 10px 10px 10px; } }\n    .directBtnBar .searchType.selected {\n      background-color: #a02104; }\n    .directBtnBar .searchType:focus {\n      outline: none; }\n    .directBtnBar .searchType i {\n      text-align: center;\n      font-size: 2em; }\n\n.directSearch input {\n  display: block;\n  width: 75%;\n  margin: 16px auto;\n  background-color: #f93c11;\n  color: #1d1d1d;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #1d1d1d; }\n  .directSearch input:focus {\n    color: #1d1d1d;\n    outline: none; }\n  .directSearch input::-webkit-input-placeholder {\n    color: #1d1d1d; }\n  .directSearch input::-moz-placeholder {\n    color: #1d1d1d; }\n  .directSearch input:-ms-input-placeholder {\n    color: #1d1d1d; }\n  .directSearch input:-moz-placeholder {\n    color: #1d1d1d; }\n\n.directResults {\n  padding: 1em;\n  background-color: #eae6e3; }\n  .directResults hr {\n    background-color: #2d2622; }\n  .directResults .overview .duration {\n    display: inline;\n    font-size: 2em;\n    color: #72a078; }\n  .directResults .overview .distance {\n    display: inline;\n    font-size: 1.25em;\n    color: #3b583f; }\n  .directResults .route .start {\n    font-size: 1.25em;\n    font-weight: bold;\n    margin-bottom: 1.5em;\n    color: #72a078; }\n  .directResults .route .step .instruction p {\n    margin: 0; }\n  .directResults .route .step .duration {\n    display: inline;\n    font-size: .75em; }\n  .directResults .route .step .distance {\n    display: inline;\n    font-size: .75em; }\n  .directResults .route .end {\n    font-size: 1.25em;\n    font-weight: bold;\n    margin-top: 1.5em;\n    color: #72a078; }\n\n/**************************\nMenu Animations\n**************************/\n@keyframes aggSlideInLeft {\n  from {\n    transform: translateX(0); }\n  to {\n    transform: translateX(-100%); } }\n\n@keyframes aggSlideOutRight {\n  from {\n    transform: translateX(100%); }\n  to {\n    transform: translateX(0); } }\n\n.animateMenu {\n  transform: translateX(-105%); }\n\n.animateDirections {\n  transform: translateX(-100%); }\n\n.animateBtn {\n  transform: translateX(-1135%); }\n  @media (min-width: 992px) {\n    .animateBtn {\n      transform: translateX(-710%); } }\n\n.animateBtnDirect {\n  transform: translateX(-1071%); }\n  @media (min-width: 992px) {\n    .animateBtnDirect {\n      transform: translateX(-930%); } }\n\n.slide.ng-leave {\n  animation: aggSlideInLeft .5s ease-in; }\n\n.slide.ng-enter {\n  animation: aggSlideOutRight .5s ease-in; }\n\n.slide.ng-enter-active {\n  transform: translateX(100%); }\n\n.slide.ng-leave-active {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0; }\n\n/**********************************\nDirection Icon Animation\n**********************************/\n@keyframes aggSpin {\n  0% {\n    transform: rotate(0deg); }\n  50% {\n    transform: rotate(180deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.aggSpin {\n  animation: aggSpin .25s infinite; }\n\nspan.stars, span.stars span {\n  display: inline-block;\n  background: url(" + __webpack_require__(6) + ") 0 -11px repeat-x;\n  width: 60px;\n  height: 12px; }\n\nspan.stars span {\n  background-position: 0 0; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 128 128' enable-background='new 0 0 128 128' xml:space='preserve'%3E %3Cg enable-background='new '%3E %3Cg%3E %3Cdefs%3E %3Crect id='SVGID_1_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_2_'%3E %3Cuse xlink:href='%23SVGID_1_' overflow='visible' /%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_3_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_4_'%3E %3Cuse xlink:href='%23SVGID_3_' overflow='visible' /%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_4_)'%3E %3Cdefs%3E %3Cpath id='SVGID_5_' d='M62.7,107.8C39.3,108,20.1,89.3,19.9,65.9c-0.2-23.4,18.5-42.5,41.9-42.7c23.4-0.2,42.5,18.5,42.7,41.9 C104.8,88.5,86,107.6,62.7,107.8'/%3E %3C/defs%3E %3CclipPath id='SVGID_6_'%3E %3Cuse xlink:href='%23SVGID_5_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_6_)'%3E %3Cdefs%3E %3Crect id='SVGID_7_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_8_'%3E %3Cuse xlink:href='%23SVGID_7_' overflow='visible'/%3E %3C/clipPath%3E %3Crect x='12.1' y='15.4' clip-path='url(%23SVGID_8_)' fill='%23FFDE44' width='100.2' height='100.1'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_9_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_10_'%3E %3Cuse xlink:href='%23SVGID_9_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_10_)'%3E %3Cdefs%3E %3Cpolyline id='SVGID_11_' points='78.3,18.3 78.3,52.2 108.2,52.2 78.3,18.3 '/%3E %3C/defs%3E %3CclipPath id='SVGID_12_'%3E %3Cuse xlink:href='%23SVGID_11_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_12_)'%3E %3Cdefs%3E %3Crect id='SVGID_13_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_14_'%3E %3Cuse xlink:href='%23SVGID_13_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_14_)' enable-background='new '%3E %3Cg%3E %3Cdefs%3E %3Crect id='SVGID_15_' x='77.6' y='22.8' width='28' height='29.5'/%3E %3C/defs%3E %3CclipPath id='SVGID_16_'%3E %3Cuse xlink:href='%23SVGID_15_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_16_)'%3E %3Cdefs%3E %3Cpath id='SVGID_17_' d='M63,108.2c-23.4,0.2-42.5-18.5-42.7-41.9s18.5-42.5,41.9-42.7c23.4-0.2,42.5,18.5,42.7,41.9 S86.4,107.9,63,108.2'/%3E %3C/defs%3E %3CclipPath id='SVGID_18_'%3E %3Cuse xlink:href='%23SVGID_17_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_18_)'%3E %3Cdefs%3E %3Crect id='SVGID_19_' x='77.6' y='18.2' width='28' height='34.2'/%3E %3C/defs%3E %3CclipPath id='SVGID_20_'%3E %3Cuse xlink:href='%23SVGID_19_' overflow='visible'/%3E %3C/clipPath%3E %3Crect x='12.5' y='15.8' clip-path='url(%23SVGID_20_)' fill='%233F8CF4' width='100.2' height='100.1'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_21_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_22_'%3E %3Cuse xlink:href='%23SVGID_21_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_22_)'%3E %3Cdefs%3E %3Cpath id='SVGID_23_' d='M72.6,87.5H24.4l10.8,15.8c0,0,26,12.7,26.3,12.7c0.3-0.1,11.1-9.4,11.1-9.4V87.5'/%3E %3C/defs%3E %3CclipPath id='SVGID_24_'%3E %3Cuse xlink:href='%23SVGID_23_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_24_)'%3E %3Cdefs%3E %3Crect id='SVGID_25_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_26_'%3E %3Cuse xlink:href='%23SVGID_25_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_26_)' enable-background='new '%3E %3Cg%3E %3Cdefs%3E %3Crect id='SVGID_27_' x='23.2' y='86.5' width='49.7' height='21.8'/%3E %3C/defs%3E %3CclipPath id='SVGID_28_'%3E %3Cuse xlink:href='%23SVGID_27_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_28_)'%3E %3Cdefs%3E %3Cpath id='SVGID_29_' d='M62.7,107.8C39.3,108,20.2,89.2,19.9,65.9c-0.2-23.4,18.5-42.5,41.9-42.7 c23.4-0.2,42.5,18.5,42.7,41.9C104.8,88.4,86.1,107.5,62.7,107.8'/%3E %3C/defs%3E %3CclipPath id='SVGID_30_'%3E %3Cuse xlink:href='%23SVGID_29_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_30_)'%3E %3Cdefs%3E %3Crect id='SVGID_31_' x='23.2' y='86.5' width='49.7' height='21.8'/%3E %3C/defs%3E %3CclipPath id='SVGID_32_'%3E %3Cuse xlink:href='%23SVGID_31_' overflow='visible'/%3E %3C/clipPath%3E %3Crect x='12.2' y='15.4' clip-path='url(%23SVGID_32_)' fill='%233F8CF4' width='100.2' height='100.1'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_33_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_34_'%3E %3Cuse xlink:href='%23SVGID_33_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_34_)'%3E %3Cdefs%3E %3Cpolyline id='SVGID_35_' points='48.5,25.2 48.5,52.2 16.5,52.2 21.1,33.8 30.2,15.3 39.1,15.8 45.8,19.7 48.5,25.2 '/%3E %3C/defs%3E %3CclipPath id='SVGID_36_'%3E %3Cuse xlink:href='%23SVGID_35_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_36_)'%3E %3Cdefs%3E %3Crect id='SVGID_37_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_38_'%3E %3Cuse xlink:href='%23SVGID_37_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_38_)' enable-background='new '%3E %3Cg%3E %3Cdefs%3E %3Crect id='SVGID_39_' x='18.5' y='22.8' width='31.1' height='29.5'/%3E %3C/defs%3E %3CclipPath id='SVGID_40_'%3E %3Cuse xlink:href='%23SVGID_39_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_40_)'%3E %3Cdefs%3E %3Cpath id='SVGID_41_' d='M62.7,107.8C39.3,108,20.1,89.3,19.9,65.9c-0.2-23.4,18.5-42.5,41.9-42.7s42.5,18.5,42.7,41.9 C104.8,88.5,86,107.6,62.7,107.8'/%3E %3C/defs%3E %3CclipPath id='SVGID_42_'%3E %3Cuse xlink:href='%23SVGID_41_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_42_)'%3E %3Cdefs%3E %3Crect id='SVGID_43_' x='18.5' y='15.1' width='31.1' height='37.3'/%3E %3C/defs%3E %3CclipPath id='SVGID_44_'%3E %3Cuse xlink:href='%23SVGID_43_' overflow='visible'/%3E %3C/clipPath%3E %3Crect x='12.2' y='15.4' clip-path='url(%23SVGID_44_)' fill='%2320A362' width='100.2' height='100.1'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_45_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_46_'%3E %3Cuse xlink:href='%23SVGID_45_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_46_)'%3E %3Cdefs%3E %3Cpolyline id='SVGID_47_' points='78.3,57.7 110.5,57.7 110.5,81.5 78.3,81.5 '/%3E %3C/defs%3E %3CclipPath id='SVGID_48_'%3E %3Cuse xlink:href='%23SVGID_47_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_48_)'%3E %3Cdefs%3E %3Crect id='SVGID_49_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_50_'%3E %3Cuse xlink:href='%23SVGID_49_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_50_)' enable-background='new '%3E %3Cg%3E %3Cdefs%3E %3Crect id='SVGID_51_' x='77.6' y='57' width='28' height='24.9'/%3E %3C/defs%3E %3CclipPath id='SVGID_52_'%3E %3Cuse xlink:href='%23SVGID_51_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_52_)'%3E %3Cdefs%3E %3Cpath id='SVGID_53_' d='M62.6,107.6C39.2,107.8,20.1,89,19.9,65.7C19.6,42.3,38.4,23.2,61.8,23 c23.4-0.2,42.5,18.5,42.7,41.9C104.8,88.2,86,107.3,62.6,107.6'/%3E %3C/defs%3E %3CclipPath id='SVGID_54_'%3E %3Cuse xlink:href='%23SVGID_53_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_54_)'%3E %3Cdefs%3E %3Crect id='SVGID_55_' x='77.6' y='57' width='28' height='24.9'/%3E %3C/defs%3E %3CclipPath id='SVGID_56_'%3E %3Cuse xlink:href='%23SVGID_55_' overflow='visible'/%3E %3C/clipPath%3E %3Crect x='12.1' y='15.2' clip-path='url(%23SVGID_56_)' fill='%2320A362' width='100.2' height='100.1'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_57_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_58_'%3E %3Cuse xlink:href='%23SVGID_57_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_58_)'%3E %3Cdefs%3E %3Cpolyline id='SVGID_59_' points='119.3,87.5 119.3,81.8 78.3,81.8 78.3,57.9 118.3,57.9 118.3,52.2 78.3,52.2 78.3,20.6 72.6,20.6 72.6,52.2 54.2,52.2 54.2,-4.5 48.5,-4.5 48.5,52.2 10.2,52.2 10.2,57.9 72.6,57.9 72.6,81.8 5.4,81.8 5.4,87.5 72.6,87.5 72.6,111.9 78.3,111.9 78.3,87.5 119.3,87.5 '/%3E %3C/defs%3E %3CclipPath id='SVGID_60_'%3E %3Cuse xlink:href='%23SVGID_59_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_60_)'%3E %3Cdefs%3E %3Crect id='SVGID_61_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_62_'%3E %3Cuse xlink:href='%23SVGID_61_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_62_)' enable-background='new '%3E %3Cg%3E %3Cdefs%3E %3Crect id='SVGID_63_' x='18.5' y='22.8' width='87' height='85.4'/%3E %3C/defs%3E %3CclipPath id='SVGID_64_'%3E %3Cuse xlink:href='%23SVGID_63_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_64_)'%3E %3Cdefs%3E %3Cpath id='SVGID_65_' d='M62.8,107.8C39.4,108.1,20.3,89.3,20,65.9c-0.2-23.4,18.5-42.5,41.9-42.7 c23.4-0.2,42.5,18.5,42.7,41.9C104.9,88.5,86.1,107.6,62.8,107.8'/%3E %3C/defs%3E %3CclipPath id='SVGID_66_'%3E %3Cuse xlink:href='%23SVGID_65_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_66_)'%3E %3Cdefs%3E %3Crect id='SVGID_67_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_68_'%3E %3Cuse xlink:href='%23SVGID_67_' overflow='visible'/%3E %3C/clipPath%3E %3Crect x='12.3' y='15.5' clip-path='url(%23SVGID_68_)' fill='%23EEEEEE' width='100.2' height='100.1'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_69_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_70_'%3E %3Cuse xlink:href='%23SVGID_69_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_70_)'%3E %3Cdefs%3E %3Crect id='SVGID_71_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_72_'%3E %3Cuse xlink:href='%23SVGID_71_' overflow='visible'/%3E %3C/clipPath%3E %3Cline clip-path='url(%23SVGID_72_)' fill='none' stroke='%23DC493C' stroke-width='18.0634' stroke-miterlimit='10' x1='73.8' y1='52.6' x2='73.8' y2='17.7'/%3E %3C/g%3E %3C/g%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_73_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_74_'%3E %3Cuse xlink:href='%23SVGID_73_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_74_)'%3E %3Cdefs%3E %3Cpolyline id='SVGID_75_' points='58.2,19.8 89.4,19.8 73.8,4.2 58.2,19.8 '/%3E %3C/defs%3E %3CclipPath id='SVGID_76_'%3E %3Cuse xlink:href='%23SVGID_75_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_76_)'%3E %3Cdefs%3E %3Crect id='SVGID_77_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_78_'%3E %3Cuse xlink:href='%23SVGID_77_' overflow='visible'/%3E %3C/clipPath%3E %3Crect x='50.4' y='-3.5' clip-path='url(%23SVGID_78_)' fill='%23DC4A3D' width='46.7' height='31.1'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cg clip-path='url(%23SVGID_2_)'%3E %3Cdefs%3E %3Crect id='SVGID_79_' x='-82.4' y='-1673.7' width='2122.2' height='8119'/%3E %3C/defs%3E %3CclipPath id='SVGID_80_'%3E %3Cuse xlink:href='%23SVGID_79_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_80_)'%3E %3Cdefs%3E %3Cpolyline id='SVGID_81_' points='89.4,19.8 73.8,4.2 58.2,19.8 64.6,19.8 64.6,48.9 34.5,79.8 34.5,111.7 52.8,111.7 52.8,87.2 82.9,56.4 82.9,19.8 89.4,19.8 '/%3E %3C/defs%3E %3CclipPath id='SVGID_82_'%3E %3Cuse xlink:href='%23SVGID_81_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_82_)'%3E %3Cdefs%3E %3Crect id='SVGID_83_' x='18.5' y='4.2' width='87' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_84_'%3E %3Cuse xlink:href='%23SVGID_83_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_84_)' enable-background='new '%3E %3Cg%3E %3Cdefs%3E %3Crect id='SVGID_85_' x='34.1' y='22.8' width='55.9' height='85.4'/%3E %3C/defs%3E %3CclipPath id='SVGID_86_'%3E %3Cuse xlink:href='%23SVGID_85_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_86_)'%3E %3Cdefs%3E %3Cpath id='SVGID_87_' d='M62.7,107.8C39.3,108,20.1,89.3,19.9,65.9c-0.2-23.4,18.5-42.5,41.9-42.7 c23.4-0.2,42.5,18.5,42.7,41.9C104.8,88.5,86,107.6,62.7,107.8'/%3E %3C/defs%3E %3CclipPath id='SVGID_88_'%3E %3Cuse xlink:href='%23SVGID_87_' overflow='visible'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23SVGID_88_)'%3E %3Cdefs%3E %3Crect id='SVGID_89_' x='34.1' y='4.2' width='55.9' height='104.1'/%3E %3C/defs%3E %3CclipPath id='SVGID_90_'%3E %3Cuse xlink:href='%23SVGID_89_' overflow='visible'/%3E %3C/clipPath%3E %3Crect x='12.1' y='15.4' clip-path='url(%23SVGID_90_)' fill='%23DC4B3E' width='100.2' height='100.1'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AwQFh42TCl+OAAAAi9JREFUOMuNks1LlFEYxX/PnTu+M/iOTRiG7TKlQSFq4SKhvEulyKw/IWgTQWgQBFEUtA2igiBoVYv2tYnq0pQQtBX6giCkphGdSd908P1q0Ts2X4ln+Tzn3PPcwxFaUC4WBNgB9PQd+fCtda9ohwaOASc67NoFWmudTqenHcc53kkg5WJBxXFMGIb4vk8+n9+ptV4QEa9UKg0NTC5Uv78aVKlUChFBA4dEpM9xHOU4joRhOJzNZjOpVCpyXXd2aW7kDaCjKIriOF6UcrEwqJR67LruqFLq7ytaAxAEAXX3tbW1t0EQnJX6bUtzIzdd173Q1dWVbbzZ9/3l1dXVB71j85eaPt07Nn95ZWXlShiGm+QoitYrlcr9OrkeYd1BK6UKSinCMFwHQhHpzmQyQx1jVUpltdanfN//UalUbler1RsbGxu/tNZjX57u6Wly+Pl6vwRBcDCO40XP8873m8/Pk/l7x3Gu5XK5CeDJpoOIEMexW6vVxutkgN1HP770PG9KRAK2grXWtdYObKsa1loNTACntyUA0sB0UsD2LllrW0V54CsQAgVjTLmRo4EDQH/iJsA+oAdYB2attS8S1whYEmvtXuARcJit8Q741yVr7XVgBuhuIVaBh8aYGZITGhM6B9xpGNWAe8aY2bYuJXEWGog+kAOG/herk2RfAu4CV4FlYNRau6tJYK0VYBj4DZwxxlw0xtwCTgKfgMlODnlg3BjzrD4wxhSBqSRiAP4Aaj3QONtcBxwAAAAASUVORK5CYII="

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	angular.module('aggDirections', [])

	/**
	 * @desc Takes in an origin, destination, and travel mode; outputs directions.
	 * Requires the aggMap directive to render directions
	 */


	.service('aggDirectionsServ', function($q){
	    var self = this;

	    function getDirections(request) {
	        var service = new google.maps.DirectionsService();
	        var q = $q.defer();

	        service.route(request, callback);

	        function callback(response, status) {
	            if(status === 'OK') {
	                q.resolve(response);
	            }else{
	                console.log("getDirections failed");
	            }
	        }
	        return q.promise;
	    }

	    function buildSteps(directions, map) {
	        var route = directions.routes[0].legs[0];

	        for(var i = 0; i< route.steps.length; i++) {
	            var marker = self.markers[i] = self.markers[i] || new google.maps.Marker();
	            marker.setMap(map);
	            marker.setPosition(route.steps[i].start_location);
	            makeInfoWindow(marker, route.steps[i].instructions, map);
	        }

	        function makeInfoWindow(marker, text, map) {
	            var infoWindow = new  google.maps.InfoWindow();

	            infoWindow.setContent(text);
	            // Attach click handler to marker
	            marker.addListener('click', function() {
	                infoWindow.open(map, marker);
	            });
	        }
	    }

	    this.markers = [];

	    this.renderer = new google.maps.DirectionsRenderer();

	    this.getSteps = function(request, map) {
	        var q = $q.defer(),
	            self = this;

	        this.renderer.setMap(map);
	        getDirections(request).then(function(response){
	            self.renderer.setDirections(response);
	            buildSteps(response, map);
	            q.resolve(response);
	        });
	        return q.promise;
	    };

	    this.getDirections = function(request, map) {
	        var q = $q.defer(),
	            self = this;

	        this.renderer.setMap(map);

	        getDirections(request).then(function(response) {
	            self.renderer.setDirections(response);
	            q.resolve(response);
	        });
	        return q.promise;
	    };
	});



/***/ },
/* 9 */
/***/ function(module, exports) {

	var path = '/home/grant/Development/Projects/Libraries/angular-gmap-gplaces/master/src/templates/aggMenuDirections.html';
	var html = "<div class=\"directControls\">\n    <i ng-if=\"inMenu\" role=\"button\" class=\"fa fa-arrow-left fa-2x aggBack\" ng-click=\"direct.goBack()\"></i>\n    <i role=\"button\" class=\"fa fa-times fa-2x aggClear\" ng-click=\"direct.clearMap()\"><span>Clear Map</span></i>\n\n    <div class=\"directSearch\">\n        <input id=\"aggOrigin\" agg-auto-complete=\"direct.request.origin\" type=\"text\" name=\"from\" placeholder=\"Choose a starting point\">\n        <input id=\"aggDestination\" agg-auto-complete=\"direct.request.destination\" type=\"text\" name=\"to\" placeholder=\"Destination\">\n    </div>\n\n    <div class=\"directBtnBar\">\n        <button id=\"modeDriving\" class=\"searchType\" ng-class=\"{selected: direct.request.travelMode === 'DRIVING'}\" ng-click=\"direct.toggleMode('DRIVING')\">\n            <i class=\"fa fa-car fa-2x\"></i>\n        </button>\n        <button id=\"modeWalking\" class=\"searchType\" ng-class=\"{selected: direct.request.travelMode === 'WALKING'}\" ng-click=\"direct.toggleMode('WALKING')\">\n            <i class=\"fa fa-blind fa-2x\" ></i>\n        </button>\n        <button id=\"modeBicycling\" class=\"searchType\" ng-class=\"{selected: direct.request.travelMode === 'BICYCLING'}\" ng-click=\"direct.toggleMode('BICYCLING')\">\n            <i class=\"fa fa-bicycle fa-2x\"></i>\n        </button>\n        <button id=\"modeTransit\" class=\"searchType\" ng-class=\"{selected: direct.request.travelMode === 'TRANSIT'}\" ng-click=\"direct.toggleMode('TRANSIT')\">\n            <i class=\"fa fa-bus fa-2x\"></i>\n        </button>\n    </div>\n</div>\n\n<div class=\"directResults aggEnterDown\" ng-if=\"direct.showDirect\">\n    <div class=\"overview\">\n        <div class=\"duration\">\n            {{direct.duration}}\n        </div>\n        <div class=\"distance\">\n            ({{direct.distance}})\n        </div>\n        <div class=\"via\">\n           via {{direct.via}}\n        </div>\n    </div>\n    <hr>\n    <div class=\"route\">\n        <div class=\"start\">\n            {{direct.startLoc}}\n        </div>\n        <div class=\"steps\">\n            <div class=\"step\" ng-repeat=\"step in direct.steps\">\n                <div class=\"instruction\">\n                    <p ng-bind-html=\"step.instructions\"></p>\n                </div>\n                <div class=\"duration\">\n                    {{step.duration.text}}\n                </div>\n                <div class=\"distance\">\n                    ({{step.distance.text}})\n                </div>\n                <hr ng-hide=\"$last\">\n            </div>\n        </div>\n        <div class=\"end\">\n            {{direct.endLoc}}\n        </div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	//
	// The aggGeolocation module is home to all things geolocation related
	// Included is the gLocation directive and supporting service and factory
	//
	angular.module('aggGeolocation', [])
	//
	// Directive for showing user location
	//
	.directive('aggLocation', function(aggMapServ, aggLocationServ, aggLocationMarkerFact) {
	    return {
	        restrict: 'E',
	        require: ['^aggMap'],
	        link: function(scope, elem, attrs, mapCtrl) {
	            var location = aggLocationServ.getLoc();

	            var watcher = scope.$watch(function(){return mapCtrl[0].gMap;}, function(value) {
	                if(value !== undefined) {
	                    location.then(
	                        function (success) {
	                            var markOptions = {
	                                position: new google.maps.LatLng(success.lat, success.lng),
	                                cursor: 'pointer',
	                                map: value
	                            };

	                            var marker = new aggLocationMarkerFact(markOptions);
	                        },
	                        function (failed) {
	                            alert(failed);
	                        }
	                    );
	                    watcher();
	                }
	            });
	        }
	    };
	})
	//
	// This factory creates a custom google maps overlay object
	//
	.factory('aggLocationMarkerFact', function() {

	    // Animated Location Marker made with custom Overlay
	    LocationMarker.prototype = new google.maps.OverlayView();

	    function LocationMarker(opts) {
	        this.setValues(opts);
	    }

	    LocationMarker.prototype.draw = function () {
	        var div = this.div;

	        if (!div) {
	            div = this.div = document.createElement('div');
	            div.style.position = 'absolute';

	            var pulse = document.createElement('div');
	            pulse.className = 'locMarker';
	            div.appendChild(pulse);

	            var center = document.createElement('img');
	            center.className = 'markerCenter';
	            center.src = __webpack_require__(11);
	            div.appendChild(center);

	            var panes = this.getPanes();
	            panes.overlayImage.appendChild(div);
	        }
	        var point = this.getProjection().fromLatLngToDivPixel(this.position);
	        if (point) {
	            div.style.left = point.x + 'px';
	            div.style.top = point.y + 'px';
	        }
	    };
	return LocationMarker;
	})

	//
	// This service gets the users location and handles errors
	//
	.service('aggLocationServ', function($q) {
	    var deferred = $q.defer();

	    // Check User Location
	    var navGeo = navigator.geolocation;
	    var geoOptions = {
	        enableHighAccuracy: true,
	        timeout: 30000,
	        maximumAge: 27000
	    };
	    function geoSuccess(position) {
	        deferred.resolve({lat: position.coords.latitude, lng: position.coords.longitude});
	    }
	    function geoError(error) {
	        switch(error.code) {
	            case error.PERMISSION_DENIED:
	                deferred.reject("You did not allow access to your location");
	                break;
	            case error.POSITION_UNAVAILABLE:
	                deferred.reject("Your location information is unavailable");
	                break;
	            case error.TIMEOUT:
	                deferred.reject("The location request timed out");
	                break;
	            case error.UNKNOWN_ERROR:
	                deferred.reject("An unknown error has occurred");
	                break;
	        }
	    }

	    this.watchLoc = function(){};

	    this.getLoc = function(){
	        if(navGeo) {
	            navGeo.watchPosition(geoSuccess, geoError);
	        }else {
	            deferred.reject("Geolocation service is unavailable.");
	        }
	        return deferred.promise;
	    };
	});


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AkMDhUt5aL7gAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAE4SURBVGje7drLEYMwDARQ1iXRSGpNI7QE52SGA9JaH7y6cYn1ItuDsbZNoXhVYPLvn9XyQiFkSI4oDJ2SKxpAqTmjEZSSO5pizfmjMdZkQDT2u+8/z5/jCEUjAvuPvAsnHkzwORNKhIMBPqOgJDjCwCyoE+4Cp2PZ6MFIZjaWOQa81Y3AGisNeoWjsYwxR5O3Kdrr7+hUXcbYY1ssYJnOmdU1bGBYusKj09pl5KIKC1x0OltzUoUFXhlM+uCWeU5WhQWuPK0tuei01OXEZDkpaQ13WcuescfDqd5+uY6sfzprTMrNQ9QG5v0mTdu0IirNGkOXaR4wG551XWpCe+DZF+Iu9BN4pZYHN/oOX7mphYYOOg9Q36iWakyrgg5tPcyEpzWXRsPLtA/PhpdtEGfi33A8VSgUCn9ckxdqTPOyv3QAAAAASUVORK5CYII="

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	//
	// Google Map Factories, Service, and Directives
	// Directives for making the map and for making markers
	// Factories for custom infobox and making markers
	// Service for creating map
	//
	angular.module('aggMap', [])

	// The map directive
	.directive('aggMap', function(aggMapServ) {
	    return {
	        restrict: 'E',
	        scope: {
	            'options': '=options'
	        },
	        transclude: true,
	        controller: function ($scope) {
	            $scope.divId = $scope.options.mapId;
	        },
	        link: function(scope, elem, attrs, ctrlr) {
	            var options = scope.$watch('options', function(value) {
	                ctrlr.gMap = aggMapServ.make(value);
	                options();
	            });
	        },
	        template: '<div id="{{divId}}"></div><div ng-transclude></div>'
	    };
	})
	// Directive for a single map marker
	.directive('aggMarker', function(aggMarkerFact) {
	    return {
	        restrict: 'E',
	        require: '^aggMap',
	        scope: {
	            'options': '=',
	            'click': '&'
	        },
	        link: function(scope, elem, attrs, gMapCtrl) {
	            var gmap = gMapCtrl.map;

	            // Watcher setup to wait for the marker options. Without it the map loads without the marker
	            // because the marker tries to create with no options.
	            var watcher = scope.$watch('options', function() {
	                var marker = aggMarkerFact.getMarker(gmap, scope.options);

	                // Attach click function to marker if defined
	                var userFunct = scope.click();
	                function clickFunc() {
	                    userFunct(marker, gmap);
	                }
	                if(userFunct !== undefined) {
	                    marker.addListener('click', clickFunc);
	                }
	                watcher();
	            });

	        }
	    };
	})

	.factory('aggMarkerFact', function() {
	    var marker = {};

	    marker.getMarker = function(map, args) {
	        var options = args;
	        options.map = map;

	        return new google.maps.Marker(options);
	    };
	    return marker;
	})
	// Service to create map and store maps data
	.service('aggMapServ', function() {
	    var self = this;
	    var setOptions = function(args) {
	        var defaults = {
	            index: self.maps.length,
	            mapId: 'map-canvas',
	            zoom: 8,
	            center: {lat: 0, lng: 0}
	        };
	        var options = angular.copy(defaults, {});
	        angular.extend(options, args);
	        return options;
	    };

	    this.maps = [];

	    this.make = function(options) {
	        var index = options.index,
	            id = options.mapId,
	            instance = self.maps[index],
	            map;

	        if(instance === undefined){
	            var opt = setOptions(options);
	            map = new google.maps.Map(document.getElementById(id), opt);
	            self.maps.push(map);
	        }else{
	            console.log(instance);
	            map = new google.maps.Map(document.getElementById(id), {
	                center: instance.center,
	                zoom: instance.zoom,
	                styles: instance.styles,
	                mapTypeId: instance.mapTypeId
	            });
	            self.maps.push(map);
	        }
	        return map;
	    }
	})
	// Factory creating custom info box class.
	// Code courtesy of google-maps-utility-library-v3
	// Original code can be found at https://code.google.com/p/google-maps-utility-library-v3/source/browse/trunk/infobox/src/infobox.js?r=466
	.factory('aggInfoBoxFact', function() {
	    /**
	     * @name InfoBox
	     * @version 1.1.13 [March 19, 2014]
	     * @author Gary Little (inspired by proof-of-concept code from Pamela Fox of Google)
	     * @copyright Copyright 2010 Gary Little [gary at luxcentral.com]
	     * @fileoverview InfoBox extends the Google Maps JavaScript API V3 <tt>OverlayView</tt> class.
	     *  <p>
	     *  An InfoBox behaves like a <tt>google.maps.InfoWindow</tt>, but it supports several
	     *  additional properties for advanced styling. An InfoBox can also be used as a map label.
	     *  <p>
	     *  An InfoBox also fires the same events as a <tt>google.maps.InfoWindow</tt>.
	     */

	    /**
	     * @name InfoBoxOptions
	     * @class This class represents the optional parameter passed to the {@link InfoBox} constructor.
	     * @property {string|Node} content The content of the InfoBox (plain text or an HTML DOM node).
	     * @property {boolean} [disableAutoPan=false] Disable auto-pan on <tt>open</tt>.
	     * @property {number} maxWidth The maximum width (in pixels) of the InfoBox. Set to 0 if no maximum.
	     * @property {Size} pixelOffset The offset (in pixels) from the top left corner of the InfoBox
	     *  (or the bottom left corner if the <code>alignBottom</code> property is <code>true</code>)
	     *  to the map pixel corresponding to <tt>position</tt>.
	     * @property {LatLng} position The geographic location at which to display the InfoBox.
	     * @property {number} zIndex The CSS z-index style value for the InfoBox.
	     *  Note: This value overrides a zIndex setting specified in the <tt>boxStyle</tt> property.
	     * @property {string} [boxClass="infoBox"] The name of the CSS class defining the styles for the InfoBox container.
	     * @property {Object} [boxStyle] An object literal whose properties define specific CSS
	     *  style values to be applied to the InfoBox. Style values defined here override those that may
	     *  be defined in the <code>boxClass</code> style sheet. If this property is changed after the
	     *  InfoBox has been created, all previously set styles (except those defined in the style sheet)
	     *  are removed from the InfoBox before the new style values are applied.
	     * @property {string} closeBoxMargin The CSS margin style value for the close box.
	     *  The default is "2px" (a 2-pixel margin on all sides).
	     * @property {string} closeBoxURL The URL of the image representing the close box.
	     *  Note: The default is the URL for Google's standard close box.
	     *  Set this property to "" if no close box is required.
	     * @property {Size} infoBoxClearance Minimum offset (in pixels) from the InfoBox to the
	     *  map edge after an auto-pan.
	     * @property {boolean} [isHidden=false] Hide the InfoBox on <tt>open</tt>.
	     *  [Deprecated in favor of the <tt>visible</tt> property.]
	     * @property {boolean} [visible=true] Show the InfoBox on <tt>open</tt>.
	     * @property {boolean} alignBottom Align the bottom left corner of the InfoBox to the <code>position</code>
	     *  location (default is <tt>false</tt> which means that the top left corner of the InfoBox is aligned).
	     * @property {string} pane The pane where the InfoBox is to appear (default is "floatPane").
	     *  Set the pane to "mapPane" if the InfoBox is being used as a map label.
	     *  Valid pane names are the property names for the <tt>google.maps.MapPanes</tt> object.
	     * @property {boolean} enableEventPropagation Propagate mousedown, mousemove, mouseover, mouseout,
	     *  mouseup, click, dblclick, touchstart, touchend, touchmove, and contextmenu events in the InfoBox
	     *  (default is <tt>false</tt> to mimic the behavior of a <tt>google.maps.InfoWindow</tt>). Set
	     *  this property to <tt>true</tt> if the InfoBox is being used as a map label.
	     */

	    /**
	     * Creates an InfoBox with the options specified in {@link InfoBoxOptions}.
	     *  Call <tt>InfoBox.open</tt> to add the box to the map.
	     * @constructor
	     * @param {InfoBoxOptions} [opt_opts]
	     */
	    function InfoBox(opt_opts) {

	        opt_opts = opt_opts || {};

	        google.maps.OverlayView.apply(this, arguments);

	        // Standard options (in common with google.maps.InfoWindow):
	        //
	        this.content_ = opt_opts.content || "";
	        this.disableAutoPan_ = opt_opts.disableAutoPan || false;
	        this.maxWidth_ = opt_opts.maxWidth || 0;
	        this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
	        this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
	        this.zIndex_ = opt_opts.zIndex || null;

	        // Additional options (unique to InfoBox):
	        //
	        this.boxClass_ = opt_opts.boxClass || "infoBox";
	        this.boxStyle_ = opt_opts.boxStyle || {};
	        this.closeBoxMargin_ = opt_opts.closeBoxMargin || "2px";
	        this.closeBoxURL_ = opt_opts.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
	        if (opt_opts.closeBoxURL === "") {
	            this.closeBoxURL_ = "";
	        }
	        this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);

	        if (typeof opt_opts.visible === "undefined") {
	            if (typeof opt_opts.isHidden === "undefined") {
	                opt_opts.visible = true;
	            } else {
	                opt_opts.visible = !opt_opts.isHidden;
	            }
	        }
	        this.isHidden_ = !opt_opts.visible;

	        this.alignBottom_ = opt_opts.alignBottom || false;
	        this.pane_ = opt_opts.pane || "floatPane";
	        this.enableEventPropagation_ = opt_opts.enableEventPropagation || false;

	        this.div_ = null;
	        this.closeListener_ = null;
	        this.moveListener_ = null;
	        this.contextListener_ = null;
	        this.eventListeners_ = null;
	        this.fixedWidthSet_ = null;
	    }

	    /* InfoBox extends OverlayView in the Google Maps API v3.
	     */
	    InfoBox.prototype = new google.maps.OverlayView();

	    /**
	     * Creates the DIV representing the InfoBox.
	     * @private
	     */
	    InfoBox.prototype.createInfoBoxDiv_ = function () {

	        var i;
	        var events;
	        var bw;
	        var me = this;

	        // This handler prevents an event in the InfoBox from being passed on to the map.
	        //
	        var cancelHandler = function (e) {
	            e.cancelBubble = true;
	            if (e.stopPropagation) {
	                e.stopPropagation();
	            }
	        };

	        // This handler ignores the current event in the InfoBox and conditionally prevents
	        // the event from being passed on to the map. It is used for the contextmenu event.
	        //
	        var ignoreHandler = function (e) {

	            e.returnValue = false;

	            if (e.preventDefault) {

	                e.preventDefault();
	            }

	            if (!me.enableEventPropagation_) {

	                cancelHandler(e);
	            }
	        };

	        if (!this.div_) {

	            this.div_ = document.createElement("div");

	            this.setBoxStyle_();

	            if (typeof this.content_.nodeType === "undefined") {
	                this.div_.innerHTML = /* this.getCloseBoxImg_() + */ this.content_; // Removed the close button
	            } else {
	                // this.div_.innerHTML = this.getCloseBoxImg_(); Removed the close button
	                this.div_.appendChild(this.content_);
	            }

	            // Add the InfoBox DIV to the DOM
	            this.getPanes()[this.pane_].appendChild(this.div_);

	            this.addClickHandler_();

	            if (this.div_.style.width) {

	                this.fixedWidthSet_ = true;

	            } else {

	                if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {

	                    this.div_.style.width = this.maxWidth_;
	                    this.div_.style.overflow = "auto";
	                    this.fixedWidthSet_ = true;

	                } else { // The following code is needed to overcome problems with MSIE

	                    bw = this.getBoxWidths_();

	                    this.div_.style.width = (this.div_.offsetWidth - bw.left - bw.right) + "px";
	                    this.fixedWidthSet_ = false;
	                }
	            }

	            this.panBox_(this.disableAutoPan_);

	            if (!this.enableEventPropagation_) {

	                this.eventListeners_ = [];

	                // Cancel event propagation.
	                //
	                // Note: mousemove not included (to resolve Issue 152)
	                events = ["mousedown", "mouseover", "mouseout", "mouseup",
	                    "click", "dblclick", "touchstart", "touchend", "touchmove"];

	                for (i = 0; i < events.length; i++) {

	                    this.eventListeners_.push(google.maps.event.addDomListener(this.div_, events[i], cancelHandler));
	                }

	                // Workaround for Google bug that causes the cursor to change to a pointer
	                // when the mouse moves over a marker underneath InfoBox.
	                this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function (e) {
	                    this.style.cursor = "default";
	                }));
	            }

	            this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", ignoreHandler);

	            /**
	             * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
	             * @name InfoBox#domready
	             * @event
	             */
	            google.maps.event.trigger(this, "domready");
	        }
	    };

	    /**
	     * Returns the HTML <IMG> tag for the close box.
	     * @private
	     */
	    InfoBox.prototype.getCloseBoxImg_ = function () {

	        var img = "";

	        if (this.closeBoxURL_ !== "") {

	            img  = "<img";
	            img += " src='" + this.closeBoxURL_ + "'";
	            img += " align=right"; // Do this because Opera chokes on style='float: right;'
	            img += " style='";
	            img += " position: relative;"; // Required by MSIE
	            img += " cursor: pointer;";
	            img += " margin: " + this.closeBoxMargin_ + ";";
	            img += "'>";
	        }

	        return img;
	    };

	    /**
	     * Adds the click handler to the InfoBox close box.
	     * @private
	     */
	    InfoBox.prototype.addClickHandler_ = function () {

	        var closeBox;

	        if (this.closeBoxURL_ !== "") {

	            closeBox = this.div_.firstChild;
	            this.closeListener_ = google.maps.event.addDomListener(closeBox, "click", this.getCloseClickHandler_());

	        } else {

	            this.closeListener_ = null;
	        }
	    };

	    /**
	     * Returns the function to call when the user clicks the close box of an InfoBox.
	     * @private
	     */
	    InfoBox.prototype.getCloseClickHandler_ = function () {

	        var me = this;

	        return function (e) {

	            // 1.0.3 fix: Always prevent propagation of a close box click to the map:
	            e.cancelBubble = true;

	            if (e.stopPropagation) {

	                e.stopPropagation();
	            }

	            /**
	             * This event is fired when the InfoBox's close box is clicked.
	             * @name InfoBox#closeclick
	             * @event
	             */
	            google.maps.event.trigger(me, "closeclick");

	            me.close();
	        };
	    };

	    /**
	     * Pans the map so that the InfoBox appears entirely within the map's visible area.
	     * @private
	     */
	    InfoBox.prototype.panBox_ = function (disablePan) {

	        var map;
	        var bounds;
	        var xOffset = 0, yOffset = 0;

	        if (!disablePan) {

	            map = this.getMap();

	            if (map instanceof google.maps.Map) { // Only pan if attached to map, not panorama

	                if (!map.getBounds().contains(this.position_)) {
	                    // Marker not in visible area of map, so set center
	                    // of map to the marker position first.
	                    map.setCenter(this.position_);
	                }

	                bounds = map.getBounds();

	                var mapDiv = map.getDiv();
	                var mapWidth = mapDiv.offsetWidth;
	                var mapHeight = mapDiv.offsetHeight;
	                var iwOffsetX = this.pixelOffset_.width;
	                var iwOffsetY = this.pixelOffset_.height;
	                var iwWidth = this.div_.offsetWidth;
	                var iwHeight = this.div_.offsetHeight;
	                var padX = this.infoBoxClearance_.width;
	                var padY = this.infoBoxClearance_.height;
	                var pixPosition = this.getProjection().fromLatLngToContainerPixel(this.position_);

	                if (pixPosition.x < (-iwOffsetX + padX)) {
	                    xOffset = pixPosition.x + iwOffsetX - padX;
	                } else if ((pixPosition.x + iwWidth + iwOffsetX + padX) > mapWidth) {
	                    xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
	                }
	                if (this.alignBottom_) {
	                    if (pixPosition.y < (-iwOffsetY + padY + iwHeight)) {
	                        yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
	                    } else if ((pixPosition.y + iwOffsetY + padY) > mapHeight) {
	                        yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
	                    }
	                } else {
	                    if (pixPosition.y < (-iwOffsetY + padY)) {
	                        yOffset = pixPosition.y + iwOffsetY - padY;
	                    } else if ((pixPosition.y + iwHeight + iwOffsetY + padY) > mapHeight) {
	                        yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
	                    }
	                }

	                if (!(xOffset === 0 && yOffset === 0)) {

	                    // Move the map to the shifted center.
	                    //
	                    var c = map.getCenter();
	                    map.panBy(xOffset, yOffset);
	                }
	            }
	        }
	    };

	    /**
	     * Sets the style of the InfoBox by setting the style sheet and applying
	     * other specific styles requested.
	     * @private
	     */
	    InfoBox.prototype.setBoxStyle_ = function () {

	        var i, boxStyle;

	        if (this.div_) {

	            // Apply style values from the style sheet defined in the boxClass parameter:
	            this.div_.className = this.boxClass_;

	            // Clear existing inline style values:
	            this.div_.style.cssText = "";

	            // Apply style values defined in the boxStyle parameter:
	            boxStyle = this.boxStyle_;
	            for (i in boxStyle) {

	                if (boxStyle.hasOwnProperty(i)) {

	                    this.div_.style[i] = boxStyle[i];
	                }
	            }

	            // Fix for iOS disappearing InfoBox problem.
	            // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
	            this.div_.style.WebkitTransform = "translateZ(0)";

	            // Fix up opacity style for benefit of MSIE:
	            //
	            if (typeof this.div_.style.opacity !== "undefined" && this.div_.style.opacity !== "") {
	                // See http://www.quirksmode.org/css/opacity.html
	                this.div_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (this.div_.style.opacity * 100) + ")\"";
	                this.div_.style.filter = "alpha(opacity=" + (this.div_.style.opacity * 100) + ")";
	            }

	            // Apply required styles:
	            //
	            this.div_.style.position = "absolute";
	            this.div_.style.visibility = 'hidden';
	            if (this.zIndex_ !== null) {

	                this.div_.style.zIndex = this.zIndex_;
	            }
	        }
	    };

	    /**
	     * Get the widths of the borders of the InfoBox.
	     * @private
	     * @return {Object} widths object (top, bottom left, right)
	     */
	    InfoBox.prototype.getBoxWidths_ = function () {

	        var computedStyle;
	        var bw = {top: 0, bottom: 0, left: 0, right: 0};
	        var box = this.div_;

	        if (document.defaultView && document.defaultView.getComputedStyle) {

	            computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, "");

	            if (computedStyle) {

	                // The computed styles are always in pixel units (good!)
	                bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
	                bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
	                bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
	                bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
	            }

	        } else if (document.documentElement.currentStyle) { // MSIE

	            if (box.currentStyle) {

	                // The current styles may not be in pixel units, but assume they are (bad!)
	                bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
	                bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
	                bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
	                bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
	            }
	        }

	        return bw;
	    };

	    /**
	     * Invoked when <tt>close</tt> is called. Do not call it directly.
	     */
	    InfoBox.prototype.onRemove = function () {

	        if (this.div_) {

	            this.div_.parentNode.removeChild(this.div_);
	            this.div_ = null;
	        }
	    };

	    /**
	     * Draws the InfoBox based on the current map projection and zoom level.
	     */
	    InfoBox.prototype.draw = function () {

	        this.createInfoBoxDiv_();

	        var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);

	        this.div_.style.left = (pixPosition.x + this.pixelOffset_.width) + "px";

	        if (this.alignBottom_) {
	            this.div_.style.bottom = -(pixPosition.y + this.pixelOffset_.height) + "px";
	        } else {
	            this.div_.style.top = (pixPosition.y + this.pixelOffset_.height) + "px";
	        }

	        if (this.isHidden_) {

	            this.div_.style.visibility = "hidden";

	        } else {

	            this.div_.style.visibility = "visible";
	        }
	    };

	    /**
	     * Sets the options for the InfoBox. Note that changes to the <tt>maxWidth</tt>,
	     *  <tt>closeBoxMargin</tt>, <tt>closeBoxURL</tt>, and <tt>enableEventPropagation</tt>
	     *  properties have no affect until the current InfoBox is <tt>close</tt>d and a new one
	     *  is <tt>open</tt>ed.
	     * @param {InfoBoxOptions} opt_opts
	     */
	    InfoBox.prototype.setOptions = function (opt_opts) {
	        if (typeof opt_opts.boxClass !== "undefined") { // Must be first

	            this.boxClass_ = opt_opts.boxClass;
	            this.setBoxStyle_();
	        }
	        if (typeof opt_opts.boxStyle !== "undefined") { // Must be second

	            this.boxStyle_ = opt_opts.boxStyle;
	            this.setBoxStyle_();
	        }
	        if (typeof opt_opts.content !== "undefined") {

	            this.setContent(opt_opts.content);
	        }
	        if (typeof opt_opts.disableAutoPan !== "undefined") {

	            this.disableAutoPan_ = opt_opts.disableAutoPan;
	        }
	        if (typeof opt_opts.maxWidth !== "undefined") {

	            this.maxWidth_ = opt_opts.maxWidth;
	        }
	        if (typeof opt_opts.pixelOffset !== "undefined") {

	            this.pixelOffset_ = opt_opts.pixelOffset;
	        }
	        if (typeof opt_opts.alignBottom !== "undefined") {

	            this.alignBottom_ = opt_opts.alignBottom;
	        }
	        if (typeof opt_opts.position !== "undefined") {

	            this.setPosition(opt_opts.position);
	        }
	        if (typeof opt_opts.zIndex !== "undefined") {

	            this.setZIndex(opt_opts.zIndex);
	        }
	        if (typeof opt_opts.closeBoxMargin !== "undefined") {

	            this.closeBoxMargin_ = opt_opts.closeBoxMargin;
	        }
	        if (typeof opt_opts.closeBoxURL !== "undefined") {

	            this.closeBoxURL_ = opt_opts.closeBoxURL;
	        }
	        if (typeof opt_opts.infoBoxClearance !== "undefined") {

	            this.infoBoxClearance_ = opt_opts.infoBoxClearance;
	        }
	        if (typeof opt_opts.isHidden !== "undefined") {

	            this.isHidden_ = opt_opts.isHidden;
	        }
	        if (typeof opt_opts.visible !== "undefined") {

	            this.isHidden_ = !opt_opts.visible;
	        }
	        if (typeof opt_opts.enableEventPropagation !== "undefined") {

	            this.enableEventPropagation_ = opt_opts.enableEventPropagation;
	        }

	        if (this.div_) {

	            this.draw();
	        }
	    };

	    /**
	     * Sets the content of the InfoBox.
	     *  The content can be plain text or an HTML DOM node.
	     * @param {string|Node} content
	     */
	    InfoBox.prototype.setContent = function (content) {
	        this.content_ = content;

	        if (this.div_) {

	            if (this.closeListener_) {

	                google.maps.event.removeListener(this.closeListener_);
	                this.closeListener_ = null;
	            }

	            // Odd code required to make things work with MSIE.
	            //
	            if (!this.fixedWidthSet_) {

	                this.div_.style.width = "";
	            }

	            if (typeof content.nodeType === "undefined") {
	                this.div_.innerHTML = this.getCloseBoxImg_() + content;
	            } else {
	                this.div_.innerHTML = this.getCloseBoxImg_();
	                this.div_.appendChild(content);
	            }

	            // Perverse code required to make things work with MSIE.
	            // (Ensures the close box does, in fact, float to the right.)
	            //
	            if (!this.fixedWidthSet_) {
	                this.div_.style.width = this.div_.offsetWidth + "px";
	                if (typeof content.nodeType === "undefined") {
	                    this.div_.innerHTML = this.getCloseBoxImg_() + content;
	                } else {
	                    this.div_.innerHTML = this.getCloseBoxImg_();
	                    this.div_.appendChild(content);
	                }
	            }

	            this.addClickHandler_();
	        }

	        /**
	         * This event is fired when the content of the InfoBox changes.
	         * @name InfoBox#content_changed
	         * @event
	         */
	        google.maps.event.trigger(this, "content_changed");
	    };

	    /**
	     * Sets the geographic location of the InfoBox.
	     * @param {LatLng} latlng
	     */
	    InfoBox.prototype.setPosition = function (latlng) {

	        this.position_ = latlng;

	        if (this.div_) {

	            this.draw();
	        }

	        /**
	         * This event is fired when the position of the InfoBox changes.
	         * @name InfoBox#position_changed
	         * @event
	         */
	        google.maps.event.trigger(this, "position_changed");
	    };

	    /**
	     * Sets the zIndex style for the InfoBox.
	     * @param {number} index
	     */
	    InfoBox.prototype.setZIndex = function (index) {

	        this.zIndex_ = index;

	        if (this.div_) {

	            this.div_.style.zIndex = index;
	        }

	        /**
	         * This event is fired when the zIndex of the InfoBox changes.
	         * @name InfoBox#zindex_changed
	         * @event
	         */
	        google.maps.event.trigger(this, "zindex_changed");
	    };

	    /**
	     * Sets the visibility of the InfoBox.
	     * @param {boolean} isVisible
	     */
	    InfoBox.prototype.setVisible = function (isVisible) {

	        this.isHidden_ = !isVisible;
	        if (this.div_) {
	            this.div_.style.visibility = (this.isHidden_ ? "hidden" : "visible");
	        }
	    };

	    /**
	     * Returns the content of the InfoBox.
	     * @returns {string}
	     */
	    InfoBox.prototype.getContent = function () {

	        return this.content_;
	    };

	    /**
	     * Returns the geographic location of the InfoBox.
	     * @returns {LatLng}
	     */
	    InfoBox.prototype.getPosition = function () {

	        return this.position_;
	    };

	    /**
	     * Returns the zIndex for the InfoBox.
	     * @returns {number}
	     */
	    InfoBox.prototype.getZIndex = function () {

	        return this.zIndex_;
	    };

	    /**
	     * Returns a flag indicating whether the InfoBox is visible.
	     * @returns {boolean}
	     */
	    InfoBox.prototype.getVisible = function () {

	        var isVisible;

	        if ((typeof this.getMap() === "undefined") || (this.getMap() === null)) {
	            isVisible = false;
	        } else {
	            isVisible = !this.isHidden_;
	        }
	        return isVisible;
	    };

	    /**
	     * Shows the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
	     */
	    InfoBox.prototype.show = function () {

	        this.isHidden_ = false;
	        if (this.div_) {
	            this.div_.style.visibility = "visible";
	        }
	    };

	    /**
	     * Hides the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
	     */
	    InfoBox.prototype.hide = function () {

	        this.isHidden_ = true;
	        if (this.div_) {
	            this.div_.style.visibility = "hidden";
	        }
	    };

	    /**
	     * Adds the InfoBox to the specified map or Street View panorama. If <tt>anchor</tt>
	     *  (usually a <tt>google.maps.Marker</tt>) is specified, the position
	     *  of the InfoBox is set to the position of the <tt>anchor</tt>. If the
	     *  anchor is dragged to a new location, the InfoBox moves as well.
	     * @param {Map|StreetViewPanorama} map
	     * @param {MVCObject} [anchor]
	     */
	    InfoBox.prototype.open = function (map, anchor) {

	        var me = this;

	        if (anchor) {

	            this.position_ = anchor.getPosition();
	            this.moveListener_ = google.maps.event.addListener(anchor, "position_changed", function () {
	                me.setPosition(this.getPosition());
	            });
	        }

	        this.setMap(map);

	        if (this.div_) {

	            this.panBox_();
	        }
	    };

	    /**
	     * Removes the InfoBox from the map.
	     */
	    InfoBox.prototype.close = function () {

	        var i;

	        if (this.closeListener_) {

	            google.maps.event.removeListener(this.closeListener_);
	            this.closeListener_ = null;
	        }

	        if (this.eventListeners_) {

	            for (i = 0; i < this.eventListeners_.length; i++) {

	                google.maps.event.removeListener(this.eventListeners_[i]);
	            }
	            this.eventListeners_ = null;
	        }

	        if (this.moveListener_) {

	            google.maps.event.removeListener(this.moveListener_);
	            this.moveListener_ = null;
	        }

	        if (this.contextListener_) {

	            google.maps.event.removeListener(this.contextListener_);
	            this.contextListener_ = null;
	        }

	        this.setMap(null);
	    };
	    return InfoBox;
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var gPlacesTemp = __webpack_require__(14);

	//
	// Google Places Factory and Directives
	//
	angular.module('aggPlaces', [])

	.directive('aggPlaces', function() {
	    return {
	        restrict: 'E',
	        scope: {
	            model: '=',
	            tempUrl: '@'
	        },
	        templateUrl: gPlacesTemp,
	        controllerAs: 'agg',
	        bindToController: true,
	        controller: function($scope, aggPlacesFact) {
	            var self = this;

	            this.getPage = function(pageNum) {
	                aggPlacesFact.getPage(pageNum).then(function(results){
	                    console.log('$scope.getPage fired', results); // This only fires if I wait about 5 seconds after previous run.
	                    self.details = results;
	                });
	            };
	            this.needsPagination = function() {
	                return aggPlacesFact.needsPagination();
	            };
	            $scope.$watch('self.model', function(newVal, oldVal) {
	                if(newVal !== undefined) {
	                    aggPlacesFact.getPlaces(self.model).then(function (results) {
	                        self.details = results;
	                        self.pageNum = aggPlacesFact.pagination.pageNum;
	                        self.numPages = aggPlacesFact.pagination.getNumPages(aggPlacesFact.pagination.numPages);
	                    });
	                }
	            });
	        }
	    };
	})

	.directive('aggPlace', function() {
	    return {
	        restrict: 'E',
	        scope: {
	            tempUrl: '@',
	            placeId: '='
	        },
	        controller: function($scope, aggPlacesFact) {
	            aggPlacesFact.getPlace($scope.placeId).then(function(results) {
	                $scope.details = results;
	            });
	        },
	        template: '<div ng-include="tempUrl"></div>'
	    };
	})

	.factory('aggPlacesFact', function ($q) {
	    var places = {};

	    // Performs Multiple requests for details
	    // If ID array is longer than 10 the array is split using the split() function
	    places.getPlaces = function(ids) {
	        var promises = [];
	        var i;

	        if(ids.length > 10) {
	            pages = splitIds(ids);

	            for(i=0; i<pages[0].length; i++) {
	                promises.push(places.getPlace(pages[0][i]));
	            }
	            // Set Pagination values
	            places.pagination.pageNum = 1;
	            places.pagination.numPages = pages.length;

	        }else{
	            for(i=0; i<ids.length; i++) {
	                promises.push(places.getPlace(ids[i]));
	            }
	        }
	        return $q.all(promises);
	    };

	    // Split id array into groups of 10 since google will only process 10 place requests at a time
	    var splitIds = function(ids) {
	        var idSets = [],
	            i, j, k;

	        for (i=0, j=ids.length, k=0; i<j; i+=10){
	            idSets[k] = ids.slice(i, i+10);
	            k++;
	        }
	        return idSets;
	    };

	    // Makes request for details of single place id
	    places.getPlace = function(id) {

	    var deferred = $q.defer(),
	        request = {placeId: id};

	    var map = new google.maps.Map(document.createElement('div'));

	    var service = new google.maps.places.PlacesService(map);

	    function callback(results, status){
	        if(status === google.maps.places.PlacesServiceStatus.OK) {
	            deferred.resolve(results);
	        }
	    }
	    service.getDetails(request, callback);
	    return deferred.promise;
	    };

	    // When ID array is longer than 10 it is split. This function allows showing of more results
	    places.getPage = function(pageNum) {
	        var promises = [];

	        for(var i=0; i<pages[pageNum].length; i++) {
	            promises.push(places.getPlace(pages[pageNum][i]));
	        }
	        // Set Page Number
	        places.pagination.pageNum = pageNum;
	        console.log("places.getPage fired", promises); // This fired and changes the array

	        return $q.all(promises);
	    };

	    // Pagination
	    var pages = [];
	    places.pagination = {
	        pageNum: 0,
	        numPages: 0,
	        getNumPages: function(numPages){return new Array(numPages);}
	    };

	    places.needsPagination = function() {
	        return places.pagination.numPages > 1;
	    };

	    return places;
	});


/***/ },
/* 14 */
/***/ function(module, exports) {

	var path = '/home/grant/Development/Projects/Libraries/angular-gmap-gplaces/master/src/templates/gPlaces.html';
	var html = "<div ng-include=\"agg.tempUrl\"></div>\n\n<nav id=\"pagination\" aria-label=\"Page navigation\" ng-show=\"agg.needsPagination()\">\n    <ul class=\"pagination\">\n        <li>\n            <a href=\"#\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n            </a>\n        </li>\n\n        <li ng-repeat=\"page in agg.numPages track by $index\">\n            <a href=\"\" ng-click=\"agg.getPage($index)\">{{$index+1}}</a>\n        </li>\n\n        <li>\n            <a href=\"#\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n        </li>\n    </ul>\n</nav>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	angular.module('aggUtils', [])

	/**
	 * @desc Provider that loads scripts for google maps api and font awesome
	 *       configured in angular config and then used as a resolve for each state or route.
	 *
	 */
	    .provider('$aggMap', function () {
	    // Default Options
	    var options = {
	            lang: 'en-US',
	            key: '',
	            libs: 'places',
	            loadFontAwesome: true
	        };


	    // Add Google maps Script to page
	    function loadScript($document) {
	        var scripts = {
	            gMaps: 'https://maps.googleapis.com/maps/api/js?key='+ options.key + '&libraries=' + options.libs + '&callback=mapReady&language=' + options.lang
	        };
	        if(options.loadFontAwesome) {
	            scripts.fontAwesome = 'https://use.fontawesome.com/1c2d7da634.js';
	        }
	        for(var script in scripts) {
	            var scriptTag = $document.createElement('script');
	            scriptTag.src = scripts[script];
	            $document.getElementsByTagName('body')[0].appendChild(scriptTag);
	        }
	    }

	    /**
	     * @method setOptions - called from within angular config to set the provider options
	     * @param {object} opt - the options object
	     * @param {string} opt.lang - (optional) the language used for google maps
	     * @param {string} opt.key - (required) API key for google maps
	     * @param {string} opt.libs - (optional) Additional google maps javascript libraries to load
	     * @param {boolean} opt.loadFontAwesome - (optional) defaults to true and adds script for font awesome to page
	     */
	    this.setOptions = function(opt) {
	        angular.extend(options, opt);
	    };

	    /**
	     * @desc $get - factory method used to load scripts
	     * @returns {Promise} after scripts loaded
	     */
	    this.$get = function($document, $q, $window) {
	        var deferred = $q.defer();
	        loadScript($document[0]);

	        $window.mapReady = (function(deferred) {
	            return function() {
	                deferred.resolve(google);
	                delete $window.mapReady
	            }
	        })(deferred);

	        return deferred.promise;
	    };

	})
	/**
	 * @desc Directive that displays a star rating based on a float input
	 * @attrs {float} aggStarRating - a float <= 5 representing the rating
	 */
	    .directive('aggStarRating', function(){
	    return {
	        restrict: 'A',
	        template: '<span class="stars"><span ng-style="{\'width\': starSize}"></span></span>',
	        link: function(scope, elem, attrs) {
	            var observer = attrs.$observe('aggStarRating', function(value) {
	                scope.starSize = value/5*100+'%';
	                observer();
	            });
	        }
	    }
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var aggMenuView = __webpack_require__(17);
	var aggMenuSearchTemp = __webpack_require__(18);
	var aggDirectionsTemp = __webpack_require__(9);

	angular.module('aggMapMenu', [])
	/**
	 * @desc Animated off-screen menu for the map with directions and search
	 * @attr {}
	 */
	    .directive('aggMenu', function() {
	    return {
	        restrict: 'E',
	        templateUrl: aggMenuView,
	        scope: {
	            mapId: '@mapId'
	        },
	        controllerAs: 'aggMenu',
	        bindToController: true,
	        controller: function() {
	            // Toggle Menu
	            this.isSearch = false;
	            this.isDirections = false;
	            this.toggle = function() {
	                if(this.isSearch) {
	                    this.isSearch = false;
	                    return;
	                }
	                if(this.isDirections) {
	                    this.isDirections = false;
	                    return;
	                }
	                if(!this.isSearch && !this.isDirections) {
	                    this.isSearch = true;
	                }
	            };
	            // Toggle search/directions
	            this.view = '';

	        },
	        link: function(scope, elem, attrs, ctrl) {
	            // Direction Options
	            attrs.$observe('mapId', function(value) {
	                ctrl.directOpt = {
	                    inMenu: true,
	                    mapId: value,
	                    goBack: function () {
	                        ctrl.view = 'default';
	                        ctrl.isSearch = true;
	                        ctrl.isDirections = false;
	                    }
	                };
	            });
	        }
	    }
	})

	.directive('aggMenuSearch', function(aggSearchFact, aggMapServ, aggDirectionsServ) {
	    return {
	        restrict: 'E',
	        templateUrl: aggMenuSearchTemp,
	        controllerAs: 'search',
	        require: ['^aggMenu', 'aggMenuSearch'],
	        scope: {
	            mapId: '@mapId'
	        },
	        bindToController: true,
	        controller: function() {
	            this.results = [];

	            this.openText = function(open) {
	                var answer = '';
	                if(open) {
	                    answer =  'Open Now';
	                }else{
	                    answer = 'Closed Now';
	                }
	                return answer;
	            };
	            this.addressText = function (address) {
	                var split = address.split(',');
	                return split[0];
	            };
	            // Clear Map
	            this.clearMap = function() {
	                aggSearchFact.clear();
	                this.results = [];
	                aggDirectionsServ.markers.forEach(function(marker) {
	                    marker.setMap(null);
	                });
	                aggDirectionsServ.renderer.setMap(null);
	            }
	        },
	        link: function(scope, elem, attrs, ctrls) {
	            var directionIcon = angular.element(elem.find('.directIcon'));
	            // Options to pass to search box directive
	            ctrls[1].searchBox = {
	                map: aggMapServ.maps[parseInt(attrs.mapId)],
	                start: function() {
	                    console.log(directionIcon);
	                    // TODO: This isn't working class is not being added. Element is valid angular.element
	                    directionIcon.addClass('aggSpin');
	                }
	            };
	            // Add watcher to handle search results
	            scope.$watch('search.results', function(value) {
	                if(value.length>0) {
	                    aggSearchFact.handleSearch(value, ctrls[1].searchBox.map)
	                        .then(function() {
	                            // TODO: Mentioned above class isn't added
	                            directionIcon.removeClass('aggSpin');
	                            ctrls[1].showResults = true;
	                        });
	                }
	            });

	            // Opens associated marker when clicking on results in list and animates marker
	            ctrls[1].openMarker = function(id) {
	                google.maps.event.trigger(aggMenuFact.searchObj.markers[id], 'click');
	                ctrls[0].toggle();
	            };

	            ctrls[1].getDirections = function () {
	                ctrls[0].view = 'directions';
	                ctrls[0].isSearch = false;
	                ctrls[0].isDirections = true;
	            }
	        }
	    }
	})

	    .directive('aggMenuDirections', function(aggDirectionsServ, aggMapServ) {

	        function processAutoComp(origin, destination, mode) {
	            return {
	                origin: new google.maps.LatLng(origin.geometry.location.lat(), origin.geometry.location.lng()),
	                destination: new google.maps.LatLng(destination.geometry.location.lat(), destination.geometry.location.lng()),
	                travelMode: mode
	            }
	        }

	        return {
	            restrict: 'E',
	            templateUrl: aggDirectionsTemp,
	            scope: {
	                options: '=options'
	            },
	            controllerAs: 'direct',
	            bindToController: true,
	            controller: function(){
	                this.request = {
	                    origin: {},
	                    destination: {},
	                    travelMode: 'DRIVING'
	                };
	                this.showDirect = false;
	                this.startLoc = '';
	                this.endLoc = '';
	                this.via = '';
	                this.distance = '';
	                this.duration = '';
	                this.steps = [];

	                this.toggleMode = function(mode) {
	                    this.request.travelMode = mode;
	                };

	                this.clearMap = function () {
	                    this.showDirect = false;
	                    aggDirectionsServ.markers.forEach(function(marker) {
	                        marker.setMap(null);
	                    });
	                    aggDirectionsServ.renderer.setMap(null);
	                }
	            },
	            link: function(scope, elem, attrs, ctrl) {
	                var mapId;
	                var setOptions = scope.$watch('direct.options', function(value){
	                    mapId = value.mapId;
	                    scope.inMenu = value.inMenu;
	                    if(value.hasOwnProperty('goBack')) {
	                        ctrl.goBack = value.goBack;
	                    }
	                    setOptions();
	                });

	                scope.$watch('direct.request', function(newVal) {
	                    if(newVal.origin.hasOwnProperty('geometry') && newVal.destination.hasOwnProperty('geometry')) {
	                        var req = processAutoComp(newVal.origin, newVal.destination, newVal.travelMode);

	                        aggDirectionsServ.getSteps(req, aggMapServ.maps[mapId])
	                            .then(function(response) {
	                                var leg = response.routes[0].legs[0];
	                                ctrl.startLoc = leg.start_address;
	                                ctrl.endLoc = leg.end_address;
	                                ctrl.via = response.routes[0].summary;
	                                ctrl.distance = leg.distance.text;
	                                ctrl.duration = leg.duration.text;
	                                for(var i=0; i<leg.steps.length; i++) {
	                                    ctrl.steps.push(leg.steps[i])
	                                }
	                                ctrl.showDirect = true;
	                            });
	                    }

	                }, true)
	            }
	        }
	    });


/***/ },
/* 17 */
/***/ function(module, exports) {

	var path = '/home/grant/Development/Projects/Libraries/angular-gmap-gplaces/master/src/templates/aggMenu.html';
	var html = "<div id=\"aggMenuBtn\" role=\"button\" ng-click=\"aggMenu.toggle()\" ng-class=\"{animateBtn: aggMenu.isSearch, animateBtnDirect: aggMenu.isDirections}\">\n    <i class=\"fa fa-3x\" ng-class=\"{'fa-chevron-right': aggMenu.isSearch || aggMenu.isDirections, 'fa-bars': !aggMenu.isSearch && !aggMenu.isDirections}\"></i>\n</div>\n\n<div id=\"aggMenu\" ng-class=\"{animateMenu: aggMenu.isSearch, animateDirections: aggMenu.isDirections}\">\n    <!-- Use ng-switch to switch between the different directives -->\n    <div style=\"height: 100%\" ng-switch=\"aggMenu.view\">\n\n        <div style=\"height: 100%; overflow: auto\" ng-switch-when=\"directions\" class=\"slide\">\n            <agg-menu-directions options=\"aggMenu.directOpt\"></agg-menu-directions>\n        </div>\n\n        <div ng-switch-default class=\"slide\">\n            <agg-menu-search map-id=\"0\"></agg-menu-search>\n        </div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 18 */
/***/ function(module, exports) {

	var path = '/home/grant/Development/Projects/Libraries/angular-gmap-gplaces/master/src/templates/aggMenuSearch.html';
	var html = "<div class=\"genSearch\">\n    <input id=\"aggSearch\" agg-search=\"search.results\" options=\"search.searchBox\" type=\"text\" placeholder=\"Search for something close by.\">\n    <div class=\"directIcon\" ng-click=\"search.getDirections()\"></div>\n</div>\n\n<div class=\"searchResults aggEnterDown\" ng-if=\"search.results.length > 0\">\n    <i role=\"button\" class=\"fa fa-times fa-2x aggClear colored\" ng-click=\"search.clearMap()\"><span>Clear Results</span></i>\n    <div ng-switch=\"search.numResults\">\n        <div ng-switch-when=\"1\">\n            <div class=\"resultHeader\">\n                <img ng-src=\"{{search.results[0].photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500})}}\">\n                <div class=\"title\">{{search.results[0].name}}</div>\n                <div agg-star-rating=\"{{search.results}}\"></div>\n            </div>\n        </div>\n\n        <div ng-switch-default>\n            <ul class=\"resultsList\">\n                <li class=\"aggResult\" ng-repeat=\"result in search.results track by $index\" ng-click=\"search.openMarker($index)\" role=\"button\">\n\n                    <ul>\n                        <li>{{result.name}}</li>\n                        <li>\n                            <div agg-star-rating=\"{{result.rating}}\"></div>\n                        </li>\n                        <li>{{search.addressText(result.formatted_address)}}</li>\n                        <li class=\"openNow\">{{search.openText(result.opening_hours.open_now)}}</li>\n                    </ul>\n                    <img ng-src=\"{{result.photos[0].getUrl({'maxWidth': 80, 'maxHeight': 92})}}\">\n                    <hr>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n</div>\n\n\n\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 19 */
/***/ function(module, exports) {

	(function () {'use strict';

	angular.module('aggSearch', [])

	/**
	 * @desc Turns an input box into a google place autocomplete box
	 * @attr {obj} the model to be updated with place details
	 */
	    .directive('aggAutoComplete', function () {
	        return {
	            restrict: 'A',
	            scope: {
	                model: '=aggAutoComplete'
	            },
	            link: function (scope, elem, attrs) {
	                var input = document.getElementById(elem.attr('id'));
	                var autocomplete = new google.maps.places.Autocomplete(input, {});
	                autocomplete.addListener('place_changed', updateModel);

	                function updateModel() {
	                    scope.model = autocomplete.getPlace();
	                    scope.$apply();
	                }
	            }
	        }
	    })

	/**
	 * @desc Turns an input box into a google place search box
	 * @attr {obj} the model to be updated with place details
	 * @attr {google.maps.Map} the google map to bind search box to
	  */
	    .directive('aggSearch', function () {
	        return {
	            restrict: 'A',
	            scope: {
	                model: '=aggSearch',
	                options: '=options'
	            },
	            link: function (scope, elem, attrs) {
	                var input = document.getElementById(elem.attr('id')),
	                    searchBox = new google.maps.places.SearchBox(input),
	                    startFn = null;

	                searchBox.addListener('places_changed', updateModel);

	                // Bias the SearchBox results towards current map's viewport.
	                // Change the SearchBox bounds on map bounds change
	                var watcher = scope.$watch('options', function(value) {
	                    if(value.hasOwnProperty('map')) {
	                        searchBox.setBounds(value.map.getBounds());
	                        value.map.addListener('bounds_changed', function() {
	                            searchBox.setBounds(value.map.getBounds());
	                        });
	                    }
	                    if(value.hasOwnProperty('start')) {
	                        startFn = value.start;
	                    }
	                    watcher();
	                });

	                function updateModel() {
	                    if(startFn !== null) startFn();
	                    scope.model = searchBox.getPlaces();
	                    scope.$apply();
	                }
	            }
	        }
	    })

	/**
	 * @desc Methods and properties for the Search Directives as well as methods for searching without directives
	 *
	 * @prop {obj} searchObj - holds reference to search results and the markers generated
	 * @prop {google.maps.Marker[]} searchObj.markers - array for holding markers generated for search results
	 * @prop {google.maps.places.PlaceResult[]} searchObj.results - array for holding PlaceResult objects returned by search
	 */
	    .factory('aggSearchFact', function($q, aggPlacesFact, aggInfoBoxFact) {
	        return {
	            searchObj: {
	                markers: [],
	                results: []
	            },
	            /**
	             * @method nearbySearch - performs google search with supplied params
	             * @param {object} opt - the search details
	             * @param {google.maps.LatLng} opt.location - the point used as the center of the search
	             * @param {int} opt.radius - the radius around search.location to search
	             * @param {string} opt.type - the type of establishments to include in search
	             * @param {int} opt.minPrice - the min price level to include in search
	             * @returns {Promise} containing google PlaceResults[]
	             */
	            nearbySearch: function(opt) {
	                var map = aggMapServ.maps[0],
	                    service = new google.maps.places.PlacesService(map),
	                    deferred = $q.defer(),
	                    request = {
	                        location: opt.location,
	                        radius: opt.radius,
	                        type: [opt.type],
	                        rankBy: google.maps.places.RankBy.PROMINENCE,
	                        minPriceLevel: opt.minPrice
	                    };

	                function callback(results, status, pagination) {
	                    if (status === google.maps.places.PlacesServiceStatus.OK) {
	                        var resultObj = {results: results, pagination: pagination};
	                        deferred.resolve(resultObj);
	                    }else{
	                        console.log('Google maps status is: ', status)
	                    }
	                }
	                service.nearbySearch(request, callback);
	                return deferred.promise;
	            },
	            /**
	             * @method handleSearch - takes a search response and creates markers and infoboxes for each place. Updates the searchObj prop with results
	             * @param {google.maps.places.PlaceResult[]} places - a place result array returned by one of the search directives
	             * @param {google.maps.Map} map - the google maps Map object where the markers will be displayed
	             * @returns {Promise} the updated searchObj is returned as a promise
	             */
	            handleSearch: function(places, map) {
	            var self = this,
	                bounds = new google.maps.LatLngBounds(),
	                deferred = $q.defer();

	            // Alert if no results
	            if (places.length == 0){
	                alert('No places found');
	            }

	            // TODO: Activate more button and attach click handler


	            // Clear out the old markers and search results
	            this.searchObj.results = [];
	            this.searchObj.markers.forEach(function(marker) {
	                marker.setMap(null);
	            });
	            this.searchObj.markers = [];

	            // Create Info Box and map click handler for closing info box
	            var infoBox = new aggInfoBoxFact();

	            // For each place, create an icon, marker, and info box
	            // Push the markers and results to arrays for viewing
	            places.forEach(function(place) {
	                if (!place.geometry) {
	                    console.log("Returned place contains no geometry");
	                    return;
	                }
	                var icon = {
	                    url: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
	                    origin: new google.maps.Point(0, 0),
	                    anchor: new google.maps.Point(17, 34)
	                };

	                // Create a marker for each place.
	                var marker = new google.maps.Marker({
	                    map: map,
	                    icon: icon,
	                    title: place.name,
	                    placeId: place.place_id,
	                    position: place.geometry.location
	                });

	                // Add listener to map for closing infobox and stopping marker animation
	                google.maps.event.addListener(map, 'click', function () {
	                    if(marker.getAnimation() !== null) marker.setAnimation(null);
	                    infoBox.close();
	                });

	                // Create info box and click handler for marker
	                marker.addListener('click', function(){
	                    // Animate Marker
	                    if (marker.getAnimation() !== null) {
	                        marker.setAnimation(null);
	                    } else {
	                        marker.setAnimation(google.maps.Animation.BOUNCE);
	                    }
	                    // Lookup place details for place associated with marker then fill info box with details
	                    aggPlacesFact.getPlace(place.place_id)
	                        .then(function(results) {
	                            // Info Box Content
	                            var content = '<div class="ibHeader">' +
	                                '<h3>' + results.name + '</h3>' +
	                                '</div>' +
	                                '<div class="ibBody">' +
	                                '<img src="' + results.photos[0].getUrl({'maxWidth': 250, 'maxHeight': 250}) + '" width="100%" height="auto">' +
	                                '<ul>' +
	                                '<li>' + results.formatted_phone_number + '</li>' +
	                                '<li>' + results.vicinity + '</li>' +
	                                '<li>' + results.rating + '</li>' +
	                                '</ul>' +
	                                '</div> ';
	                            // Set content of InfoBox
	                            infoBox.setContent(content);
	                            // Open Info Box on marker click
	                            infoBox.open(map, marker);
	                        })
	                });

	                // Set bounds to include all results
	                if (place.geometry.viewport) {
	                    // Only geocodes have viewport.
	                    bounds.union(place.geometry.viewport);
	                } else {
	                    bounds.extend(place.geometry.location);
	                }

	                // Push markers and search results to arrays.
	                // The directives will watch these arrays and update the DOM as necessary
	                self.searchObj.markers.push(marker);
	                self.searchObj.results.push(place);

	                deferred.resolve(self.searchObj);
	            });
	            map.fitBounds(bounds);
	            return deferred.promise;
	            },
	            /**
	             * @method clear - clears out the searchObj
	             */
	            clear: function () {
	                this.searchObj.results = [];
	                this.searchObj.markers.forEach(function(marker) {
	                    marker.setMap(null);
	                });
	            }
	        }
	    })
	}());


/***/ },
/* 20 */
/***/ function(module, exports) {

	(function () {'use strict';

	angular.module('aggAnimations', [])

	.animation('.aggEnterDown', function($animateCss) {
	    return {
	        enter: function (element) {
	            var endHeight = element[0].offsetHeight;
	            console.log(endHeight);
	            return $animateCss(element, {
	                event: 'enter',
	                structural: true,
	                from: {height: 0, overflow: 'hidden'},
	                to: {height: endHeight+'px', overflow: 'auto'},
	                duration: 2
	            });
	        },
	        leave: function (element) {
	            var height = element[0].offsetHeight;
	            return $animateCss(element, {
	                event: 'leave',
	                structural: true,
	                from: {height: height, overflow: 'auto'},
	                to: {height: 0, overflow: 'hidden'},
	                duration: 1
	            });
	        }
	    }
	});
	}());


/***/ }
/******/ ]);