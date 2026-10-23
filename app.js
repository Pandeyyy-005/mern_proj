const express=require('express')
const { connectDB } = require('./db')
const session = require('express-session')
const method=require('method-override')
const router = require('./router/userRouter')
const p_router = require('./router/productRouter')
connectDB()
const app=express()
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(method("_method"))
app.use(session({
    secret:"abccc",
    resave:false,
    saveUninitialized:false
}))
app.use("/",router)
app.use("/",p_router)
app.listen(4000,()=>{
    console.log("runing..");
    
})