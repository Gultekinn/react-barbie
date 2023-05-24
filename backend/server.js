const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cors());
PORT = 8080;

mongoose
  .connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net/")
  .then((res) => {
    console.log("conected..");
  });

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});
const UserModel = mongoose.model("Users", UserSchema);

//get
app.get("/",async(req,res)=>{
    const data=await  UserModel.find()
    res.send(data)
})
//post
app.post("/",async(req,res)=>{
    const newModel=await new UserModel({
        ...req.body
    })
    newModel.save()
    res.send(newModel)
})

//delete
app.delete("/:id",async(req,res)=>{
  const {id}=req.params
    const newModel=await UserModel.findByIdAndDelete(id)
    res.send("delete")
})


//get by id
app.get("/:id", async (req, res) => {
  const { id } = req.params
  const target = await UserModel.findById(id)
  res.send(target)
})
app.listen(PORT, () => {
  console.log("app listene..");
});
