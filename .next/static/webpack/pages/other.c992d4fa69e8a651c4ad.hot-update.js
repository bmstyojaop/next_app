webpackHotUpdate_N_E("pages/other",{

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/takahashikouta/MyReact/next_app/components/Counter.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Counter = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Counter, _Component);\n\n  var _super = _createSuper(Counter);\n\n  function Counter(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Counter);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"style\", {\n      fontSize: \"12pt\",\n      padding: \"5px 15px\"\n    });\n\n    _this.doAction = _this.doAction.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.reset = _this.reset.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Counter, [{\n    key: \"doAction\",\n    value: function doAction(e) {\n      if (e.shiftKey) {\n        return this.props.dispatch({\n          type: 'DECREMENT'\n        });\n      } else {\n        return this.props.dispatch({\n          type: 'INCREMENT'\n        });\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      return this.props.dispatch({\n        type: 'RESET'\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 7\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }\n      }, this.props.message, \": \", this.props.count), __jsx(\"button\", {\n        style: this.style,\n        onClick: this.doAction,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }\n      }, \"Count\"), __jsx(\"button\", {\n        style: this.style,\n        onClick: this.reset,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }\n      }, \"Reset\"));\n    }\n  }]);\n\n  return Counter;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nCounter = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(Counter);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudGVyLmpzP2I3ODUiXSwibmFtZXMiOlsiQ291bnRlciIsInByb3BzIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiZG9BY3Rpb24iLCJiaW5kIiwicmVzZXQiLCJlIiwic2hpZnRLZXkiLCJkaXNwYXRjaCIsInR5cGUiLCJtZXNzYWdlIiwiY291bnQiLCJzdHlsZSIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBR01BLE87Ozs7O0FBT0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGdOQU5YO0FBQ05DLGNBQVEsRUFBQyxNQURIO0FBRU5DLGFBQU8sRUFBQztBQUZGLEtBTVc7O0FBRWpCLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLHlHQUFoQjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdELElBQVgseUdBQWI7QUFIaUI7QUFJbEI7Ozs7NkJBR1FFLEMsRUFBRTtBQUNULFVBQUlBLENBQUMsQ0FBQ0MsUUFBTixFQUFlO0FBQ2IsZUFBTyxLQUFLUCxLQUFMLENBQVdRLFFBQVgsQ0FBb0I7QUFBRUMsY0FBSSxFQUFDO0FBQVAsU0FBcEIsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBS1QsS0FBTCxDQUFXUSxRQUFYLENBQW9CO0FBQUVDLGNBQUksRUFBQztBQUFQLFNBQXBCLENBQVA7QUFDRDtBQUNGOzs7NEJBR087QUFDTixhQUFPLEtBQUtULEtBQUwsQ0FBV1EsUUFBWCxDQUFvQjtBQUFFQyxZQUFJLEVBQUM7QUFBUCxPQUFwQixDQUFQO0FBQ0Q7Ozs2QkFHUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxLQUFLVCxLQUFMLENBQVdVLE9BQWYsUUFBMEIsS0FBS1YsS0FBTCxDQUFXVyxLQUFyQyxDQURGLEVBRUU7QUFBUSxhQUFLLEVBQUUsS0FBS0MsS0FBcEI7QUFBMkIsZUFBTyxFQUFFLEtBQUtULFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFJRTtBQUFRLGFBQUssRUFBRSxLQUFLUyxLQUFwQjtBQUEyQixlQUFPLEVBQUUsS0FBS1AsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixDQURGO0FBU0Q7Ozs7RUF0Q21CUSwrQzs7QUEwQ3RCZCxPQUFPLEdBQUdlLDJEQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVVBLEtBQVY7QUFBQSxDQUFELENBQVAsQ0FBeUJoQixPQUF6QixDQUFWO0FBQ2VBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db3VudGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdHlsZSA9IHtcbiAgICBmb250U2l6ZTpcIjEycHRcIixcbiAgICBwYWRkaW5nOlwiNXB4IDE1cHhcIlxuICB9XG5cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIGRvQWN0aW9uKGUpe1xuICAgIGlmIChlLnNoaWZ0S2V5KXtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRpc3BhdGNoKHsgdHlwZTonREVDUkVNRU5UJyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOidJTkNSRU1FTlQnIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgcmVzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOidSRVNFVCcgfSk7XG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPnt0aGlzLnByb3BzLm1lc3NhZ2V9OiB7dGhpcy5wcm9wcy5jb3VudH08L3A+XG4gICAgICAgIDxidXR0b24gc3R5bGU9e3RoaXMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259PlxuICAgICAgICAgIENvdW50PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gc3R5bGU9e3RoaXMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMucmVzZXR9PlxuICAgICAgICAgIFJlc2V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5Db3VudGVyID0gY29ubmVjdCgoc3RhdGUpPT4gc3RhdGUpKENvdW50ZXIpO1xuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Counter.js\n");

/***/ })

})