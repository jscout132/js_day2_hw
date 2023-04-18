//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let manualDinner = (person) => {
    for (let i = 0; i<Object.keys(person['pizza']).length; i++) {
        console.log('pizza:',person['pizza'][i])
    }
        console.log('tacos:', person.tacos)
        console.log('burgers:', person.burgers)
    for (let i=0; i<Object.values(person['ice_cream']).length; i++) {
        console.log('ice cream:', person['ice_cream'][i])
    }
    let shakeArray = Object.keys(person['shakes'][0]);
    for (let i=0; i<Object.keys(person['shakes'][0]).length; i++){
        console.log('shakes: ', person['shakes'][0][shakeArray[i]])
    }
}
manualDinner(person3)

console.log('------------------------------------------------')


// trying to display all of the values as strings
// couldn't figure out how to extract from the shake object this way
let dinners= () => {
    for(let i=0; i<Object.keys(person3).length; i++){
        if (typeof(Object.values(person3)[i])=="string"){
            console.log(Object.values(person3)[i])
        } else if (Array.isArray(Object.values(person3)[i])) {
            for (let j=0; j<Object.values(person3)[i].length; j++){
                console.log(Object.values(person3)[i][j])
            }
        } 
    }
}
dinners(person3)

console.log('---------------------------------------------------')
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Individual(name, age){
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () =>{
        return `Hello, my name is ${this.name} and I am ${this.age} years old`
    }
    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (increase) => {
        return `Now I am ${this.age + increase} years old`
    }
    // Adding to the age 
    this.counter = (increase) => {
        this.age += increase
        return `Now ${this.name} is ${this.age}`
    }
}

let beth = new Individual('Beth', 45)
let paige = new Individual('Paige', 31)
console.log(beth.printInfo())
console.log(beth.addAge(1))
console.log(beth.counter(1))
console.log(beth.counter(1))

console.log(paige.printInfo())
console.log(paige.addAge(3))
console.log(paige.counter(3))
console.log(paige.counter(3))

console.log('---------------------------------------------------')

// =============Exercise #3 ============//
/*
    Create a Promise based function that will check a string to 
    determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
// example checking the length of a string by characters
const stringCheck = (exString) => {
    return new Promise( (resolve,reject) => {
        if(exString.length > 10){
            resolve('Big word')
        } else {
            reject('Small word')
        }
    })
}

stringCheck('thisisaverylongstringthatisgreaterthan10')
// result pulls whatever is passed from resolve
.then( (result) => {
    console.log(`${result}`)
})
// error pulls whatever is passed from reject
.catch( (error) => {
    console.log(`${error}`)
})

// example checking the length of a string by words
const stringLength = (exString) => {
    return new Promise( (resolve,reject) => {
        if(exString.split(' ').length > 10){
            resolve()
        } else {
            reject()
        }
    })
}
// also practicing generating the output in different places
stringLength('this is a very long string that is greater than 10')
.then( () => {
    console.log('a long sentence')
})
.catch( () => {
    console.log('a short sentence')
})
