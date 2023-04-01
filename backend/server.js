const express=require('express')

const router=express.Router();
const mongoose= require('mongoose')
const app=express()
const Port=8000
const uri = "mongodb+srv://Eco:Eco1812@product.omdnabk.mongodb.net/?retryWrites=true&w=majority";
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
// app.use(cors())
app.use(cors(corsOptions)) 
const ProductSchema=new mongoose.Schema(
    {
     name:{type:String},
     price:{type:Number},
     discount:{type:Number},
     category:{type:String,},  //description and technical 
     quantityAvailable:{type:Number},
     currentPrice:{type:Number},
     Dimensions:{type:Array},
     colors:{type:Array},
     review:{
        name:{type:String},
        Description:{type:String}
     }

    }
)

const ProductModel=mongoose.model('product',ProductSchema)

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log('Connected with MongoDB')
    }catch(error)
    {
        console.log(`Error -> ${error}`)
    }
}

connect()
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Welcome user...")
})

app.get("/product",async(req,res)=>{
    console.log("inside pro")
    const posts=await ProductModel.find()
    res.send(posts);
})

app.post("/product", async(req,res)=>{
    console.log("insidepro")
    const data=new ProductModel({
        name:req.body.name,
        price:req.body.price,

    })
    const val=await data.save();
    res.send(val)
})

app.get("/product/:id",async(req,res)=>{
    try{
    const getByID=await model.findOne({_id:req.params.id})
    res.send(getByID)
    }catch{
        res.status(404)
        res.send({error:"Pro doesn't exist"})
    }
  })

app.listen(Port,()=>{
    console.log(`server is running on port :${Port}`)
})