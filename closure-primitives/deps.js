// This file was autogenerated by ../closure-primitives/depswriter.py.
// Please do not edit.
goog.addDependency('../closure-primitives/base.js', ['goog'], []);
goog.addDependency('../define/typedarray/hybrid.js', ['USE_TYPEDARRAY'], []);
goog.addDependency('../define/typedarray/use.js', ['USE_TYPEDARRAY'], []);
goog.addDependency('../src/riff.js', ['Riff.Parser'], ['Typedef']);
goog.addDependency('../src/sf2.js', ['SoundFont.Parser'], ['Riff.Parser', 'Typedef']);
goog.addDependency('../src/sound_font_synth.js', ['SoundFont.Synthesizer'], ['SoundFont.Parser', 'SoundFont.SynthesizerNote']);
goog.addDependency('../src/sound_font_synth_note.js', ['SoundFont.SynthesizerNote'], []);
goog.addDependency('../src/typedef.js', ['Typedef'], []);
goog.addDependency('../src/wml.js', ['SoundFont.WebMidiLink'], ['SoundFont.Synthesizer']);
