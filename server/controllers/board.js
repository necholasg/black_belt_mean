var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');
module.exports = {
  newUser: function(req, res){
    var new_user = new User({name:req.body.name})

    new_user.save(function(err, user){
      if(err){
        res.json({status:'error'})
      }else{
        res.json({status:'success', data: user})
      }
    })
  },
  newLike: function(req, res){
    Answer.update({_id: req.params.id}, {$inc: {likes: 1}}, function(err, answer){
      if(err){
        console.log('Error in update likes count');
        res.json({status:'error'})
      }else{
        res.json({status:'success'});
      }
    })
  },
  getQuestion: function(req, res){
    Question.findOne({_id: req.params.id}, function(err, question){
      if(err){
        console.log('Error in get get question');
        res.json({status:'error'})
      }else{
        res.json(question)
      }
    })
  },
  newQuestion: function(req, res){
    var new_question = new Question({question:req.body.question, description: req.body.description})

    new_question.save(function(err, question){
      if(err){
        res.json({status:'error'})
      }else{
        res.json(question)
      }
    })
  },
  getQuestions: function(req, res){
    Question.find({}, function(err, questions){
      if(err){
        console.log('Error in get Questions');
        res.json({status:'error'})
      }else{
        res.json(questions)
      }
    })
  },
  getUser: function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      if(err){
        console.log('Error in get user');
        res.json({status:'error'})
      }else{
        res.json(user)
      }
    })
  },
  getFullQuestion: function(req, res){
    Question.findOne({_id: req.params.id})
      .populate({
        path:'answers',
        model:'Answer'
      })
      .exec(function(err, question){
        if(err){
          res.json({status: 'error'})
          console.log('error in topic');
        }else{
          res.json(question);
        }
      })
  },
  newAnswer: function(req, res){
    // console.log("back",req.body);
    Question.findOne({_id: req.body.question_id}, function(err, question){
      var answer = new Answer({answer:req.body.answer, support: req.body.support, answerer: req.body.answerer, likes:0});
      answer._question = question._id;
      question.answers.push(answer);
      answer.save(function(err){
        question.save(function(err){
          if(err){
            console.log('Error');
            res.json({status:"error"})
          }else{
            res.json({status:'success'});
          }
      });
     });
   });
  },
}
