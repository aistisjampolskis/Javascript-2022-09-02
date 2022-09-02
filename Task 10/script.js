/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { composition } from "./modules/math/composition.js";
import { division } from "./modules/math/division.js";
import { substraction } from "./modules/math/subtraction.js";
import { multiplication } from "./modules/math/multiplication.js";
import { one, two, three, four, five } from "./modules/numbers/numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

document.getElementById('i').innerHTML = "Sudėtis 1 + 4 = " + a;
document.getElementById('h').innerHTML = "Dalyba 4 / 2 = " + b;
document.getElementById('j').innerHTML = "Atimtis 3 - 2 = " + c;
document.getElementById('k').innerHTML = "Daugyba 5 * 2 = " + d;