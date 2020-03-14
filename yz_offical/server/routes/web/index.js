module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const classes = mongoose.model('classes')
    const teachers = mongoose.model('teachers')
    const news = mongoose.model('news')
    const banners = mongoose.model('banners')
    const messages = mongoose.model('messages')
    router.get('/classes/list', async (req, res) => {
        const list = await classes.find({}, {
            _id: 1,
            name: 1,
            desc: 1,
            imgUrl: 1
        })
        res.send(list)
    })
    router.post('/classes/detail', async (req, res) => {
        console.log(req.body)
        const list = await classes.findById(req.body.value)
        res.send(list)
    })
    router.get('/teachers/list', async (req, res) => {
        const list = await teachers.find({}, {
            _id: 1,
            name: 1,
            desc: 1,
            imgUrl: 1
        })
        res.send(list)
    })
    router.get('/news/list', async (req, res) => {
        const list = await news.find({}, {
            _id: 1,
            name: 1,
            date:1,
            desc: 1,
            imgUrl: 1
        })
        res.send(list)
    })
    router.post('/news/detail', async (req, res) => {
        console.log(req.body)
        const list = await news.findById(req.body.value)
        res.send(list)
    })
    router.get('/main', async (req, res) => {
        const classeslist = await classes.find({}, {
            _id: 1,
            name: 1,
            desc: 1
        }).limit(6)
        const teacherslist = await teachers.find({}, {
            _id: 1,
            name: 1,
            desc: 1,
            imgUrl: 1
        }).limit(3)
        const newslist = await news.find({}, {
            _id: 1,
            name: 1,
            desc: 1,
            imgUrl: 1,
            date:1
        }).limit(3).sort({_id: '-1'})
        const banner = await banners.find({}).sort({_id:-1}).limit(1)
        res.send([classeslist, teacherslist,newslist,banner])
    })
    router.post('/messages', async (req, res) => {
        console.log(req.body)
        const model = await messages.create(req.body)
        res.send(model)
      })
    app.use('/web/api', router)
}