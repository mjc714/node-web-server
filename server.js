const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public-src'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        pageTitle: 'Home',
        welcomeMessage: 'Lorem Ipsum Dipsum',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});
app.listen(3000, () => {
    console.log('Server running on port 3000.');
});