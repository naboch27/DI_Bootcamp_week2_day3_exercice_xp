/***********exercice 3*******/

let i = 0
let nbre = prompt("the user for a number.");
console.log("exercice 3 type  ", typeof (nbre));
while (Number(nbre) < 10) {
    nbre = prompt("the user for a number.");

    i = i + 1;
}