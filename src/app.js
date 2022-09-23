const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();
//rutas
const vehiculosRoutes = require('./routes/vehiculos');

//Settings
app.set('port', process.env.PORT || 3600);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//middelwares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port : 3306,
    database: 'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));
//routes
app.use('/', vehiculosRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('server on port 3000');
  });