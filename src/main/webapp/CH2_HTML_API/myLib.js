function convert(time){
	var mins = parseInt(time/60);
	var secs = parseInt(time%60);
	//if(secs < 10) secs = "0"+secs;
	secs = secs < 10 ? "0"+secs:secs;
	return mins+":"+secs;
}