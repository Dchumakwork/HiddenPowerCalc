// Elements refs
const mainGen = document.querySelector('input[name="gen"]');
const mainForm = document.getElementById('mainForm');
const hiddPowType = document.getElementById('hiddenPowerType');

// Listeners
mainGen.addEventListener('change', calcHpType);

function calcHpType (event){
  // event.preventDefault();
  let genocode = mainGen.value;
  console.log("1. " + genocode);
  const genMas = genocode.split(" ");
  function getGenStat(arr) {
    let genStats = arr.map((elem) => parseInt(elem.slice(2, arr.length)));
    return genStats;
  }

  const hpPar = getGenStat(genMas)[0] % 2;
  const atPar = getGenStat(genMas)[1] % 2;
  const dfPar = getGenStat(genMas)[2] % 2;
  const spPar = getGenStat(genMas)[3] % 2;
  const saPar = getGenStat(genMas)[4] % 2;
  const sdPar = getGenStat(genMas)[5] % 2;

  const hpType = [
    "Боевой", "Летающий", "Ядовитый", "Земляной", "Каменный", "Насекомый", "Призрачный", "Стальной", "Огненный", "Водный", "Травяной", "Электрическй", "Психический", "Ледяной", "Драконий", "Темный",
  ];

  const hpValue = Math.floor(
    (5 * (hpPar + 2 * atPar + 4 * dfPar + 8 * spPar + 16 * saPar + 32 * sdPar)) /
      21
  );
  console.log(hpValue);
  let hpOut;
  for (let i = 0; i < hpType.length; i += 1) {
    if (hpValue === i) {
      hpOut = hpType[i];
      break;
    } else {
      continue;
    }
  }
  console.log(hpOut);
  hiddPowType.value = hpOut;
  return hpOut;
};