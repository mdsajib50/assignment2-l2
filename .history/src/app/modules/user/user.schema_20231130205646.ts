import { Schema, model, connect } from 'mongoose';

const userSchema = new Schema(
    {
        userId: { type: Number,unique:true },
        username: { type: String, required: true,unique:t },
        
    }
)