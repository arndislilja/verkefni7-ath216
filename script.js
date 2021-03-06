/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Velkomin í leikinn, í dag ætlum við að reikna 10 stærðfræðidæmi eins hratt og mögulegt er! Víj!');
  confirm("Viltu spila einn leik?");

do { 
 play();
} while (confirm('Viltu spila annan leik?'));

alert(getResults());

}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
    ask();
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
    questions();
  
}
function questions() {
  /* const fylki = [q1(), q2(), q3()];
  const hand = fylki[Math.floor(Math.random()*fylki.length)];

  return hand;*/
  q1();
  q2();
  q3();
  q1();
  q2();
  q3();
  q1();
  q2();
  q3();
  q1();

}
function q1() {
  const a = randomNumber(1, 100);
  const b = randomNumber(1, 100);
  const merki = ["+", "-"][Math.floor(Math.random()*2)];
  return prompt('Hvað er ' + a + " " + merki + " " + b + '?') == eval(a + merki + b);

}
function q2() {
  const c = randomNumber(1, 10);
  const d = randomNumber(1, 10);
  const sinnum = ["*"];
  return prompt('Hvað er ' + c + " " + sinnum + " " + d + '?') == eval(c + sinnum + d);
}
function q3() {
  const e = randomNumber(2, 10);
  const f = randomNumber(2, 10);
  const deiling = ["/"];
  return prompt('Hvað er ' + e + " " + deiling + " " + e * f + '?') ==eval(e + deiling + e * f);
}

/**
 * Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 * */
function getResults() {
  const spurningar = 10;
  const total = spurningar.length;
  const correct = spurningar.filter(Boolean).length;

  alert('Þú svaraðir '+correct+' af'+total+' dæmum rétt');
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik

start();