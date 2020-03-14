const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        name: {
                type: String
        },
        phone: {
                type: String,
        },
        message:{
            type: String,
        },
        status:{
                type:Boolean,
        }
})

module.exports = mongoose.model('messages', schema)