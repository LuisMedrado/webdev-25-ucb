const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Rodou na porta " + PORT);
});

app.get('/', (req, res) => {
    res.render('index.html', { erro: null, formData: {} });
});

app.post('/agendar_consulta', (req, res) => {
    const camposObr = [
        'name',
        'surname',
        'cpf',
        'bornIn',
        'tel',
        'cep',
        'endereco',
        'clinica',
        'especialidade',
        'dataConsulta',
        'horaConsulta'
    ];

    for (const campo of camposObr) {
        const valor = req.body[campo];
        if (!valor || valor.trim() === '' || valor === 'Selecione') {
            return res.render('index.html', {
                erro: "Preencha todos os campos obrigatórios!",
                formData: req.body
            });
        }
    }

    const dataConsulta = new Date(req.body.dataConsulta);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataConsulta <= hoje) {
        return res.render('index.html', {
            erro: "A data da consulta deve ser superior à data atual!",
            formData: req.body
        });
    }

    console.log("Agendamento recebido:", req.body);
    res.render('index.html', {
        sucesso: "Agendamento realizado com sucesso!",
        formData: {}
    });
});
