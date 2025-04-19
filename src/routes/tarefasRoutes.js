// src/routes/tarefasRoutes.js
const express = require('express');
const tarefasController = require('../controllers/tarefasController');
const validateTarefa = require('../middlewares/validateTarefa');

const router = express.Router();

router.get('/tarefas', tarefasController.listarTarefas);
router.get('/tarefas/:id', tarefasController.listarTarefas);
router.post('/tarefas', validateTarefa, tarefasController.criarTarefa);
router.put('/tarefas/:id', tarefasController.atualizarTarefa);
router.delete('/tarefas/:id', tarefasController.deletarTarefa);

module.exports = router;
