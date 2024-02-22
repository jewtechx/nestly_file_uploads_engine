const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    filename:{type:String,required:true},
    path:{type:String,required:true}
})

const Image = mongoose.model('image',imageSchema)
module.exports = Image