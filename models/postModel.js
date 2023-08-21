import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    username:{
        type: 'string',
        require:true,
        
    },description:{
        type: 'string',
        require:true,
    },duration:{
        type: Number,
        require:true,
    },date:{
        type: Date,
        require:true,
    }
},{
    timestamps:true
})


const Post = mongoose.model('Post',postSchema)

export default Post