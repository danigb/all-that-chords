'use strict';

var note = require('pitch/note');
var transpose = require('pitch/transpose');
var interval = require('pitch/interval');

module.exports = Chord;

function Chord(name, root, data) {
  this.name = name;
  this.root = root;
  this.data = data;
}

Chord.prototype.notes = function() {
  return this.data.spell.map(interval).map(transpose(this.root));
}

Chord.prototype.voicings = function() {
  return Object.keys(this.data.voicings);
}

Chord.prototype.voicing = function(name) {
  var voicing = this.data.voicings[name];
  if(voicing) {
    return voicing.notes.map(interval).map(transpose(this.root))
  }
}
