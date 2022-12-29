/*********exercice 1************* */
//Party 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
let varib = people.length
people.splice(varib - 1, varib - 1, "jason")
people.push("mouhamed")
console.log(people.indexOf("Mary"))
console.log(people)
console.log(people.slice(1))
console.log(people)
console.log(people.indexOf("foo"))//-1 signifie foo non trouvé
let last = people.slice(people.length - 1, people.length)
console.log(last)
// la relation entre l'indice du dernier élément du tableau et la longueur du tableau 
//c'est la longueur -1 qui donne l'indice


//party 2

for (let peoples of people) {
    console.log(peoples)
}

for (let i = 0; i < people.length; i++) {

    if (people.indexOf("Jason")) {
        //console.log("ok")
        break
    }
}
