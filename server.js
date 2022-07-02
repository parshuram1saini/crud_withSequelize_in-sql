const express = require("express"); //import the express object 
const cors = require("cors");

const app = express(); //using the express  object method now 



let corsOption={
    origin:"http://localhost:8080"
}

//----------------------------------//
///--------middleware------///
app.use(cors(corsOption))
app.use(express.json()) /// for making json date format
app.use(express.urlencoded({extended: true})) // for urlincoded data format means key - value pairs 

//---------------------------------------//
///---------router---------///
const router = require("./routes/studentRoutes");
app.use("/api/students",router)

//-------------------------------------------//
///-------testing api-------///
app.get("/",(req,res)=>{
    res.json({message: "hello from api"})
})

///--------port-----------///
const port = process.env.PORT || 8080;

///---------server---------///
app.listen(port, () =>{
    console.log(`server is running on ${port}`)
})