/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  
const pounds = Number(document.getElementById("search").value);


const result = pounds * 2.2046;
const result2 = pounds / 0.0010000;
const result3 = pounds * 35.274;

const display = document.createElement("div");
display.textContent = result.toFixed(2);
display.style.cssText = 'color: red';
document.getElementById("output").appendChild(display, "svarai" );

const display2 = document.createElement("div");
display2.textContent = result2.toFixed(2);
display2.style.cssText = 'color: green';
document.body.append(display2, "gramai" );

const display3 = document.createElement("div");
display3.textContent = result3.toFixed(2);
display3.style.cssText = 'color: blue';
document.body.append(display3, "uncijos" );

})