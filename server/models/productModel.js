const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },brand:{
        type:String,
        require:true

    },creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true

    }
},
{timestamps:true}
)
module.exports = mongoose.model ("Product",productSchema)