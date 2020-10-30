const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const path = require('path')
const urlEncodedParser = bodyParser.urlencoded({extended:false})

const port = process.env.PORT || 3000

//object creation for a template
let articles = {
    article: {
        title: "nanak",
        content: `    <p>Waheguru</p>
        `
    }
}

app.set("view engine", "hbs")
app.set('views', "./views")

app.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, './public', 'index.html'))
    // res.send(createTemplate(articles.article))
    res.render('index.hbs', {
        message: "Waheguru"
    })
})

app.post('/', urlEncodedParser, (req, res)=>{
    //middleware which will populate the req object
    console.log(req.body)
    res.render("index-success.hbs", {data: req.body })
})

app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})

function createTemplate(dataObject){
    const title = dataObject.title
    const content = dataObject.content
    var htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        ${content}
    </body>
    </html>
    `
    return htmlTemplate;
}