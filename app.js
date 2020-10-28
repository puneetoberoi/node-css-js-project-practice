//express
const express = require('express')
const app = express();
const path = require('path')

//port for the server and environment variable
const port = process.env.PORT || 3000

//set viewing engines
app.set('view engine', 'hbs')
app.set('views', './views')//default

//setting up the json extractor
app.use(express.json());
//if there is a json object it will populate req.body

app.get('/', (req, res)=>{
    res.render('index.hbs', {title: "Nanak", message: "Waheguru"})
    // res.sendFile(path.join(__dirname, 'public', 'home.html'))
})

app.listen(port, ()=>{
    console.log(`app is listening on the port ${port}`)
})