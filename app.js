const express = require('express')
const handlebars = require('express-handlebars')
const db = require('./models')
const app = express()
const port = 3000

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.listen(port, () => {
  console.log(`app is listening on port ${port}!`)
})

require('./routes')(app) // const router = require('./routes'); router(app)