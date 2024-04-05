/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result = +event.target.number.value;
  let lbResult = result * 2.2046;
  let gResult = result / 0.0010000;
  let ozResult = result / 35.274;

  const output = document.querySelector("#output");
  output.textContent = "Your results:";

  const inPounds = document.createElement("span");
  inPounds.textContent = `${result} kg in pounds: ${lbResult.toFixed(2)}`;
  output.append(inPounds);

  const inGrams = document.createElement("span");
  inGrams.textContent = `${result} kg in grams: ${gResult.toFixed(2)}`;
  output.append(inGrams);

  const inOunces = document.createElement("span");
  inOunces.textContent = `${result} kg in ounces: ${ozResult.toFixed(2)}`;
  output.append(inOunces);
});