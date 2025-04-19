// src/controllers/tarefasController.js
const tarefasService = require('../services/tarefasService');

// Função para listar tarefas
function listarTarefas(req, res) {
  const tarefas = tarefasService.getTarefas(req.query);
  res.status(200).json(tarefas);
}

// Função para criar tarefa
function criarTarefa(req, res) {
  const novaTarefa = tarefasService.addTarefa(req.body);
  res.status(201).json(novaTarefa);
}

// Função para atualizar tarefa
function atualizarTarefa(req, res) {
  const tarefaAtualizada = tarefasService.updateTarefa(req.params.id, req.body);
  if (!tarefaAtualizada) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }
  res.status(200).json(tarefaAtualizada);
}

// Função para deletar tarefa
function deletarTarefa(req, res) {
  const tarefaDeletada = tarefasService.deleteTarefa(req.params.id);
  if (!tarefaDeletada) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }
  res.status(200).json({ mensagem: 'Tarefa deletada com sucesso.' });
}

module.exports = {
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};
