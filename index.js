const express=require("express");
const cors=require("cors");
const { connection } = require("./db");
const { contactRouter } = require("./routes/contacts");

const app=express();

app.use(cors());
app.use(express.json());

app.use("/contacts",contactRouter);


app.get("",(req,res)=>{
    res.send("BACKEND IS RUNNING")
})

app.listen(8080,async()=>{
    try {
        await connection;
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
   
})