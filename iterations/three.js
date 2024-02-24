// for of loop use for itrate arrays ,string and map

// ["", "",""]
// [{},{},{}]

// const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings="Hello world!" //for string
// for (const greet of greetings) {
//     if (greet==" ") {
//         continue
//     }
//     console.log(`Each char is ${greet}`);
// }

//Maps  //use for uniq value //better than object organized form

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United State of america")
// map.set('Fr',"France")

// // console.log(map);

// for (const [key,value] of map) {                 //key,value restructior, sintax hai forof loop ka
//     console.log(key,':-',value);
// }

const myObject ={
    game1:'NSF',
    game2:'Spidarman'
}

// for (const [key,value] of myObject) {
//     console.log(console.log(key,':-',value));
// } //not working for object now, on map its working