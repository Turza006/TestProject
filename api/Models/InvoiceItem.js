import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import * as bcrypt from "bcrypt";

const InvoiceItemSchema = new Schema({
    itemName: String,
    price:Number,
    qty:Number
})

InvoiceItemSchema.plugin(timestamps)
InvoiceItemSchema.index({ createdAt: 1, updatedAt: 1 });

export const InvoiceItem = mongoose.model("InvoiceItem", InvoiceItemSchema)