// for each loop    //most use loop on array one is map and second is for each  

const coding =["js","ruby","java","python","cpp"]

//call back function ka naam nahi hota hai

// coding.forEach( (item)=>{    //item   arry ki undar ki chhijo ko nam diya hai hamne
//     console.log(item);
// })



//function agar alag se likna ho to //not imp
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });

const mycoding=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

mycoding.forEach((item) => {
    console.log(item.languageName);
});