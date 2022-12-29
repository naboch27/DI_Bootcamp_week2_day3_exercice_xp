
/*********exercice 5**** */


const family = {
    father: 'kafana',
    mater: 'karidja',
    son: 'mouhamed'
}

//const OFamily=Object.values(family)
for (const property in family) {
    console.log(`${property}`)
    //alert(familyy);
}
for (const property in family) {
    console.log(`${family[property]}`)
    //alert(familyy);
}