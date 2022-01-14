const mod = (x, n) => (x % n + n) % n;


// https://stackoverflow.com/questions/31060642/preload-multiple-audio-files
function preloadAudio(url) {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = "./SolfedgeSamplesMp3/" + url;
}

var loaded = 0;
function loadedAudio() {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    loaded++;
    if (loaded == audioFiles.length){
    	// all have loaded
    	// init();
    	console.log("All audio files loaded.");
    }
};

for (var i in audioFiles) {
    preloadAudio(audioFiles[i]);
}


//Array.prototype.rotate = function(n) { return this.slice(n, this.length).concat(this.slice(0, n)); }

mode = TkData[1]




function updateModeLabel(){
	var note = Scale.notes[0].Literal
	var mode = modeNames[mod(position,7)].fullname
	var pattern = modeNames[mod(position,7)].pattern
	var solfa = Scale.notes[0].Solfa


	d3.select("#modeLabel").text(note+ ' - ' +mode);

	d3.select("#modeText").html(
		"The mode starts in " + note + " and the intervals between consecutive notes are " + pattern + " semitones (" + mode + "). <br>" +
		"The note " + note + " plays the role of " + solfa + " in Solfedge."
		)
}


////// Wheel

//var height = 600;
//var width = 900;


function sectorPath(theta, r, R){		//returns path for an arc of circle ring
	var s = Math.sin(theta*Math.PI/180);
	var c = Math.cos(theta*Math.PI/180);

	 //	//counterclockwise
	 // return "M"+ r +" 0 "
	 // 		+"L"+ R +" 0 "
	 // 		+"A"+ R +' '+ R +" 0 0 0 "+ R*c +' '+ -R*s
	 // 		+" L"+ r*c +' '+ -r*s
	 // 		+"A" + r +' '+ r +" 0 0 1 "+r +" 0";

	 // clockwise
	 return "M"+ r +" 0 "
	 		+"L"+ R +" 0 "
	 		+"A"+ R +' '+ R +" 0 0 1 "+ R*c +' '+ R*s
	 		+" L"+ r*c +' '+ r*s
	 		+"A" + r +' '+ r +" 0 0 0 "+r +" 0";
}


var Radius = 340;



svg = d3.select("#wheel").select("svg")
		//.attr("width",width)
		//.attr("height",height);



outerWheel = svg.append("g"); //outer


outerWheel.attr("transform", "translate(" + (Radius + 5) +','+ (Radius + 5) +')' );

var stepAngle = 360./84;

outerWheel.append("circle")
	.attr("r",Radius)
	.attr("class","wheel");




sectorsMark = outerWheel.selectAll(".solfaMark")
	.data(Scale.notes).enter()
	.append("g").attr("class","sectorsMark")


sectorsMark.append("g") //Sectors
	.append("path")
		.attr("d",function(d,i) {return  i % 2 ==0 ? sectorPath(7*stepAngle,0,Radius) : sectorPath(5*stepAngle,0,Radius)	})
		.attr("fill",function(d){return d.sectorColor})
		.on("touchstart", function(d) {playStart(d,1) } )
		.on("touchend", function(d) {playStop(d,1) } )

sectorsMark.filter(function(d,i) {return i==0} ) //Mode names
	.append("g")
	.selectAll(".modeName")
	.data(modeNames).enter()
	.append("text").text(function(d,i){return d.name })
	.attr("fill",function(d,i){return d.color })
	.attr("x",Radius-3)
	.attr("text-anchor","end")
	.attr("transform",function(d,i){return "rotate(" + ((i+1)*stepAngle-1) +')' });


sectorsMark.filter(function(d,i) {return i==0} ) //Tick lines for Mode names
	.selectAll(".solfaTick").data(d3.range(8)).enter()
	.append("line")
	.attr("x1",.68*Radius).attr("y1",0)
	.attr("x2",Radius).attr("y2",0)
	.attr("class","solfaTick")
	.attr("transform",function(d,i){return "rotate(" + (i*stepAngle) +')' });
;


sectorsMark.filter(function(d,i) {return (i % 2 == 0 && i>0) } ) // scale numbers
	.append("text").text(function(d,i){return (i+2) })
	.attr("x",Radius*0.95)
	.attr("text-anchor","end")
	.attr("transform", "rotate(" + (3.5*stepAngle) +')' )
	.attr("class","scaleNumbers")


