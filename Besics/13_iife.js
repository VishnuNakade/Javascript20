// (one=()=>{
//     console.log("DB connected");
// })(); //global polution se bachne ke liye

// (name=(myname)=>{
//     console.log(`my name is ${myname}`);
// })('vishnu');
// name('nakade')


//named iife
// (function car(){
//     console.log(`DB connected`);
// })();

//use for globale scope ke polution se bachne ke liye
// semicolon lagana hoga


//unnemed iife
((name)=>{ //argument
    console.log(`db connected to ${name}`);
})('vishnu'); //paramitar