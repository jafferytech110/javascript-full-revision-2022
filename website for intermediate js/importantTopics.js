// rest parameters represents and indefinite number of parameters (pack arguments into an array)
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

// just like *args and *kwargs in python so rest parameters in js

function sumSomething(...numbers) {
    let total = 0
    for(let num of numbers) {
        total += num
    }
    return total
}

console.log(sumSomething(a,b,c,d,e))


// ****************************************************************

// callback a function passed as an argument to another function
// it ensures that function is not run unless some task is completed, in below example sum of a and b is completed then output is gicven
// helps us to develop asynchronous code
// when one function has to wait for another function to be completed

sum(2,3, displayConsole)
sum(2,4,displayDOM)

function sum(x,y, callbackfunc){
    let result = x + y
    callbackfunc(result)
} 

function displayConsole(output){
    console.log(output)
}

function displayDOM(output){
    document.getElementById('sum-output').innerHTML = output
}

// *******************************************************************


// anonymous funciton or function expression plus arrow function

const someHelloFunction = () => {
    console.log('i am anonymous function')
}

someHelloFunction()

// **********************************************************************

// nested functions
// Functions inside other function
// Outer functions have access to inner functions
// inner functions are hidden from outside that adds some Security
// used in closures as well


let userName2 = 'Bro'
let userInbox = 0


function login(){

    displayUserName()
    displayUserInbox()

    function displayUserName(){
        console.log(`Welcome ${userName2}`)
    }
    
    function displayUserInbox(){
        console.log(`you have ${userInbox} messages`)
    }
}

// in order to call userName and userInbox functions, we need to call login function
login()


// **************************************************************************************

// Map is object that holds key value pair as dictionary in python

const store = new Map([
    ['tshirt', 20],
    ['socks', 30],
    ['underwear',50]
])

let shoppingCart = 0
// to get value
shoppingCart += store.get('tshirt')
console.log(shoppingCart)

// to set value
console.log(`old price for tshirt is $ ${store.get('tshirt')}`)
store.set('tshirt', 50)
console.log(`new price for tshir is $ ${store.get('tshirt')}`)

// deleting
store.delete('socks')

// checking if any item exists 
console.log(store.has('socks'))

// checking the number of pairs
console.log(store.size)

// output of every key value
store.forEach((value,key) => console.log(`${key} is $${value}`))

// *******************************************************

//Error Handling 
// error = object with a description of 
//             something that went wrong

// throw = executes a user-defined error

try{
    let x = window.prompt("Enter a #");
    x = Number(x);
  
    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!";
  
    console.log(`${x} is a number`);
  }
  catch(error){
    console.log(error);
  }
  finally{
    console.log("This always executes");
  }