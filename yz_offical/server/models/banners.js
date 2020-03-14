const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        title: {
                type: String
        },
        subtitle: {
                type: String
        },
        imgUrl: {
                type: String
        }
})

module.exports = mongoose.model('banners', schema)