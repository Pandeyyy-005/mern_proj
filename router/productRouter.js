const express=require('express')
const { addProduct, editProdcut, searchProduct, deleteProduct } = require('../controller/productController')
const p_router=express.Router()
p_router.get("/add",(req,resp)=>{
    resp.render("add")
})
p_router.post("/add",addProduct)
p_router.get("/search/:id",searchProduct)
p_router.delete("/delete/:id",deleteProduct)
p_router.patch("/edit/:id",editProdcut)
module.exports=p_router