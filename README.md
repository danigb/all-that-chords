# all-that-chords

A Javascript music chord library:

```js
var Chord = require('all-that-chords');
var chord = Chord('C7');
chord.notes();  // => ['c2', 'e2', 'g2', 'bb2'];
```

This is part on an effort to port of the huge and awesome impro-visor musical database to javascript.

## How it works

It uses a database of chords from impro-visor. Look at `./data` .json files.

## Examples

### Chord properties

```js
chord = Chord('Eb7');
chord.root
chord.name
chord.intervals
```

### Notes and voicings

```js
chord = Chord('A#7b5');
chord.notes();
chord.voicings();
chord.voice('left-hand-A');
```

## License

This library contains parts of [impro-visor](http://www.cs.hmc.edu/~keller/jazz/improvisor/)
so it shares license: GNU Public License 2.0
