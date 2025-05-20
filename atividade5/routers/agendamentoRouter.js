const express = require('express');
const router = express.Router();
const agendamentoControle = require('../controllers/agendamentoController');

router.get('/', agendamentoControle.getIndexView);

router.post('/agendar_consulta', agendamentoControle.postAgendarConsulta);

module.exports = router;