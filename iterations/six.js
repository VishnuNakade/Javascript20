// const coding =["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);


// filter menthod se condition chek karni hai tho

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{
// return num>4    //scop {} open hone ke baad return keyword use karna hi padega   filter me scope ke andar condition liki jati hai
// })



// //foreash le condition check karni hai tho 
// const newNums=[]
// myNums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num)
//     }
    
// })


// console.log(newNums);


const books=[    
    {title:"Ram", genre:"ram@gmail.com", publish:23},  

    {title:"Shyam", genre:"shyam23@gmail.com", publish:28},  

    {title:"John", genre:"joh", publish:33},  
    {title:"John", genre:"john@gmail.com", publish:33},  
    {title:"John", genre:"john@gmail.com", publish:14},  
    {title:"John", genre:"john@gmail.com", publish:12},  
    {title:"John", genre:"john@gmail.com", publish:38},  
    {title:"John", genre:"john@gmail.com", publish:35},  
    {title:"John", genre:"john@gmail.com", publish:33},  
    {title:"Bob", genre:"bob32@gmail.com", publish:41}   
]

let userBooks=books.filter((bk)=>bk.genre==="ram@gmail.com")

userBooks=books.filter((bk)=>{
    return bk.publish>33 && bk.genre==="john@gmail.com"
})


console.log(userBooks);


