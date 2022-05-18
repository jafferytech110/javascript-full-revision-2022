// setTimeout() = invokes a function after a number of milliseconds            
//                            asynchronous function (doesn't pause execution) 

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying <3`);
}

// setInterval() = invokes a function repeatedly after no. of milliseconds
//                          asynchronous function (doesn't pause execution) 

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
const myTimer = setInterval(countUp, 1000);

function countUp(){
    count+=1;
    console.log(count);
    if(count >= max){
        //to stop setInterval
        clearInterval(myTimer);
    }
}


//************************************************************************** */
// js date object
// Date() is a class with constructor
let date = new Date()

// more readable now
// date = date.toLocaleString()
console.log(date)
document.getElementById('time').innerText = formatDate(date)

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/
/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

function formatDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return `${day}.${month}.${year}`
}

//********************************************** */

// console.time() = Starts a timer you can use to 
//                               track how long an operation takes
//                              Give each timer a unique name.

//start
console.time("Response time");

alert("CLICK THE OK BUTTON!");
//setTimeout(() => console.log("HELLO!"), 3000);

//end
console.timeEnd("Response time");