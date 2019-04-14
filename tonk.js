const mod = (x, n) => (x % n + n) % n

TkData =[
{indices: [0, 36, 72, 24, 60, 12, 48], notes: ['C', 'G', 'D', 'A', 'E', 'B', 'F#'], signature: 1, all_note_names: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B']},  
{indices: [49, 1, 37, 73, 25, 61, 13], notes: ['F', 'C', 'G', 'D', 'A', 'E', 'B'], signature: 0, all_note_names: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B']},  
{indices: [14, 50, 2, 38, 74, 26, 62], notes: ['Bb', 'F', 'C', 'G', 'D', 'A', 'E'], signature: -1, all_note_names: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']}, 
{indices: [63, 15, 51, 3, 39, 75, 27], notes: ['Eb', 'Bb', 'F', 'C', 'G', 'D', 'A'], signature: -2, all_note_names: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']}, 
{indices: [28, 64, 16, 52, 4, 40, 76], notes: ['Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D'], signature: -3, all_note_names: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']}, 
{indices: [77, 29, 65, 17, 53, 5, 41], notes: ['Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G'], signature: -4, all_note_names: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb']}, 
{indices: [42, 78, 30, 66, 18, 54, 6], notes: ['Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C'], signature: -5, all_note_names: ['C', 'Db', 'D', 'Eb', 'Fb', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb']}, 
{indices: [7, 43, 79, 31, 67, 19, 55], notes: ['B', 'F#', 'C#', 'G#', 'D#', 'A#', 'E#'], signature: 6, all_note_names: ['B#', 'C#', 'Cx', 'D#', 'E', 'E#', 'F#', 'Fx', 'G#', 'A', 'A#', 'B']}, 
{indices: [56, 8, 44, 80, 32, 68, 20], notes: ['E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#'], signature: 5, all_note_names: ['B#', 'C#', 'D', 'D#', 'E', 'E#', 'F#', 'Fx', 'G#', 'A', 'A#', 'B']}, 
{indices: [21, 57, 9, 45, 81, 33, 69], notes: ['A', 'E', 'B', 'F#', 'C#', 'G#', 'D#'], signature: 4, all_note_names: ['B#', 'C#', 'D', 'D#', 'E', 'E#', 'F#', 'G', 'G#', 'A', 'A#', 'B']}, 
{indices: [70, 22, 58, 10, 46, 82, 34], notes: ['D', 'A', 'E', 'B', 'F#', 'C#', 'G#'], signature: 3, all_note_names: ['C', 'C#', 'D', 'D#', 'E', 'E#', 'F#', 'G', 'G#', 'A', 'A#', 'B']}, 
{indices: [35, 71, 23, 59, 11, 47, 83], notes: ['G', 'D', 'A', 'E', 'B', 'F#', 'C#'], signature: 2, all_note_names: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']}
];



mode = TkData[1]

////// Scale Object


var pitchNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var solfaNotes = ["fa", "do", "so", "re", "la", "mi", "ti", "", "", "", "", "" ];
var solfaNotesFile = ["Fa", "Do", "So", "Re", "La", "Mi", "Ti", "", "", "", "", "" ]; //for mp3 filenames



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
			var pitchNotes = mode.all_note_names;

			var rootSector= 2*Math.floor(position/12.) + ( position%12 > 6 ? 1 : 0);

			this.notes.forEach(function(d,i){ 
				d.id = i;
				if (i%2 == 0) {			//white keys
					d.active	= true		
					d.nSolfa 	= mod(i+position,7)
					d.Solfa 	= solfaNotesFile[d.nSolfa]
					d.nLiteral 	= mod( i - Math.floor( (i+position)/7. ) , 12 )
					d.Literal 	= pitchNotes[d.nLiteral]
					d.midiPitch = 60 + d.nLiteral
					if (i<rootSector) d.midiPitch -=12;
		
					var url = "./SolfedgeSamplesMp3/" + d.midiPitch + '_' + d.Solfa + ".mp3"
					d.playerSolfa = new Tone.Player({
						"url" : url,
						"autostart" : false,
						}).toMaster();
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
							d.midiPitch = 60 + d.nLiteral
							if (i<rootSector) d.midiPitch -=12;
					}
					}	
				})

			}


}




////// Wheel 

var height = 600;
var width = 900;


function sectorPath(theta, r, R){		//returns path for an arc of circle ring
	var s = Math.sin(theta*Math.PI/180);
	var c = Math.cos(theta*Math.PI/180);
	
	//return "M 50 0 L 100 0"
	 return "M"+ r +" 0 "
	 		+"L"+ R +" 0 "
	 		+"A"+ R +' '+ R +" 0 0 0 "+ R*c +' '+ -R*s 
	 		+" L"+ r*c +' '+ -r*s 
	 		+"A" + r +' '+ r +" 0 0 1 "+r +" 0";
}



var Radius = 299 



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

sectorsMark.append("path")
	.attr("d",function(d,i) {return  i % 2 ==0 ? sectorPath(7*stepAngle,0,Radius) : sectorPath(5*stepAngle,0,Radius)	})
	.attr("transform",function(d,i){
							return (i % 2 == 0) ? 
									"rotate(-" + 12*stepAngle*(i/2) +')' :
									"rotate(-" + (stepAngle* (12*((i-1)/2) +7)) +')'  }
			)
	.attr("fill",function(d){return d.sectorColor})
	.on("mousedown", playStart)
	.on("mouseup",playStop);



var synth = new Tone.Synth().toMaster();



function playStart(d,i){	
	d.playerSolfa.start();
	//synth.triggerAttackRelease(d.Literal+"4", "8n");
}

function playStop(d){
	d.playerSolfa.stop();
}

solfaMark = outerWheel.selectAll(".solfaMark")
	.data(d3.range(84)).enter()
	.append("g").attr("class","solfaMark")





solfaMark.append("text")	
	.attr("x",240)
	.attr("y",0)
	.text(function(d){return solfaNotes[d%12]})
	.attr("transform",function(d,i){return "rotate(-1)" } );

solfaMark.append("line")
	.attr("x1",220).attr("y1",0)
	.attr("x2",270).attr("y2",0)
	.attr("class","wheel");	

solfaMark.attr("transform",function(d,i){return "rotate(-" + stepAngle*(i) +')' } );






scaleWheel = outerWheel.append("g"); //inner



function star12 (radius){				//returns path for a 12-point star
	var theta = 360/12 * 7;
	var points=[];

	for (var i=0; i<12; i++) {
		var s = radius*Math.sin(i*theta*Math.PI/180);
		var c = radius*Math.cos(i*theta*Math.PI/180);
		//points.push({'x':c,'y':s});
		points.push([c,s]);
		}
		
	var lineFunction = d3.line()(points)
              
		
	return lineFunction + 'Z';
}

Star = scaleWheel.append("g")
			.attr("class","star");

			//.attr("d",star12(0.75*Radius))


function updateStar(){
	var radius = 0.75*Radius;
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



function updateStarText(data){
	//console.log(data)

	var noteMark = scaleWheel.selectAll(".noteMark").data(data);

	var newNoteMark = noteMark.enter()
		.append("g").attr("class","noteMark")
		
	newNoteMark.append("text");
	
	noteMark = noteMark.merge(newNoteMark)

	//console.log(noteMark)

	noteMark.select("text").text(function(d){return d})
		.attr("x",140)
		.attr("y",0)
		.attr("transform",function(d,i){return "rotate(2)" } );

	noteMark.attr("transform",function(d,i){return "rotate(-" + stepAngle*(7*i) +')' } );

}
			








var stepAngle = 360./84;

var position=1;
var mode = TkData.filter(function(m){return m.indices.includes(mod(position,84)) } )[0]


scaleWheel.attr("transform","rotate("+ (-(position+0.5)*stepAngle) +')');
//setPlayers();

Scale.setValues(position);

//scaleWheel.remove();








function rotateScaleWheel(){
	scaleWheel.transition()
		.attr("transform","rotate("+ (-(position+0.5)*stepAngle) +')');
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
}


function rotateScaleWheelUp(){
	position++;
	updateAll();	
}

function rotateScaleWheelDown(){
	position--;
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
		.attr("width",width)
		.attr("height",300);


function updateKeyboard(data){

var keys = svg2.selectAll("g").data(data);

//Exit selection			
	keys.exit()
			.remove();

	//Enter selection
	var newKey = keys.enter().append("g");

		
	newKey.append("rect")
				.style("stroke-width",2)
				.style("stroke","black")
				.on("click",function (d) {synth.triggerAttackRelease(Tone.Frequency(d.midiPitch,"midi"),"8n") } )
				.on("touchstart",function (d) {synth.triggerAttackRelease(Tone.Frequency(d.midiPitch,"midi"),"8n") } )
	
	newKey.append("text")
				.text(function (d) {return d.Literal})
				.attr("font-family", "sans-serif")
	            .attr("font-size", "20px")		
			
	newKey.append("path")
				.style("stroke-width",2)
				.style("stroke","black")
				.style("fill","none");
			
	// newKey.append("text");	
								
		
	//Update selection			
	keys = keys.merge(newKey);

		
	keys.select("rect")
				.attr("width",function (d) {return d.type=="white" ? 50 : 50 })
				.attr("height",function (d) {return d.type=="white" ? 250 : 150 })
				.style("fill",function (d) {return d.sectorColor})
				.attr("x", function(d,i) {return 55* i })
				.attr("y", 25);
	
	keys.select("text")
				.text(function (d) {return d.Literal})
				.attr("x", function(d,i) {return 15+ 55* i })
				.attr("y", 20)	

	
}




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

