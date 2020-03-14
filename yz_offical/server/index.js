const express = require('express')

const app = express()

app.set('secret','ny84i56yniha781n_)&^')

app.use(express.json())
app.use(require('cors')())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)

require('./routes/admin')(app)

require('./routes/web')(app)
app.listen(3000);
console.log('http://127.0.0.1:3000')