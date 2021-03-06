module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/fire_add.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Fireadd.js":
/*!*******************************!*\
  !*** ./components/Fireadd.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/takahashikouta/MyReact/next_app/components/Fireadd.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass Fireadd extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  // 初期化処理\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"style\", {\n      fontSize: \"12pt\",\n      padding: \"5px 10px\"\n    });\n\n    this.state = {\n      name_str: '',\n      msg_str: '',\n      lastID: -1,\n      data: []\n    };\n    this.getLastID(); // 最後のIDのチェック\n\n    this.doChangeName = this.doChangeName.bind(this);\n    this.doChangeMsg = this.doChangeMsg.bind(this);\n    this.doAction = this.doAction.bind(this);\n  }\n\n  doChangeName(e) {\n    this.setState({\n      name_str: e.target.value\n    });\n  }\n\n  doChangeMsg(e) {\n    this.setState({\n      msg_str: e.target.value\n    });\n  }\n\n  doAction(e) {\n    this.addFireData();\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/fire');\n  } // 最後のIDを取得\n\n\n  getLastID() {\n    let db = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database();\n    let ref = db.ref('Sample/');\n    let self = this;\n    ref.orderByKey().limitToLast(1).on('value', snapshot => {\n      let res = snapshot.val();\n\n      for (let i in res) {\n        self.setState({\n          lastID: i\n        });\n        return;\n      }\n    });\n  } // データを追加する\n\n\n  addFireData() {\n    if (this.state.lastID == -1) {\n      return;\n    }\n\n    let id = this.state.lastID * 1 + 1;\n    let db = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.database();\n    let ref = db.ref('Sample/' + id);\n    ref.set({\n      ID: id,\n      message: this.state.msg_str,\n      name: this.state.name_str\n    });\n  } // レンダリング\n\n\n  render() {\n    if (this.state.lastID == -1) {\n      this.getLastID();\n    }\n\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 7\n      }\n    }, this.state.lastID == -1 ? __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }\n    }, \"please wait...\") : __jsx(\"table\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }\n    }, __jsx(\"tbody\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }\n    }, __jsx(\"tr\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }\n    }, __jsx(\"th\", {\n      className: \"label\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 13\n      }\n    }, \"name\"), __jsx(\"td\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 13\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"your name.\",\n      onChange: this.doChangeName,\n      value: this.state.name_str,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }))), __jsx(\"tr\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 11\n      }\n    }, __jsx(\"th\", {\n      className: \"label\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 13\n      }\n    }, \"message\"), __jsx(\"td\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      size: \"40\",\n      placeholder: \"type message...\",\n      onChange: this.doChangeMsg,\n      value: this.state.msg_str,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 17\n      }\n    }))), __jsx(\"tr\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 11\n      }\n    }, __jsx(\"th\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 15\n      }\n    }), __jsx(\"td\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 24\n      }\n    }, __jsx(\"button\", {\n      onClick: this.doAction,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 11\n      }\n    }, \"Add\"))))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fireadd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmVhZGQuanM/YTNkOCJdLCJuYW1lcyI6WyJGaXJlYWRkIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsInN0YXRlIiwibmFtZV9zdHIiLCJtc2dfc3RyIiwibGFzdElEIiwiZGF0YSIsImdldExhc3RJRCIsImRvQ2hhbmdlTmFtZSIsImJpbmQiLCJkb0NoYW5nZU1zZyIsImRvQWN0aW9uIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJhZGRGaXJlRGF0YSIsIlJvdXRlciIsInB1c2giLCJkYiIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJzZWxmIiwib3JkZXJCeUtleSIsImxpbWl0VG9MYXN0Iiwib24iLCJzbmFwc2hvdCIsInJlcyIsInZhbCIsImkiLCJpZCIsInNldCIsIklEIiwibWVzc2FnZSIsIm5hbWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsT0FBTixTQUFzQkMsK0NBQXRCLENBQWdDO0FBTTlCO0FBQ0FDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLG1DQU5YO0FBQ05DLGNBQVEsRUFBQyxNQURIO0FBRU5DLGFBQU8sRUFBQztBQUZGLEtBTVc7O0FBRWpCLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUMsRUFERTtBQUVYQyxhQUFPLEVBQUMsRUFGRztBQUdYQyxZQUFNLEVBQUMsQ0FBQyxDQUhHO0FBSVhDLFVBQUksRUFBQztBQUpNLEtBQWI7QUFNQSxTQUFLQyxTQUFMLEdBUmlCLENBUUM7O0FBQ2xCLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDRDs7QUFHREQsY0FBWSxDQUFDSSxDQUFELEVBQUc7QUFDYixTQUFLQyxRQUFMLENBQWM7QUFDWlYsY0FBUSxFQUFDUyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFETixLQUFkO0FBR0Q7O0FBQ0RMLGFBQVcsQ0FBQ0UsQ0FBRCxFQUFHO0FBQ1osU0FBS0MsUUFBTCxDQUFjO0FBQ1pULGFBQU8sRUFBQ1EsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBREwsS0FBZDtBQUdEOztBQUdESixVQUFRLENBQUNDLENBQUQsRUFBRztBQUNULFNBQUtJLFdBQUw7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVo7QUFDRCxHQXJDNkIsQ0F1QzlCOzs7QUFDQVgsV0FBUyxHQUFFO0FBQ1QsUUFBSVksRUFBRSxHQUFHQywrQ0FBUSxDQUFDQyxRQUFULEVBQVQ7QUFDQSxRQUFJQyxHQUFHLEdBQUdILEVBQUUsQ0FBQ0csR0FBSCxDQUFPLFNBQVAsQ0FBVjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FELE9BQUcsQ0FBQ0UsVUFBSixHQUNHQyxXQURILENBQ2UsQ0FEZixFQUVHQyxFQUZILENBRU0sT0FGTixFQUVnQkMsUUFBRCxJQUFZO0FBQ3ZCLFVBQUlDLEdBQUcsR0FBR0QsUUFBUSxDQUFDRSxHQUFULEVBQVY7O0FBQ0EsV0FBSSxJQUFJQyxDQUFSLElBQWFGLEdBQWIsRUFBaUI7QUFDZkwsWUFBSSxDQUFDVixRQUFMLENBQWM7QUFDWlIsZ0JBQU0sRUFBQ3lCO0FBREssU0FBZDtBQUdBO0FBQ0Q7QUFDRixLQVZIO0FBV0QsR0F2RDZCLENBMEQ5Qjs7O0FBQ0FkLGFBQVcsR0FBRTtBQUNYLFFBQUksS0FBS2QsS0FBTCxDQUFXRyxNQUFYLElBQXFCLENBQUMsQ0FBMUIsRUFBNEI7QUFDMUI7QUFDRDs7QUFDRCxRQUFJMEIsRUFBRSxHQUFHLEtBQUs3QixLQUFMLENBQVdHLE1BQVgsR0FBb0IsQ0FBcEIsR0FBd0IsQ0FBakM7QUFDQSxRQUFJYyxFQUFFLEdBQUdDLCtDQUFRLENBQUNDLFFBQVQsRUFBVDtBQUNBLFFBQUlDLEdBQUcsR0FBR0gsRUFBRSxDQUFDRyxHQUFILENBQU8sWUFBWVMsRUFBbkIsQ0FBVjtBQUNBVCxPQUFHLENBQUNVLEdBQUosQ0FBUTtBQUNOQyxRQUFFLEVBQUVGLEVBREU7QUFFTkcsYUFBTyxFQUFFLEtBQUtoQyxLQUFMLENBQVdFLE9BRmQ7QUFHTitCLFVBQUksRUFBRSxLQUFLakMsS0FBTCxDQUFXQztBQUhYLEtBQVI7QUFLQyxHQXZFMkIsQ0EwRTlCOzs7QUFDQWlDLFFBQU0sR0FBRTtBQUNOLFFBQUksS0FBS2xDLEtBQUwsQ0FBV0csTUFBWCxJQUFxQixDQUFDLENBQTFCLEVBQTRCO0FBQzFCLFdBQUtFLFNBQUw7QUFDRDs7QUFDRCxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxLQUFLTCxLQUFMLENBQVdHLE1BQVgsSUFBcUIsQ0FBQyxDQUF2QixHQUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkMsR0FJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFXLEVBQUMsWUFBL0I7QUFDRixjQUFRLEVBQUUsS0FBS0csWUFEYjtBQUVGLFdBQUssRUFBRSxLQUFLTixLQUFMLENBQVdDLFFBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSixDQUZGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDLElBQXhCO0FBQ0YsaUJBQVcsRUFBQyxpQkFEVjtBQUVGLGNBQVEsRUFBRSxLQUFLTyxXQUZiO0FBR0YsV0FBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV0UsT0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKLENBRkYsQ0FQRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUosRUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ2I7QUFBUSxhQUFPLEVBQUUsS0FBS08sUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURhLENBQWIsQ0FkRixDQURBLENBTEYsQ0FERjtBQTZCRDs7QUE1RzZCOztBQStHakJmLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaXJlYWRkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuXG5cbmNsYXNzIEZpcmVhZGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdHlsZSA9IHtcbiAgICBmb250U2l6ZTpcIjEycHRcIixcbiAgICBwYWRkaW5nOlwiNXB4IDEwcHhcIlxuICB9XG5cbiAgLy8g5Yid5pyf5YyW5Yem55CGXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lX3N0cjonJyxcbiAgICAgIG1zZ19zdHI6JycsXG4gICAgICBsYXN0SUQ6LTEsXG4gICAgICBkYXRhOltdXG4gICAgfVxuICAgIHRoaXMuZ2V0TGFzdElEKCk7IC8vIOacgOW+jOOBrklE44Gu44OB44Kn44OD44KvXG4gICAgdGhpcy5kb0NoYW5nZU5hbWUgPSB0aGlzLmRvQ2hhbmdlTmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG9DaGFuZ2VNc2cgPSB0aGlzLmRvQ2hhbmdlTXNnLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb0FjdGlvbiA9IHRoaXMuZG9BY3Rpb24uYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgZG9DaGFuZ2VOYW1lKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmFtZV9zdHI6ZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG4gIGRvQ2hhbmdlTXNnKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbXNnX3N0cjplLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuXG4gIGRvQWN0aW9uKGUpe1xuICAgIHRoaXMuYWRkRmlyZURhdGEoKTtcbiAgICBSb3V0ZXIucHVzaCgnL2ZpcmUnKTtcbiAgfVxuXG4gIC8vIOacgOW+jOOBrklE44KS5Y+W5b6XXG4gIGdldExhc3RJRCgpe1xuICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG4gICAgbGV0IHJlZiA9IGRiLnJlZignU2FtcGxlLycpO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICByZWYub3JkZXJCeUtleSgpXG4gICAgICAubGltaXRUb0xhc3QoMSlcbiAgICAgIC5vbigndmFsdWUnLCAoc25hcHNob3QpPT57XG4gICAgICAgIGxldCByZXMgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgZm9yKGxldCBpIGluIHJlcyl7XG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsYXN0SUQ6aVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuXG4gIC8vIOODh+ODvOOCv+OCkui/veWKoOOBmeOCi1xuICBhZGRGaXJlRGF0YSgpe1xuICAgIGlmICh0aGlzLnN0YXRlLmxhc3RJRCA9PSAtMSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpZCA9IHRoaXMuc3RhdGUubGFzdElEICogMSArIDE7XG4gICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICBsZXQgcmVmID0gZGIucmVmKCdTYW1wbGUvJyArIGlkKTtcbiAgICByZWYuc2V0KHtcbiAgICAgIElEOiBpZCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubXNnX3N0cixcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZV9zdHJcbiAgICB9KTtcbiAgICB9XG5cblxuICAvLyDjg6zjg7Pjg4Djg6rjg7PjgrBcbiAgcmVuZGVyKCl7XG4gICAgaWYgKHRoaXMuc3RhdGUubGFzdElEID09IC0xKXtcbiAgICAgIHRoaXMuZ2V0TGFzdElEKCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7KHRoaXMuc3RhdGUubGFzdElEID09IC0xKVxuICAgICAgICA/XG4gICAgICAgIDxwPnBsZWFzZSB3YWl0Li4uPC9wPlxuICAgICAgICA6XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJsYWJlbFwiPm5hbWU8L3RoPlxuICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwieW91ciBuYW1lLlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRvQ2hhbmdlTmFtZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZV9zdHJ9IC8+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJsYWJlbFwiPm1lc3NhZ2U8L3RoPlxuICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHNpemU9XCI0MFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZG9DaGFuZ2VNc2d9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1zZ19zdHJ9IC8+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj48dGg+PC90aD48dGQ+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmRvQWN0aW9ufT5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPjwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaXJlYWRkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Fireadd.js\n");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/takahashikouta/MyReact/next_app/components/Footer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(\"footer\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, this.props.footer));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUdBLE1BQU1BLE1BQU4sU0FBcUJDLCtDQUFyQixDQUErQjtBQUU3QkMsUUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNLEtBQUtDLEtBQUwsQ0FBV0MsTUFBakIsQ0FERixDQURGO0FBS0Q7O0FBUjRCOztBQVVoQkoscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXY+e3RoaXMucHJvcHMuZm9vdGVyfTwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/takahashikouta/MyReact/next_app/components/Header.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(\"header\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, this.props.header), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }\n    }, this.props.title));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiaGVhZGVyIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBR0EsTUFBTUEsTUFBTixTQUFxQkMsK0NBQXJCLENBQStCO0FBRTdCQyxRQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU0sS0FBS0MsS0FBTCxDQUFXQyxNQUFqQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLLEtBQUtELEtBQUwsQ0FBV0UsS0FBaEIsQ0FGRixDQURGO0FBTUQ7O0FBVDRCOztBQVdoQkwscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXY+e3RoaXMucHJvcHMuaGVhZGVyfTwvZGl2PlxuICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/Style */ \"./static/Style.js\");\nvar _jsxFileName = \"/Users/takahashikouta/MyReact/next_app/components/Layout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, this.props.title), __jsx(\"meta\", {\n      charSet: \"utf-8\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }), __jsx(\"meta\", {\n      name: \"viewport\",\n      content: \"initial-scale=1.0, width=device-width\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    })), _static_Style__WEBPACK_IMPORTED_MODULE_4__[\"default\"], __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      header: this.props.header,\n      title: this.props.title,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }\n    }), this.props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      footer: \"copyright SYODA-Tuyano.\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJzdHlsZSIsImhlYWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxNQUFOLFNBQXFCQywrQ0FBckIsQ0FBK0I7QUFFN0JDLFFBQU0sR0FBRztBQUNQLFdBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNOLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUSxLQUFLQyxLQUFMLENBQVdDLEtBQW5CLENBREYsRUFFRTtBQUFNLGFBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFDRSxhQUFPLEVBQUMsdUNBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBRE0sRUFPTEMscURBUEssRUFRTixNQUFDLDBEQUFEO0FBQVEsWUFBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csTUFBM0I7QUFDRSxXQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXQyxLQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUk0sRUFVTCxLQUFLRCxLQUFMLENBQVdJLFFBVk4sRUFXTixNQUFDLDBEQUFEO0FBQVEsWUFBTSxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYTSxDQUFSO0FBYUQ7O0FBaEI0Qjs7QUFvQmhCUCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0YXRpYy9TdHlsZSc7XG5cblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnXG4gICAgICAgICAgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtzdHlsZX1cbiAgICAgIDxIZWFkZXIgaGVhZGVyPXt0aGlzLnByb3BzLmhlYWRlcn1cbiAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IC8+XG4gICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxGb290ZXIgZm9vdGVyPVwiY29weXJpZ2h0IFNZT0RBLVR1eWFuby5cIi8+XG4gICAgPC9kaXY+KTtcbiAgfVxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/fire_add.js":
