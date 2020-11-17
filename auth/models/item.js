const mongoose = require('mongoose'), Schema = mongoose.Schema;
// import {ProductSchema} from './product'

const ItemSchema = mongoose.Schema({
    code: String,
    name: String,
    details: String,
    image: String,
    price: Number,
    quantity:Number

})

module.exports = mongoose.model('Item', ItemSchema);