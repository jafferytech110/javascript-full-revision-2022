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

let order = (fruitName, callProduction) => {
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruitName]} was selected`)
        callProduction()
    },2000)

}

let production = () => {
    setTimeout(()=>{
        console.log('Production has started')
        
        //cut fruits
        setTimeout(()=>{
            console.log('fruit has been cut')
            
            //add water and ice
            setTimeout(()=>{
                console.log(`adding ${stocks.liquid[1]}`)

                //start machine
                setTimeout(()=>{
                    console.log('starting machine')

                    //selecting holder
                    setTimeout(()=>{
                        console.log(`${stocks.holder[1]} selected from holders`)

                        //selecting topping
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} added as topping`)

                            //serving ice cream
                            setTimeout(()=>{
                                console.log('serving ice cream now')
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
}

order("0",production)