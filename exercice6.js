
/******exercice 6********* */

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

for (const property in details) {
    console.log(`${details[property]}` + " is my name")

}