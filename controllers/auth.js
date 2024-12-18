const User = require("../models/User");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");



const register = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) {
            res.status(200).json({ message: "user already exist please Login ", success: false, })
        } else {
            const hasedPassword = await bcrypt.hash(req.body.password, salt);
            const newUser = new User({
                ...req.body,
                password: hasedPassword
            });
            const savedUser = await newUser.save();
            // pushing notification to admin 
            await User.findOneAndUpdate({ isAdmin: true }, { $push: { notification: `${savedUser.name} has created a New account .` } });
            res.status(200).json({
                success: true,
                messsage: "user hasbeen created !",
                user: savedUser,
            })
        }

    } catch (err) {
        console.log(err)
        next(err);
    }
}


// LOGIN 
const LOGIN = async (req, res, next) => {

    try {
        // const transporter= nodemailer.createTransport({
        //     service:"gmail",
        //     auth:{
        //         user:"kawsarfiroz@gmai.com",
        //         password:process.env.PASSWORD
        //     },


        // })
        // const mailOptions = {
        //     from:process.env.EMIL,
        //     to:req.body.email,
        //     subject:`sending email with react js and node js `
            
        // }

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).json({
                message: "User not found Please Register  !", success: false,
            })
        } else {
            const pass = await bcrypt.compare(req.body.password, user.password);
            if (!pass) {
                return res.status(200).json({
                    message: "Invalid credintials   !", success: false,
                })
            } else {
                const token = await jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRETE, { expiresIn: "1d" });
                const { password, ...others } = user._doc;
                await User.findOneAndUpdate({ isAdmin: true }, { $push: { notification: `${user.name} Logged In Now..` } });
                res.cookie("token", token, { 
                    httpOnly: true ,
                    secure: true, 
                    sameSite: 'None', 
                    maxAge: 24 * 60 * 60 * 1000
                }).json({
                    message: "Login successfully",
                    others,
                    success: true,
                    token
                });
             // Protect the cookie from client-side scripts
                  
            }
        }
    } catch (err) {
        next(err);
    }
}


module.exports = { register, LOGIN }