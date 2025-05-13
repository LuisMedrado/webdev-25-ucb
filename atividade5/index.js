const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();

app.engine('html', mustacheExpress())
app.set('view engine', 'html');
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended: true}))

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("Rodou na porta " + PORT)
})

app.get('/', (req, res)=> {
    res.render('index.html')
})

app.post('/agendar_consulta', (req, res)=> {
    console.log(req.body)
    res.render('index.html')
})