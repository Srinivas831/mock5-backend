const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    label:String
},{
    versionKey:false
})

const ContactModel=mongoose.model("Contact",contactSchema);

module.exports={ContactModel};