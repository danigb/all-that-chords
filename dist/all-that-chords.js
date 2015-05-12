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

	
	var lib = __webpack_require__(1);
	if(true) module.exports = lib;
	else if(typeof(window) !== 'undefined') window = lib;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Chord = __webpack_require__(2);

	module.exports = chord;

	function chord(name) {
	  var data = chord.data["X" + name.substring(1)];
	  if (!data) return null;
	  if(data.same) data = chord.data[data.same];
	  var root = name[0];
	  return new Chord(name, root, data);
	}
	chord.data = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./data/chords.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = Chord;

	function Chord(name, root, data) {
	  this.name = name;
	  this.root = root;
	  this.data = data;
	}


/***/ }
/******/ ]);