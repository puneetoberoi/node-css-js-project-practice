//express
const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
var urlEncodeddParser = bodyParser.urlencoded({extended:false})

//port for the server and environment variable
const port = process.env.PORT || 3000

//set viewing engines
app.set('view engine', 'hbs')
app.set('views', './views')//default

//setting up the json extractor
//app.use(express.json());
//if there is a json object it will populate req.body

app.get('/', (req, res)=>{
    res.render('index.hbs', {title: "Nanak", message: "Waheguru"})
    //console.log(req.body)
    // console.log(req.body.name)
    // console.log(req.body.age)
    // console.log(req.body.email)
    // res.sendFile(path.join(__dirname, 'public', 'home.html'))
})

app.post('/', urlEncodeddParser, (req, res)=>{
    //console.log(req.body)
    if(!req.body.email) {
        console.log("Waheguru")
    }
    // console.log(req.body.name)
    // console.log(req.body.age)
    // console.log(req.body.email)
    // req.flash('message', "Success")
    res.render('index', {data: req.body})
})

app.listen(port, ()=>{
    console.log(`app is listening on the port ${port}`)
})