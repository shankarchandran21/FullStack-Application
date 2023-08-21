import mongoose from 'mongoose'
// const {Schema} = mongoose

const userSchema = mongoose.Schema({ // new Schema
    username:{
        type: 'string',
        require:true,
        unique: true,
        trim: true,
        minLength:[5,"Enter atleast 5 character"]
    }
},{
    timestamps: true,
}) 

const User = mongoose.model("User",userSchema)

export default User