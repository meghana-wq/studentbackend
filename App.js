const express=require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const app= express()
const students = require("./models/Student")

app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/contact",(req,res)=>{
    res.send("welcome to contact page")
})

app.post("/add",(req,res)=>{
    res.send("add done")
})

app.listen(8080,()=>{
    console.log("server started")

})
