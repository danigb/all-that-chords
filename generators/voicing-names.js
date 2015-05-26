var data = require('./data.js');

function prepareVoicings() {
  var voicings = {};
  data.forEach(function(name, chord) {
    if(chord.voicings) {
      for(var voiceName in chord.voicings) {
        voicings[voiceName] = voicings[voiceName] || {};
        voicings[voiceName][name] = chord.voicings[voiceName];
      }
    }
  });
  return voicings;
}

function compactData(source) {
  var voicings = {};
  for(var voiceName in source) {
    var voice = voicings[voiceName] = { type: null };
    for(var chordName in source[voiceName]) {
      var chordVoice = source[voiceName][chordName];
      if(voice.type == null) voice.type = chordVoice.type;
      voice[chordName] = chordVoice.notes.join(' ');
    }
  }
  return voicings;
}

var voicingNames = compactData(prepareVoicings());

data.write('voicing-names', voicingNames);
