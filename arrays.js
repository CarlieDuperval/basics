let cars = ['Ferrari', 'Lamborghini','Audi', 'Astron Martin', 'Ford']
console.log(cars[1]) 

console.log(cars.length)


let ourCars = [{
    brand: 'Audi',
    year:2018,
    model:'A3',
    miles:25580,
    color:'Grey'
},
{    brand: 'Jeep',
    year:2015,
    model:'Grand Cherokee',
    miles:5_5_0_0_0,
    color:'Black'
}
]

console.log(ourCars[1].miles)


const { miles, year} = ourCars[0] 
const age = 2022 - year
const mileage = miles / year

console.log( mileage + 'miles per year')

if(mileage < 10000){
    console.log( 'This is a LOW mileage car. (29)')

}else{
    console.log('This is Not a low mileage car. (35)')
}

(mileage < 10000) ? console.log("This is a LOW mileage car (38).") :console.log("This is Not a low mileage.")

const isIt = (mileage < 10000) ? 'is a' : 'is NOT a'

console.log(`this ${isIt} LOW mileage car`)