const express = require('express');
const router = express.Router();
const sql = require('../db.js');
const table = 'categories';

// constructor
const Categories = function(categories) {
    this.id = categories.id;
    this.name = categories.name;
    this.subcategories = categories.subcategories;
}

Categories.getAll = result => {
    sql.query(`SELECT * FROM ${table} `, (err, res) => {
        if(err) throw err
        result(null, res);
    });
}


module.exports = Categories;