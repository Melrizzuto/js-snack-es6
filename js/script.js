"use strict";
console.clear();
/*
CONSEGNA:

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack 2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

// Snack 1:

// creo l'array

const bicycles = [
    {
        nome: "Atala",
        peso: 20
    },
    {
        nome: "Graziella",
        peso: 30
    },
    {
        nome: "Scott",
        peso: 10
    },
    {
        nome: "Focus",
        peso: 15
    }
];

let lightBike = bicycles[0]; // Inizializzo con il primo elemento dell'array

for (let i = 1; i < bicycles.length; i++) {
    if (bicycles[i].peso < lightBike.peso) {
        lightBike = bicycles[i];
    }
}

console.log(lightBike);

// Snack 2:

const teams = [
    {
        teamName: "Juventus",
        points: 0,
        fouls: 0,
    },
    {
        teamName: "Inter",
        points: 0,
        fouls: 0,
    },
    {
        teamName: "Milan",
        points: 0,
        fouls: 0,
    },
    {
        teamName: "Real Madrid",
        points: 0,
        fouls: 0,
    }
];


// Generazione di points e fouls casuali
teams.forEach(function(team) {
    team.points = getRandomNumber(1, 50);
    team.fouls = getRandomNumber(1, 50);
});

// Stampa dell'array modificato con points e fouls
console.log(teams);

// Creo un nuovo array con solo nomi e falli subiti
const teamsFouls = teams.map(function(team) {
    return {
        teamName: team.teamName,
        fouls: team.fouls
    };
});

// Stampa del nuovo array con nomi e falli subiti
console.log(teamsFouls);

// Snack 3:

let numbers = [1, 2, 3, 4, 5, 6];
let a = 1;
let b = 6;

const getNumbers = function(array, a, b) {
    // Verifico che a sia minore di b e che siano entro i limiti dell'array
    if (a < b && b <= array.length) {
        return array.slice(a, b -1);
    }
}
// Stampa del nuovo array con i numeri compresi tra quelli scelti
console.log(getNumbers(numbers, a, b));