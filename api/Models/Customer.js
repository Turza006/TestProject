import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import * as bcrypt from "bcrypt";

const CustomerSchema = new Schema({
    userName: String,
    email: String,
})

CustomerSchema.plugin(timestamps)
CustomerSchema.index({ createdAt: 1, updatedAt: 1 });

export const Customer = mongoose.model("Customer", CustomerSchema)