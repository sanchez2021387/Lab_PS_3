import mongoose from "mongoose";

const PublicationsSchema = mongoose.Schema({
        title: {
            type: String,
            required: [true, "Title is required"]
        },
        category:{
            type: String,
            required: [true, "Category is rerquired"]
        },
        content:{
            type: String,
            required: [true, "Content is rerquired"]
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
            ref: 'User',
            required: true
=======
            ref: 'User'
>>>>>>> 4becc68a971106292714015a9f5ce5062c608241
        },
        state: {
            type: Boolean,
            default: true
        }
});

export default mongoose.model('Publications', PublicationsSchema);