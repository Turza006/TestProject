import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const InvoiceSchema = new Schema({
    invoiceItems : [{
        type:Schema.Types.ObjectId,
        ref:'InvoiceItem'
    }],
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    total:Number,
    customer:{
        type:Schema.Types.ObjectId,
        ref:'Customer'
    }
})

InvoiceSchema.plugin(timestamps)
InvoiceSchema.index({ createdAt: 1, updatedAt: 1 });

export const Invoice = mongoose.model("Invoice", InvoiceSchema)