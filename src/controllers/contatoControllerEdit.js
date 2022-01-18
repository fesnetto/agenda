const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('contatoedit', {
    contato: {}
  });
};

exports.editIndex = async function (req, res) {
  if (!req.params.id) return res.render('404');

  const contato = await Contato.buscaPorId(req.params.id);
  if (!contato) return res.render('404');

  res.render('contatoedit', { contato });
};

exports.edit = async function (req, res) {
  try {
    if (!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect(`/contatoedit/index/${contato.contato._id}`));
    return;
  } catch (e) {
    console.log(e);
    res.render('404');
  }
};

exports.delete = async function (req, res) {
  if (!req.params.id) return res.render('404');

  const contato = await Contato.delete(req.params.id);
  if (!contato) return res.render('404');

  req.flash('success', 'Contato apagado com sucesso.');
  req.session.save(() => res.redirect('back'));
  return;
};