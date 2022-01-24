const mod = (x, n) => (x % n + n) % n;


var audioBuffers={}
var audioCtx = new AudioContext();
const masterGain = audioCtx.createGain();
masterGain.connect(audioCtx.destination);
masterGain.gain.setValueAtTime(0.8,0);


async function loadAudio(){
  var pitch, solfa, name;
  var notes = ["Fa", "Do", "So", "Re", "La", "Mi", "Ti"];
  for (pitch=36; pitch<=72; pitch++) {
    for (solfa in notes) {
      name = pitch + '_' + notes[solfa];
      // console.log("Loading " + name + " ...");
      await fetch("./SolfedgeSamplesMp3/" + name + ".mp3")
        .then(response => response.arrayBuffer())
          .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
              audioBuffers[name] = audioBuffer;
              // console.log("Loaded " + name);
            });
    }
  }
  console.log("All audio files loaded into buffers")
}




playing =[]
gains = []

function playStart(ev,d) {
    var buffer = d.solfaBuffer;

    const source = audioCtx.createBufferSource();
    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0,audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(1,audioCtx.currentTime+0.5);

    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(masterGain);

    playing[d.id] = source;
    gains[d.id] = gainNode;

    source.start(0);
  }


function playStop(ev,d){
  if (playing[d.id]) {
    gains[d.id].gain.linearRampToValueAtTime(0,audioCtx.currentTime+0.7);
    playing[d.id].stop(audioCtx.currentTime+0.8);}
}

function dragIn(ev,d) {
  if (ev.buttons == 1) {playStart(ev,d);}
}


async function start(){
  await loadAudio();
  drawWheel();
  loadSVGstaff();
  drawPiano();
  updateAll();
}

//////////////////////////

position=1;
mode = {};
getMode();

Scale.setValues(position);

start();








function updateAll(){
	getMode();

	rotateScaleWheel()
	FullScale = Scale.notes.filter(function(d){return d.active})
	//updateKeyboard(FullScale)
  WhiteScaleLine =[]
  makeWhiteScaleLine(15);

	updateStarText(mode.all_note_names)
	updateKeyboard(WhiteScaleLine)
	updateStaff()
	updateModeLabel()
	updatePiano()
}







////// Keyboard


WhiteScale = Scale.notes.filter(function(d){return d.type=="white"}) //Only need to run once.
FullScale = Scale.notes.filter(function(d){return d.active})

// function playScale(scale) {
// 	now = Tone.now();
// 	WhiteScale.forEach(function(d,i) {
// 			//console.log(d.Literal+"4")
// 			synth.triggerAttackRelease(Tone.Frequency(d.midiPitch,"midi"),"8n", now + 0.5 + 0.25*i );
// 			//key = svg.selectAll("g")
// 			})
//
// 			synth.triggerAttackRelease(Tone.Frequency(WhiteScale[0].midiPitch+12,"midi"),"8n", now + 0.5 + 0.25*7 );
//
// };
//
// d3.select("#playButton").on("click", playScale );
// d3.select("#playIcon").on("click", playScale );



svg2 = d3.select("#keyboard").append("svg")
		.attr("width",678)
		.attr("height",150);


//var synth = new Tone.Synth().toMaster();


function updateKeyboard(data){
var keys = svg2.selectAll("g").data(data);

//Exit selection
	keys.exit()
			.remove();

	//Enter selection
	var newKey = keys.enter();

		newKey.append("rect")
          .attr("class","keyboardKey")
					.on("touchstart mousedown", playStart)
          .on("mouseenter", dragIn)
					.on("touchend mouseup mouseleave", playStop)
					.attr("width",function (d) {return d.type=="white" ? 46 : 50 })
					.attr("height",function (d) {return d.type=="white" ? 150 : 50 })
					.style("fill",function (d) {return d.sectorColor})
					.attr("x", function(d,i) {return 45* (i ) })
					.attr("y", 0);

		newKey.append("text")
					.attr("class","key-Ordinal")
					// .text(function (d) {return (d.sector/2 + 1) })
					.attr("x", function(d,i) {return 22+ 45* (i) })
					.attr("y", 27)

		newKey.append("text")
					.attr("class","key-Literal")
					// .text(function (d) {return d.Literal})
					.attr("x", function(d,i) {return 22+ 45* (i) })
					.attr("y", 55)

		newKey.append("text")
					.attr("class","key-Solfa")
					// .text(function (d) {return d.Solfa})
					.attr("x", function(d,i) {return 22+ 45* (i) })
					.attr("y", 80)

		//Update selection
		keys = keys.merge(newKey);


		keys.selectAll("text.key-Ordinal")
					.text(function (d) {return (d.sector/2 + 1) })

		keys.selectAll("text.key-Literal")
					.text(function (d) {return d.Literal})

		keys.selectAll("text.key-Solfa")
					.text(function (d) {return d.Solfa})


}




///// Piano

JZZ.synth.Tiny.register();
var piano;

function drawPiano(){
  piano = JZZ.input.Kbd(
  		{at:'piano',
  		from: 'C3',
  		to: 'C5',
  		ww: 45,
  		wl: 150,
  		}
  	)
  .connect(JZZ().openMidiOut());
}


function updatePiano(){
	piano.getWhiteKeys().setStyle({ backgroundColor: 'white' }, { });
	piano.getBlackKeys().setStyle({ backgroundColor: 'black' }, { });


	Scale.notes.forEach(function(d,i){
		if (d.type == "white") {
			piano.getKey(d.Literal+'3').setStyle({ backgroundColor: d.sectorColor}, {});
			piano.getKey(d.Literal+'4').setStyle({ backgroundColor: d.sectorColor }, { });
			piano.getKey(d.Literal+'5').setStyle({ backgroundColor: d.sectorColor }, { });

		}
	})
}
