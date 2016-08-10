"usestrict";

//Display current time
var d, h, m, s, color, timeFormat;
var button1HasBeenClicked = false;
var button2HasBeenClicked = false;
function displayTime() {
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	if (h < 10) {
		h = '0' + h;
	}
	if (m < 10) {
		m = '0' + m;
	}
	if (s < 10) {
		s = '0' + s;
	}

	color = "#" +h+m+s;
	timeFormat = h + ':' + m + ':' + s;
	document.body.style.background = color;

	if (!button1HasBeenClicked && !button2HasBeenClicked) {
		document.getElementById('time').innerHTML = timeFormat;
	} else if (button1HasBeenClicked && !button2HasBeenClicked) {
		document.getElementById('time').innerHTML = timeFormat;
	} else if (button2HasBeenClicked && !button1HasBeenClicked) {
		document.getElementById('time').innerHTML = color;
	}
	

	setTimeout(displayTime,1000);
}
document.getElementById('button1').addEventListener("click", function(){
		document.getElementById('time').innerHTML = timeFormat;
		button1HasBeenClicked = true;
		button2HasBeenClicked = false;
	});
	document.getElementById('button2').addEventListener("click", function(){
		document.getElementById('time').innerHTML = color;
		button2HasBeenClicked = true;
		button1HasBeenClicked = false;
	});
displayTime();