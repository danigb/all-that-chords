var data = require('./data.js');

var aliases = {};
data.forEach(function(name, chord) {
  if(chord.same) {
    aliases[name] = chord.same.substring(1);
  }
});

data.write('aliases', aliases);
