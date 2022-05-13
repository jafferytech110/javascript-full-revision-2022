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


// **********************************************************************************************************************************

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



// anonymous funciton or function expression plus arrow function

const someHelloFunction = () => {
    console.log('i am anonymous function')
}

someHelloFunction()