/*!***************************!*\
  !*** ./pages/fire_add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Fireadd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Fireadd */ \"./components/Fireadd.js\");\nvar _jsxFileName = \"/Users/takahashikouta/MyReact/next_app/pages/fire_add.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  header: \"Fire\",\n  title: \"add data.\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }\n}, __jsx(_components_Fireadd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n})));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maXJlX2FkZC5qcz82N2VhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLHFFQUNiLE1BQUMsMERBQUQ7QUFBUSxRQUFNLEVBQUMsTUFBZjtBQUFzQixPQUFLLEVBQUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLENBREYiLCJmaWxlIjoiLi9wYWdlcy9maXJlX2FkZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEZpcmVhZGQgZnJvbSAnLi4vY29tcG9uZW50cy9GaXJlYWRkJztcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PihcbiAgPExheW91dCBoZWFkZXI9XCJGaXJlXCIgdGl0bGU9XCJhZGQgZGF0YS5cIj5cbiAgICA8RmlyZWFkZCAvPlxuICA8L0xheW91dD5cbik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/fire_add.js\n");

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/takahashikouta/MyReact/next_app/static/Style.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (__jsx(\"style\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 16\n  }\n}, `\n  body {\n    margin:10px;\n    padding:5px;\n    color:#669;\n  }\n  header {\n    font-size:64pt;\n    font-weight:bold;\n    text-align:right;\n    letter-spacing:-8px;\n    color:#ddddff;\n    margin:-32px 5px;\n  }\n  footer {\n    color:#99c;\n    font-size:12pt;\n    text-align:right;\n    border-bottom:1px solid #99c;\n    margin:50px 0px 10px 0px;\n    position: relative;\n    bottom: 10px;\n    right: 10px;\n    left: 10px;\n  }\n  h1 {\n    font-size:22pt;\n    font-weight:bold;\n    text-align:left;\n    letter-spacing:0px;\n    color:#77a;\n    margin:-50px 0px 50px 0px;\n  }\n  p {\n      margin:0px;\n      color:#669;\n      font-size:16pt;\n    }\n  hr {\n    margin:25px 0px;\n  }\n  tr {\n    margin:0px;\n  }\n  th {\n    font-size:14pt;\n    font-weight:plain;\n    text-align:left;\n    padding:0px 20px;\n    margin:0px;\n\n\n  }\n  td {\n    font-size:14pt;\n    font-weight:plain;\n    text-align:left;\n    padding:0px 20px;\n    margin:0px;\n  }\n  .label {\n    font-size:14pt;\n    margin:20px 5px;\n  }\n  .login {\n    text-align:right;\n  }\n  .account {\n    cursor:pointer;\n    font-size:12pt;\n    padding:5px 10px;\n    color:gray;\n    border:2px solid lightgray;\n  }\n  fieldset {\n    margin:0px 0px 30px 0px;\n  }\n  input {\n    border: 0px solid white;\n    border-bottom:1px solid gray;\n    font-size:14pt;\n  }\n  button {\n    font-size:14pt;\n    padding: 0px 20px;\n  }\n  li {\n    font-size:14pt;\n    cursor:pointer;\n  }\n`));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanM/NzFhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFULENBQWYiLCJmaWxlIjoiLi9zdGF0aWMvU3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCA8c3R5bGU+e2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgY29sb3I6IzY2OTtcbiAgfVxuICBoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTo2NHB0O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBsZXR0ZXItc3BhY2luZzotOHB4O1xuICAgIGNvbG9yOiNkZGRkZmY7XG4gICAgbWFyZ2luOi0zMnB4IDVweDtcbiAgfVxuICBmb290ZXIge1xuICAgIGNvbG9yOiM5OWM7XG4gICAgZm9udC1zaXplOjEycHQ7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOTljO1xuICAgIG1hcmdpbjo1MHB4IDBweCAxMHB4IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZToyMnB0O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOjBweDtcbiAgICBjb2xvcjojNzdhO1xuICAgIG1hcmdpbjotNTBweCAwcHggNTBweCAwcHg7XG4gIH1cbiAgcCB7XG4gICAgICBtYXJnaW46MHB4O1xuICAgICAgY29sb3I6IzY2OTtcbiAgICAgIGZvbnQtc2l6ZToxNnB0O1xuICAgIH1cbiAgaHIge1xuICAgIG1hcmdpbjoyNXB4IDBweDtcbiAgfVxuICB0ciB7XG4gICAgbWFyZ2luOjBweDtcbiAgfVxuICB0aCB7XG4gICAgZm9udC1zaXplOjE0cHQ7XG4gICAgZm9udC13ZWlnaHQ6cGxhaW47XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHBhZGRpbmc6MHB4IDIwcHg7XG4gICAgbWFyZ2luOjBweDtcblxuXG4gIH1cbiAgdGQge1xuICAgIGZvbnQtc2l6ZToxNHB0O1xuICAgIGZvbnQtd2VpZ2h0OnBsYWluO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBwYWRkaW5nOjBweCAyMHB4O1xuICAgIG1hcmdpbjowcHg7XG4gIH1cbiAgLmxhYmVsIHtcbiAgICBmb250LXNpemU6MTRwdDtcbiAgICBtYXJnaW46MjBweCA1cHg7XG4gIH1cbiAgLmxvZ2luIHtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICB9XG4gIC5hY2NvdW50IHtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBmb250LXNpemU6MTJwdDtcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xuICAgIGNvbG9yOmdyYXk7XG4gICAgYm9yZGVyOjJweCBzb2xpZCBsaWdodGdyYXk7XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIG1hcmdpbjowcHggMHB4IDMwcHggMHB4O1xuICB9XG4gIGlucHV0IHtcbiAgICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xuICAgIGZvbnQtc2l6ZToxNHB0O1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOjE0cHQ7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gIH1cbiAgbGkge1xuICAgIGZvbnQtc2l6ZToxNHB0O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICB9XG5gfTwvc3R5bGU+OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });