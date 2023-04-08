"use strict";



let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");

  while (numberOfFilms == "" || numberOfFilms === null || isNaN(numberOfFilms)) {
  numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
        }
}

start();


let personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
};



function rememberMyFilms () {

  for (let i=0; i<2; i++)  {
    const a = prompt("Какой твой последний фильм?", ""),
          b = prompt("Оцени свой фильм", "");
  
          if (a != null && b != null && a!= "" &&  b != "" && a.length<50 ) {
            personalMovieDB.movies[a] = b;
            console.log ("done");
          } else {
            console.log ("Error");
            i--;
          }
};
}  

rememberMyFilms ();

function detectPersonalLevel () {

  if (personalMovieDB.count<10) {
    console.log ("Маловато");
  } else  if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
    console.log ("Norm");
  } else if (personalMovieDB.count>=30) {
    console.log ("Вы задрот"); 
  } else {
    console.log("Error"); 
    
  }

}
detectPersonalLevel ();

function showMyDB (hidden) {
  if (!hidden) { 
    console.log (personalMovieDB);

  }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres () {
for (let i=1; i<=3; i++) {
   const genre = prompt (`Ваш любимый жанр под номером ${i}?`);
   personalMovieDB.genres[i-1]= genre;
  }
}

writeYourGenres (); 