const mongoose=require("mongoose");
const app=express()
const router=express.router()
const ProductSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
    price:{type:Number,required:true},
     discount:{type:Number},
     category:{type:String,required:true},
     quantityAvailable:{type:Number,required:true},
     currentPrice:{type:Number,required:true},
     Dimensions:{type:Array},
     colors:{type:Array},
     review:{
        name:{type:String},
        Description:{type:String}
     }

    }
)

const ProductModel=mongoose.model('product',ProductSchema)






