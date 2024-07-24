'use strict'
const express = require ('express');
const crypto = require('crypto');
const readRoute = express.Router();
const connection = require('../db');

readRoute.get('/orders',function(res,req,next){
    connection.execute('SELECT * FROM orders;')
    .then((result) => {
        var rawData = result[0];
        res.send(rawData);
    }).catch((err) => {
    console.log(err);
    res.end();
});
});
readRoute.use('/',function(req,res,next){
    res.sendStatus(404);
});
readRoute.get('/orders',function(res,req,next){
    connection.execute('SELECT * FROM orders WHERE  order_id=?;'
        [req.params.order_id]
    )
    .then((result) => {
        var rawData = result[0];
        res.send(rawData);
    }).catch((err) => {
    console.log(err);
    res.end();
});
});
readRoute.use('/',function(req,res,next){
    res.sendStatus(404);
});
module.exports = readRoute;
module.exports = readRoute;