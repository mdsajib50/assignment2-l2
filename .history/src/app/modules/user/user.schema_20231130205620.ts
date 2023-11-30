import { Schema, model, connect } from 'mongoose';

const userSchema = new Schema(
    {
        userId: { type: Number,u },
        username: { type: String, required: true },
        
    }
)