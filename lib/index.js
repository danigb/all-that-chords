'use strict';

var note = require('pitch/note');
var Chord = require('./chord.js');

module.exports = chord;

function chord(name) {
  var data = chord.data["X" + name.substring(1)];
  if (!data) return null;
  if(data.same) data = chord.data[data.same];
  var root = note(name[0] + '4');
  return new Chord(name, root, data);
}
chord.data = require('./data/chords.json');
