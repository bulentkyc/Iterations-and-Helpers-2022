///////////////////////////for-in and for-of///////////////////////////
//Syntax:
/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const iterator of object) {
    
}
*/

let myCar1 = {
    brand: 'BMW',
    color: 'gray',
    engine: 3,
    power: 250
}

let myCar2 = {
    brand: 'Porsche',
    color: 'Black',
    engine: 5,
    power: 500
}

let myCar3 = {
    brand: 'Ferrari',
    color: 'red',
    engine: 6,
    power: 700
}

let myGarage = [myCar1, myCar2, myCar3];

for (const car of myGarage) {
    console.log(car.color);
    //console.log(myGarage.brand);
}

console.log(myGarage[0].brand);
console.log(myGarage[1].brand);
console.log(myGarage[2].brand);

console.log(myGarage);