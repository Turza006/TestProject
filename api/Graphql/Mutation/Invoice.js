import {Invoice} from "../../Models/Invoice";
import {User} from "../../Models/User";
import {Customer} from "../../Models/Customer";
import {InvoiceItem} from "../../Models/InvoiceItem";



export const CreateInvoice = async (parent, args, ctx, req)=>{
    const {payload} = args
    const {_id} = ctx.user
    const InvoiceItems = payload.invoiceItems
    const Cust = payload.customer
    const len = InvoiceItems.length
    let inItems = []
    const newCustomer = new Customer(Cust)
    await newCustomer.save()
    let total = 0
    for (let i = 0; i < len; i++) {
        const newInvoiceItems = new InvoiceItem(InvoiceItems[i])
        await newInvoiceItems.save()
        const ItemTotalPrice = InvoiceItems[i].price * InvoiceItems[i].qty
        total = total + ItemTotalPrice
        inItems.push(newInvoiceItems._id)
    }
    const newInvoice = new Invoice
    newInvoice.invoiceItems = inItems
    newInvoice.user = _id
    newInvoice.customer = newCustomer._id
    newInvoice.total = total
    await newInvoice.save()
    return{
        msg:"CREATED",
        code:CREATED
    }
}