sectorsMark.attr("transform",function(d,i){
				return (i % 2 == 0) ?
								"rotate(" + (-90+12*stepAngle*(i/2)) +')' :
								"rotate(" + (-90+stepAngle* (12*((i-1)/2) +7)) +')'  }
		)






solfaMark = outerWheel.selectAll(".solfaMark")
	.data(d3.range(84)).enter()
	.append("g").attr("class","solfaMark")

solfaMark.append("text")
	.attr("x",function(d,i){var r = (d%12)/12 ; return (0.71 *r + 0.77 * (1-r) )*Radius })
	.attr("y",0)
	.html(function(d){return solfaNotes[d%12]})
	.attr("transform",function(d,i){return "rotate(-1)" } );

solfaMark.append("line")
	.attr("x1",.68*Radius).attr("y1",0)
	.attr("x2",.86*Radius).attr("y2",0)
	.attr("class","wheel");

solfaMark.attr("transform",function(d,i){return "rotate(" + (-90+stepAngle*(i+1)) +')' } );






scaleWheel = outerWheel.append("g"); //inner


Star = scaleWheel.append("g")
			.attr("class","star");

			//.attr("d",star12(0.75*Radius))


function updateStar(){
	var radius = 0.7*Radius;
	var theta = 360/12 * 7;

		var points=[];

		for (var i=0; i<12; i++) {
			var s = radius*Math.sin(i*theta*Math.PI/180);
			var c = radius*Math.cos(i*theta*Math.PI/180);
			points.push([c,s]);
			}

		for (var i=0; i<12; i++) {
			var line=Star.append("line")
						.attr("x1",points[mod(i,12)][0])
						.attr("y1",points[mod(i,12)][1])
						.attr("x2",points[mod(i+1,12)][0])
						.attr("y2",points[mod(i+1,12)][1])

			// if ( mode.notes.includes(mode.all_note_names[mod(5*i,12)]) && mode.notes.includes(mode.all_note_names[mod(5*(i+1),12)]) ) {
			// 	console.log(mode.all_note_names[mod(5*i,12)]);
			// 	line.style("stroke","white")
			// 	}

			}

}

updateStar()


// var scores= Star.append("g")
// 				.attr("class","score")


// score_heights=[0,1,2,3,4,7,8,9,10,11]
// score_heights.forEach(function(i){
// 			scores.append("circle")
// 			.attr("r",130+4*i)
// 			})





function updateStarText(data){
	//console.log(data)

	var noteMark = scaleWheel.selectAll(".noteMark").data(data);

	var newNoteMark = noteMark.enter()
		.append("g").attr("class","noteMark")

	newNoteMark.append("text");

	noteMark = noteMark.merge(newNoteMark)

	//console.log(noteMark)

	noteMark.select("text").text(function(d){return d})
		.attr("x",.45*Radius)
		.attr("y",0)
		.attr("transform",function(d,i){return "rotate(2)" } );

	noteMark.attr("transform",function(d,i){return "rotate(" + (-90+stepAngle*(7*i)) +')' } );


	// scores.selectAll("text").data(data)
	// 		.enter().append("text")
	// 			.attr("class","scoreText")
	// 			.text(function(d,i){return "&"})
	// 			.attr("transform",function(d,i)
	// 				{return "rotate(" + (-6-90+stepAngle*(7*i)) +') ' +
	// 				"translate(162 0) " +
	// 				"rotate(90) "} );




}




function playStart(d,j){
	d.playerSolfa[j].play();
	//synth.triggerAttackRelease(d.Literal+"4", "8n");
}

function playStop(d,j){
	d.playerSolfa[j].load();
}






var stepAngle = 360./84;

var position=1;
var mode = TkData.filter(function(m){return m.indices.includes(mod(position,84)) } )[0]


scaleWheel.attr("transform","rotate("+ ((position+0.5)*stepAngle) +')');
//setPlayers();

Scale.setValues(position);

//scaleWheel.remove();








function rotateScaleWheel(){
	scaleWheel.transition()
		.attr("transform","rotate("+ ((position+0.5)*stepAngle) +')');
	//setPlayers();
	Scale.setValues(position)

}


//scaleWheel.attr("transform","rotate(0)");
			// .transition()
// 			.attr("transform","rotate("+5*stepAngle+")");



function updateAll(){
	mode = TkData.filter(function(m) {return m.indices.includes(mod(position,84)) } )[0]

	rotateScaleWheel()
	FullScale = Scale.notes.filter(function(d){return d.active})
	//updateKeyboard(FullScale)

	updateStarText(mode.all_note_names)
	updateKeyboard(WhiteScale)
	updateStaff()
	updateModeLabel()
	updatePiano()
}


