const bcryptjs=require('bcryptjs')
const userModel = require('../model/userModel')
const productModel = require('../model/productModel')
const register=async (req,resp) => {
    try {
        const {uname,email,pass}=req.body
        const hashPass=await bcryptjs.hash(pass,10)
        await userModel.create({uname,email,pass:hashPass})
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
        resp.redirect("/")
    }
}
const login=async (req,resp) => {
try {
    const {uname,pass}=req.body
    const user=await userModel.findOne({uname})
    if (user && await bcryptjs.compare(pass,user.pass)) {
        req.session.name=uname
        resp.redirect("/dashboard")
    } else {
        resp.redirect("/login")
    }
} catch (error) {
    console.log(error);
    
}
}
const dashboard=async (req,resp) => {
    try {
        if (req.session.name) {
            const data=await productModel.find()
            resp.render("home",{uname:req.session.name,data})
        }
    } catch (error) {
        console.log(error);
        resp.redirect("/login")
    }
}
const logout=async (req,resp) => {
    try {
        req.session.destroy(()=>{
            resp.redirect("/login")
        })
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={register,login,dashboard,logout}