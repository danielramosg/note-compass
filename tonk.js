const mod = (x, n) => (x % n + n) % n


var height = 600;
var width = 800;


var player = new Tone.Player({
	"url" : "./SolfedgeSamplesMp3/36_Do.mp3",
	"autostart" : false,
}).toMaster();


function sectorPath(theta, r, R){
	var s = Math.sin(theta*Math.PI/180);
	var c = Math.cos(theta*Math.PI/180);
	
	//return "M 50 0 L 100 0"
	 return "M"+ r +" 0 "
	 		+"L"+ R +" 0 "
	 		+"A"+ R +' '+ R +" 0 0 0 "+ R*c +' '+ -R*s 
	 		+" L"+ r*c +' '+ -r*s 
	 		+"A" + r +' '+ r +" 0 0 1 "+r +" 0";
}

function star12 (radius){
	var theta = 360/12 * 7;
	var points=[];

	for (var i=0; i<12; i++) {
		var s = radius*Math.sin(i*theta*Math.PI/180);
		var c = radius*Math.cos(i*theta*Math.PI/180);
		//points.push({'x':c,'y':s});
		points.push([c,s]);
		}
		
		//console.log(points);

	var lineFunction = d3.line()(points)
              
		
	return lineFunction + 'Z';
}

var Radius = 299 



svg = d3.select("#applet").append("svg")
		.attr("width",width)
		.attr("height",height);
		
outerWheel = svg.append("g"); //outer

		
outerWheel.attr("transform", "translate(" + width/2 +','+ height/2 +')' );

var stepAngle = 360./84;

outerWheel.append("circle")
	.attr("r",Radius)
	.attr("class","wheel");



sectors = [
{"size": 7, "color": "rgb(234,75,53)"}, //red
{"size": 5, "color": "grey"},
{"size": 7, "color": "rgb(220,104,29)"}, //orange
{"size": 5, "color": "grey"},
{"size": 7, "color": "rgb(254,207,31)"}, //yellow
{"size": 5, "color": "grey"},
{"size": 7, "color": "rgb(149,171,96)"}, //lightgreen
{"size": 5, "color": "grey"},
{"size": 7, "color": "rgb(72,98,63)"}, //darkgreen
{"size": 5, "color": "grey"},
{"size": 7, "color": "rgb(46,85,114)"}, //navy
{"size": 5, "color": "grey"},
{"size": 7, "color": "rgb(82,112,174)"}, //blue
{"size": 5, "color": "grey"},
]

// RGBColor[234/256, 75/256, 53/256], RGBColor[220/256, 104/256, 29/256],
//   RGBColor[254/256, 207/256, 31/256], 
//  RGBColor[149/256, 171/256, 96/256], RGBColor[72/256, 98/256, 63/256],
//   RGBColor[46/256, 85/256, 114/256], 
//  RGBColor[82/256, 112/256, 174/256]}

// FontGrau = RGBColor[0.89, 0.89, 0.89]








sectorsMark = outerWheel.selectAll(".solfaMark")
	.data(sectors).enter()
	.append("g").attr("class","sectorsMark")

sectorsMark.append("path")
	.attr("d",function(d,i) {return  i % 2 ==0 ? sectorPath(7*stepAngle,0,Radius) : sectorPath(5*stepAngle,0,Radius)	})
	.attr("transform",function(d,i){
							return (i % 2 == 0) ? 
									"rotate(-" + 12*stepAngle*(i/2) +')' :
									"rotate(-" + (stepAngle* (12*((i-1)/2) +7)) +')'  }
			)
	.attr("fill",function(d){return d.color})
	.on("mousedown", playStart)
	.on("mouseup",playStop);


function setPlayers(){
	sectors.forEach(function (d,i) {
		if (i%2 == 1) {return 0}
		
		var solfaSelected = solfaNotesFile[mod(i+position,7)];

		//console.log(solfaSelected);
		
		//console.log(Math.floor(position/12.))
		//console.log(Math.floor(position-7.))
		//rootSector= 2*Math.floor(position/12.) + ( position%12 > 6 ? 1 : 0)

		var pitchSelected = mod( i - Math.floor( (i+position)/7. ) , 12 )
		
		//console.log(pitchNotes[pitchSelected])

		var midiNote = 36+pitchSelected;

		var url = "./SolfedgeSamplesMp3/" + midiNote + '_' + solfaSelected + ".mp3"
		
		d.player = new Tone.Player({
			"url" : url,
			"autostart" : false,
			}).toMaster();

	})


}



function playStart(d,i){	
	//console.log(player)
	d.player.start();
}

function playStop(d){
	d.player.stop();
}

solfaMark = outerWheel.selectAll(".solfaMark")
	.data(d3.range(84)).enter()
	.append("g").attr("class","solfaMark")


var solfaNotes = ["fa", "do", "so", "re", "la", "mi", "ti", "", "", "", "", "" ];
var solfaNotesFile = ["Fa", "Do", "So", "Re", "La", "Mi", "Ti", "", "", "", "", "" ]; //for mp3 filenames



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





var pitchNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

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


			
			
// 			.attr("d",sectorPath(20))
// 				.attr("stroke-width",2).attr("stroke","black").attr("fill", "none");



var stepAngle = 360./84;

// scaleWheel.selectAll("path")
// 			.data(d3.range(15)).enter()
// 			.append("path")
// 			.attr("stroke-width",2).attr("stroke","black")
// 			.attr("fill", function(d,i){return (i%2==0)? "white" : "black" })
// 			.attr("d", function(d,i) {return  i % 2 ==0 ? sectorPath(7*stepAngle,50,150) : sectorPath(5*stepAngle,50,150)	})
// 			.attr("transform", function(d,i){
// 							return (i % 2 == 0) ? 
// 									"rotate(-" + 12*stepAngle*(i/2) +')' :
// 									"rotate(-" + (stepAngle* (12*((i-1)/2) +7)) +')'  }
// 				 );
									
var position=0;


scaleWheel.attr("transform","rotate("+ (-(position+0.5)*stepAngle) +')');
setPlayers();


//scaleWheel.remove();








function rotateScaleWheel(){
	scaleWheel.transition()
		.attr("transform","rotate("+ (-(position+0.5)*stepAngle) +')');
	setPlayers();

}


//scaleWheel.attr("transform","rotate(0)");
			// .transition()
// 			.attr("transform","rotate("+5*stepAngle+")");

function rotateScaleWheelUp(){
	position++;
	rotateScaleWheel()
}

function rotateScaleWheelDown(){
	position--;
	rotateScaleWheel()
}

d3.select("#upButton").on("click", rotateScaleWheelUp );
d3.select("#downButton").on("click", rotateScaleWheelDown );




















