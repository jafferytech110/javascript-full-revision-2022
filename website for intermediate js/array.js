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