const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = mongoose.Schema({
    writer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        maxLenght:50
    },
    description:{
        type:String
    },
    price:{
        type: Number,
        default:0
    },
    images:{
        type:Array,
        default:[]
    },
    continents:{
        type:Number,
        default:1
    },
},{timestamps:true})



const Product = mongoose.model('Product', productSchema);

module.exports = { Product }