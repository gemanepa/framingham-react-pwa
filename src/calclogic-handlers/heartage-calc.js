function calculateMenHeartAge(Score) {
  let heartage = '0%';

  switch (Score) {
    case -5:
      heartage = '< 30';
      break;
    case -4:
      heartage = '< 30';
      break;
    case -3:
      heartage = '< 30';
      break;
    case -2:
      heartage = '< 30';
      break;
    case -1:
      heartage = '< 30';
      break;
    case 0:
      heartage = '30';
      break;
    case 1:
      heartage = '31';
      break;
    case 2:
      heartage = '34';
      break;
    case 3:
      heartage = '36';
      break;
    case 4:
      heartage = '38';
      break;
    case 5:
      heartage = '40';
      break;
    case 6:
      heartage = '42';
      break;
    case 7:
      heartage = '45';
      break;
    case 8:
      heartage = '48';
      break;
    case 9:
      heartage = '51';
      break;
    case 10:
      heartage = '54';
      break;
    case 11:
      heartage = '57';
      break;
    case 12:
      heartage = '60';
      break;
    case 13:
      heartage = '64';
      break;
    case 14:
      heartage = '68';
      break;
    case 15:
      heartage = '72';
      break;
    case 16:
      heartage = '76';
      break;
    case 17:
      heartage = '> 80';
      break;
    case 18:
      heartage = '> 80';
      break;
    case 19:
      heartage = '> 80';
      break;
    case 20:
      heartage = '> 80';
      break;
    case 21:
      heartage = '> 80';
      break;
    case 22:
      heartage = '> 80';
      break;
    case 23:
      heartage = '> 80';
      break;
    case 24:
      heartage = '> 80';
      break;
    case 25:
      heartage = '> 80';
      break;
    case 26:
      heartage = '> 80';
      break;
  }
  return heartage;
}

function calculateWomenHeartAge(Score) {
  let heartage = '0%';

  switch (Score) {
    case -5:
      heartage = '< 30';
      break;
    case -4:
      heartage = '< 30';
      break;
    case -3:
      heartage = '< 30';
      break;
    case -2:
      heartage = '< 30';
      break;
    case -1:
      heartage = '< 30';
      break;
    case 0:
      heartage = '< 30';
      break;
    case 1:
      heartage = '31';
      break;
    case 2:
      heartage = '34';
      break;
    case 3:
      heartage = '36';
      break;
    case 4:
      heartage = '39';
      break;
    case 5:
      heartage = '42';
      break;
    case 6:
      heartage = '45';
      break;
    case 7:
      heartage = '48';
      break;
    case 8:
      heartage = '51';
      break;
    case 9:
      heartage = '55';
      break;
    case 10:
      heartage = '59';
      break;
    case 11:
      heartage = '64';
      break;
    case 12:
      heartage = '68';
      break;
    case 13:
      heartage = '73';
      break;
    case 14:
      heartage = '79';
      break;
    case 15:
      heartage = '> 80';
      break;
    case 16:
      heartage = '> 80';
      break;
    case 17:
      heartage = '> 80';
      break;
    case 18:
      heartage = '> 80';
      break;
    case 19:
      heartage = '> 80';
      break;
    case 20:
      heartage = '> 80';
      break;
    case 21:
      heartage = '> 80';
      break;
    case 22:
      heartage = '> 80';
      break;
    case 23:
      heartage = '> 80';
      break;
    case 24:
      heartage = '> 80';
      break;
    case 25:
      heartage = '> 80';
      break;
    case 26:
      heartage = '> 80';
      break;
  }
  return heartage;
}

export default function calculateHeartAge(score, gender) {
  if (gender === 'male') {
    return calculateMenHeartAge(score);
  } return calculateWomenHeartAge(score);
}
