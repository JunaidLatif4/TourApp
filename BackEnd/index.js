var express = require("express")
var cors = require("cors")
var env = require("dotenv")
const { default: mongoose } = require("mongoose")

const TourRouter = require("./Routes/TourRoute")

const app = express()

app.use(express.json())
app.use(cors())
env.config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DataBase Connected");
}).catch((err)=>{
    console.log("DataBase Connection Fail ==== " , err);
})

app.use('/hit' , async(req,res)=>{
    res.status(200).json({
        message:"Hited"
    })
})

app.use("/api/tour" , TourRouter)

app.listen(90 , ()=> console.log("ServerStarted"))