const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const customerRoutes = require('../src/routes/customerRoutes')


//setting
app.set('port', process.env.PORT || 5000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//middelware
app.use(morgan('dev'))
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'eamederos2020',
    port: 3306,
    database: 'node_crud'},'single'))


app.use(express.urlencoded({extended: false}));

//routes
app.use('/',customerRoutes)

//static files
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'), ()=>{
    console.log("server on port nodemon")
})