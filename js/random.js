
var arr = new Array();
var count = 0;
var mode = 0;

document.getElementById('mode-one').onclick = function() {
	mode = 42;
	document.getElementById('mode').innerHTML = "You're Playing 6 / 42!";
	document.getElementById('mode-one').style.display = 'none';
	document.getElementById('mode-two').style.display = 'none';
	document.getElementById('mode-three').style.display = 'none';
	document.getElementById('mode-four').style.display = 'none';
	document.getElementById('mode-five').style.display = 'none';
	document.getElementById('next').style.display = "block";
	document.getElementById('heading').style.display = "none";
}
document.getElementById('mode-two').onclick = function() {
	mode = 45;
	document.getElementById('mode').innerHTML = "You're Playing 6 / 45!";
	document.getElementById('mode-one').style.display = 'none';
	document.getElementById('mode-two').style.display = 'none';
	document.getElementById('mode-three').style.display = 'none';
	document.getElementById('mode-four').style.display = 'none';
	document.getElementById('mode-five').style.display = 'none';
	document.getElementById('next').style.display = "block";
}
document.getElementById('mode-three').onclick = function() {
	mode = 49;
	document.getElementById('mode').innerHTML = "You're Playing 6 / 49!";
	document.getElementById('mode-one').style.display = 'none';
	document.getElementById('mode-two').style.display = 'none';
	document.getElementById('mode-three').style.display = 'none';
	document.getElementById('mode-four').style.display = 'none';
	document.getElementById('mode-five').style.display = 'none';
	document.getElementById('next').style.display = "block";
}
document.getElementById('mode-four').onclick = function() {
	mode = 55;
	document.getElementById('mode').innerHTML = "You're Playing 6 / 55!";
	document.getElementById('mode-one').style.display = 'none';
	document.getElementById('mode-two').style.display = 'none';
	document.getElementById('mode-three').style.display = 'none';
	document.getElementById('mode-four').style.display = 'none';
	document.getElementById('mode-five').style.display = 'none';
	document.getElementById('next').style.display = "block";
}
document.getElementById('mode-five').onclick = function() {
	mode = 58;
	document.getElementById('mode').innerHTML = "You're Playing 6 / 58!";
	document.getElementById('mode-one').style.display = 'none';
	document.getElementById('mode-two').style.display = 'none';
	document.getElementById('mode-three').style.display = 'none';
	document.getElementById('mode-four').style.display = 'none';
	document.getElementById('mode-five').style.display = 'none';
	document.getElementById('next').style.display = "block";
}



document.getElementById('next').onclick = function (){
	var random = Math.floor((Math.random() * mode) + 1);


	if(arr.indexOf(random) < 1)
	{
		arr.push(random);
		document.getElementById('ball-container').innerHTML = random;
		document.getElementById('ball-container').style.background = '#FC575E';
		document.getElementById('lottery').innerHTML += "<li class=lottery-ball>" + random + "</li>";
		count++;
		// alert(count);
		if(count >= 6)
		{
			document.getElementById('next').style.display = "none";
			document.getElementById('reset').style.display = "block";
		}
	} else {
		alert(random + ' has already been picked, try again.');
	}

}

document.getElementById('reset').onclick = function () {
	location.reload();
}