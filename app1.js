//express
const express = require('express')
const app = express();
const path = require('path')

//port for the server and environment variable
const port = process.env.PORT || 3000

//set viewing engines
app.set('view engine', 'pug')
app.set('views', './views')//default


//to load up common css and html we can create js object
var articles = {
    article: {
        title: "grab from the desired link or the url itself if appropriate",
        heading: "Article one",
        content: `    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi distinctio doloribus rem reiciendis quibusdam harum, eos cupiditate aspernatur sint aperiam optio similique consequuntur possimus obcaecati facilis. Aliquam veniam fuga iure et? Commodi, illum veniam?</p>
        `
    },
    'article-one': {
        title: "grab from the desired link or the url itself if appropriate",
        heading: "Article one",
        content: `    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi distinctio doloribus rem reiciendis quibusdam harum, eos cupiditate aspernatur sint aperiam optio similique consequuntur possimus obcaecati facilis. Aliquam veniam fuga iure et? Commodi, illum veniam?</p>
        `
    }
}

//pushing the content into a multiline string html content

function createTemplate(dataObject){
    var title = dataObject.title
    var content = dataObject.content
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

//setting up the json extractor
app.use(express.json());
//if there is a json object it will populate req.body

app.get('/', (req, res)=>{
    // res.render('index', {title: "Nanak", message: "Waheguru"})
    // res.sendFile(path.join(__dirname, 'public', 'home.html'))
    res.send(createTemplate(articles.article)) //no home.html file needed and if more articles then there will be just one func and no files
})

app.listen(port, ()=>{
    console.log(`app is listening on the port ${port}`)
})

