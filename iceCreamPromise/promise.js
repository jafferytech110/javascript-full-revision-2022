/**
 * promise is made 
 * either resolved or reject
 * if resolve .then .then and .finally
 * if reject .catch and .finally
 */

//stocks as object data
let stocks = {
    fruits: ['strawberry', 'grapes', 'banana','apple'],
    liquid: ['water','ice'],
    holder: ['cone','cup','stick'],
    toppings: ['chocolate','peanuts']
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

let isShopOpen = true

let order = (time,work) => {

    //promise
    return new Promise((resolve,reject)=>{
        if(isShopOpen) {
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else {
            reject(console.log("our Shop is closed"))
        }
    })
}

order(2000,()=>{
    console.log(`${stocks.fruits[2]} selected`)
})
.then(()=>{
    return order(0000, () =>{
        console.log('production has started')
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log('fruits has been cut')
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log(`adding ${stocks.liquid[1]}`)
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log('starting machine')
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`selecting ${stocks.holder[2]}`)
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`adding ${stocks.toppings[1]} as topping`)
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log('serving ice cream. Enjoy!')
    })
})
.catch(()=>{
    console.log('something wrong happened!')
})
.finally(()=>{
    setTimeout(()=>{
        console.log('closing shop')
    },2000)
})