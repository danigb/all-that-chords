# all-that-chords

A library of music chords

```js

var chord = require('all-that-chords');

var c = chord('Cmaj7');
c.notes() // -> return an array of notes in pitch notation
c.voicings() // -> ['left-hand-A', 'left-hand-B'...]
c.voicing(c.voicings()[0]); // -> an array of notes
```
