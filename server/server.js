const express = require('express')
const cors=require("cors")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const { Schema } = mongoose;
dotenv.config()
const userSchema = new Schema({
    image:  String, 
    name: String,
    job:   String,
  description:String,
  });
  const User = mongoose.model('User', userSchema);
const app = express()
const port = 8000
app.use(cors())
app.use(bodyParser.json())
app.get('/user', (req, res) => {
  User.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }
  })
})
app.get('/user/:id',(req,res)=>{
    let id=req.params.id
    User.findById(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }
    })
})
app.delete('/user/:id',(req,res)=>{
    let id=req.params.id
    User.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("silindi")
        }
    })
})
app.post('/user', (req, res) => {
  let user=new User({
    image:  req.body.image, 
    name: req.body.name,
    job:   req.body.job,
  description:req.body.description,
  })
  user.save()
  res.send({message:"succes"})
})
mongoose.connect('mongodb+srv://Ali:Ali@cluster0.x8qec5j.mongodb.net/?retryWrites=true&w=majority',(err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }
});
