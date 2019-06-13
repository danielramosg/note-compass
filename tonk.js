const mod = (x, n) => (x % n + n) % n


// https://stackoverflow.com/questions/31060642/preload-multiple-audio-files
var audioFiles = [
    "36_Do.mp3","36_Fa.mp3","36_La.mp3","36_Mi.mp3","36_Re.mp3","36_So.mp3","36_Ti.mp3",
    "37_Do.mp3","37_Fa.mp3","37_La.mp3","37_Mi.mp3","37_Re.mp3","37_So.mp3","37_Ti.mp3",
    "38_Do.mp3","38_Fa.mp3","38_La.mp3","38_Mi.mp3","38_Re.mp3","38_So.mp3","38_Ti.mp3",
    "39_Do.mp3","39_Fa.mp3","39_La.mp3","39_Mi.mp3","39_Re.mp3","39_So.mp3","39_Ti.mp3",
    "40_Do.mp3","40_Fa.mp3","40_La.mp3","40_Mi.mp3","40_Re.mp3","40_So.mp3","40_Ti.mp3",
    "41_Do.mp3","41_Fa.mp3","41_La.mp3","41_Mi.mp3","41_Re.mp3","41_So.mp3","41_Ti.mp3",
    "42_Do.mp3","42_Fa.mp3","42_La.mp3","42_Mi.mp3","42_Re.mp3","42_So.mp3","42_Ti.mp3",
    "43_Do.mp3","43_Fa.mp3","43_La.mp3","43_Mi.mp3","43_Re.mp3","43_So.mp3","43_Ti.mp3",
    "44_Do.mp3","44_Fa.mp3","44_La.mp3","44_Mi.mp3","44_Re.mp3","44_So.mp3","44_Ti.mp3",
    "45_Do.mp3","45_Fa.mp3","45_La.mp3","45_Mi.mp3","45_Re.mp3","45_So.mp3","45_Ti.mp3",
    "46_Do.mp3","46_Fa.mp3","46_La.mp3","46_Mi.mp3","46_Re.mp3","46_So.mp3","46_Ti.mp3",
    "47_Do.mp3","47_Fa.mp3","47_La.mp3","47_Mi.mp3","47_Re.mp3","47_So.mp3","47_Ti.mp3",
    "48_Do.mp3","48_Fa.mp3","48_La.mp3","48_Mi.mp3","48_Re.mp3","48_So.mp3","48_Ti.mp3",
    "49_Do.mp3","49_Fa.mp3","49_La.mp3","49_Mi.mp3","49_Re.mp3","49_So.mp3","49_Ti.mp3",
    "50_Do.mp3","50_Fa.mp3","50_La.mp3","50_Mi.mp3","50_Re.mp3","50_So.mp3","50_Ti.mp3",
    "51_Do.mp3","51_Fa.mp3","51_La.mp3","51_Mi.mp3","51_Re.mp3","51_So.mp3","51_Ti.mp3",
    "52_Do.mp3","52_Fa.mp3","52_La.mp3","52_Mi.mp3","52_Re.mp3","52_So.mp3","52_Ti.mp3",
    "53_Do.mp3","53_Fa.mp3","53_La.mp3","53_Mi.mp3","53_Re.mp3","53_So.mp3","53_Ti.mp3",
    "54_Do.mp3","54_Fa.mp3","54_La.mp3","54_Mi.mp3","54_Re.mp3","54_So.mp3","54_Ti.mp3",
    "55_Do.mp3","55_Fa.mp3","55_La.mp3","55_Mi.mp3","55_Re.mp3","55_So.mp3","55_Ti.mp3",
    "56_Do.mp3","56_Fa.mp3","56_La.mp3","56_Mi.mp3","56_Re.mp3","56_So.mp3","56_Ti.mp3",
    "57_Do.mp3","57_Fa.mp3","57_La.mp3","57_Mi.mp3","57_Re.mp3","57_So.mp3","57_Ti.mp3",
    "58_Do.mp3","58_Fa.mp3","58_La.mp3","58_Mi.mp3","58_Re.mp3","58_So.mp3","58_Ti.mp3",
    "59_Do.mp3","59_Fa.mp3","59_La.mp3","59_Mi.mp3","59_Re.mp3","59_So.mp3","59_Ti.mp3",
    "60_Do.mp3","60_Fa.mp3","60_La.mp3","60_Mi.mp3","60_Re.mp3","60_So.mp3","60_Ti.mp3",
    "61_Do.mp3","61_Fa.mp3","61_La.mp3","61_Mi.mp3","61_Re.mp3","61_So.mp3","61_Ti.mp3",
    "62_Do.mp3","62_Fa.mp3","62_La.mp3","62_Mi.mp3","62_Re.mp3","62_So.mp3","62_Ti.mp3",
    "63_Do.mp3","63_Fa.mp3","63_La.mp3","63_Mi.mp3","63_Re.mp3","63_So.mp3","63_Ti.mp3",
    "64_Do.mp3","64_Fa.mp3","64_La.mp3","64_Mi.mp3","64_Re.mp3","64_So.mp3","64_Ti.mp3",
    "65_Do.mp3","65_Fa.mp3","65_La.mp3","65_Mi.mp3","65_Re.mp3","65_So.mp3","65_Ti.mp3",
    "66_Do.mp3","66_Fa.mp3","66_La.mp3","66_Mi.mp3","66_Re.mp3","66_So.mp3","66_Ti.mp3",
    "67_Do.mp3","67_Fa.mp3","67_La.mp3","67_Mi.mp3","67_Re.mp3","67_So.mp3","67_Ti.mp3",
    "68_Do.mp3","68_Fa.mp3","68_La.mp3","68_Mi.mp3","68_Re.mp3","68_So.mp3","68_Ti.mp3",
    "69_Do.mp3","69_Fa.mp3","69_La.mp3","69_Mi.mp3","69_Re.mp3","69_So.mp3","69_Ti.mp3",
    "70_Do.mp3","70_Fa.mp3","70_La.mp3","70_Mi.mp3","70_Re.mp3","70_So.mp3","70_Ti.mp3",
    "71_Do.mp3","71_Fa.mp3","71_La.mp3","71_Mi.mp3","71_Re.mp3","71_So.mp3","71_Ti.mp3",
    "72_Do.mp3","72_Fa.mp3","72_La.mp3","72_Mi.mp3","72_Re.mp3","72_So.mp3","72_Ti.mp3"
];
    
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
    	console.log("All audio files loaded.")
    }
}