function rotateScaleWheelUp(){
	position--;
	updateAll();
}

function rotateScaleWheelDown(){
	position++;
	updateAll();
}

function resetPosition(){
	position = 1;
	updateAll()
}


d3.select("#upButton").on("click", rotateScaleWheelUp );
d3.select("#downButton").on("click", rotateScaleWheelDown );

d3.select("#upIcon").on("click", rotateScaleWheelUp );
d3.select("#downIcon").on("click", rotateScaleWheelDown );
d3.select("#reloadIcon").on("click", resetPosition );






////// Keyboard


WhiteScale = Scale.notes.filter(function(d){return d.type=="white"})
FullScale = Scale.notes.filter(function(d){return d.active})

function playScale(scale) {
	now = Tone.now();
	WhiteScale.forEach(function(d,i) {
			//console.log(d.Literal+"4")
			synth.triggerAttackRelease(Tone.Frequency(d.midiPitch,"midi"),"8n", now + 0.5 + 0.25*i );
			//key = svg.selectAll("g")
			})

			synth.triggerAttackRelease(Tone.Frequency(WhiteScale[0].midiPitch+12,"midi"),"8n", now + 0.5 + 0.25*7 );

};

d3.select("#playButton").on("click", playScale );
d3.select("#playIcon").on("click", playScale );



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
	var newKey = keys.enter().append("g");




		newKey.append("rect")
					.attr("class","oct1" )
					.style("stroke-width",1)
					.style("stroke","black")
					//.on("click",function (d) {synth.triggerAttackRelease(Tone.Frequency( (d.midiPitch ) ,"midi"),"8n") } )
					//.on("touchstart",function (d) {synth.triggerAttackRelease(Tone.Frequency( (d.midiPitch ),"midi"),"8n") } )
					.on("touchstart", function(d) {playStart(d,0) } )
					.on("touchend", function(d) {playStop(d,0) } )
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
					.on("touchstart", function(d) {playStart(d,1) } )
					.on("touchend", function(d) {playStop(d,1) } )
					.attr("width",function (d) {return d.type=="white" ? 46 : 50 })
					.attr("height",function (d) {return d.type=="white" ? 150 : 50 })
					.style("fill",function (d) {return d.sectorColor})
					.attr("x", function(d,i) {return 45* (i + 7) })
					.attr("y", 0);

		newKey.append("rect")
					.attr("class","note15")
					.style("stroke-width",1)
					.style("stroke","black")
					.datum(data[0])
					//.on("click",function (d) {synth.triggerAttackRelease(Tone.Frequency(d.midiPitch + 24,"midi"),"8n") } )
					//.on("touchstart",function (d) {synth.triggerAttackRelease(Tone.Frequency(d.midiPitch + 24,"midi"),"8n") } )
					.on("touchstart", function(d) {playStart(d,2) } )
					.on("touchend", function(d) {playStop(d,2) } )
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

		newKey.append("text")
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

		newKey.append("text")
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

		newKey.append("text")
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

piano = JZZ.input.Kbd(
		{at:'piano',
		from: 'C3',
		to: 'C5',
		ww: 45,
		wl: 150,
		}
	)
.connect(JZZ().openMidiOut());

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

updatePiano();


///// staff

// function updateStaff () {
// WhiteScale = Scale.notes.filter(function(d){return d.type=="white"})

// Literals = WhiteScale.map(function(d) {return d.Literal})

// var letters=["F","C","G","D","A","E","B"]

// letters.forEach(function(k){
// 	var sign = d3.select("#sharp-on-"+k)
// 	sign.attr("visibility","hidden")
// 	if ( Literals.includes(k+"#") ) {  sign.attr("visibility","visible")}
// 		else {sign.attr("visibility","hidden")}
// 	})
// }




function updateStaff () {
//var mode = TkData.filter(function(m){return m.indices.includes(position)})[0]
//console.log(position)
//console.log("signature: ", mode.signature)

	var letters = ['A','B','C','D','E','F','G']
	letters.forEach(function(k){
		var sign = d3.select("#sharp-on-"+k)
		sign.attr("visibility","hidden")
		if (Signatures[mode.signature].sharps.includes(k))  {sign.attr("visibility","visible")}

		var sign = d3.select("#flat-on-"+k)
		sign.attr("visibility","hidden")
		if (Signatures[mode.signature].flats.includes(k))  {sign.attr("visibility","visible")}

	})

}



updateAll()

