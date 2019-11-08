const express = require('express');
const helmet = require('helmet');
const server = express();

const RecipeRouter = require('./recipes/recipe-router');

server.use(helmet());
server.use(express.json());
server.use('/api/recipes/', RecipeRouter);

module.exports = server;