var data = require('./data.js');

var intervals = {};
data.forEach(function(name, chord) {
  if(chord.spell && chord.spell.length > 1) {
    intervals[name] = chord.spell.join(' ');
  }
});

data.write('intervals', intervals);
