webpackHotUpdate_N_E("pages/calc",{

/***/ "./components/Calc.js":
/*!****************************!*\
  !*** ./components/Calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/takahashikouta/MyReact/next_app/components/Calc.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Calc = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Calc, _Component);\n\n  var _super = _createSuper(Calc);\n\n  function Calc(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Calc);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"style\", {\n      fontSize: \"12pt\",\n      padding: \"5px 10px\"\n    });\n\n    _this.state = {\n      input: ''\n    };\n    _this.onChange = _this.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.onKeyPress = _this.onKeyPress.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.doAction = _this.doAction.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.reset = _this.reset.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Calc, [{\n    key: \"onChange\",\n    value: function onChange(e) {\n      this.setState({\n        input: e.target.value\n      });\n    }\n  }, {\n    key: \"onKeyPress\",\n    value: function onKeyPress(e) {\n      if (event.keyCode == 13) {\n        this.doAction(e);\n      }\n    }\n  }, {\n    key: \"doAction\",\n    value: function doAction(e) {\n      this.setState({\n        input: ''\n      });\n      return this.props.dispatch({\n        type: 'ENTER',\n        value: this.state.input\n      });\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.setState({\n        input: ''\n      });\n      return this.props.dispatch({\n        type: 'RESET'\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var result = [];\n      var n = this.props.data.length;\n\n      for (var i = 0; i < n; i++) {\n        result.push(__jsx(\"tr\", {\n          key: i,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 9\n          }\n        }, __jsx(\"th\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 11\n          }\n        }, this.props.data[i]), __jsx(\"td\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 11\n          }\n        }, this.props.number[i])));\n      }\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 7\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }\n      }, \"TOTAL: \", this.props.result), __jsx(\"input\", {\n        type: \"text\",\n        style: this.style,\n        size: \"40\",\n        value: this.state.input,\n        onChange: this.onChange,\n        onClick: this.onKeyPress,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 9\n        }\n      }), __jsx(\"button\", {\n        style: this.style,\n        onClick: this.reset,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 9\n        }\n      }, \"Reset\"), __jsx(\"hr\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }\n      }), __jsx(\"table\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }\n      }, __jsx(\"tbody\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 13\n        }\n      }, result)), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }\n      }, this.props.message));\n    }\n  }]);\n\n  return Calc;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nCalc = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return state;\n})(Calc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calc);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjLmpzPzRlNWQiXSwibmFtZXMiOlsiQ2FsYyIsInByb3BzIiwiZm9udFNpemUiLCJwYWRkaW5nIiwic3RhdGUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uS2V5UHJlc3MiLCJkb0FjdGlvbiIsInJlc2V0IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJldmVudCIsImtleUNvZGUiLCJkaXNwYXRjaCIsInR5cGUiLCJyZXN1bHQiLCJuIiwiZGF0YSIsImxlbmd0aCIsImkiLCJwdXNoIiwibnVtYmVyIiwic3R5bGUiLCJtZXNzYWdlIiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBR01BLEk7Ozs7O0FBTUosZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGdOQUxYO0FBQ05DLGNBQVEsRUFBQyxNQURIO0FBRU5DLGFBQU8sRUFBQztBQUZGLEtBS1c7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUU7QUFESSxLQUFiO0FBR0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQseUdBQWhCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQix5R0FBbEI7QUFDQSxVQUFLRSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0YsSUFBZCx5R0FBaEI7QUFDQSxVQUFLRyxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXSCxJQUFYLHlHQUFiO0FBUmlCO0FBU2xCOzs7OzZCQUdRSSxDLEVBQUU7QUFDVCxXQUFLQyxRQUFMLENBQWM7QUFDWlAsYUFBSyxFQUFFTSxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFESixPQUFkO0FBR0Q7OzsrQkFFVUgsQyxFQUFFO0FBQ1gsVUFBSUksS0FBSyxDQUFDQyxPQUFOLElBQWlCLEVBQXJCLEVBQXlCO0FBQ3ZCLGFBQUtQLFFBQUwsQ0FBY0UsQ0FBZDtBQUNEO0FBQ0Y7Ozs2QkFFUUEsQyxFQUFFO0FBQ1QsV0FBS0MsUUFBTCxDQUFjO0FBQ1pQLGFBQUssRUFBQztBQURNLE9BQWQ7QUFHQSxhQUFPLEtBQUtKLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0I7QUFDekJDLFlBQUksRUFBQyxPQURvQjtBQUV6QkosYUFBSyxFQUFDLEtBQUtWLEtBQUwsQ0FBV0M7QUFGUSxPQUFwQixDQUFQO0FBSUQ7Ozs0QkFFTztBQUNOLFdBQUtPLFFBQUwsQ0FBYztBQUNaUCxhQUFLLEVBQUM7QUFETSxPQUFkO0FBR0EsYUFBTyxLQUFLSixLQUFMLENBQVdnQixRQUFYLENBQW9CO0FBQ3pCQyxZQUFJLEVBQUM7QUFEb0IsT0FBcEIsQ0FBUDtBQUdEOzs7NkJBRVM7QUFDUixVQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlDLENBQUMsR0FBRyxLQUFLbkIsS0FBTCxDQUFXb0IsSUFBWCxDQUFnQkMsTUFBeEI7O0FBQ0EsV0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdILENBQW5CLEVBQXNCRyxDQUFDLEVBQXZCLEVBQTBCO0FBQ3hCSixjQUFNLENBQUNLLElBQVAsQ0FDRTtBQUFJLGFBQUcsRUFBRUQsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLLEtBQUt0QixLQUFMLENBQVdvQixJQUFYLENBQWdCRSxDQUFoQixDQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUssS0FBS3RCLEtBQUwsQ0FBV3dCLE1BQVgsQ0FBa0JGLENBQWxCLENBQUwsQ0FGRixDQURGO0FBTUQ7O0FBQ0QsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBVyxLQUFLdEIsS0FBTCxDQUFXa0IsTUFBdEIsQ0FERixFQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFLEtBQUtPLEtBQS9CO0FBQXNDLFlBQUksRUFBQyxJQUEzQztBQUNFLGFBQUssRUFBRSxLQUFLdEIsS0FBTCxDQUFXQyxLQURwQjtBQUVFLGdCQUFRLEVBQUUsS0FBS0MsUUFGakI7QUFFMkIsZUFBTyxFQUFFLEtBQUtFLFVBRnpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUtFO0FBQVEsYUFBSyxFQUFFLEtBQUtrQixLQUFwQjtBQUEyQixlQUFPLEVBQUUsS0FBS2hCLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFRUyxNQUFSLENBREYsQ0FSSixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxLQUFLbEIsS0FBTCxDQUFXMEIsT0FBZixDQVhKLENBREY7QUFlRDs7OztFQTNFZ0JDLCtDOztBQThFbkI1QixJQUFJLEdBQUc2QiwyREFBTyxDQUFDLFVBQUN6QixLQUFEO0FBQUEsU0FBVUEsS0FBVjtBQUFBLENBQUQsQ0FBUCxDQUF5QkosSUFBekIsQ0FBUDtBQUNlQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FsYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cblxuY2xhc3MgQ2FsYyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0eWxlID0ge1xuICAgIGZvbnRTaXplOlwiMTJwdFwiLFxuICAgIHBhZGRpbmc6XCI1cHggMTBweFwiXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXQ6ICcnLFxuICAgIH07XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5UHJlc3MgPSB0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIG9uQ2hhbmdlKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBvbktleVByZXNzKGUpe1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICB0aGlzLmRvQWN0aW9uKGUpO1xuICAgIH1cbiAgfVxuXG4gIGRvQWN0aW9uKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXQ6JycsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTonRU5URVInLFxuICAgICAgdmFsdWU6dGhpcy5zdGF0ZS5pbnB1dFxuICAgIH0pXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OicnLFxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTonUkVTRVQnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBuID0gdGhpcy5wcm9wcy5kYXRhLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICA8dGg+e3RoaXMucHJvcHMuZGF0YVtpXX08L3RoPlxuICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5udW1iZXJbaV19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlRPVEFMOiB7dGhpcy5wcm9wcy5yZXN1bHR9PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17dGhpcy5zdHlsZX0gc2l6ZT1cIjQwXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25DbGljaz17dGhpcy5vbktleVByZXNzfSAvPlxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt0aGlzLnN0eWxlfSBvbkNsaWNrPXt0aGlzLnJlc2V0fT5cbiAgICAgICAgICBSZXNldDwvYnV0dG9uPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0Ym9keT57cmVzdWx0fTwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8cD57dGhpcy5wcm9wcy5tZXNzYWdlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5DYWxjID0gY29ubmVjdCgoc3RhdGUpPT4gc3RhdGUpKENhbGMpO1xuZXhwb3J0IGRlZmF1bHQgQ2FsYzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Calc.js\n");

/***/ })

})