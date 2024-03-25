const express = require('express');
const favicon = require('serve-favicon')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const movieRouter = require('./movie');
 
const app = express();
 
// Routes
app.get('/', (req, res) => {
    res.redirect('/movie');
});
 
// Middleware & Uses
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use('/movie', movieRouter);
app.use(morgan('common', {immediate: true}))
 
 
app.listen(8989, () => {
    console.log('Server started on http://localhost:8989 🚀');
});