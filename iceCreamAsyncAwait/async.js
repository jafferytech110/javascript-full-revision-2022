//stocks as object data
let stocks = {
    fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

/** 
 * Time in seconds
 * Place order 2 secs
 * cut fruits 2 secs
 * add water ice 1 sec
 * start the machine 1 sec
 * select holder 2 sec
 * select topping 3 sec
 * serve ice cream 2 sec
*/

let isOpen = true

// let order = () => {

//     //promise
//     return new Promise((res,rej)=>{
//         if(isOpen) {
//             res()
//         }
//         else{
//             rej()
//         }
//     })
// }

let time = (ms) => {
    return new Promise((resolve, reject) => {
        if (isOpen) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log('shop has already been closed'))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.fruits[0]} selected`)

        await time(1000)
        console.log('starting production')

        await time(2000)
        console.log("fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await time(2000)
        console.log("Serve Ice Cream")
    }
    catch (error) {
        console.log('machine is broken')
    }
    finally {
        console.log('closing shop now')
    }
}

kitchen()
