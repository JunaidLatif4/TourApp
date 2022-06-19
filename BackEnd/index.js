var express = require("express")
var cors = require("cors")
var env = require("dotenv")
const { default: mongoose } = require("mongoose")

const AuthRouter = require("./Routes/AuthRoute")
const CountryRouter = require("./Routes/CountryRoute")
const PlaceRouter = require("./Routes/PlaceRoute")
const PathRouter = require("./Routes/PathRoute")
const TourRouter = require("./Routes/TourRoute")
const BookingRouter = require("./Routes/BookingRoute")

const app = express()

app.use(express.json())
app.use(cors())
env.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DataBase Connected");
}).catch((err) => {
    console.log("DataBase Connection Fail ==== ", err);
})

app.use('/hit', async (req, res) => {
    res.status(200).json({
        message: "Hited"
    })
})

app.use("/api/auth", AuthRouter)
app.use("/api/country", CountryRouter)
app.use("/api/place", PlaceRouter)
app.use("/api/tour", TourRouter)
app.use("/api/path", PathRouter)
app.use("/api/booking", BookingRouter)

app.listen(process.env.PORT, () => console.log("ServerStarted"))