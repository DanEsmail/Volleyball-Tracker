var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamModelSchema = new Schema({
  teamName: String,
  Players: Array,
});

module.exports = mongoose.model('Team', teamModelSchema)
