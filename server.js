const express = require('express');

const RecipeRouter = require('./recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;