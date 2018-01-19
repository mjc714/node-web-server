const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
let app = express();

// Add support for partials.
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use((req, res, next) => {
    let currentTime = new Date().toString();
    let log = `${currentTime}: ${req.method} ${req.url}`;

    console.log(log);
    // fs.appendFile('serverLog', log + '\n', (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
    next();
});

// No next call blocks running of other middleware.
// app.use((req, res, next) => {
//     res.render('maintanence.hbs');
// });

app.use(express.static(__dirname + '/public-src'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('loudFunc', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        pageTitle: 'Home',
        welcomeMessage: 'Lorem Ipsum Dipsum'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});
app.listen(port, () => {
    console.log(`Server running on port: ${port}.`);
});