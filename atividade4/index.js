const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('Olá! Faça uma lista de compras da seguinte forma: na URL, em frente ao "8080", digite uma das seguintes operações: adicionar, listar, remover e editar.')
})

const list = []

app.get('/adicionar/:id/:nome/:qtd', (req, res) => { 
    const produto = {
        id: req.params.id,
        nome: req.params.nome,
        qtd: req.params.qtd
    };

    list.push(produto);
    res.send("Produto adicionado com sucesso!!");
});

app.get('/listar', (req, res) => {
    if (list.length === 0) {
        res.send("Nenhum produto cadastrado...");
    } else {
        let textoLista = list.map(produto => `ID: ${produto.id}, Produto: ${produto.nome}, Quantidade: ${produto.qtd}`).join("; ");
        res.send(textoLista);
    }
});

app.get('/remover/:id', (req, res) => {
    const id = req.params.id;

    const index = list.findIndex(produto => produto.id === id);

    if (index !== -1) {
        const removido = list.splice(index, 1)[0];
        res.send(`Produto ${removido.nome} removido com sucesso!!`);
    } else {
        res.send("Produto não existente...");
    }
});

app.get('/editar/:id/:qtd', (req, res) => {
    const id = req.params.id;
    const novaQtd = req.params.qtd;

    const index = list.findIndex(produto => produto.id === id);

    if (index !== -1) {
        list[index].qtd = novaQtd;
        res.send(`Quantidade do produto ${list[index].nome} atualizada para ${novaQtd}.`);
    } else {
        res.send("Produto não encontrado.");
    }
});

const PORT = 8080

app.use((req, res) => {
    res.status(404).send('Erro: esse caminho não foi definido!');
});

app.listen(PORT, ()=> {
    console.log('rodou na porta ' + PORT);
});