// DEPENDENCIES
const express = require('express')
// Added so we can DELETE
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
// Engine used and requiring JSX so we can build our views
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// Added CSS
app.use(express.static('public'))
// change urlencoded string into an object
app.use(express.urlencoded({extended: true}))
// For using DELETE action
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to BREADS APP')
})

// BREADS CONTROLLER ROUTE
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// 404 Page MUST BE LAST OR WILL CATCH ALL ROUTES UNDERNEATH
app.get('*', (req, res) => {
    res.render('error404')
})

// LISTEN
app.listen(PORT, () => [
    console.log('listening on port', PORT)
])