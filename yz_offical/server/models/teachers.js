const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    edu: {
        type: String
    },
    school: {
        type: String
    },
    desc: {
        type: String
    },
    imgUrl: {
        type: String
    }

})

module.exports = mongoose.model('teachers', schema)