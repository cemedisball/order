'use strict'
const express = require ('express');
const crypto = require('crypto');
const writeRoute = express.Router();
const connection = require("../db");

writeRoute.post('/orders',function (res,req,next){
    connection.execute(`INSERT INTO orders(
        order_id, customer_name,  product, quantity, order_date, status)
    VALUE(?,  ?,  ?,  ?,  ?,  ?);`,
    [req.body.order_id, req.body.customer_name, req.body.product, req.body.quantity,req.body.order_date(), req.body.status])
    .then(()=>{
        console.lost('ok');
    }).catch((err) => {
        console.log(err);
    });
    res.end();

});
module.exports=writeRoute;