//for in loop    use for object itreation

// const myObject={
//     js:'javascript',
//     cpp:'C++',
//     rb:"ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// const programming=["js","rb","py","java","cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// } // ye forin loop array ki key deti hai fir hame key ki madat se value bhi nikalna hai



const map=new Map()
map.set('IN',"India")
map.set('USA',"United State of america")
map.set('Fr',"France")

console.log(map);

for (const key in map) {
   console.log(key); // no any data show because map is not itretable for using forin
}

