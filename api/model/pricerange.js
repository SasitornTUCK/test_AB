const sql = require('../db.js');
const table = 'pricerange';

// constructor
const Pricerange = function(pricerange) {
    this.id = pricerange.id;
    this.name = pricerange.name;
}

Pricerange.getAll = result => {
    sql.query(`SELECT * FROM ${table} `, (err, res) => {
        if(err) throw err
        result(null, res);
    });
}


module.exports = Pricerange;