var medalEnter = document.getElementById("insertmedal");
var result = document.getElementById("result");
var number = document.getElementById("medal2");

document.getElementById("x2num").style.display = "none";
document.getElementById("x3num").style.display = "none";
document.getElementById("betlump1").style.display = "none";
document.getElementById("betlump2").style.display = "none";
document.getElementById("betlump3").style.display = "none";

var kakekin = 0;
var kakenum = 0;
var mflg = 0;
insertmedal.onclick = function() {
	//メダルの枚数が0になったら事実上ゲームオーバー。再度メダルを入れないとゲームが始まらなくなる。
	if (number.innerHTML == 0) {
		result.innerHTML = "メダルがありませんページをリロードしてください"; 
		end
	}

	if (kakekin == 3) {
		result.innerHTML = "掛け金はすでに上限に達しています"; 
		end
	}

	if (kakenum == 0) {
		document.getElementById("x1num").style.display = "block";
		document.getElementById("x2num").style.display = "none";
		document.getElementById("x3num").style.display = "none";
	}

	number.innerHTML -= 1;
	kakekin++;
	kakenum++;
	mflg++;

	if (kakekin == 1) {
		document.getElementById("betlump1").style.display = "block";
	}

	if (kakenum == 2) {
		document.getElementById("x1num").style.display = "none";
		document.getElementById("x2num").style.display = "block";
		document.getElementById("betlump2").style.display = "block";
	}
	if (kakenum == 3) {
		document.getElementById("x2num").style.display = "none";
		document.getElementById("x3num").style.display = "block";
		document.getElementById("betlump3").style.display = "block";
	}

}; 