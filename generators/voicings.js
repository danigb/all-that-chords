var data = require('./data.js');

var voicings = {};
data.forEach(function(name, chord) {
  if(chord.voicings) {
    voicings[name] = {};
    for(var voiceName in chord.voicings) {
      voicings[name][voiceName] = chord.voicings[voiceName].notes.join(' ');
    }
  }
});

data.write('voicings', voicings);
