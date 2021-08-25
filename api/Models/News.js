import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const NewsSchema = new Schema({
    title:String,
    desc:String,
    link: {
        type:String,
        required: true
    },
    website:String,
    source:String,
    date:String,
    image:String
})

NewsSchema.plugin(timestamps)
NewsSchema.index({ createdAt: 1, updatedAt: 1 })

export const News = mongoose.model("News", NewsSchema)