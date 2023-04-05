"use strict";
const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
const a = prompt("Какой твой последний фильм?", "");
const b = prompt("Оцени фильм", "");
const c = prompt("Какой твой последний фильм?", "");
const d = prompt("Оцени фильм", "");
// console.log (lastFilm);
// console.log(numberOfFilms);
// console.log(filmRate); 


let personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false

};
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);