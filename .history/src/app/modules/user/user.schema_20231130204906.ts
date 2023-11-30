import { Schema, model, connect } from 'mongoose';

const userSchema = new Schema(
    {
        userId: { type: N },
        username: { type: String, required: true },
        
    }
)