import { Schema, model, connect } from 'mongoose';
import User from './user.interface';


const userSchema = new Schema<User>(
    {
        userId: { type: Number, unique: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        fullName: {
            firstName: String,
            lastName:String,
        },
        age: { type: Number },
        email: { type: String },
        isActive: { type: Boolean },
        hobbies:[]
        
    }
)