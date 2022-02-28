import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Please provide Username']
        },
        email:{
            type: String,
            required: [true, 'Please provide an Email address'],
            unique: true
        },
        password:{
            type: String,
            required: [true, 'Please provide a password']
        }   
    },
    {
        timestamps: true, 
    }
)

export default mongoose.model('User', userSchema);