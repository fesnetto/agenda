const Contato = require('../src/models/ContatoModel');

exports.index = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('contatos', { contatos });
};

