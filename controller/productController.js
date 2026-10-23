const productModel = require("../model/productModel");

const addProduct=async (req,resp) => {
    try {
        const {pname,img,desc}=req.body
        await productModel.create({pname,img,desc})
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}
const editProdcut=async (req,resp) => {
    try {
        const {pname,img,desc}=req.body
        await productModel.findByIdAndUpdate(req.params.id,req.body)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}
const searchProduct=async (req,resp) => {
    const data=await productModel.findById(req.params.id)
    resp.render("edit",{data})
}
const deleteProduct=async (req,resp) => {
    try {
        await productModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={addProduct,editProdcut,searchProduct,deleteProduct}