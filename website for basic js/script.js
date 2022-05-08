/*
    Mutilple lines comments
*/

// single line comment

// a variable is a container for storing data
// two steps, declaration and assignment with single = sign
// let and const are two keywords for declaring variables in js

// let can be changed while const cannot be or prefered not to be changed by developer
let firstName = 'Sarfaraz'
let studentAge = 19

if(studentAge > 19) {
    console.log(`${firstName} can attend the class because you are already ${studentAge} year old`)
}

// types of variable string, numbers both float and integer, boolean like true and false
// other data types will be mentioned later


// DOM Manipulation
document.getElementById('p1').innerText = `${firstName} can attend the class because he is already ${studentAge} year old`

// maths operations + - / * % following PEMDAS 
document.getElementById('p2').innerText = `(2+2*10/4%2) is equal to ${2+2*10/4%2}`

// user input in js
// easy way
// let userName = prompt('please enter your name')

//difficult way from input html 
document.getElementById('submit-button').onclick = () => {
    userName = document.getElementById('user-name').value

    // type conversion string number boolean Number(variable or Value) converts string to number and 
    // String() does opposite and Boolean() does with boolean values 
    console.log(typeof userName)
    userAge = Number(document.querySelector('#age').value)
    
    document.getElementById('p3').innerText = `${userName} will be ${userAge + 1} years old next year`
}

// Math is intrinsic object in js which provides many maths related solution 

let decNum = 3.145
console.log(Math.round(decNum))
console.log(Math.ceil(decNum))
console.log(Math.pow(3,2))
console.log(Math.sqrt(16))





