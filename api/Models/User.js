import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const UserSchema = new Schema({
    userName: String,
    email: String,
    status: String
})

UserSchema.plugin(timestamps)
UserSchema.index({ createdAt: 1, updatedAt: 1 });

export const User = mongoose.model("User", UserSchema)