webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/FraminghamCalculator/heartage-calc.js":
/*!***************************************************!*\
  !*** ./src/FraminghamCalculator/heartage-calc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/FraminghamCalculator/index.js":
/*!*******************************************!*\
  !*** ./src/FraminghamCalculator/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FraminghamCalculator; });
/* harmony import */ var _age_points_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./age-points-calc */ "./src/FraminghamCalculator/age-points-calc.js");
/* harmony import */ var _hdl_points_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hdl-points-calc */ "./src/FraminghamCalculator/hdl-points-calc.js");
/* harmony import */ var _totaldl_points_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totaldl-points-calc */ "./src/FraminghamCalculator/totaldl-points-calc.js");
/* harmony import */ var _ta_points_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ta-points-calc */ "./src/FraminghamCalculator/ta-points-calc.js");
/* harmony import */ var _smoking_points_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smoking-points-calc */ "./src/FraminghamCalculator/smoking-points-calc.js");
/* harmony import */ var _cvd_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cvd-calc */ "./src/FraminghamCalculator/cvd-calc.js");
/* harmony import */ var _heartage_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heartage-calc */ "./src/FraminghamCalculator/heartage-calc.js");
/* harmony import */ var _heartage_calc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heartage_calc__WEBPACK_IMPORTED_MODULE_6__);







function FraminghamCalculator(data) {
  var age = data.age,
      diabetes = data.diabetes,
      gender = data.gender,
      hdl = data.hdl,
      ldl = data.ldl,
      smoking = data.smoking,
      ta = data.ta,
      totaldl = data.totaldl,
      treatment = data.treatment,
      wt = data.wt; //Points Calculation

  var agePoints = Object(_age_points_calc__WEBPACK_IMPORTED_MODULE_0__["default"])(age, gender);
  var hdlPoints = Object(_hdl_points_calc__WEBPACK_IMPORTED_MODULE_1__["default"])(hdl, gender);
  var dlPoints = Object(_totaldl_points_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(totaldl, gender);
  var taPoints = Object(_ta_points_calc__WEBPACK_IMPORTED_MODULE_3__["default"])(ta, treatment, gender);
  var smokingPoints = Object(_smoking_points_calc__WEBPACK_IMPORTED_MODULE_4__["default"])(smoking, gender);
  var score = agePoints + hdlPoints + dlPoints + taPoints + smokingPoints; // Framingham Score Calculations

  var cvd = Object(_cvd_calc__WEBPACK_IMPORTED_MODULE_5__["default"])(score, gender);
  var heartage = _heartage_calc__WEBPACK_IMPORTED_MODULE_6___default()(score, gender);
  console.log('==================================');
  console.log('agePoints');
  console.log(agePoints);
  console.log('hdlPoints');
  console.log(hdlPoints);
  console.log('totalDLPoints');
  console.log(dlPoints);
  console.log('taPoints');
  console.log(taPoints);
  console.log('smokingPoints');
  console.log(smokingPoints);
  console.log('cvd');
  console.log(cvd);
  console.log('heartage');
  console.log(heartage);
  return data;
}

/***/ })

})
//# sourceMappingURL=index.js.96f9a9c5f4666776c418.hot-update.js.map