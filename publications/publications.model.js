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
            ref: 'User',
            required: true
        },
        state: {
            type: Boolean,
            default: true
        }
});

export default mongoose.model('Publications', PublicationsSchema);