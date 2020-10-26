//express
const express = require('express')
const app = express();

//port for the server and environment variable
const port = process.env.PORT || 3000

//set viewing engines
app.set('view engine', 'pug')
app.set('views', './views')//default

app.get('/', (req, res)=>{
    res.render('index', {title: "Nanak", message: "Waheguru"})
})

app.listen(port, ()=>{
    console.log(`app is listening on the port ${port}`)
})