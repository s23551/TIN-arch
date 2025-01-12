const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

/*
const things = require('./things.js');
const simpleForm = require('./form.js');
const hello = require('./hello.js');
*/

app.get("/form", (req, res) => {
    res.render("index.ejs");
});

app.post('/submit', (req, res) => {
    const firstName = req.body.firstName;
    if (!firstName || firstName.length < 5) {
        res.render("error.ejs", { errors: "First name is required" });
    } else {
        res.render("result.ejs", { firstName: firstName });
    }
});

app.post('/zad4/submit', (req, res) => {
    const firstName = req.body.firstName;
    console.log(req.body);

    const errors = {};
    if (!firstName || firstName.length < 5) {
        errors.firstName = "First name is required";
    }

    if (Object.keys(errors).length > 0) {
        // Były jakieś błędy
        return res.status(400).json(errors)
    }

    return res.status(200).send();
});

/*
//app.use('/static', express.static(path.join(__dirname, 'static')))

app.use('/things', things);
app.use('/form', simpleForm);
app.use('/hello', hello);
*/

app.listen(3000);

module.exports = app;