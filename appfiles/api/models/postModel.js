'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: {
      type: String,
      Required: 'Kindly enter the name of the post',
      default: ''
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    subtitle: {
      type: String,
      Required: 'Please enter the subheading',
      default: ''
    },
    content: {
      type: String,
      Required: 'Please enter the content',
      default: ''
    }
});

module.exports = mongoose.model('Posts', postSchema);