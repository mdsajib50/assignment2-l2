import { Schema, model, connect } from 'mongoose';

const userSchema = new Schema<U>(
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