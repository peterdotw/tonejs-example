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
  $("body").on("keydown", event => {
    const keyName = event.key;

    if (keyName === key) {
      synth.triggerAttack(note);
    }
  });

  $("body").on("keyup", event => {
    const keyName = event.key;

    if (keyName === key) {
      synth.triggerRelease();
    }

    if (keyName === "w") {
    }
  });
};

const pianoMouse = (button, note) => {
  $(button).on("mousedown", () => {
    synth.triggerAttack(note);
  });

  $(button).on("mouseup", () => {
    synth.triggerRelease();
  });

  $(button).on("touchstart", () => {
    synth.triggerAttack(note);
  });

  $(button).on("touchend", () => {
    synth.triggerRelease();
  });
};

const envelopeHandler = () => {
  $(".envelope__slider--attack").on("change", () => {
    let value = Number($(".envelope__slider--attack").val());
    synth.envelope.attack = value;
    $(".envelope__value--attack").html(value);
  });

  $(".envelope__slider--decay").on("change", () => {
    let value = Number($(".envelope__slider--decay").val());
    synth.envelope.decay = value;
    $(".envelope__value--decay").html(value);
  });

  $(".envelope__slider--sustain").on("change", () => {
    let value = Number($(".envelope__slider--sustain").val());
    synth.envelope.sustain = value;
    $(".envelope__value--sustain").html(value);
  });

  $(".envelope__slider--release").on("change", () => {
    let value = Number($(".envelope__slider--release").val());
    synth.envelope.release = value;
    $(".envelope__value--release").html(value);
  });
};

const oscillatorHandler = () => {
  $(".oscillator__select").change(() => {
    synth.oscillator.type = $(".oscillator__select").val();
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
