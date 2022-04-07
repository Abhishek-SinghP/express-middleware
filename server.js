// console.log("Hello Node");
// creating server 

const express = require("express");

const server = express();

const middleware1 = (req, res ,next) => {
    console.log("Hello Middleware1");
    next()      // block the flow and take it back top the requested route
}
  
const middleware2 = (req, res ,next) => {
    console.log("This is  Middleware2");
    next()
}

server.use(middleware1);

server.get("/" , (req , res )=>{
    res.send("<h1>Abhishek Singh </h1>")
})

server.get("/user" ,middleware2, (req , res )=>{
    res.send({id : 25 ,name :"Amit"})
})

server.listen(4001, () =>{
    console.log("Server is running at port 4001");
})

// HTTP METHODS 
// CRUD : create read update delete
// get post put delete


// middlewares :-
// is a function 
// takes three parameter , req , res, next .


// why do we need middleware :-
// hoc is react