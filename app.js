const express = require('express')

const app = express();

app.use((req, res, next) => {
    next();
})

app.use((req, res, next) => {
    res.send('<h1>As i have discovered you, so you must absorb one another.</h1>')
})

app.listen(3000);