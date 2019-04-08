const mod = (x, n) => (x % n + n) % n



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



scaleWheel.append("path")
			.attr("stroke-width",2).attr("stroke","green")
			.attr("d",star12(0.75*Radius))
			.attr("class","star");

noteMark = scaleWheel.selectAll(".noteMark")
	.data(pitchNotes).enter()
	.append("g").attr("class","noteMark")
	
// noteMark.append("path")	
// 	.attr("d","M200 0 L160 0")
// 	.attr("class","wheel");

noteMark.append("text")
	.attr("x",150)
	.attr("y",0)
	.text(function(d){return d})
	.attr("transform",function(d,i){return "rotate(2)" } );

noteMark.attr("transform",function(d,i){return "rotate(-" + stepAngle*(7*i) +')' } );


			



var stepAngle = 360./84;

var position=1;


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
	rotateScaleWheel()
	FullScale = Scale.notes.filter(function(d){return d.active})
	updateKeyboard(FullScale)
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
				.style("fill",function (d) {return d.type})
				.attr("x", function(d,i) {return 55* i })
				.attr("y", 25);
	
	keys.select("text")
				.text(function (d) {return d.Literal})
				.attr("x", function(d,i) {return 15+ 55* i })
				.attr("y", 20)	

	
}




///// staff

function updateStaff () {
WhiteScale = Scale.notes.filter(function(d){return d.type=="white"})

Literals = WhiteScale.map(function(d) {return d.Literal})

var letters=["F","C","G","D","A","E","B"]


letters.forEach(function(k){
	var sign = d3.select("#sharp-on-"+k)
	sign.attr("visibility","hidden")
	if ( Literals.includes(k+"#") ) {  sign.attr("visibility","visible")}
		else {sign.attr("visibility","hidden")}	
	})


}


updateAll()

