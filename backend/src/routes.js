const express = require('express');
const ongsController = require('./controllers/ongsController')
const incidentsController = require('./controllers/incidentsController')
const profileController = require('./controllers/profileController')
const routes = express.Router();

routes.post('/ongs', ongsController.create);
routes.get('/ongs', ongsController.index);
routes.get('/incidents', incidentsController.index)
routes.post('/incidents', incidentsController.create)
routes.delete('/incidents/:id', incidentsController.delete)
routes.get('/profile', profileController.index)
module.exports = routes;
