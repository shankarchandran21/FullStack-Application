import Post from "../models/postModel.js"

export const createPost = (req,res)=>{
    const newPost = new Post(req.body).save()
    .then(()=>res.status(201).json({success:true,message:"Post saved successfully"}))
    .catch((err)=>console.log(err))


}
export const getAllPosts = (req,res)=>{
    console.log("ENTERRRRR")
    Post.find()
    .then((post)=>res.status(200).json({success:true,post:post}))
    .catch((err)=>console.log(err))
}
export const getSinglePosts = (req,res)=>{
    const {id} = req.params
    Post.findById(id)
    .then((post)=>res.status(200).json({success:true,post:post}))
    .catch((err)=>console.log(err))

}
export const updatePost = (req,res)=>{
    const {id} = req.params;
    const { username,description,duration,date} = req.body;
    Post.findByIdAndUpdate(id,{
        username,
        description,
        duration,
        date
    })
    .then(()=>res.status(200).json({success:true,message:"Post Update successfully"}))
    .catch((err)=>console.log(err))


}
export const deletePost = (req,res)=>{
    const {id} = req.params
    Post.findByIdAndRemove(id)
    .then(()=>res.status(200).json({success:true,message:" Delete Post successfully"}))
    .catch((err)=>console.log(err))
}