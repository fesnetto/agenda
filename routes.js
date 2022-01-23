const express = require('express');
const route = express.Router();

const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
const contatoControllerRegister = require('./src/controllers/contatoControllerRegister');
const contatoControllerEdit = require('./src/controllers/contatoControllerEdit');

const { loginRequired } = require('./src/middlewares/middleware');

// Rota da home
route.get('/', loginController.index);

// Rotas de login
route.get('/login/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/contatos', loginRequired, contatoController.index);
route.post('/contatos', loginRequired, contatoController.index);
route.get('/contato-register/contato', loginRequired, contatoControllerRegister.index);
route.get('/contato-register/contato/:id', loginRequired, contatoControllerRegister.index);
route.post('/contato-register/register', loginRequired, contatoControllerRegister.register);
route.get('/contato-edit/contato/:id', loginRequired, contatoControllerEdit.editIndex);
route.post('/contato-edit/edit/:id', loginRequired, contatoControllerEdit.edit);
route.get('/contato-edit/delete/:id', loginRequired, contatoControllerEdit.delete);

module.exports = route;
