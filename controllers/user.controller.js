import {User} from "../models/user.model.js";

export const registerUser = async (req,res)=>{
    const {name, email,password} = req.body;

    if(!name || !email ||!password){
        return res.status(404).json({message: "Please fill in all fields."});
    }

    try{
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "Email already in use."})
        }
        const newUser = new User({name, email, password})
        await newUser.save()
        res.status(201).json({message: "User created successfully."})
    }catch(err){
        console.log("error while saving user");
    }
};