//express
const express = require('express')
const app = express();

//port for the server and environment variable
const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`app is listening on the port ${port}`)
})