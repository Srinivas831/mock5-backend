const express=require("express");
const { ContactModel } = require("../model/contact.model");
const contactRouter=express.Router();

contactRouter.post("/add",async(req,res)=>{
try{
    const added=new ContactModel(req.body);
    await added.save();
    res.status(200).send({"msg":"Added successfully"});
}
catch(err){
    res.status(400).send(err);
}
})

contactRouter.get("/",async(req,res)=>{
    try{
        const get=await ContactModel.find();
        res.status(200).send({"msg":get});
    }
    catch(err){
        res.status(400).send("error getting")
    }
})

contactRouter.patch("/patch/:id",async(req,res)=>{
    try{
       await ContactModel.findByIdAndUpdate({_id:req.params.id},req.body);
       res.status(200).send({"msg":"patched successfully"});
    }
    catch(err){
        res.status(400).send({"msg":"error patching"})
    }
})


contactRouter.delete("/delete/:id",async(req,res)=>{
    try{
       await ContactModel.findByIdAndDelete({_id:req.params.id});
       res.status(200).send({"msg":"Deleted successfully"});
    }
    catch(err){
        res.status(400).send({"msg":"error deleting"})
    }
})


contactRouter.get("/search", async (req, res) => {
    try {
        console.log(req.query.q)
      const firstName = req.query.q;
      const searchResults = await ContactModel.findOne({ name:firstName});
      if(searchResults){
        return res.status(200).send({ "msg": searchResults });
    }
    else{
          return res.status(200).send({ "msg": "not found anything" });

      }
    } catch (err) {
      res.status(400).send("error searching");
    }
  });
  
module.exports={contactRouter};