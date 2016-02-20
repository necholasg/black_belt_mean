var board = require('../controllers/board.js');

module.exports = function(app){
  app.post('/users/new', function(req, res){
    board.newUser(req, res)
  });
  //
  // app.get('/categories', function(req, res){
  //   board.getCategories(req, res)
  // });
  //
  app.post('/question/new', function(req, res){
    board.newQuestion(req, res)
  });
  //
  app.get('/questions', function(req, res){
    board.getQuestions(req, res)
  });

  app.get('/user/:id', function(req, res){
    board.getUser(req, res)
  });
  //
  app.get('/question/:id', function(req, res){
    board.getQuestion(req, res)
  });
  //
  app.post('/newAnswer', function(req, res){
    board.newAnswer(req, res)
  });

  app.get('/questionFull/:id', function(req, res){
    board.getFullQuestion(req, res)
  });

  app.put('/like/:id', function(req, res){
    board.newLike(req, res)
  });

} //The End of my Routes
