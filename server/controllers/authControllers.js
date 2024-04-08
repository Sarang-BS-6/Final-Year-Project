const User = require('../models/user.js')
const {hashPass, comparePass } = require('../helpers/auth.js')
const jwt = require('jsonwebtoken')


const test = (req, res) =>{
    res.json('test is working');
}
const registerUser = async(req,res) =>{
    try {
        const {name, email, password} = req.body;
        // checking
        if(!name){
            return res.json({
                error: "Name is required"
            })
        }
        if(!password || password.length < 6){
            return res.json({
                error: "Enter a valid password with atleast 6 letters"
            })
        }
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error: "Email already exists"
            })
        }
        const hashedPassword = await hashPass(password)
        const user = await User.create({
            name,email,
            password: hashedPassword
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async(req, res)=>{
    try{
        const {name, password} = req.body
        // Check if user exists
        const user = await User.findOne({name});
        if (!user){
            return res.json({
                error: 'No user found'
            })
        }

        const match = await comparePass(password, user.password)
        if(match){
            res.json("Passwords match")
            jwt.sign({name: user.name, id: user._id, email: user.email}, process.env.JWT_SECRET, {}, (err, token) =>{
                if(err) throw err;
                console.log(token)
                res.cookie('token', token)
                res.json(user)
            })
        }
        if(!match){
            res.json("Passwords do not match")
        }
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser, 
    loginUser
}