import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';



// @desc    Register new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body

    //Check all fields
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    //Check if user exists
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error('User allready exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400)
        throw new Error('Invalid user data');
    }

}) 

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //Get user from email
    const user = await User.findOne({email})
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid email or password');
    }
}) 

// @deac    Get User Data
// @route   POST /api/users/me
// @access  Private
export const getLoggedUser = asyncHandler(async (req, res) => {

//    const {_id, name, email} = await User.findById(req.user.id)
//    res.status(200).json({
//        id: _id,
//        name,
//        email
//    })

    res.status(200).json(req.user)
}) 

//Generate JWT
const generateToken =(id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}