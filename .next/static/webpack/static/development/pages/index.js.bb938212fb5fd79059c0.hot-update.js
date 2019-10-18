webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/FraminghamCalculator/risk-calc.js":
/*!***********************************************!*\
  !*** ./src/FraminghamCalculator/risk-calc.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateRiskLevel; });
function calculateRiskLevel(score, gender) {
  if (gender === 'male') {
    return calculateMenRiskLevel(score);
  } else {
    return calculateWomenRiskLevel(score);
  }
}

function calculateMenRiskLevel(Score) {
  var risklevel = 'unknown';

  if (Score <= 10) {
    risklevel = 'low';
  } else if (Score >= 11 && Score <= 14) {
    risklevel = 'intermediate';
  } else if (Score >= 15) {
    risklevel = 'high';
  }

  return risklevel;
}

function calculateWomenRiskLevel(Score) {
  var risklevel = 'unknown';

  if (Score <= 12) {
    risklevel = 'low';
  } else if (Score >= 13 && Score <= 17) {
    risklevel = 'intermediate';
  } else if (Score >= 18) {
    risklevel = 'high';
  }

  return risklevel;
}

/***/ })

})
//# sourceMappingURL=index.js.bb938212fb5fd79059c0.hot-update.js.map