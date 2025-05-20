function getIndexView(req, res) {
    res.render('index.html', { erro: null, formData: {} })
}

function postAgendarConsulta(req, res) {

    // ######################### PARTE DO PROFESSOR #########################

    // let form_invalido = false
    // let campos_invalidos = []

    // let dados_consulta = req.body

    // if(dados_consulta.name.length == 0) {
    //     form_invalido = true
    //     campos_invalidos.push("Nome")
    // }

    //     if(dados_consulta.surname.length == 0) {
    //     form_invalido = true
    //     campos_invalidos.push("Sobrenome")
    // }

    //     if(dados_consulta.cpf.length == 0) {
    //     form_invalido = true
    //     campos_invalidos.push("CPF")
    // }

    // res.render(`index.html`, {form_invalido, campos_invalidos, dados_consulta})

    // ######################### MINHA PARTE #########################

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
        if (campo == "cpf" || campo == "tel" || campo == "cep") {
            try {
                valor = number(valor)
            } catch {
                return res.render('index.html', {
                erro: "Valores numéricos nos campos CPF, Telefone e CEP requeridos!",
                formData: req.body
                })
            }
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
}

module.exports = {
    getIndexView,
    postAgendarConsulta
}

