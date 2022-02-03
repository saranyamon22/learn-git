const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const { Mongoose, Schema } = require("mongoose")

const productSchema = new Schema ({
    name : String,
    category : String,
    price : Number,
    tags : [String],
})

const ProductModel = mongoose.model('Product',productSchema)
module.exports = ProductModel