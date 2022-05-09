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


// formula to find out hypotenus of a triangle

// let a,b,c;

// a = window.prompt('Enter side A')
// a = Number(a)

// b = window.prompt('Enter side B')
// b = Number(b)

// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))


document.querySelector('#submit-triangle').onclick = () => {
    console.log('clicked')
    let a,b,ca
    a = Number(document.getElementById('first-side').value)
    b = Number(document.getElementById('second-side').value)

    ca = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
    document.getElementById('third-side').innerText = `the third side is ${ca}`
}



// useful string methods

let userName = 'someone'

console.log(userName.length)
console.log(userName.charAt(1)) // prints o
console.log(userName.indexOf('m'))


userName = userName.trim() //removing spaces from start and end
console.log(userName.toUpperCase())

// slicing
let fullName = 'Sarfaraz Jaffery'
let firstName2
let lastName2 

// slice(startingindex, ending index)
lastName2 = fullName.slice(9)
console.log(lastName2)

firstName2 = fullName.slice(0,fullName.indexOf(" "))
console.log(firstName2)


// method chaining
let chainingName = 'broCode'
let lettter = chainingName.charAt(0).toUpperCase()
console.log(lettter)


// conditions
let age = 21

if (age >= 18) {
    console.log('adult')
}
else if(age <= 0) {
    console.log('ask someone to have unprotected sex so that you get chance to come in this world.')
}
else{
    console.log('not adult')
}



// checkbox
document.getElementById('submit-triangle').onclick = () => {
    if(document.getElementById('tri-checkbox').checked) {
        console.log('good, sending result')
    } else {
        console.log('not happy but still sending solution')
    }
}