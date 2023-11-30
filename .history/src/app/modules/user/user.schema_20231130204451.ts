import { Schema, model, connect } from 'mongoose';

const userSchema = new Schema(
    {
        userId: {type: String},
    }
)