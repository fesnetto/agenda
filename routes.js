const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
const contatoControllerRegister = require('./src/controllers/contatoControllerRegister');
const contatoControllerEdit = require('./src/controllers/contatoControllerEdit');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/contato-register/index', loginRequired, contatoControllerRegister.index);
route.get('/contato-register/index/:id', loginRequired, contatoControllerRegister.index);
route.post('/contato-register/register', loginRequired, contatoControllerRegister.register);
//route.post('/contato/edit/:id', loginRequired, contatoController.edit);
//route.get('/contato/delete/:id', loginRequired, contatoController.delete);
route.get('/contato-edit/index/:id', loginRequired, contatoControllerEdit.editIndex);
route.post('/contato-edit/edit/:id', loginRequired, contatoControllerEdit.edit);
route.get('/contato-edit/delete/:id', loginRequired, contatoControllerEdit.delete);

module.exports = route;
