const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt =require('jsonwebtoken');
const bcrypt = require('bcrypt');

//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    console.log("Received:", username, email, password);

    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory!');
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User is already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed:", hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if (user) {
        return res.status(201).json({
            _id: user.id,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('User data is not valid');
    }
});


//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) => {

    const {email,password} = req.body;
    if(!email||!password){
        res.status(400);
        throw new Error('All fields are required');
    }
    const user = await User.findOne({email});
    //compare password with hashed password
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username : user.username,
                email:user.email,
                id:user.id,
            },
        },process.env.ACCESS_TOKEN_SECRET,
    { expiresIn:"15m" }
);
        res.status(200).json({ accessToken });  
    }else{
        res.status(400);
        throw new Error('Invalid email or password');
    }
});

//@desc Current user information
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) => {
    res.status(201).json(req.user);
});

module.exports = { registerUser,loginUser,currentUser }         