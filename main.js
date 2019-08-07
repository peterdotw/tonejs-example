const synth = new Tone.AMSynth().toMaster();

const pianoKeyboard = (key, note) => {
  document.addEventListener("keydown", event => {
    const keyName = event.key;

    if (keyName === key) {
      synth.triggerAttack(note);
    }
  });

  document.addEventListener("keyup", event => {
    const keyName = event.key;

    if (keyName === key) {
      synth.triggerRelease();
    }
  });
};

const pianoMouse = (button, note) => {
  document.querySelector(button).addEventListener("mousedown", () => {
    synth.triggerAttack(note);
  });

  document.querySelector(button).addEventListener("mouseup", () => {
    synth.triggerRelease();
  });
};

pianoKeyboard("a", "C3");
pianoKeyboard("w", "C#3");
pianoKeyboard("s", "D3");
pianoKeyboard("e", "D#3");
pianoKeyboard("d", "E3");
pianoKeyboard("f", "F3");
pianoKeyboard("t", "F#3");
pianoKeyboard("g", "G3");
pianoKeyboard("y", "G#3");
pianoKeyboard("h", "A3");
pianoKeyboard("u", "A#3");
pianoKeyboard("j", "B3");

pianoMouse(".keyboard__key--C", "C3");
pianoMouse(".keyboard__key--Cs", "C#3");
pianoMouse(".keyboard__key--D", "D3");
pianoMouse(".keyboard__key--Ds", "D#3");
pianoMouse(".keyboard__key--E", "E3");
pianoMouse(".keyboard__key--F", "F3");
pianoMouse(".keyboard__key--Fs", "F#3");
pianoMouse(".keyboard__key--G", "G3");
pianoMouse(".keyboard__key--Gs", "G#3");
pianoMouse(".keyboard__key--A", "A3");
pianoMouse(".keyboard__key--As", "A#3");
pianoMouse(".keyboard__key--B", "B3");
