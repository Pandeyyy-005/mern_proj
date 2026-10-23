const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    img:
    {
       type:String,
        required:true 
    },
    desc:
    {
        type:String,
        required:true
    }
},{timestamps:true})
const productModel=mongoose.model("products",productSchema)
module.exports=productModel