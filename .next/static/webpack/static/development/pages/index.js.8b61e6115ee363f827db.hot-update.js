webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/FraminghamCalculator/ta-points-calc.js":
/*!****************************************************!*\
  !*** ./src/FraminghamCalculator/ta-points-calc.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTAPoints; });
function getTAPoints(ta, treatment, gender) {
  if (gender === 'male') {
    return calculateMenTAPoints(ta, treatment);
  } else {
    return calculateWomenTAPoints(ta, treatment);
  }
}

function calculateMenTAPoints(taRangeSelected, isOnTreatment) {
  var taPoints = 0;

  switch (taRangeSelected) {
    case "< 120":
      if (!isOnTreatment) {
        taPoints = -2;
      }

      if (isOnTreatment) {
        taPoints = 0;
      }

      break;

    case "120 - 129":
      if (!isOnTreatment) {
        taPoints = 0;
      }

      if (isOnTreatment) {
        taPoints = 2;
      }

      break;

    case "130 - 139":
      if (!isOnTreatment) {
        taPoints = 1;
      }

      if (isOnTreatment) {
        taPoints = 3;
      }

      break;

    case "140 - 149":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 4;
      }

      break;

    case "150 - 159":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 4;
      }

      break;

    case "160+":
      if (!isOnTreatment) {
        taPoints = 3;
      }

      if (isOnTreatment) {
        taPoints = 5;
      }

      break;
  }

  return taPoints;
}

function calculateWomenTAPoints(taRangeSelected, isOnTreatment) {
  var taPoints = 0;

  switch (taRangeSelected) {
    case "< 120":
      if (!isOnTreatment) {
        taPoints = -3;
      }

      if (isOnTreatment) {
        taPoints = -1;
      }

      break;

    case "120 - 129":
      if (!isOnTreatment) {
        taPoints = 0;
      }

      if (isOnTreatment) {
        taPoints = 2;
      }

      break;

    case "130 - 139":
      if (!isOnTreatment) {
        taPoints = 1;
      }

      if (isOnTreatment) {
        taPoints = 3;
      }

      break;

    case "140 - 149":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 5;
      }

      break;

    case "150 - 159":
      if (!isOnTreatment) {
        taPoints = 4;
      }

      if (isOnTreatment) {
        taPoints = 6;
      }

      break;

    case "160+":
      if (!isOnTreatment) {
        taPoints = 5;
      }

      if (isOnTreatment) {
        taPoints = 7;
      }

      break;
  }

  return taPoints;
}

/***/ })

})
//# sourceMappingURL=index.js.8b61e6115ee363f827db.hot-update.js.map