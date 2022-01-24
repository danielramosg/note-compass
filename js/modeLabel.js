
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
