'use strict'
const express = require ('express');
const crypto = require('crypto');
const upRoute = express.Router();
const connection = require('../db');

upRoute.put('/orders/:order_id',function(res,req,next){
    connection.execute("UPDATE orders SET customer_name=? , product = ?, quantity=?, order_date=?, status=? WHERE order_id=?;",
    [req.body.order_id, req.body.customer_name, req.body.product, req.body.quantity,req.body.order_date(), req.body.status])
    .then (()=>{
        console.log('ok');
    }).catch((err)=>{
        console.log(err);
    });
    res.status(200).send('Update Succesfully.');
});
module.exports=upRoute;
