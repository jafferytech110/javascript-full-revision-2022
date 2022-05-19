let element = document.getElementById('#my-div')

let fruits = document.getElementsByName('fruit')

console.log(fruits.forEach(element => {
   console.log(element.value) 
}))

let vegies = document.getElementsByTagName('li')
//similar to array
vegies[1].style.backgroundColor = 'lightgreen'

let desserts = document.getElementsByClassName('desserts')
desserts[0].style.backgroundColor = 'yellow'

unorderedList = document.querySelector('#unordered')
unorderedList.style.backgroundColor = 'cyan'

allLi=document.querySelectorAll('li')

// allLi.forEach(li => {
//     setTimeout(() => {
//         li.style.backgroundColor = 'purple'
//     },1000)
// })


//DOM Traversal technique
let element1 = document.querySelector("#fruit");
let child = element1.firstElementChild;
child.style.backgroundColor = "lightgreen";

// .firstElementChild
// .lastElementChild
// .parentElement   -> entire body in this case
// .nextElementSibling   -> depends on what is selected in this case vegetables
// .previousElementSibling   -> same case as nextElementSibling but opposite
// .children[]   -> can use indexing here
// Array.from(.children)    -> a method to iterate over elements if not array 


// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)
const h1Tag = document.createElement('h1')
h1Tag.textContent = 'came from JS not html'
document.body.prepend(h1Tag)


// window = interface used to talk to the web browser
//                   the DOM is a property of the window
console.log(window.innerWidth)
console.log(window.innerHeight)