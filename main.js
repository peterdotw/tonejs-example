const synth = new Tone.Synth({
  oscillator: {
    type: "square"
  },
  envelope: {
    attack: 1.0,
    decay: 1.0,
    sustain: 0.5,
    release: 1.5
  }
}).toMaster();

const pianoKeyboard = (key, note) => {
  document.querySelector("body").addEventListener("keydown", event => {
    const keyName = event.key;

    if (keyName === key) {
      synth.triggerAttack(note);
    }
  });

  document.querySelector("body").addEventListener("keyup", event => {
    const keyName = event.key;

    if (keyName === key) {
      synth.triggerRelease();
    }

    if (keyName === "w") {
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

  document.querySelector(button).addEventListener("touchstart", () => {
    synth.triggerAttack(note);
  });

  document.querySelector(button).addEventListener("touchend", () => {
    synth.triggerRelease();
  });
};

const envelopeHandler = () => {
  document
    .querySelector(".envelope__slider--attack")
    .addEventListener("change", () => {
      let value = Number(
        document.querySelector(".envelope__slider--attack").value
      );
      synth.envelope.attack = value;
      document.querySelector(".envelope__value--attack").innerHTML = value;
    });

  document
    .querySelector(".envelope__slider--decay")
    .addEventListener("change", () => {
      let value = Number(
        document.querySelector(".envelope__slider--decay").value
      );
      synth.envelope.decay = value;
      document.querySelector(".envelope__value--decay").innerHTML = value;
    });

  document
    .querySelector(".envelope__slider--sustain")
    .addEventListener("change", () => {
      let value = Number(
        document.querySelector(".envelope__slider--sustain").value
      );
      synth.envelope.sustain = value;
      document.querySelector(".envelope__value--sustain").innerHTML = value;
    });

  document
    .querySelector(".envelope__slider--release")
    .addEventListener("change", () => {
      let value = Number(
        document.querySelector(".envelope__slider--release").value
      );
      synth.envelope.release = value;
      document.querySelector(".envelope__value--release").innerHTML = value;
    });
};

const oscillatorHandler = () => {
  document
    .querySelector(".oscillator__select")
    .addEventListener("change", () => {
      synth.oscillator.type = document.querySelector(
        ".oscillator__select"
      ).value;
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

envelopeHandler();
oscillatorHandler();
