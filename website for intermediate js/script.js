// break and continue 
for(i=0;i<20;i++) {
    if(i==13){
        console.log('breaking')
        break
    }
    console.log(i)
}
for(i=0;i<20;i++) {
    if(i==13){
        console.log('skipping 13 so continue')
        continue
    }
    console.log(i)
}

// loop nested loop

for(i=0;i<10;i++){
    console.log('outer loop')
    for(j=0;j<10;j++){
        console.log('inner loop')
    }
}

// function
function question(x) {
    console.log('what is your name '+ x)
}

question('jaffery')

// ternary operator
let adult = checkAge(21)
console.log(adult)

function checkAge(age) {
    return age >= 18 ? true : false
}

//var vs let
// var has function scope
// let has block scope means {inside this only}


//template literals MY BEST FEATURE of JS ``
let userName = 'somebody'
let items = 3
let total = 72

console.log(`${userName} has bought ${items} items. ${userName} has to pay ${total}$`)