/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
let Movie = new Object();
Movie.title = "All cry";
Movie.director = "Fernando";
Movie.budget = 100000000;



const number = prompt("filmo biudžetas: ");


if (number > Movie.budget) {
  console.log(Movie.title, Movie.director, "Brangus filmas");
}

else {
  console.log(Movie.title, Movie.director, "filmas pigus jaučiasi..");
}

