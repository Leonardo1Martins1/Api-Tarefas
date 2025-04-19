// src/services/tarefasService.js
const { v4: uuidv4 } = require('uuid');
const db = require('../database/fakeDb');

// Função para adicionar tarefa
function addTarefa(tarefa) {
  const novaTarefa = { ...tarefa, id: uuidv4() };
  db.push(novaTarefa);
  return novaTarefa;
}

// Função para listar tarefas com ou sem filtros
function getTarefas(filtro) {
  if (filtro && filtro.concluida) {
    return db.filter(t => t.concluida === JSON.parse(filtro.concluida));
  }
  return db;
}

// Função para atualizar tarefa
function updateTarefa(id, dados) {
  const index = db.findIndex(t => t.id === id);
  if (index === -1) return null;
  db[index] = { ...db[index], ...dados };
  return db[index];
}

// Função para deletar tarefa
function deleteTarefa(id) {
  const index = db.findIndex(t => t.id === id);
  if (index === -1) return null;
  const tarefaDeletada = db.splice(index, 1);
  return tarefaDeletada[0];
}

module.exports = {
  addTarefa,
  getTarefas,
  updateTarefa,
  deleteTarefa,
};
