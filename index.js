'use strict';

var pitch = require('note-pitch');
var chords = require('./data/chords.json');
var aliases = require('./data/aliases.json');
var scales = require('./data/scales.json');
var voicings = require('./data/voicings.json');

function Chord(root, name) {
  if(!(this instanceof Chord)) return new Chord(root, name);

  if(typeof(name) === 'undefined') {
    var match = /^([a-gA-G][#b]{0,2})(.*)$/.exec(root);
    if(!match) throw Error('Chord not valid: ' + root);
    this.root = match[1];
    this.name = match[2];
  } else {
    this.root = root;
    this.name = name;
  }
  this.name = aliases[this.name] || this.name;
  this.intervals = chords[this.name];
  this.intervals = this.intervals ? this.intervals.split(' ') : [];
}

Chord.prototype.toString = function() {
  return this.root + this.name;
}

Chord.prototype.notes = function() {
  return pitch.transpose(this.root, this.intervals);
}

Chord.prototype.scales = function () {
  var root = this.root;
  var chordScales = scales[this.name] || [];
  return chordScales.map(function(complete) {
    var interval = complete.slice(0,2);
    var name = complete.substring(2);
    var scaleRoot = pitch.transpose(root, interval);
    return scaleRoot.charAt(0).toUpperCase() + scaleRoot.slice(1, -1) + name;
  });
}

Chord.prototype.voicings = function() {
  var v = voicings[this.name];
  return v ? Object.keys(v) : null;
}

Chord.prototype.voicing = function(voiceName) {
  var voicing = voicings[this.name][voiceName];
  return voicing ? pitch.transpose(this.root, voicing.split(' ')) : null;
}

/*
 * Detect a chord by notes
 *
 * @param {String} OPTIONAL root - the root of the chord
 * @param {Array} notes - an array with the notes (first used as root if not specified)
 */
Chord.detect = function(root, notes) {
  if(arguments.length == 1) {
    notes = root;
    root = notes[0];
  }
  if(!Array.isArray(notes)) notes = notes.split(' ');
  var chordIntervals = pitch.distance(root, notes).join(' ');
  for(var name in chords) {
    if(chords[name] == chordIntervals) return new Chord(root, name);
  }
  return null;
}

module.exports = Chord;
