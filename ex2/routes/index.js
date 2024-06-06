const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET home page. */
// 1. Listar todos os livros
router.get('/', function (req, res, next) {
  var d = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:17000/books')
      .then(resposta => {
          var livros = resposta.data;
          res.render('index', { "lLivros": livros, data: d });
      })
      .catch(erro => {
          res.render('error', { error: erro, message: "Erro ao recuperar os livros" });
      });
});

// 2. Obter um livro
router.get('/:id', function (req, res, next) {
  var d = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:17000/books/' + req.params.id)
      .then(resposta => {
          var livro = resposta.data;
          res.render('livro', { "livro": livro, data: d });
      })
      .catch(erro => {
          res.render('error', { error: erro, message: "Erro ao recuperar o livro" });
      });
});

// 3. página do autor

module.exports = router;
