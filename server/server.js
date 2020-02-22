require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario/:id', function(req, res) {
    res.json('get');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    res.json({
        body
    });
});

app.put('/usuario/:id', function(req, res) {
    res.json('put');
});

app.delete('/usuario/:id', function(req, res) {
    res.json('delete');
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
});