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


 // app.use(bodyParser.json())
 // app.use(bodyParser.urlencoded({extended: false}))
 // app.use('/', home)
 // app.use('/home', home)

app.get('/', (req, res) => res.render('index',pageData.aframear))

// temporary ajax test
app.get('/ajaxTest', (req, res) => res.send("ajax1Test3 OK!"))

// ---------------------------------
// ---------------------------------
// ---------------------------------

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
