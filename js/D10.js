/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log("la somma è ", sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log("il numero casuale è ", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Carmen",
  surname: "Caniglia",
  age: 30,
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me.age);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS", "JAVASCRIPT"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("REACT");
console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};
const number = dice();
console.log(number);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
console.log("il numero più grande è ", whoIsBigger(29, 34));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (str) {
  const words = str.split(" ");
  return words;
};
const myStr = "il compito di oggi sarà un disastro!";
const array = splitMe(myStr);
console.log(array);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (str, val) {
  if (val === true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
};
let str1 = "Buongiorno";
console.log(deleteOne(str1, true));
console.log(deleteOne(str1, false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const str2 = "i have 4 dogs and 2 cats";
const onlyLetters = function (str) {
  const newStr = str.replace(/\d/g, "");
  return newStr;
};
console.log(onlyLetters(str2));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str) {
  if (str.includes("@") && str.includes(".")) {
    return true;
  } else {
    return false;
  }
};
const email = "buongiornoatutti@gmail.com";
const emailFalse = "buongiorno@gmail";
const anotherEmail = "buongiorno";
console.log(isThisAnEmail(email));
console.log(isThisAnEmail(emailFalse));
console.log(isThisAnEmail(anotherEmail));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  const weekDays = [
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato",
    "domenica",
  ];
  const reOrderArray = weekDays.pop();
  weekDays.unshift(reOrderArray);
  console.log(weekDays);
  //non so se è il giusto procedimento, ma altrimenti avrei dovuto scrivere l'array partendo da domenica
  const now = new Date();
  const index = now.getDay();
  const actualDay = weekDays[index];

  return actualDay;
};
const today = whatDayIsIt();
console.log("Oggi è ", today);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (n) {
  const values = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const finalResult = dice();
    values.push(finalResult);
    sum += finalResult;
  }

  const result = { sum, values };

  return result;
};

const n = 6;
const total = rollTheDices(n);
console.log(total.values);
console.log(total.sum);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (date) {
  const today = new Date();
  const anotherDay = new Date(date);
  const inputDay = today - anotherDay;
  const passedDays = Math.floor(inputDay / (1000 * 60 * 60 * 24));
  return passedDays;
};
console.log(howManyDays("2023-04-05"));
// da ricontrollare

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function () {
  const myBirthday = new Date("04-05");
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const today = now.getDate();
  const birthdayMounth = myBirthday.getMonth() + 1;
  const birthday = myBirthday.getDate();

  if (currentMonth === birthdayMounth && today === birthday) {
    return true;
  } else {
    return false;
  }
};
if (isTodayMyBirthday()) {
  console.log("Tanti auguri a me!");
} else {
  console.log("mi dispiace non sai più leggere il calendario...");
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
  */
const dog = {
  name: "Aron",
  age: 4,
  fur: "brown",
};

const deleteProp = function (str, obj) {
  const str2 = { ...str };
  delete str2[obj];
  return str2;
};

const myDogCopy = deleteProp(dog, "fur");
console.log(dog);
console.log(myDogCopy);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year === "2019") {
      return movies[i];
    }
  }
};
console.log("film più recente ", newestMovie());
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function (movies) {
  return movies.length;
};
const numberOfFilms = countMovies(movies);
console.log(numberOfFilms);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function (movies) {
  const yearsofTheFilm = movies.map((film) => {
    const year = film.Year;
    return parseInt(year, 10);
  });
  return yearsofTheFilm;
};
console.log(onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function (movies) {
  const lastMillenniumFilms = [];

  for (let i = 0; i < movies.length; i++) {
    const film = movies[i];
    const releaseYear = parseInt(film.Year, 10);

    if (releaseYear >= 1000 && releaseYear <= 1999) {
      lastMillenniumFilms.push(film);
    }
  }
  return lastMillenniumFilms;
};
lastMillenniumFilms = onlyInLastMillennium(movies);
console.log("Film dello scorso millennio ", lastMillenniumFilms);
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = movies.reduce((str, film) => {
  const releaseYear = parseInt(film.Year, 10);
  if (!isNaN(releaseYear)) {
    return str + releaseYear;
  }
  return str;
}, 0);
console.log("la somma di tutti gli anni è ", sumAllTheYears);
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (str) {
  const result = [];
  for (let i = 0; i < movies.length; i++) {
    const film = movies[i];
    if (film.Title.includes("Avengers")) {
      result.push(film);
    }
  }
  return result;
};

console.log(searchByTitle());
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (str) {
  const result = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    const film = movies[i];
    if (film.Title.includes("Avengers")) {
      result.match.push(film);
    } else {
      result.unmatch.push(film);
    }
  }
  return result;
};
console.log("il film con avengers ", searchAndDivide());
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectId = function () {
  const container = document.getElementById("container");
  console.log(container);
};
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/ const selectTd = function () {
  const td = document.querySelectorAll("td");
};
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const stamp = function () {
  const tds = document.querySelectorAll("td");
  tds.forEach(function (td) {
    console.log(td.textContent);
  });
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const addBackgroundColor = function () {
  const link = document.querySelectorAll("a");
  link.forEach(function (link) {
    link.style.backgroundColor = "red";
  });
};
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const newElementlist = function () {
  const myList = document.getElementById("myList");
  const newElement = document.createElement("li");
  newElement.textContent = "Nuovo elemento di MyList";
  myList.appendChild(newElement);
};
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const emptyList = function () {
  const myList = document.getElementById("li");
  myList.removeChild(myList.firstChild);
};
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const forEveryTr = function () {
  const trElements = document.querySelectorAll("tr");
  trElements.forEach(function (tr) {
    tr.classList.add("test");
  });
};
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = function (h) {
  let i = 1;
  while (i <= h) {
    console.log("*".repeat(i));
    i++;
  }
};
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = function (h) {
  for (let i = 1; i <= h; i++) {
    let space = " ".repeat(h - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(space + stars);
  }
};

tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
