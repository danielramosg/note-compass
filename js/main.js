const mod = (x, n) => ((x % n) + n) % n;

// Global variables and setup
position = 1;
mode = {};
getMode();

Scale.setValues(position);

start();

async function start() {
  loadingBanner(true);
  await loadAudio();
  loadingBanner(false);
  drawWheel();
  loadSVGstaff();
  makeWhiteScaleLine(15);
  drawKeyboard(WhiteScaleLine);
  drawPiano();
  updateAll();
}

function updateAll() {
  getMode();

  rotateScaleWheel();
  FullScale = Scale.notes.filter(function (d) {
    return d.active;
  });
  WhiteScaleLine = [];
  makeWhiteScaleLine(15);

  updateStarText(mode.all_note_names);
  updateKeyboard(WhiteScaleLine);
  updateStaff();
  updateModeLabel();
  updatePiano();
}

function loadingBanner(active) {
  if (active) {
    var bg = d3
      .select("body")
      .append("div")
      .attr("id", "loadingBanner")
      .html(`Loading... this may take a few seconds.`);
  } else {
    d3.select("#loadingBanner").remove();
  }
}

///// Piano

JZZ.synth.Tiny.register();
var piano;

function drawPiano() {
  piano = JZZ.input
    .Kbd({ at: "piano", from: "C3", to: "C5", ww: 45, wl: 150 })
    .connect(JZZ().openMidiOut());
}

function updatePiano() {
  piano.getWhiteKeys().setStyle({ backgroundColor: "white" }, {});
  piano.getBlackKeys().setStyle({ backgroundColor: "black" }, {});

  Scale.notes.forEach(function (d, i) {
    if (d.type == "white") {
      piano
        .getKey(d.Literal + "3")
        .setStyle({ backgroundColor: d.sectorColor }, {});
      piano
        .getKey(d.Literal + "4")
        .setStyle({ backgroundColor: d.sectorColor }, {});
      piano
        .getKey(d.Literal + "5")
        .setStyle({ backgroundColor: d.sectorColor }, {});
    }
  });
}
