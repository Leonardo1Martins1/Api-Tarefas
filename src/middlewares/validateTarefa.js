// src/middlewares/validateTarefa.js
const Joi = require('joi');

// Definição do schema de validação
const tarefaSchema = Joi.object({
  titulo: Joi.string().min(3).required().messages({
    'string.min': 'O título deve ter pelo menos 3 caracteres.',
    'any.required': 'O título é obrigatório.',
  }),
  descricao: Joi.string().required().messages({
    'any.required': 'A descrição é obrigatória.',
  }),
  concluida: Joi.boolean().required().messages({
    'any.required': 'O campo concluída é obrigatório.',
  })
});

// Middleware de validação
function validateTarefa(req, res, next) {
  const { error } = tarefaSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }
  next();
}

module.exports = validateTarefa;
