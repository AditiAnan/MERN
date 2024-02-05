import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 

    },
    email: { 
        type: String,
        requried: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,

    },
    isAdmin: {
        type: Boolean, 
        required: true,
        default: false,  
    },
}, 
{
    timestamps: true, 
}); 

const User = mongoose.model('User', userSchema);

export default User;