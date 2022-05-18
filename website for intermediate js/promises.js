// synchronous code = In an ordered sequence.
//                                      Step-by-step linear instructions
//                                     (start now, finish now)
 
// asynchronous code = Out of sequence.
//                                        Ex. Access a database
//                                              Fetch a file
//                                              Tasks that take time
//                                        (start now, finish sometime later)

// synchronous
console.log("START");

// asynchronous
setTimeout(() => console.log("This is asynchronous"), 5000);

// synchronous
console.log("END");




// promise = object that encapsulates the result of an asynchronous operation
//                   let asynchronous methods return values like synchronous methods
//                   "I promise to return something in the future"

//           the STATE is 'pending' then: 'fulfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming



// async = makes a function return a Promise
// await = makes a function wait for a Promise


// const promise = new Promise((resolve,reject) => {
    
//     let fileLoaded = true
//     if(fileLoaded) {
//         resolve('file loaded')
//     }
//     else{
//         reject('file not loaded')
//     }
// })

// promise.then((value) => {
//     console.log(value)
// }).catch((error) => console.log(error))




// const wait = time => new Promise(resolve => {
//     setTimeout(resolve, time);
// });

// wait(3000).then(() => console.log("Thanks for waiting!"));





//async await promise all in one way
async function loadFile(){

    const promise = new Promise((resolve, reject) => {
      let fileLoaded = true;
  
      if(fileLoaded){
          resolve("File loaded");
      }
      else{
          reject("File NOT loaded");
      }
    })
  
    try{
      document.getElementById("my-h2").innerHTML = await promise;
    }
    catch(error){
      document.getElementById("my-h2").innerHTML = error;
    }
  }
  loadFile();
  