//singlton

const jsuser={
    name:"vishnu",
    age:18,
    location:"nagpur",
    IsLoggedIn:false,
    lastLoginDay:["monday","saturday"]
}
// console.log(jsuser);

// jsuser.myfunction=function(){
//     console.log(`hello my name is, ${jsuser.name}`);
// }
// console.log(jsuser.myfunction());

const obj1={
    name:"vishnu",
    email:"vishnu@google.com",
    age:"29"
}
// console.log(obj1.name);

const obj2={
    name:"vishnu",
    id:{
        id2:{
            id3:{
                car:"hoda city"
            }
        }
    }
}
// console.log(obj2.id.id2.id3.car);

const user1={
    name:"user1",
    email:"user1@gmail.com",
    age:"12 years"
}

const user2={
    name:"user2",
    email:"user2@gmail.com",
    age:"13 years"
}


let man={
    speed:"55555",
    avg:(a,b)=>{
        return a+b;
    }
    }
    console.log(man.avg(2,4),man.speed);
