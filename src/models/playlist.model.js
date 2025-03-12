import mongoose, { Schema } from "mongoose";


const playlistSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    Vidos : {
        type: Schema.Types.ObjectId,
        ref : "Video"
    },
    owner : {
        type: Schema.Types.ObjectId,
        ref : "User"
    }
}, {timestamps: true})


export const PlayList = mongoose.model("Playlist", playlistSchema)