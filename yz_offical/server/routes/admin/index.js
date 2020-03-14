module.exports = app => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const express = require('express')
  const router = express.Router()
  const classes = require('../../models/classes')
  const teachers = require('../../models/teachers')
  const news = require('../../models/news')
  const banners = require('../../models/banners')
  const adminUser = require('../../models/adminUser')
  const messages = require('../../models/messages')
  
  //登录校验中间件
  const auth = async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录(无token)')
    const {
      id
    } = jwt.verify(token, app.get('secret'))
    assert(id, 401, '请先登录(token无效)')
    req.user = await adminUser.findById(id)
    assert(req.user, 401, '请先登录')
    await next()
  }
  //添加
  router.post('/classes', auth, async (req, res) => {
    console.log(req.body)
    const model = await classes.create(req.body)
    res.send(model)
  })
  router.post('/teachers', auth, async (req, res) => {
    console.log(req.body)
    const model = await teachers.create(req.body)
    res.send(model)
  })
  router.post('/news', auth, async (req, res) => {
    console.log(req.body)
    const model = await news.create(req.body)
    res.send(model)
  })
  router.post('/banners', auth, async (req, res) => {
    console.log(req.body)
    const model = await banners.create(req.body)
    res.send(model)
  })
  router.post('/adminUser', auth, async (req, res) => {
    console.log(req.body)
    const model = await adminUser.create(req.body)
    res.send(model)
  })
  //列表获取
  router.get('/classes', auth, async (req, res) => {
    const items = await classes.find()
    res.send(items)
  })
  router.get('/teachers', auth, async (req, res) => {
    const items = await teachers.find()
    res.send(items)
  })
  router.get('/news', auth, async (req, res) => {
    const items = await news.find()
    res.send(items)
  })
  router.get('/banners', auth, async (req, res) => {
    const items = await banners.find()
    res.send(items)
  })
  router.get('/adminUser', auth, async (req, res) => {
    const items = await adminUser.find()
    res.send(items)
  })
  router.get('/messages/contactes', auth, async (req, res) => {
    const items = await messages.find({status:true})
    res.send(items)
  }) 
  router.get('/messages', auth, async (req, res) => {
    const items = await messages.find({status:false})
    res.send(items)
  })
  //编辑获取
  router.get('/classes/:id', auth, async (req, res) => {
    const model = await classes.findById(req.params.id)
    res.send(model)
  })
  router.get('/teachers/:id', auth, async (req, res) => {
    const model = await teachers.findById(req.params.id)
    res.send(model)
  })
  router.get('/news/:id', auth, async (req, res) => {
    const model = await news.findById(req.params.id)
    res.send(model)
  })
  router.get('/banners/:id', auth, async (req, res) => {
    const model = await banners.findById(req.params.id)
    res.send(model)
  })
  router.get('/adminUser/:id', auth, async (req, res) => {
    const model = await adminUser.findById(req.params.id)
    res.send(model)
  })
  //内容更新
  router.put('/classes/:id', auth, async (req, res) => {
    const model = await classes.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.put('/teachers/:id', auth, async (req, res) => {
    const model = await teachers.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.put('/news/:id', auth, async (req, res) => {
    const model = await news.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.put('/banners/:id', auth, async (req, res) => {
    const model = await banners.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.put('/adminUser/:id', auth, async (req, res) => {
    const model = await adminUser.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.put('/messages/:id', auth, async (req, res) => {
    const model = await messages.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  //删除
  router.delete('/classes/:id', auth, async (req, res) => {
    const model = await classes.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.delete('/teachers/:id', auth, async (req, res) => {
    const model = await teachers.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.delete('/news/:id', auth, async (req, res) => {
    const model = await news.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.delete('/banners/:id', auth, async (req, res) => {
    const model = await banners.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.delete('/adminUser/:id', auth, async (req, res) => {
    const model = await adminUser.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.delete('/messages/:id', auth, async (req, res) => {
    const model = await messages.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  app.use('/admin/api', router)

  //图片上传
  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  app.post('/admin/api/upload',auth, upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  //登录
  app.post('/admin/api/login', async (req, res) => {
    const {
      username,
      password
    } = req.body
    const adminUser = require('../../models/adminUser')
    //用户名判断
    const user = await adminUser.findOne({
      username
    }).select('+password')
    assert(user, 422, '用户不存在')
    //密码判断
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')

    //生产token
    const token = jwt.sign({
      id: user._id
    }, app.get('secret'))
    res.send({
      token
    })


  })
  //错误处理
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}