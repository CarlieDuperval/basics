import fetch from 'node-fetch'

// async function getDataAsync(){
// try {
//   const response = await fetch("https://api.sampleapis.com/beers/ale"); // by default fetch do a GET request and return promise GET --> Promise
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }
// }
// getDataAsync()
// //--------------------------------


// fetch("https://api.sampleapis.com/beers/ale")
//   .then((response) => {return response.json()})
//   .then(data => {
//     console.log(data[12])
//     // do all the stuff we want to happen AFTER the fetch...
//   })
//   .catch((err) => {
//     console.error(err);
//   })



// //--------------------------------

// fetch("https://api.sampleapis.com/beers/ale")
//   .then(response => response.json())
//   .then(beers =>  console.log(beers[99]))
//   .catch(err => console.error(err))




// //--------------------------------




// fetch("https://api.sampleapis.com/beers/ale")
//   .then(response => response.json())
//   .then(beers => {
//     for (let i = 0; i < beers.length; i++){
//    console.log(beers[i].name)
//     }
//   })
//   .catch(err => console.error(err))



  // JO expl   ('url', 'obj header' )
  function goGetBeers (){
    const newBeer = { price: '$7', name: 'Stela Artois', id: 220}
  fetch("https://api.sampleapis.com/beers/ale") // go and get the data
    .then(myResponse => myResponse.json()) // formating the response to json
    .then(allBeers => console.log(allBeers[99].price))
    .then(data => {
      data.push(newBeer)// manipulating data
    console.log(data[180])
  })
   // .catch((myErr) => {console.log ('We got an error:', myErr)})
    .catch(myErr => console.error('We got an error:', myErr))

fetch('httpps://api.smaplesapis.com/coffee/hot')
.then(allCoffees => allCoffees.json())
.then(formattedCoffes => (coffees = formattedCoffes))
.catch(err => console.err(err))

console.log(allBeers, allCoffees)
return [...allBeers , ...allCoffees]
}








goGetBeers ()

// // one way to write anonymous 
// function (myErr) {
//   return console.log(myErr);
//   console.log('test') // this line will never run
// }


// // arrow function way
// () => {}

// () => {
//   return console.log('test') // explicit return
//   console.log('test') // this line will never run
// }



// () => {}