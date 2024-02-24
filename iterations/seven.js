const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num)=>{return num+10})

const newNums=myNumbers
                    .map((num)=>num*10)   // map sara hi return kar deta hai
                    .map((num)=>num+1)
                    .filter((num)=>num >= 40)  //filter true or false return karta hai
console.log(newNums);

