var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
  question: String,
  description: String,
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})
mongoose.model('Question', questionSchema);

var answerSchema = new mongoose.Schema({
  _question: {type:Schema.Types.ObjectId, ref: "Question"},
  answer: String,
  answerer: String,
  support: String,
  likes: Number
})
mongoose.model('Answer', answerSchema);

var userSchema = new mongoose.Schema({
  name: String,
})
mongoose.model('User', userSchema);
