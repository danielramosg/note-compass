// TO DO: use unicode characters for flat and sharp
// ♭   &#9837;   &flat;
// ♮   &#9838;   &natural;
// ♯   &#9839;   &sharp;


// Midi n.  Note          Frequency
// 72	      C5	          523.25
// 71	      B4            493.88
// 70	      A#4/Bb4       466.16
// 69	      A4            440.00
// 68	      G#4/Ab4       415.30
// 67	      G4            392.00
// 66	      F#4/Gb4       369.99
// 65	      F4            349.23
// 64	      E4            329.63
// 63	      D#4/Eb4       311.13
// 62	      D4            293.66
// 61	      C#4/Db4       277.18
// 60	      C4 (middle)   261.63
// 59	      B3            246.94
// 58	      A#3/Bb3       233.08
// 57	      A3            220.00
// 56	      G#3/Ab3       207.65
// 55	      G3	          196.00
// 54	      F#3/Gb3       185.00
// 53	      F3	          174.61
// 52	      E3	          164.81
// 51	      D#3/Eb3       155.56
// 50	      D3            146.83
// 49	      C#3/Db3       138.59
// 48	      C3	          130.81
// 47	      B2	          123.47
// 46	      A#2/Bb2       116.54
// 45	      A2	          110.00
// 44	      G#2/Ab2       103.83
// 43	      G2	          98.00
// 42	      F#2/Gb2       92.50
// 41	      F2	          87.31
// 40	      E2	          82.41
// 39	      D#2/Eb2       77.78
// 38	      D2	          73.42
// 37	      C#2/Db2       69.30
// 36	      C2	          65.41

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


pitchNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

solfaNotes = ["fa", "do", "so", "re", "la", "mi", "ti", "fi &nbsp; sa", "di &nbsp; ra", "si &nbsp; lo", "ri &nbsp; ma", "li &nbsp; ta" ];

solfaNotesFile = ["Fa", "Do", "So", "Re", "La", "Mi", "Ti", "", "", "", "", "" ]; //for mp3 filenames

modeNames = [
{name:"lydian", color:"black", fullname:"Lydian", pattern:"2,2,2,1,2,2,1"},
{name:"ionian", color:"white", fullname:"Ionian", pattern:"2,2,1,2,2,2,1"},
{name:"mixolyd.", color:"black", fullname:"Mixolydian", pattern:"2,2,1,2,2,1,2"},
{name:"dorian", color:"black", fullname:"Dorian", pattern:"2,1,2,2,2,1,2"},
{name:"aeolian", color:"white", fullname:"Aeolian", pattern:"2,1,2,2,1,2,2"},
{name:"phrygian", color:"black", fullname:"Phrygian", pattern:"1,2,2,2,1,2,2"},
{name:"locrian", color:"grey", fullname:"Locrian", pattern:"1,2,2,1,2,2,2"}
];

degRoles = ["Tonic", "Supertonic", "Mediant", "Subdominant", "Dominant", "Submediant", "Leading"];

////// Scale Object
// Scale is an array of 14 items, coresponding to the 14 sectors on the wheel. Each item is an object with the following attributes:
 // - id: an id number, from 0 to 13.
 // - active: true if the sector is selected by one spoke of the star.
 // - type: white / black, this is a fixed attribute.
 // - sectorSize: in multiples of the step angle 360/84, fixed attribute.
 // - sectorColor: fixed attribute.
 // - nSolfa
 // - Solfa
 // - nLiteral
 // - Literal
 // - midiPitch
 // - solfaBuffer

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
				d.sector = i;
				if (i%2 == 0) {			//white keys
					d.active	= true
					d.nSolfa 	= mod(i+position,7)
					d.Solfa 	= solfaNotesFile[d.nSolfa]
					d.nLiteral 	= mod( i - Math.floor( (i+position)/7.0 ) , 12 )
					//d.nLiteral = scale[i/2]
					d.Literal 	= pitchNotes[d.nLiteral]
					d.midiPitch = 36 + d.nLiteral

					if (i==0) basePitch = d.midiPitch
					if (d.midiPitch < basePitch) {d.midiPitch+=12}

        }
        else {			//black keys
        	var normsector = (i+position)/7.0
					//console.log( i, mod( position + i-1  ,7))
					if ( mod( position +i-1  ,7) > 4 ){
							d.active	= false
							d.nLiteral 	= ""
							d.Literal 	= ""
							d.midiPitch = ""
          }
          else {
							d.active	= true
							d.nLiteral 	= mod( i - Math.floor( (i+position)/7.0 ) , 12 )
							d.Literal 	= pitchNotes[d.nLiteral]
							d.midiPitch = 50 + d.nLiteral
							if (d.midiPitch < basePitch) {d.midiPitch+=12}
							//if (i<rootSector) d.midiPitch -=12;
					}
				}
				})
			}
}

function getMode(){
    mode = TkData.filter(function(m){return m.indices.includes(mod(position,84)) } )[0];
}

// WhiteScale = Scale.notes.filter(function(d){return d.type=="white"}) //Only need to run once.

WhiteScaleLine =[]

function makeWhiteScaleLine(N) {
  for (var i=0; i<N; i++){
    var obj = Object.assign({},WhiteScale[mod(i,7)])
    obj.id = i;
    obj.octave = Math.floor(i/7);
    obj.midiPitch = obj.midiPitch + 12*Math.floor(i/7);
    obj.solfaBuffer =  audioBuffers[obj.midiPitch + '_' + obj.Solfa ];
    WhiteScaleLine.push(obj);
  }
}
