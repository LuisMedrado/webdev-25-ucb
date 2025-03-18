const calc = require('./calculadora')
const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('Salve')
})

app.get('/ola/:nome', (req, res)=> {
    res.send(`Salve, ${req.params.nome}`)
})

const PORT = 8080
app.listen(PORT, ()=> {
    console.log('rodou na porta ' + PORT);
});