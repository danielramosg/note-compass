

// Draws path for an arc of circle ring
function sectorPath(theta, r, R){
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

function circleText(text, radius, angle, parent){
  var cnv = document.createElement("canvas").getContext('2d');
  cnv.font = '40px Palatino'
  var chars = text.split("");
  var origin =  angle - (cnv.measureText(text).width / radius * 180/Math.PI)/2;
  var pos = 0;
  chars.forEach((c) =>
        { var wid = cnv.measureText(c).width;
          var ang = wid/radius * 180/Math.PI;
          parent.append("text").text(c)
          .attr("text-anchor","middle")
          .attr("class","degRoles")
          .attr("transform", "rotate(" + (origin + pos + ang/2) +") translate(" + radius + ") rotate(90)");
          pos += ang;
        }
      )
}

function drawWheel(){
  Radius = 350;
  svg = d3.select("#wheel").append("svg")
            .attr("viewBox", "0 0 800 800")

  stepAngle = 360.0/84;

  // OUTER WHEEL (FIXED)
  outerWheel = svg.append("g");
  outerWheel.attr("transform", "translate(" + (Radius + 50) +','+ (Radius + 50) +") rotate(" + (-3.5*stepAngle) + ')' );

  outerWheel.append("circle")
  	.attr("r",Radius)
  	.attr("class","wheel");

  // The Scale array contains the data for each sector
  var sectorsMark = outerWheel.selectAll(".solfaMark")
  	.data(Scale.notes).enter()
  	.append("g").attr("class","sectorsMark")

  // DRAW SECTORS
  sectorsMark.append("g")
  	.append("path")
  		.attr("d",function(d,i) {return  i % 2 ==0 ? sectorPath(7*stepAngle,0,Radius) : sectorPath(5*stepAngle,0,Radius)	})
  		.attr("fill",function(d){return d.sectorColor})
  		.on("touchstart", function(d) {playStart(d,1) } )
  		.on("touchend", function(d) {playStop(d,1) } )

  // WRITE MODE NAMES (IN SECTOR 0)
  sectorsMark.filter(function(d,i) {return i==0} )
  	.append("g")
  	.selectAll(".modeName")
  	.data(modeNames).enter()
  	.append("text").text(function(d,i){return d.name })
  	.attr("fill",function(d,i){return d.color })
  	.attr("x",Radius-3)
  	.attr("text-anchor","end")
  	.attr("transform",function(d,i){return "rotate(" + ((i+1)*stepAngle-1) +')' });

  // TICK LINES FOR THE MODE NAMES IN SECTOR 0
  sectorsMark.filter(function(d,i) {return i==0} )
  	.selectAll(".solfaTick").data(d3.range(8)).enter()
  	.append("line")
  	.attr("x1",0.68*Radius).attr("y1",0)
  	.attr("x2",Radius).attr("y2",0)
  	.attr("class","solfaTick")
  	.attr("transform",function(d,i){return "rotate(" + (i*stepAngle) +')' });
  ;

  // NUMBERS ON COLORED SECTORS
  sectorsMark.filter(function(d,i) {return (i % 2 == 0 && i>0) } )
  	.append("text").text(function(d,i){return (i+2) })
  	.attr("text-anchor","middle")
  	.attr("transform", "rotate(" + (3.5*stepAngle) +") translate("+
      (0.89* Radius) +") rotate(90)"  )
  	.attr("class","scaleNumbers")

  // ROLES OF EACH DEGREE
  sectorsMark.filter(function(d,i) {return (i % 2 == 0) } )
    .each(function (d,i){
      circleText(degRoles[i], 1.04 * Radius, 3.5 * stepAngle, d3.select(this))});

  // sectorsMark.filter(function(d,i) {return (i % 2 == 0) } )
  //   .append("text").text(function(d,i){return degRoles[i] })
  // 	.attr("text-anchor","middle")
  // 	.attr("transform", "rotate(" + (3.5*stepAngle) +") translate("+
  //     (1.01* Radius) +") rotate(90)" )
  // 	.attr("class","degRoles")


  // PLACE SECTORS ON THEIR ROTATED POSITIONS
  sectorsMark.attr("transform",function(d,i){
  				return (i % 2 == 0) ?
  								"rotate(" + (-90+12*stepAngle*(i/2)) +')' :
  								"rotate(" + (-90+stepAngle* (12*((i-1)/2) +7)) +')'  }
  		)

  // SOLFA MARKS
  solfaMark = outerWheel.selectAll(".solfaMark")
  	.data(d3.range(84)).enter()
  	.append("g").attr("class","solfaMark")

  solfaMark.append("text")
  	.attr("x",function(d,i){var r = (d%12)/12 ; return (0.71 *r + 0.77 * (1-r) )*Radius })
  	.attr("y",0)
  	.html(function(d){return solfaNotes[d%12]})
  	.attr("transform",function(d,i){return "rotate(-1)" } );

  solfaMark.append("line")
  	.attr("x1",0.68*Radius).attr("y1",0)
  	.attr("x2",0.86*Radius).attr("y2",0)
  	.attr("class","wheel");

  solfaMark.attr("transform",function(d,i){return "rotate(" + (-90+stepAngle*(i+1)) +')' } );


  // INNER WHEEL (STAR)
  scaleWheel = outerWheel.append("g"); //inner

  scaleWheel.append("circle")
  	.attr("r",Radius)
    .attr("opacity",0)

  Star = scaleWheel.append("g")
  			.attr("class","star");

  scaleWheel.call(drag);

  updateStar();

  scaleWheel.attr("transform","rotate("+ ((position+0.5)*stepAngle) +')');

}



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


function updateStarText(data){
	//console.log(data)

	var noteMark = scaleWheel.selectAll(".noteMark").data(data);

	var newNoteMark = noteMark.enter()
		.append("g").attr("class","noteMark")

	newNoteMark.append("text");

	noteMark = noteMark.merge(newNoteMark)

	//console.log(noteMark)

	noteMark.select("text").text(function(d){return d})
		.attr("x",0.45*Radius)
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
  // var scores= Star.append("g")
  // 				.attr("class","score")


  // score_heights=[0,1,2,3,4,7,8,9,10,11]
  // score_heights.forEach(function(i){
  // 			scores.append("circle")
  // 			.attr("r",130+4*i)
  // 			})

}



drag = d3.drag()
				.on("start", dragstarted)
				.on("drag", dragged)
				.on("end", dragended)

function dragstarted(event){
		init_wheel_angle = (position + 0.5) * stepAngle;
		init_pointer_angle = Math.atan2(event.y, event.x)* 180/Math.PI;
}

function dragged(event){
		pointer_angle = Math.atan2(event.y, event.x)* 180/Math.PI;
    delta_pointer_angle = pointer_angle - init_pointer_angle;
    current_wheel_angle = init_wheel_angle + delta_pointer_angle;

		scaleWheel.attr("transform","rotate("+ current_wheel_angle +')');
		position = Math.round(current_wheel_angle/stepAngle - 0.5);

    //console.log(position);
    getMode();
    updateStarText(mode.all_note_names);
    updateStaff();
    updateModeLabel();
    //updateAll();

}

function dragended(event){
   updateAll();
}


/////////////// OLD INTERFACE //////////

function rotateScaleWheel(){
	scaleWheel.transition()
		.attr("transform","rotate("+ ((position+0.5)*stepAngle) +')');
	//setPlayers();
	Scale.setValues(position)

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


// d3.select("#upButton").on("click", rotateScaleWheelUp );
// d3.select("#downButton").on("click", rotateScaleWheelDown );
//
// d3.select("#upIcon").on("click", rotateScaleWheelUp );
// d3.select("#downIcon").on("click", rotateScaleWheelDown );
// d3.select("#reloadIcon").on("click", resetPosition );
