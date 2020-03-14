const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        name: {
                type: String
        },
        location: {
                type: String
        },
        date: {
                type: String
        },
        desc: {
                type: String
        },
        descDetils: {
                type: String
        },
        imgUrl: {
                type: String
        }
})

module.exports = mongoose.model('classes', schema)