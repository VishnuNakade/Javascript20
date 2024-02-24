//reduse 
const myNums=[1,2,3,4,20,20]

// const myTotal=myNums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)



const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);




// var total=0
// for (let i = 0; i < myNums.length; i++) {
//     var total=total+ myNums[i]

    
// }
// console.log(total);


const shoppingCart=[
    {
        itamName:"js cource",
        price:2999
    },
    {
        itamName:"py cource",
        price:999
    },
    {
        itamName:"mobile dev cource",
        price:1999
    },
    {
        itamName:"data sci cource",
        price:3999
    },
]
priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);