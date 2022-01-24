
async function loadSVGstaff(){
const newsvg = await d3.svg("svg/staff.svg");
var svgNode = newsvg.getElementsByTagName("svg")[0];
document.getElementById("staff").appendChild(svgNode);
var innerSVG = d3.select("#staff").select("svg");
innerSVG.attr("width",450).attr("height",400);

updateStaff();
}


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
