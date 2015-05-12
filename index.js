
var lib = require('./lib');
if(typeof(module) !== 'undefined') module.exports = lib;
else if(typeof(window) !== 'undefined') window = lib;
