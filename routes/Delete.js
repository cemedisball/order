'use strict'
const express = require ('express');
const crypto = require('crypto');
const deRoute = express.Router();
const connection = require('../db');

deRoute.delete('/orders/:order_id',function(req,res,next){
    connection.execute("DELETE FROM orders WHERE order_id=?;",
        [req.params.order_id])
        .then(()=>{
            console.log('ok');
        }).catch((err)=>{
            console.log(err);
        });
        res.end();
});
module.exports= deRoute;
