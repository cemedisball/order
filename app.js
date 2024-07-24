const express = require ('express');
const app=express();
const PORT=process.env.PORT||3037;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Write = require ('./routes/write');
const Update = require ('./routes/Update');
const Delete = require ('./routes/Delete');
const Read = require ('./routes/Read');

//app.use ('/api',Write);
//app.use ('/api',Update);
//app.use ('/api',Delete);
//app.use ('/api',Read);

app.use('/api',function(res,req,next){
    res.sendStatus(404);
});

app.listen(PORT,()=>{
console.log('Server running on port :' +PORT);
});
