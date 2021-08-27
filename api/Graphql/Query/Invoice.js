import {User} from "../../Models/User";
import {Invoice} from "../../Models/Invoice";

export const AllInvoice = async(parent, args, ctx, req)=> {
    const {limit, offset} = args
    const Data = await Invoice.find().limit(limit).skip(limit * offset).populate('invoiceItems').populate('user').populate('customer')
    const count = await Invoice.countDocuments()
    return{
        Invoices:Data,
        count,
        msg:"SUCCESS",
        code:SUCCESS

    }


}