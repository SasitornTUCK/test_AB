const express = require('express')
const path = require("path");
const app = express()
const server = require('http').createServer(app);
const cors = require('cors');
app.use(express.static(path.join(__dirname, "www")));
const bodyParser = require('body-parser');
const Pricerange = require('./api/model/pricerange.js')
const Provinces = require('./api/model/provinces.js')
const Categories = require('./api/model/categories.js')

// parse requests of content-type: application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cross origin
app.use(cors());

app.get("/cate", (req, res) => {
  Categories.getAll((err, data) => {
        if (err) throw err;
        res.json(data);
    })
});

app.get("/prov", (req, res) => {
  Provinces.getAll((err, data) => {
        if (err) throw err;
        res.json(data);
    })
});

app.get("/priv", (req, res) => {
  Pricerange.getAll((err, data) => {
        if (err) throw err;
        res.json(data);
    })
});

app.listen(3800, () => {
    console.log('Start server at port 3800.')
  })