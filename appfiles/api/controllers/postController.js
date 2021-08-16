'use strict';

var mongoose = require('mongoose'),
Post = mongoose.model('Posts');

exports.list_all_posts = function(req, res) {
  Post.find({}, function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};


exports.create_a_post = function(req, res) {
  var new_Post = new Post(req.body);
  new_Post.save(function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};

exports.read_a_post = function(req, res) {
  Post.findById(req.params.PostId, function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};

exports.update_a_post = function(req, res) {
  Post.findOneAndUpdate({_id:req.params.PostId}, req.body, {new: true}, function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};
// Post.remove({}).exec(function(){});
exports.delete_a_post = function(req, res) {

  Post.remove({
    _id: req.params.PostId
  }, function(err, Post) {
    if (err)
      res.send(err);
    res.json({ message: 'Post successfully deleted' });
  });
};
