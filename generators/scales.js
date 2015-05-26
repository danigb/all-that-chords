var data = require('./data.js');

var scales = {};
data.forEach(function(name, chord) {
  if(chord.scales) {
    var chordScales = [];
    for(var interval in chord.scales) {
      var names = chord.scales[interval];
      if(!Array.isArray(names)) names = [names];
      chordScales = chordScales.concat(names.map(function(scaleName) {
        return interval + " " + scaleName;
      }));
    }
    scales[name] = chordScales;
  }
});

data.write('scales', scales);
