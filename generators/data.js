var write = require('fs').writeFile;
var source = require('./impro-visor-chords.json');

delete source['_Bass'];
delete source['_Note'];

module.exports = {
  source: source,

  forEach: function(callback) {
    for(var name in source) {
      var chord = source[name];
      callback(name.substring(1), chord);
    }
  },

  write: function(name, object) {
    write('./data/' + name + '.json', JSON.stringify(object, null, 2))
    console.log(name + ".json: " + Object.keys(object).length);
  }
}
