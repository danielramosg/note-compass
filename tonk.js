const mod = (x, n) => (x % n + n) % n;


var audioBuffers={}
var audioCtx = new AudioContext();


async function loadAudio(){
  var pitch, solfa, name;
  var notes = ["Fa", "Do", "So", "Re", "La", "Mi", "Ti"]
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






function playFetched(d,j) {
    var buffer = d.solfaBuffer[j];
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start(0);
  }

function playStart(d,j){
	// d.playerSolfa[j].play();
	//synth.triggerAttackRelease(d.Literal+"4", "8n");
}


function playStop(d,j){
	// d.playerSolfa[j].load();
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

	updateStarText(mode.all_note_names)
	updateKeyboard(WhiteScale)
	updateStaff()
	updateModeLabel()
	updatePiano()
}







////// Keyboard


WhiteScale = Scale.notes.filter(function(d){return d.type=="white"})
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
					.attr("class","oct1" )
					.style("stroke-width",1)
					.style("stroke","black")
					//.on("click",function (d) {synth.triggerAttackRelease(Tone.Frequency( (d.midiPitch ) ,"midi"),"8n") } )
					//.on("touchstart",function (d) {synth.triggerAttackRelease(Tone.Frequency( (d.midiPitch ),"midi"),"8n") } )
					.on("touchstart mousedown", function(ev,d) {playFetched(d,0) } )
					.on("touchend mouseup mouseleave", function(ev,d) {playStop(d,0) } )
					.attr("width",function (d) {return d.type=="white" ? 46 : 50 })
					.attr("height",function (d) {return d.type=="white" ? 150 : 50 })
					.style("fill",function (d) {return d.sectorColor})
					.attr("x", function(d,i) {return 45* (i ) })
					.attr("y", 0);

		newKey.append("rect")
					.attr("class","oct2")
					.style("stroke-width",1)
					.style("stroke","black")
					//.on("click",function (d) {synth.triggerAttackRelease(Tone.Frequency(d.midiPitch + 12,"midi"),"8n") } )
					//.on("touchstart",function (d) {synth.triggerAttackRelease(Tone.Frequency(d.midiPitch + 12,"midi"),"8n") } )
					.on("touchstart mousedown", function(ev,d) {playFetched(d,1) } )
					.on("touchend mouseup mouseleave", function(ev,d) {playStop(d,1) } )
					.attr("width",function (d) {return d.type=="white" ? 46 : 50 })
					.attr("height",function (d) {return d.type=="white" ? 150 : 50 })
					.style("fill",function (d) {return d.sectorColor})
					.attr("x", function(d,i) {return 45* (i + 7) })
					.attr("y", 0);

		svg2.append("rect")
					.attr("class","note15")
					.style("stroke-width",1)
					.style("stroke","black")
					.datum(data[0])
					//.on("click",function (d) {synth.triggerAttackRelease(Tone.Frequency(d.midiPitch + 24,"midi"),"8n") } )
					//.on("touchstart",function (d) {synth.triggerAttackRelease(Tone.Frequency(d.midiPitch + 24,"midi"),"8n") } )
          .on("touchstart mousedown", function(ev,d) {playFetched(d,2) } )
					.on("touchend mouseup mouseleave", function(ev,d) {playStop(d,2) } )
					.attr("width",46)
					.attr("height",150)
					.style("fill",data[0].sectorColor)
					.attr("x", 45 * 14 )
					.attr("y", 0);

		newKey.append("text")
					.attr("class","key-Ordinal")
					.attr("text-anchor","middle")
					.text(function (d) {return (d.id/2 + 1) })
					.attr("x", function(d,i) {return 22+ 45* (i) })
					.attr("y", 27)

		newKey.append("text")
					.attr("class","key-Ordinal")
					.attr("text-anchor","middle")
					.text(function (d) {return (d.id/2 + 1) })
					.attr("x", function(d,i) {return 22+ 45* (i + 7) })
					.attr("y", 27)

		svg2.append("text")
					.attr("class","key-Ordinal")
					.attr("text-anchor","middle")
					.datum(data[0])
					.text(function (d) {return (d.id/2 + 1) })
					.attr("x", function(d,i) {return 22+ 45* (7 + 7) })
					.attr("y", 27)


		newKey.append("text")
					.attr("class","key-Literal")
					.attr("text-anchor","middle")
					.text(function (d) {return d.Literal})
					.attr("x", function(d,i) {return 22+ 45* (i) })
					.attr("y", 55)

		newKey.append("text")
					.attr("class","key-Literal")
					.attr("text-anchor","middle")
					.text(function (d) {return d.Literal})
					.attr("x", function(d,i) {return 22+ 45* (i + 7) })
					.attr("y", 55)

		svg2.append("text")
					.attr("class","key-Literal")
					.attr("text-anchor","middle")
					.datum(data[0])
					.text(function (d) {return d.Literal})
					.attr("x", function(d,i) {return 22+ 45* (7 + 7) })
					.attr("y", 55)

		newKey.append("text")
					.attr("class","key-Solfa")
					.attr("text-anchor","middle")
					.text(function (d) {return d.Solfa})
					.attr("x", function(d,i) {return 22+ 45* (i) })
					.attr("y", 80)

		newKey.append("text")
					.attr("class","key-Solfa")
					.attr("text-anchor","middle")
					.text(function (d) {return d.Solfa})
					.attr("x", function(d,i) {return 22+ 45* (i + 7) })
					.attr("y", 80)

		svg2.append("text")
					.attr("class","key-Solfa")
					.attr("text-anchor","middle")
					.datum(data[0])
					.text(function (d) {return d.Solfa})
					.attr("x", function(d,i) {return 22+ 45* (7 + 7) })
					.attr("y", 80)




		// newKey.append("text");


		//Update selection
		keys = keys.merge(newKey);


		// keys.select("rect")
		// 			.attr("width",function (d) {return d.type=="white" ? 50 : 50 })
		// 			.attr("height",function (d) {return d.type=="white" ? 150 : 50 })
		// 			.style("fill",function (d) {return d.sectorColor})
		// 			.attr("x", function(d,i) {return 55* (i + 7*oct) })
		// 			.attr("y", 25);

		keys.selectAll("text.key-Ordinal")
					.text(function (d) {return (d.id/2 + 1) })

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
