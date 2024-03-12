const express = require('express')
const router = express.Router()
const cors= require('cors')
router.use(cors())
const userModel = require('../model/userData')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()


router.get('/getall',async(req,res,next)=>{
  let users;
  try {
    users = await userModel.find()
  } catch (error) {
    return next(err)
  }
  if(!users){
    return res.status(500).json({message:"unexpected error occured"})
  }
  return res.status(200).json({users})
})

// post method for ADDING USER
router.post('/signup',async(req,res,next)=>{
    const {name, email,password}=req.body;
    if(
      !name && name.trim()===''&&
      !email && email.trim()=== ''&&
      !password && password.trim()===''
    ){
      return res.status(422).json({message:"invalid inputs"})
    }
    const hashedPassword = bcrypt.hashSync(password)
    let user;
    try {
      user = new userModel({name,email,password:hashedPassword})
      user = await user.save()
    } catch (error) {
      return res.status(500).json({message:"already registered"})
    }
    if(!user){
      return res.status(500).json({message:"something went Wrong"})
    }
    return res.status(201).json({message:"successfully registered"})
})

// router.post('/signup', async (req, res, next) => {
//     const { name, email, password } = req.body;

//     // Validation
//     if (!name || !email || !password) {
//         return res.status(422).json({ message: "Invalid inputs" });
//     }

//     // Hashing password
//     const hashedPassword = bcrypt.hashSync(password, 10);

//     try {
//         // Creating and saving user
//         const user = new userModel({ name, email, password: hashedPassword });
//         await user.save();
//         return res.status(201).json({ id:user._id});
//     } catch (error) {
//         // Error handling
//         return next(error);
//     }
// });


router.put('/update/:id',async(req,res,next)=>{
    const id = req.params.id;
    const {name,email,password} = req.body
    if(
      !name&& name.trim()===''&&
      !email&& email.trim()===''&&
      !password&& password.trim()===''
    ){
      return res.status(422).json({message:"invalid inputs"})
    }
    const hashedPassword= bcrypt.hashSync(password)
    let user;
    try{
     user= await userModel.findByIdAndUpdate(id,{
      name,
      email,
      password:hashedPassword
     })
    }catch(error){
      return console.log(error)
    }
    if(!user){
      return res.status(500).json({message:"something went Wrong"})
    }
    res.status(200).json({message:"updated successfully"})
})

router.delete('/delete/:id',async(req,res,next)=>{
  const id = req.params.id
  let user;
  try {
    user= await userModel.findByIdAndDelete(id)
  } catch (error) {
    return console.log(error)
  }
  if(!user){
    return res.status(500).json({message:"Something went wrong"})
  }
  return res.status(200).json({message:"deleted successfully"})
})

router.post('/login',async(req,res,next)=>{
  const {email,password} =req.body
  if(
    !email && email.trim()===""&&
    !password&& password.trim()===""
  ){
    return res.status(422).json({message:"invalid inputs"})
  }
  let existingUser;
  try {
    existingUser = await userModel.findOne({email})
  } catch (error) {
    return console.log(error)
  }
  if(!existingUser){
    return res.status(404).json({message:"unable to find user from this id"})
  }
  const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password)
  if(!isPasswordCorrect){
    return res.status(400).json({message:"incorrect password"})
  }
  const token = jwt.sign({id:existingUser._id},process.env.SECRET_KEY,{
    expiresIn:"7d"
  })
  return res.status(200).json({message:"Logged in Successfully",token,id:existingUser._id})
})


  
  module.exports = router;