/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
const n1 = 1;
const n2 = 2;
const sum = n1 + n2;
const sub = n1 - n2;
const div = n1 / n2;
const multi = n1 * n2;
function calculate(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 * n2;
  }
  //calculate(1, 2, "sum");

}
console.log(calculate(1,2, "sum"));
console.log(calculate(1,2, "sub"));
console.log(calculate(1,2, "div"));
console.log(calculate(1,2, "multi"));

document.getElementById('a').innerHTML = 'Sudėtis ' +  n1 + " ir " + n2 + " rezultatas = " + sum;
document.getElementById('b').innerHTML = 'Atimtis ' +  n1 + " ir " + n2 + " rezultatas = " + sub;
document.getElementById('c').innerHTML = 'Dalyba ' +  n1 + " ir " + n2 + " rezultatas = " + div;
document.getElementById('d').innerHTML = 'Daugyba ' +  n1 + " ir " + n2 + " rezultatas = " + multi;