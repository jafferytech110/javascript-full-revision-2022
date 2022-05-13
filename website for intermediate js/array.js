// formation of array
let fruits = ['banana','apple','orange']
fruits.push('grapes')
// pop() to remove
// unshift() to add in the beginning
// shift() to remove from beginning

for(let i =0; i < fruits.length; i++) {
    console.log(fruits[i])
}

let prices = [5,10,15,20]


//forEach
prices.forEach(price => {
    console.log(price)
});

// for of
for(let price of prices) {
    console.log(price)
}

//sorting

frutis = fruits.sort()
console.log(fruits)

console.log(fruits.sort().reverse())

// multidimensional arrays 2D arrays
let groceryList = [fruits,prices] 
console.log(groceryList[0][1])

//spread operator
let numberList = [1,2,3,4,5,6,7,8,9]
let maximum = Math.max(...numberList) //unpacking numberList
console.log(maximum)


//map method of array

let newNumbers = [1,2,3,4,5]

let square = newNumbers.map(item => Math.pow(item,2))
console.log(square)

// array filter
// creates a new array with all elements that pass the specific test define in function which is passed as an argument in filter method like callback function

let studentAges = [18,16,21,17,19,40]

let adults = studentAges.filter( student => {
    return student >= 18
})

console.log(`student above 18 are ${adults}`)



//array reduce 
// reduces an array to a single value
// like to sum up all the values

let newPrices = [5,10,15,20,23]
let newTotal = newPrices.reduce(checkOut)

console.log(`the total is ${newTotal}`)

function checkOut(total,element) {
    return total + element
} 


// array sort numbers
let grades = [100,50,90,78,89]

// desceding order
console.log(grades.sort((x,y) => {
    return y - x
}))

// ascending order
console.log(grades.sort((x,y) => {
    return x- y
}))