const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 5000


var app = express()
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.render('index'))

// file for the ajax call
//app.get('/ajaxTest', (req, res) => res.send("Ajax Test is OK!"))

app.get('/ajaxTest', (req, res) => res.json({output: "test"}))



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
