const calc = require('./util/calculadora')
const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('Olá! Faça operações matemáticas da seguinte forma: na URL, em frente ao "8080", digite a operação desejada e os números. Ex: /somar/1/1')
})

app.get('/somar/:a/:b', (req, res)=> {
    res.send(`O resultado é: ${calc.somar(req.params.a, req.params.b)}`)
})

app.get('/subtrair/:a/:b', (req, res)=> {
    res.send(`O resultado é: ${calc.subtrair(req.params.a, req.params.b)}`)
})

app.get('/multiplicar/:a/:b', (req, res)=> {
    res.send(`O resultado é: ${calc.multiplicar(req.params.a, req.params.b)}`)
})

app.get('/dividir/:a/:b', (req, res)=> {
    res.send(`O resultado é: ${calc.dividir(req.params.a, req.params.b)}`)
})

const PORT = 8080

app.use((req, res) => {
    res.status(404).send('Erro: esse caminho não foi definido!');
});

app.listen(PORT, ()=> {
    console.log('rodou na porta ' + PORT);
});