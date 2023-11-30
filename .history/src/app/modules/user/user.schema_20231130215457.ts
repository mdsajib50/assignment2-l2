import { Schema, model, connect } from 'mongoose';
import User from './user.interface';


const userSchema = new Schema<User>(
    {
        userId: { type: Number, unique: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        fullName: {
            firstName: {type:String},
            lastName: { type: String },
        },
        age: { type: Nubber },
        email: { type: String },
        isActive: { type: Boolean },
        hobbies: [{ type: String }],
        address: {
            street: { type: String },
            city: { type: String },
            country:{type:String}
        }
        
    }
)