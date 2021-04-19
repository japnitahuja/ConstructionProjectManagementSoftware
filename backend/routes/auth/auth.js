const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const jwt_secret=process.env.JWT_SECRET;

require('../../models/project')
const Project = mongoose.model("Project");

router.post("/login", async (req, res) => {
    const {password, email} = req.body
    if(!password || !email){
        res.status(422).json({error: "Password or Email is missing", done: false})
    }
    else{
        try {
            const savedUser = await User.findOne({email})
            if(!savedUser){
                res.status(422).json({error:"Password or email is incorrect", done: false})
            }else{
                const userPassword = savedUser.password
                const passwordMatched = await bcrypt.compare(password, userPassword)
                if(passwordMatched){
                    const token = jwt.sign({_id:savedUser._id},jwt_secret) 
                    const {username,email,_id,firstName,lastName,phoneNumber,permission}=savedUser;
                    // if(permission === 'TASK_OWNER' || permission === 'TRADE_PARTNER'){
                    //     if(isProjectOwnerApproved){
                    //         res.json({message:"Signed In", token, user:{username,email,_id,firstName,lastName,phoneNumber,permission}, done:true})
                    //     }else if(isProjectOwnerDeclined){
                    //         res.status(200).json({message: 'Your request has been rejected by the project owner', done: true})
                    //     }else{
                    //         res.status(200).json({message: 'Your application is under process!', done: true})
                    //     }
                    // }else{
                    //}
                    res.json({message:"Signed In", token, user:{username,email,_id,firstName,lastName,phoneNumber,permission}, done:true})
                }else{
                    res.status(422).json({error:"Password or Email is incorrect",done:false}) 
                }
            }
        } catch (error) {
           console.log(error) 
        }
    }
})

router.post("/signup", async (req, res) => {
    let {username, email, password, firstName, lastName, phoneNumber, permission} = req.body;
    if(!email || !password || !username || !firstName || !lastName || !phoneNumber || !permission){
        res.status(422).json({error:"Please add all the details",done:false})
    }else{
        try {
            const savedUser = await User.findOne({email})
            if(savedUser){
                if(savedUser.password){
            res.status(422).json({error:"User already exists",done:false})
        }else{
            console.log('uppdate started!')
            const hashedPassword = await bcrypt.hash(password, 12)
            // const updateUser = await User.findOneAndUpdate(email, {
            //     $set: req.body
            // }, 
            // {new: true})
            await savedUser.updateOne({email, password:hashedPassword, permission, firstName, lastName, phoneNumber, username})
            savedUser.save()
            const token = jwt.sign({_id: savedUser._id}, jwt_secret)
            const _id = savedUser._id;
            console.log('update completed!')
            res.status(200).json({message: "User updated and signed in!",token, user: {username, email, password, firstName, lastName, phoneNumber, permission, _id}, done: true})
            
        }
            }
            else{
                try {
                    const hashedPassword = await bcrypt.hash(password, 12)
                    if(permission ==='PROJECT_OWNER'){
                    const newUser = await User.create({email, password:hashedPassword, permission, firstName, lastName, phoneNumber, username})
                    const token = jwt.sign({_id: newUser._id}, jwt_secret)
                    const _id = newUser._id;
                    res.json({message: "User created and signed in!",token, user: {username, email, password, firstName, lastName, phoneNumber, permission, _id}, done: true})
                    }else{
                       // const project = Project.findOne({_id: projectId})
                        const hashedPassword = await bcrypt.hash(password, 12)
                        const newUser = await User.create({email, password:hashedPassword, permission, firstName, lastName, phoneNumber, username})
                        //project.requestsToJoin.push(newUser._id)
                        res.json({message: 'Your request has been sent to project owner to aprove!', done: true})
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        } catch (err) {
            console.log(err)
        }
        
    }
})

module.exports = router