function calculateMenCVD(Score) {
  let cvd = '0%';

  switch (Score) {
    case -5:
      cvd = '< 1%';
      break;
    case -4:
      cvd = '< 1%';
      break;
    case -3:
      cvd = '< 1%';
      break;
    case -2:
      cvd = '1.1%';
      break;
    case -1:
      cvd = '1.4%';
      break;
    case 0:
      cvd = '1.6%';
      break;
    case 1:
      cvd = '1.9%';
      break;
    case 2:
      cvd = '2.3%';
      break;
    case 3:
      cvd = '2.8%';
      break;
    case 4:
      cvd = '3.3%';
      break;
    case 5:
      cvd = '3.9%';
      break;
    case 6:
      cvd = '4.7%';
      break;
    case 7:
      cvd = '5.6%';
      break;
    case 8:
      cvd = '6.7%';
      break;
    case 9:
      cvd = '7.9%';
      break;
    case 10:
      cvd = '9.4%';
      break;
    case 11:
      cvd = '11.2%';
      break;
    case 12:
      cvd = '13.3%';
      break;
    case 13:
      cvd = '15.6%';
      break;
    case 14:
      cvd = '18.4%';
      break;
    case 15:
      cvd = '21.6%';
      break;
    case 16:
      cvd = '25.3%';
      break;
    case 17:
      cvd = '29.4%';
      break;
    case 18:
      cvd = '> 30%';
      break;
    case 19:
      cvd = '> 30%';
      break;
    case 20:
      cvd = '> 30%';
      break;
    case 21:
      cvd = '> 30%';
      break;
    case 22:
      cvd = '> 30%';
      break;
    case 23:
      cvd = '> 30%';
      break;
    case 24:
      cvd = '> 30%';
      break;
    case 25:
      cvd = '> 30%';
      break;
    case 26:
      cvd = '> 30%';
      break;
  }
  return cvd;
}


function calculateWomenCVD(Score) {
  let cvd = '0%';

  switch (Score) {
    case -5:
      cvd = '< 1%';
      break;
    case -4:
      cvd = '< 1%';
      break;
    case -3:
      cvd = '< 1%';
      break;
    case -2:
      cvd = '< 1%';
      break;
    case -1:
      cvd = '1.0%';
      break;
    case 0:
      cvd = '1.2%';
      break;
    case 1:
      cvd = '1.5%';
      break;
    case 2:
      cvd = '1.7%';
      break;
    case 3:
      cvd = '2.0%';
      break;
    case 4:
      cvd = '2.4%';
      break;
    case 5:
      cvd = '2.8%';
      break;
    case 6:
      cvd = '3.3%';
      break;
    case 7:
      cvd = '3.9%';
      break;
    case 8:
      cvd = '4.5%';
      break;
    case 9:
      cvd = '5.3%';
      break;
    case 10:
      cvd = '6.3%';
      break;
    case 11:
      cvd = '7.3%';
      break;
    case 12:
      cvd = '8.6%';
      break;
    case 13:
      cvd = '10.0%';
      break;
    case 14:
      cvd = '11.7%';
      break;
    case 15:
      cvd = '13.7%';
      break;
    case 16:
      cvd = '15.9%';
      break;
    case 17:
      cvd = '18.51%';
      break;
    case 18:
      cvd = '21.5%';
      break;
    case 19:
      cvd = '24.8%';
      break;
    case 20:
      cvd = '27.5%';
      break;
    case 21:
      cvd = '> 30%';
      break;
    case 22:
      cvd = '> 30%';
      break;
    case 23:
      cvd = '> 30%';
      break;
    case 24:
      cvd = '> 30%';
      break;
    case 25:
      cvd = '> 30%';
      break;
    case 26:
      cvd = '> 30%';
      break;
  }
  return cvd;
}

export default function calculateCVD(score, gender) {
  if (gender === 'male') {
    return calculateMenCVD(score);
  } return calculateWomenCVD(score);
}
