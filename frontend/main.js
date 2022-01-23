import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/dark.css';

import { FaEdit, FaWindowClose } from "react-icons/fa";

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();