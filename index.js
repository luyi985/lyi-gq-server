const redisMod = require('./redisModule');
const express = require('express');
const app= express();




app.get('/:name', (req, res, next) => {
    next("aaaa")
    const {name} = req.params;
    redisMod.set('name',name, next);
    redisMod
    .get('name', next)
    .then(data => {
        res.json({name: data})
    })
    .catch(e => {
        next(e);
    })
});

app.use((err,req,res, next) => {
    if (typeof err === 'string') {
        res.json((new Error(err)));
    }
})


app.listen(3000, () => {
    console.log('running at port 3000...')
})