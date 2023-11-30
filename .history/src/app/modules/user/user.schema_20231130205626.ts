import { Schema, model, connect } from 'mongoose';

const userSchema = new Schema(
    {
        userId: { type: Number,unique: },
        username: { type: String, required: true },
        
    }
)