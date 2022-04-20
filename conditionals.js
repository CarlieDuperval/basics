
//let firstName = "Carlie"
let firstName = null
let lastName = "Duperval"

if (firstName) {
    console.log(`Hello World , ${firstName}`) 
}else if (lastName){
    console.log("My last name is " +   lastName)
} else {
    console.log("Hello World , stranger")
}

let fullName = firstName && lastName ? `My full name is ${firstName} ${lastName}` : "You are nameless"
console.log(fullName)



const today = "Tuesday"
let result = today === "Monday"? "Darie is getting paid": "Darie is broke"
console.log(result)



// swich
const fruit = "orange"

switch (fruit){
    case "orange":
        console.log("This is an orange")
        break
     case "apple":
            console.log("This is an apple")
            break
    default:
    console.log("We are out of fruit")
}

function sum(a, b){
    const result = a + b
    return result
}
let addition = sum(2, 7)
console.log(" The sum is", addition)





