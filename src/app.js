// src/app.js
const express = require('express');
const tarefasRoutes = require('./routes/tarefasRoutes');
const morgan = require('morgan');
const log = require('./utils/logger');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Roteamento
app.use('/api', tarefasRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  log('Servidor rodando na porta 3000');
});
