webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Form/index.js":
/*!***************************!*\
  !*** ./src/Form/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data.js */ "./src/Form/data.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");



var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Form/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    calcButton: {
      margin: theme.spacing(1),
      width: '40%'
    },
    resetButton: {
      margin: theme.spacing(1)
    }
  };
});
function Form() {
  var classes = useStyles(); //Radio logic

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      radioVal = _React$useState2[0],
      setRadioVal = _React$useState2[1]; //Selects logic


  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      selectsVals = _React$useState4[0],
      setSelectsVals = _React$useState4[1];

  var handleSelectChange = function handleSelectChange(event) {
    setSelectsVals(function (oldValues) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    });
  }; // Checkbox Logic


  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    smoking: false,
    diabetes: false,
    treatment: false
  }),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      checkboxVals = _React$useState6[0],
      setCheckboxState = _React$useState6[1];

  var handleCheckboxChange = function handleCheckboxChange(name) {
    return function (event) {
      setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, checkboxVals, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, event.target.checked)));
    };
  };

  function reset() {
    setRadioVal('');
    setSelectsVals({});
    setCheckboxState({
      smoking: false,
      diabetes: false,
      treatment: false
    });
    console.log(checkboxVals);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("form", {
    autoComplete: "off",
    className: "jsx-2156212043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "fieldset",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Gender"), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "aria-label": "gender",
    name: "gender",
    value: radioVal,
    onChange: function onChange(event) {
      return setRadioVal(event.target.value);
    },
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "female",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }),
    label: "Female",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "male",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }),
    label: "Male",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), _data_js__WEBPACK_IMPORTED_MODULE_17__["selects"].map(function (select) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.formControl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      htmlFor: select.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, select.label), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__["default"], {
      value: selectsVals[select.name],
      onChange: handleSelectChange,
      inputProps: {
        name: select.name,
        id: select.name
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, select.values.map(function (val) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: val,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, val);
    })), select.helper && __jsx(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, select.helper)), (select.name === 'age' || select.name === 'totaldl' || select.name === 'wt') && __jsx("br", {
      className: "jsx-2156212043" + " " + "desktopOnly",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    row: true,
    className: "checkboxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_17__["checkboxes"].map(function (checkbox) {
    return __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        checked: checkboxVals.checkedA,
        onChange: handleCheckboxChange(checkbox.checkboxKey),
        value: checkbox.checkboxKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }),
      label: checkbox.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    });
  })), __jsx("br", {
    className: "jsx-2156212043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2156212043" + " " + "formbuttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: reset,
    variant: "contained",
    color: "secondary",
    className: classes.resetButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Reset"),  true && window.innerWidth < 1200 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "contained",
    color: "primary",
    className: classes.resetButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Calculate"),  true && window.innerWidth > 1199 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "contained",
    color: "primary",
    className: classes.calcButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Calculate"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2156212043",
    __self: this
  }, ".checkboxes.jsx-2156212043{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 auto;}.formbuttons.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}@media (min-width:1200px){.mobileOnly.jsx-2156212043{display:none;}}@media (max-width:1199px){.desktopOnly.jsx-2156212043{display:none;}form.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}form.jsx-2156212043 div.jsx-2156212043{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.checkboxes.jsx-2156212043{margin:0 auto;}.formbuttons.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (max-width:499){.checkboxes.jsx-2156212043{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0Zvcm0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0lnQixBQUd3QyxBQUloQixBQU9BLEFBS0EsQUFHRCxBQU1XLEFBSVQsQUFJRCxBQU9TLGFBNUJ4QixBQUtBLENBYUEsNERBekJxQixBQWVHLEFBY1EsSUFPakIscUJBZmYsd0JBekJnQixjQUNoQixNQUkrQixTQWVOLEFBcUJJLHdCQVA3QiwyRUFiQSxNQXFCQSxTQXBDRiIsImZpbGUiOiIvaG9tZS9nZW1hbmVwYS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJveWVjdG9zL1JlYWN0L2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3NyYy9Gb3JtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCc7XG5cbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCB7IGNoZWNrYm94ZXMsIHNlbGVjdHMgfSBmcm9tICcuL2RhdGEuanMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBmb3JtQ29udHJvbDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtaW5XaWR0aDogMjIwLFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgY2FsY0J1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICB3aWR0aDogJzQwJSdcbiAgfSxcbiAgcmVzZXRCdXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH1cbn0pKTtcblxuICBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIC8vUmFkaW8gbG9naWNcbiAgY29uc3QgW3JhZGlvVmFsLCBzZXRSYWRpb1ZhbF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cbiAgLy9TZWxlY3RzIGxvZ2ljXG4gIGNvbnN0IFtzZWxlY3RzVmFscywgc2V0U2VsZWN0c1ZhbHNdID0gUmVhY3QudXNlU3RhdGUoeyB9KTtcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHNldFNlbGVjdHNWYWxzKG9sZFZhbHVlcyA9PiAoe1xuICAgICAgLi4ub2xkVmFsdWVzLFxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICAvLyBDaGVja2JveCBMb2dpY1xuICBjb25zdCBbY2hlY2tib3hWYWxzLCBzZXRDaGVja2JveFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBzbW9raW5nOiBmYWxzZSxcbiAgICBkaWFiZXRlczogZmFsc2UsXG4gICAgdHJlYXRtZW50OiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSBuYW1lID0+IGV2ZW50ID0+IHtcbiAgICBzZXRDaGVja2JveFN0YXRlKHsgLi4uY2hlY2tib3hWYWxzLCBbbmFtZV06IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgc2V0UmFkaW9WYWwoJycpO1xuICAgICAgc2V0U2VsZWN0c1ZhbHMoeyB9KTtcbiAgICAgIHNldENoZWNrYm94U3RhdGUoe1xuICAgICAgICBzbW9raW5nOiBmYWxzZSxcbiAgICAgICAgZGlhYmV0ZXM6IGZhbHNlLFxuICAgICAgICB0cmVhdG1lbnQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrYm94VmFscylcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICBcbiAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XG4gICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+R2VuZGVyPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9e3JhZGlvVmFsfSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0UmFkaW9WYWwoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcm93PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiZmVtYWxlXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkZlbWFsZVwiIC8+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtYWxlXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIk1hbGVcIiAvPlxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAge3NlbGVjdHMubWFwKHNlbGVjdCA9PlxuICAgICAgICA8PlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxuICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj17c2VsZWN0Lm5hbWV9PntzZWxlY3QubGFiZWx9PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0c1ZhbHNbc2VsZWN0Lm5hbWVdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgbmFtZTogc2VsZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdC5uYW1lLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdC52YWx1ZXMubWFwKHZhbCA9PiBcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXt2YWx9Pnt2YWx9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIHtzZWxlY3QuaGVscGVyICYmIDxGb3JtSGVscGVyVGV4dD57c2VsZWN0LmhlbHBlcn08L0Zvcm1IZWxwZXJUZXh0Pn1cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIFxuICAgICAgICAgIHsoc2VsZWN0Lm5hbWUgPT09ICdhZ2UnIHx8IHNlbGVjdC5uYW1lID09PSAndG90YWxkbCcgfHwgc2VsZWN0Lm5hbWUgPT09ICd3dCcpICYmIDxiciBjbGFzc05hbWU9XCJkZXNrdG9wT25seVwiLz59XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPEZvcm1Hcm91cCByb3cgY2xhc3NOYW1lPVwiY2hlY2tib3hlc1wiPlxuICAgICAge2NoZWNrYm94ZXMubWFwKGNoZWNrYm94ID0+XG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD17Y2hlY2tib3hWYWxzLmNoZWNrZWRBfSBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hDaGFuZ2UoY2hlY2tib3guY2hlY2tib3hLZXkpfSB2YWx1ZT17Y2hlY2tib3guY2hlY2tib3hLZXl9IC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsPXtjaGVja2JveC5sYWJlbH1cbiAgICAgICAgLz4pfVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYnV0dG9uc1wiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Jlc2V0fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMucmVzZXRCdXR0b259PlxuICAgICAgICAgIFJlc2V0XG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIHsodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmlubmVyV2lkdGggPCAxMjAwICYmXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNldEJ1dHRvbn0+XG4gICAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgPC9CdXR0b24+KX1cblxuICAgICAgICB7KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbm5lcldpZHRoID4gMTE5OSAmJlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FsY0J1dHRvbn0+XG4gICAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgICA8L0J1dHRvbj4pfVxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jaGVja2JveGVzIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfTtcbiAgICAgIC5mb3JtYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgLm1vYmlsZU9ubHkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmRlc2t0b3BPbmx5IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybSBkaXYge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZWNrYm94ZXMge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1idXR0b25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5OSkge1xuICAgICAgICAuY2hlY2tib3hlcyB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Form/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.02055bd0a961f2356c6d.hot-update.js.map