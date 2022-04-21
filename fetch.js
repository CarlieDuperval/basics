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




fetch("https://api.sampleapis.com/beers/ale")
  .then(response => response.json())
  .then(beers => {
    for (let i = 0; i < beers.length; i++){
   console.log(beers[i].name)
    }
  })
  .catch(err => console.error(err))

