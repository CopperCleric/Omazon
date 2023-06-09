const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
    {
        title: {type:String , required:true , unique:true},
        description: {type:String , required:true},
        img: {type:String , required:true },
        categories: {type:Array},
        size: {type:Array},
        color:{type:String},
        price: {type: Number , required:true },
        inStock:{type:Number , required:true},
        salesVolume:{type:Number , required:true , default:0,},
        reviews:{type:Array},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product" , ProductSchema);