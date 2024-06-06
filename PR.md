# ENGWEB2024-Recurso

### Guilherme Oliveira (a95021)

##### Preparação do dataset
Para preparar o dataset alterei o campo *bookId* para *_id* e transformei as strings *author*, *genres*, *charcters*, *awards*, *ratingByStars* e *setting* para uma lista de strings. Isto foi feito através do programa script.py.

##### Persistência de dados
Para a persistência de dados utilizei o mongoDB no qual criei a Database _livros_ e a coleção _livros_ para onde importei o ficheiro dataset.json obtido pelo script.py.

##### Queries
1. db.livros.countDocuments({ title: /Love/i });

2. db.livros.find({ author: /Austen/i }, { _id: 0, title: 1 }).sort({ title: 1 });

3. db.livros.aggregate([
  { \$unwind: "\$author" },
  { \$group: { _id: "\$author" } },
  { \$sort: { _id: 1 } },
  { \$project: { _id: 0, author: "\$_id" } }
]);

4. db.livros.aggregate([
  { \$unwind: "\$genres" },
  { \$group: { _id: "\$genres", count: { \$sum: 1 } } },
  { \$sort: { _id: 1 } }
]);

5.db.livros.find({ characters: "Sirius Black" }, { _id: 0, title: 1, isbn: 1 }).sort({ title: 1 });

##### Execução
Para exutar a api de dados e a interface devemos movimentar-nos para as diretorias ex1 e ex2, onde executámos o comando *npm start* para iniciar ambas.
