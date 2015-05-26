var data = require('./data.js');

var chords = {};
data.forEach(function(name, chord) {
  if(chord.spell && chord.spell.length > 1) {
    chords[name] = chord.spell.join(' ');
  }
});

data.write('chords', chords);
