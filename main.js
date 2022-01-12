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

console.log(myGarage[0].brand);
console.log(myGarage[1].brand);
console.log(myGarage[2].brand);

console.log(myGarage.brand);//undefined

for (let i = 0; i < myGarage.length; i++) {
    const car = myGarage[i];
    console.log(car.power);
}

for (const car of myGarage) {
    console.log(car.color);
}

/* myCar1 is not iterable
for (const car of myCar1) {
    console.log(car);
}
 */
/* 
for (const key in myCar1)
['brand', 'color', 'engine', 'power']
 */
console.log('myCar1: ');
console.log(myCar1);

for (const key in myCar1) {
    const element = myCar1[key];
    console.log(element);
}

////////////////////////////////////////////////////////////////

for (const car of myGarage) {
    
    for (const key in car) {
        const element = car[key];
        console.log(key, ':', element);
    }

}
////////////////////////////////////////////////////////////////
/*syntax:
array.forEach(element => {
    
});
*/
/* console.log('forEach');
let colors = myGarage.forEach((car, i, source) => {
    console.log(i);
    console.log(car.brand);
    console.log(source);
    return car.color
});

console.log(colors); */

console.log('forEach');
myGarage.forEach((car, i, source) => {
    console.log(i);
    console.log(car.brand);
    console.log(source);
});

console.log(colors);

////////////////////////////////////////////////////////////////
/*syntax:
let props = array.map(element => {
    return elemet.prop;
});
*/
console.log('map');
let brands = myGarage.map((car, i, source) => {
    console.log(i);
    console.log(car.brand);
    console.log(source);
    return car.brand
});

console.log(brands);