for (var i in audioFiles) {
    preloadAudio(audioFiles[i]);
}






TkData =[
{indices: [0, 36, 72, 24, 60, 12, 48], notes_id: [0,7,2,9,4,11,6], notes: ['C', 'G', 'D', 'A', 'E', 'B', 'F#'], signature: 1, all_note_names: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B']},  
{indices: [49, 1, 37, 73, 25, 61, 13], notes_id: [5,0,7,2,9,4,11], notes: ['F', 'C', 'G', 'D', 'A', 'E', 'B'], signature: 0, all_note_names: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B']},  
{indices: [14, 50, 2, 38, 74, 26, 62], notes_id: [10,5,0,7,2,9,4], notes: ['Bb', 'F', 'C', 'G', 'D', 'A', 'E'], signature: -1, all_note_names: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']}, 
{indices: [63, 15, 51, 3, 39, 75, 27], notes_id: [3,10,5,0,7,2,9], notes: ['Eb', 'Bb', 'F', 'C', 'G', 'D', 'A'], signature: -2, all_note_names: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']}, 
{indices: [28, 64, 16, 52, 4, 40, 76], notes_id: [8,3,10,5,0,7,2], notes: ['Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D'], signature: -3, all_note_names: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']}, 
{indices: [77, 29, 65, 17, 53, 5, 41], notes_id: [1,8,3,10,5,0,7], notes: ['Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G'], signature: -4, all_note_names: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb']}, 
{indices: [42, 78, 30, 66, 18, 54, 6], notes_id: [6,1,8,3,10,5,0], notes: ['Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C'], signature: -5, all_note_names: ['C', 'Db', 'D', 'Eb', 'Fb', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb']}, 
{indices: [7, 43, 79, 31, 67, 19, 55], notes_id: [11,6,1,8,3,10,5], notes: ['B', 'F#', 'C#', 'G#', 'D#', 'A#', 'E#'], signature: 6, all_note_names: ['B#', 'C#', 'Cx', 'D#', 'E', 'E#', 'F#', 'Fx', 'G#', 'A', 'A#', 'B']}, 
{indices: [56, 8, 44, 80, 32, 68, 20], notes_id: [4,11,6,1,8,3,10], notes: ['E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#'], signature: 5, all_note_names: ['B#', 'C#', 'D', 'D#', 'E', 'E#', 'F#', 'Fx', 'G#', 'A', 'A#', 'B']}, 
{indices: [21, 57, 9, 45, 81, 33, 69], notes_id: [9,4,11,6,1,8,3], notes: ['A', 'E', 'B', 'F#', 'C#', 'G#', 'D#'], signature: 4, all_note_names: ['B#', 'C#', 'D', 'D#', 'E', 'E#', 'F#', 'G', 'G#', 'A', 'A#', 'B']}, 
{indices: [70, 22, 58, 10, 46, 82, 34], notes_id: [2,9,4,11,6,1,8], notes: ['D', 'A', 'E', 'B', 'F#', 'C#', 'G#'], signature: 3, all_note_names: ['C', 'C#', 'D', 'D#', 'E', 'E#', 'F#', 'G', 'G#', 'A', 'A#', 'B']}, 
{indices: [35, 71, 23, 59, 11, 47, 83], notes_id: [7,2,9,4,11,6,1], notes: ['G', 'D', 'A', 'E', 'B', 'F#', 'C#'], signature: 2, all_note_names: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']}
];


/*
Each row has the following structure: 
indices 			a list of those 7 indices (out of 0, …, 83) to which this row applies
notes_id			a list of the 7 notes encoded as numbers: 
notes				a chain of 7 note names from the line of fifths. The 7 names belong to the actual white notes of the chosen mode, 
      				and each index in (indices) is positioned among the 7 indices in such a way that the note-name in (notes_id) and (notes) 
      				marks the 1st degree of that mode. 
signature			an integer between -5 and 6 denoting the key signature (see snapshot)
all_note_names		a list of note names for the 12 pitches in chromatic order. 

Thus, we need to permute cyclically the array notes_id so that the 1st note in the scale is the one in the position of the selected index.
*/

//Array.prototype.rotate = function(n) { return this.slice(n, this.length).concat(this.slice(0, n)); }

mode = TkData[1]

////// Scale Object


var pitchNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var solfaNotes = ["fa", "do", "so", "re", "la", "mi", "ti", "fi \xa0 sa", "di \xa0 ra", "si \xa0 lo", "ri \xa0 ma", "li \xa0 ta" ];
var solfaNotesFile = ["Fa", "Do", "So", "Re", "La", "Mi", "Ti", "", "", "", "", "" ]; //for mp3 filenames

var modeNames = [
{name:"lydian", color:"black", fullname:"Lydian", pattern:"2,2,2,1,2,2,1"},
{name:"ionian", color:"white", fullname:"Ionian", pattern:"2,2,1,2,2,2,1"},
{name:"mixolyd.", color:"black", fullname:"Mixolydian", pattern:"2,2,1,2,2,1,2"},
{name:"dorian", color:"black", fullname:"Dorian", pattern:"2,1,2,2,2,1,2"},
{name:"aeolian", color:"white", fullname:"Aeolian", pattern:"2,1,2,2,1,2,2"},
{name:"phrygian", color:"black", fullname:"Phrygian", pattern:"1,2,2,2,1,2,2"},
{name:"locrian", color:"grey", fullname:"Locrian", pattern:"1,2,2,1,2,2,2"}
];


Scale = {

notes : [
	{	type : "white",
		sectorSize : 7,
		sectorColor : "rgb(234,75,53)", //red
	},
	{ 	type : "black",
		sectorSize : 5,
		sectorColor : "grey",
	},
	{ 	type : "white",
		sectorSize : 7,
		sectorColor : "rgb(220,104,29)", //orange
	},
	{ 	type : "black",
		sectorSize : 5,
		sectorColor : "grey",
	},
	{ 	type : "white",
		sectorSize : 7,
		sectorColor : "rgb(254,207,31)", //yellow
	},
	{ 	type : "black",
		sectorSize : 5,
		sectorColor : "grey"
	},
	{ 	type : "white",
		sectorSize : 7,
		sectorColor : "rgb(149,171,96)", //lightgreen
	},
	{ 	type : "black",
		sectorSize : 5,
		sectorColor : "grey"
	},
	{	type : "white",
		sectorSize : 7,
		sectorColor : "rgb(72,98,63)", //darkgreen
	},
	{	type : "black",
		sectorSize : 5,
		sectorColor : "grey"
	},
	{ 	type : "white",
		sectorSize : 7,
		sectorColor : "rgb(46,85,114)", //navy
	},
	{ 	type : "black",
		sectorSize : 5,
		sectorColor : "grey"
	},
	{ 	type : "white",
		sectorSize : 7,
		sectorColor : "rgb(82,112,174)", //blue
	},
	{ 	type : "black",
		sectorSize : 5,
		sectorColor : "grey"
		
	},		
		],

setValues : function(position){
			//console.log("settedValues")
			//mode = TkData.filter(function(m) {return m.indices.includes(mod(position,84)) } )[0]
			var pitchNotes = mode.all_note_names;

			//var index_position = mode.indices.indexOf( mod(position,84) )
			//var scale = mode.notes_id.rotate(index_position)
			//console.log(scale)

			//var rootSector= 2*Math.floor(position/12.) + ( position%12 > 6 ? 1 : 0);

			this.notes.forEach(function(d,i){ 
				d.id = i;
				if (i%2 == 0) {			//white keys
					d.active	= true		
					d.nSolfa 	= mod(i+position,7)
					d.Solfa 	= solfaNotesFile[d.nSolfa]
					d.nLiteral 	= mod( i - Math.floor( (i+position)/7. ) , 12 )
					//d.nLiteral = scale[i/2]
					d.Literal 	= pitchNotes[d.nLiteral]
					d.midiPitch = 36 + d.nLiteral

					if (i==0) basePitch = d.midiPitch
					if (d.midiPitch < basePitch) {d.midiPitch+=12}
					//if (i<rootSector) d.midiPitch -=12;

					//console.log(d.nLiteral , d.midiPitch)
					d.playerSolfa =[];

					// for (var j=0; j<3;j++) {
					// 	var url = "./SolfedgeSamplesMp3/" + (d.midiPitch + 12*j) + '_' + d.Solfa + ".mp3"
					// 	d.playerSolfa[j] = new Tone.Player({
					// 		"url" : url,
					// 		"autostart" : false,
					// 		}).toMaster();
					// }

					for (var j=0; j<3;j++) {
						var url = "./SolfedgeSamplesMp3/" + (d.midiPitch + 12*j) + '_' + d.Solfa + ".mp3"
						d.playerSolfa[j] = new Audio(url);
						d.playerSolfa[j].preload = 'auto';
						// d.playerSolfa[j].load();
					}


					}	
				else {			//black keys 
					var normsector = (i+position)/7. 
					//console.log( i, mod( position + i-1  ,7))
					if ( mod( position +i-1  ,7) > 4 ){ 
							d.active	= false
							d.nLiteral 	= ""
							d.Literal 	= ""
							d.midiPitch = ""
							}
					else {
							d.active	= true
							d.nLiteral 	= mod( i - Math.floor( (i+position)/7. ) , 12 )
							d.Literal 	= pitchNotes[d.nLiteral]
							d.midiPitch = 50 + d.nLiteral
							if (d.midiPitch < basePitch) {d.midiPitch+=12}
							//if (i<rootSector) d.midiPitch -=12;
					}
					}	
				})

			}




}


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
	.text(function(d){return solfaNotes[d%12]})
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


Signatures ={}
Signatures[-5]={flats: ['B','E','A','D','G'], sharps: []}
Signatures[-4]={flats: ['B','E','A','D'], sharps: []}
Signatures[-3]={flats: ['B','E','A'], sharps: []}
Signatures[-2]={flats: ['B','E'], sharps: []}
Signatures[-1]={flats: ['B'], sharps: []}
Signatures[0]={flats: [], sharps: []}
Signatures[1]={flats: [], sharps: ['F']}
Signatures[2]={flats: [], sharps: ['F','C']}
Signatures[3]={flats: [], sharps: ['F','C','G']}
Signatures[4]={flats: [], sharps: ['F','C','G','D']}
Signatures[5]={flats: [], sharps: ['F','C','G','D','A']}
Signatures[6]={flats: [], sharps: ['F','C','G','D','A','E']}


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


console.log("Here I am")


