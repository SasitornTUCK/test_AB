const express = require('express');
const router = express.Router();
const sql = require('../db.js');
const table = 'provinces';

// constructor
const Provinces = function(provinces) {
    this.id = provinces.id;
    this.name = provinces.name;
}

Provinces.getAll = result => {
    sql.query(`SELECT * FROM ${table} `, (err, res) => {
        if(err) throw err
        result(null, res);
    });
}


module.exports = Provinces;