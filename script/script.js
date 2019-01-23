function redirectStart(){
	if(document.getElementById("inputStart").value.toLowerCase() == "start"){
		window.location.href = 'https://hulliskoa.github.io/theGame/lvl1.html';
	}
}

function redirectLvl1(){
	if(document.getElementById("inputLvl1").value.toLowerCase() == "challenge"){
		window.location.href = 'https://hulliskoa.github.io/theGame/lvl2.html';
	}
}


function redirectLvl2(){
	var input = document.getElementById("inputLvl1").value.toLowerCase();
	if( input == "learn" || input == "block" || input == "escape"){
		window.location.href = 'https://hulliskoa.github.io/theGame/lvl3.html';
	}
}

function redirectLvl3(){
	var input = document.getElementById("inputLvl1").value.toLowerCase();
	if( input == "learn" || input == "block" || input == "escape"){
		window.location.href = 'https://hulliskoa.github.io/theGame/lvl4.html';
	}
}

function redirectLvl4(){
	if(document.getElementById("inputLvl1").value.toLowerCase() == "gameified"){
		window.location.href = 'https://hulliskoa.github.io/theGame/final.html';
	}
}

