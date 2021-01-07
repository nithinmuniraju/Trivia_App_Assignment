const path = require('path');

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')

const homeRoute = require('./Routes/home');
const gameRoutes = require('./Routes/game');
const pageNotFound = require('./controller/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended : true}));

app.use(express.static(path.join(__dirname, 'public')));


//Please enable to create tables
// const db = require("./models/index");
// db.sequelize.sync();

app.use('/game',gameRoutes);
app.use(homeRoute);

app.use(pageNotFound.pageNotFound);

app.listen(process.env.NODE_PORT, (err) => {
    if(err) {
        console.log('Server creation error', err)
    }
    console.log('Node running on poat: '+process.env.NODE_PORT);
});

