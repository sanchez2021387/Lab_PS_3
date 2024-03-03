import mongoose, { mongo } from "mongoose";

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
        id_User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
});

export default mongoose.model('publications', PublicationsSchema);