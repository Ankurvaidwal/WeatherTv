const express = require('express');

const app = express();

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use(express.json({ limit: '1mb' }));
// to tell express we are parsing the data
app.use(express.urlencoded({ extended: true }));
// templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes 
const newsRouter = require('./src/routes/weather');

app.use('/', newsRouter);

app.listen(5000, () => {
    console.log("Listening on port 5000");
})