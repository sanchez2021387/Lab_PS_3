import mongoose, { mongo } from "mongoose";

const UserSchema = mongoose.Schema({
    
    name:{
        type: String,
        required: [true, "The name is required"]
    },

    UserName:{
        type: String,
        required: [true, "The name is required"]
    },

    lastName:{
        type: String,
        required: [true, "The last name is required"]
    },

    email: {
        type: String,
        required: [true, "The email is required"],
        unique: true
    },

    password:{
        type: String,
        required: [true, "The password is required"]
    },

    state:{
        type: Boolean,
        default: true
    }
})



  export default mongoose.model('User', UserSchema);