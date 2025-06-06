const promise = new Promise((resolve, reject)=>{
 setTimeout(function(){
   let error = false;
   if(!error){
    resolve({name: "shoaib", age: 23})
   }else{
    reject("something went wrong");
   }
 }, 3000)
})

promise.then((user)=>{
    console.log(user)
    return user.userName
})
.then((userName)=>{
 console.log(userName)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("no error founded")
})


async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getAllUsers()


async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    setTimeout(function(){},2000)
    }
}
getUsers()

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    start(){
        console.log(`i have ${this.model} and its made in ${this.year}`)
    }
}

let car1 = new Car("BUGGATTI", 2025)
let car2 = new Car("HONDA", 2020)

console.log(car1.start());


 class Person {
    constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age
    }
    fullName(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName} and i'm ${this.age} years old`)
    }
 }

 let p1 = new Person ("Muhammad","Hassan",20);
 let p2 = new Person ("Shoaib", "Khan", 23);



setTimeout(function(){
    console.log(p2.fullName())
},3000)


const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(function(){
       let error = true;
       if(!error){
        resolve({name: "shoaib", age: 23})
       } else{
        reject("something went wrong")
       }
    }, 4000)
})
promise.then((user)=>{
    console.log(user)
    return user.userName
})
.then((userName)=>{
 console.log(userName)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("no error founded")
})

async function getAllUsers() {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function getUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}