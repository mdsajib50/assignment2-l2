import { Schema, model, connect } from 'mongoose';

const userSchema = new Schema(
    {
        userId: { type: Number,unique:t },
        username: { type: String, required: true },
        
    }
)