import timestamps from "mongoose-timestamp";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const tokenSchema = new Schema({
    userId: String,
    userType: String,
    token: { type: String},
    email: {type: String},
    expired: Date
});

tokenSchema.plugin(timestamps);

tokenSchema.index({ createdAt: 1, updatedAt: 1 });

export const Token = mongoose.model('Token', tokenSchema);
