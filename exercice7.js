/*********exercice 7****** */

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let FirstCharacter = ""
let tableauOrder = names.sort()
for (let name of names) {
    FirstCharacter = FirstCharacter + name.charAt(0)
}
console.log(FirstCharacter.toUpperCase())


