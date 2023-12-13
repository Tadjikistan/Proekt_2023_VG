import mongoose, { Schema, models } from "mongoose"

const userSchema = new Schema(
    {
        email:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true
        },
        id:{
            type: Number,
            integer: true
        },
        balance:{
            type: Number,
            integer: true
        },

    },
    {
        timestamps: true
    }
);

const User = models.User || mongoose.model('User', userSchema )
export default User;