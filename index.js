'use strict';

var pitch = require('note-pitch');
var intervals = require('./data/intervals.json');
var aliases = require('./data/aliases.json');
var voicings = require('./data/voicings.json');

function Chord(root, name) {
  if(!(this instanceof Chord)) return new Chord(root, name);

  if(typeof(name) === 'undefined') {
    this.name = root.substring(1);
    this.root = root[0];
  } else {
    this.root = root;
    this.name = name;
  }
  this.name = aliases[this.name] || this.name;
  this.intervals = intervals[this.name].split(' ');
  this.intervals = this.intervals || [];
}

Chord.prototype.toString = function() {
  return this.root + this.name;
}

Chord.prototype.notes = function() {
  return pitch.transpose(this.root, this.intervals);
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
  for(var name in intervals) {
    if(intervals[name] == chordIntervals) return new Chord(root, name);
  }
  return null;
}

module.exports = Chord;
