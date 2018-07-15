var mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/tweetsdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  var tweetSchema = mongoose.Schema({
  user_data: String,
  tweetText: String
  });

  autoIncrement.initialize(db);

  var Tweet = mongoose.model('Tweet', tweetSchema);

  tweetSchema.plugin(autoIncrement.plugin, {
    model: 'Tweet',
    field: 'id',
    startAt: 0,
    incrementBy: 1
  });

  //var tweet1 = new Tweet({user_data:'Rodrigo Figueroa', tweetText:'hi, just a tweet test'});
  //Tweet.create(tweet1);
  module.exports.Tweet = Tweet;
});
