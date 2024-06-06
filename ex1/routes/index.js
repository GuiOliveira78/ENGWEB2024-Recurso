var express = require('express');
var router = express.Router();
var Livro = require('../controllers/livro.js')

// GET /books: devolve uma lista com todos os registos
// GET /books?charater=EEEE: devolve a lista dos livros em que EEEE faz parte do nome de um dos personagens;
// GET /books?genre=AAA: devolve a lista dos livros associados ao género (genre) AAA;
router.get('/', function (req, res) {
  if (req.query.character) {
    const ent = req.query.character
    Livro.findByCharacter(ent)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
  }
  else if (req.query.charater) {
    const ent = req.query.charater
    Livro.findByCharacter(ent)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
  }
  else if (req.query.genre) {
    const t = req.query.genre
    Livro.findByGenre(t)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
  }
  else {
    Livro.list()
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
  }
});

// GET /books/genres: devolve a lista de géneros ordenada alfabeticamente e sem repetições
router.get('/genres', function (req, res) {
  Livro.findGenres()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

// GET /books/characters: devolve a lista dos personagens ordenada alfabeticamente e sem repetições;
router.get('/characters', function (req, res) {
  Livro.findCharacters()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

// GET /books/:id: devolve o registo com identificador id (em PR.md deves indicar o que vais usar como id);
router.get('/:id', function (req, res) {
  Livro.findById(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

// POST /books: acrescenta um registo novo à BD;
router.post('/', function (req, res) {
  Livro.createLivro(req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

// DELETE /books/:id: elimina da BD o registo com o identificador id
router.delete('/:id', function (req, res) {
  Livro.deleteLivro(req.params.id)
    .then(resultado => {
      res.jsonp(resultado)
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro na inserção da lista" })
    })
});

// PUT /books/:id: altera o registo com o identificador id.
router.put('/:id', function (req, res) {
  Livro.updateLivro(req.params.id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;