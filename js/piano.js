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
