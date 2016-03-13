var medalEnter = document.getElementById("insertmedal");
var result = document.getElementById("result");
var number = document.getElementById("medal2");
var anemyImg1 = document.getElementsByClassName("anemyImg1");

document.getElementById("x2num").style.display = "none";
document.getElementById("x3num").style.display = "none";
document.getElementById("betlump1").style.display = "none";
document.getElementById("betlump2").style.display = "none";
document.getElementById("betlump3").style.display = "none";

var kakenum = 0;
var kakekin = 0;
var mflg = 0;

var hand = new Array("../image/gu-.png","../image/tyoki.png","../image/pa-.png");


medalEnter.onclick = function() {
	
	//メダルの枚数が0になったら事実上ゲームオーバー。再度メダルを入れないとゲームが始まらなくなる。
	if (number.innerHTML == 0) {
		result.innerHTML = "メダルがありませんページをリロードしてください"; 
		end
	}

	if (kakenum == 3) {
		result.innerHTML = "掛け金はすでに上限に達しています"; 
		end
	}

	if (kakenum == 0) {
		document.getElementById("x1num").style.display = "block";
		document.getElementById("x2num").style.display = "none";
		document.getElementById("x3num").style.display = "none";
		document.getElementById("betlump2").style.display = "none";
		document.getElementById("betlump3").style.display = "none";
	}

	number.innerHTML -= 1;
	kakenum++;
	kakekin++;
	mflg++;

	if (kakenum == 1) {
		document.getElementById("betlump1").style.display = "block";
		jankenman();
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
function choose(btn) {
	if(kakenum > 0) {
		clearTimeout(jankenman);
		anemyh = Math.floor(Math.random() * 3);
		document.getElementById("anemy1").innerHTML = "<img src='" + hand[anemyh] + "'>";
	}

	
	if (btn == 0 && anemyh == 0 || btn == 1 && anemyh == 1 || btn == 2 && anemyh == 2) {
		result.innerHTML = "あいこ";
		window.setTimeout(jankenman, 2000 )
		
	}
	if (btn == 0 && anemyh == 1 || btn == 1 && anemyh == 2 || btn == 2 && anemyh == 0) {
		result.innerHTML = "勝ち";
		anemyh = null;
		btn = null;
		
		var winList = document.getElementById("feverList");
		var child = winList.getElementsByTagName("li");
		var childNum = child.length;
		var timer = null;
		clearTimeout(jankenman);
		var selected = 0;
		kakekin = 0;
		kakenum = 0;

		function loopstart() {
			var timer = setInterval(function() {
				selected++;
				if (selected > childNum - 1) {
					selected = 0;
				}
				var listID = document.getElementById("list" + (selected));
				var listPlus = document.getElementById("list" + (selected + 1));
				if (selected == 11) {
					var listPlus = document.getElementById("list0");
				}
				listID.className = "";
				listPlus.className = "activeMedal";
			}, 50);
			var randomNum = Math.floor(Math.random() * 4000 + 3000);
			setTimeout(function() {
				clearInterval(timer);
				var getMedal = document.getElementsByClassName("activeMedal")[0].innerHTML;
				getMedal = parseInt(getMedal, 10);
				var presentMedal = parseInt(number.innerHTML, 10);
				if (mflg == 1){
				number.innerHTML = (presentMedal + getMedal);
				}
				if (mflg == 2){
					number.innerHTML = (presentMedal + getMedal*2 );
				}
				if (mflg == 3){
					number.innerHTML = (presentMedal + getMedal*3 );
				}
				mflg = 0;
			}, randomNum);
		};//end loopstart();
		setTimeout(function() {
			loopstart();
		}, 100);
	}
	if (btn == 0 && anemyh == 2 || btn == 1 && anemyh == 0 || btn == 2 && anemyh == 1) {
		result.innerHTML = "負け";
		anemyh = null;
		btn = null;
		kakenum = 0;
		mflg = 0;
		clearTimeout(jankenman);
	}
}


function jankenman() {
	var target = document.getElementById("anemy1");
	var images = target.getElementsByTagName("img");
	var i, imgs = [];
	for (i=0; i<images.length; i++) imgs[i] = images[i];
	setInterval(function(){
　		shaffle(imgs);
　		for(var i=0; i<imgs.length; i++) target.appendChild(imgs[i]);
	}, 80);

	function shaffle(a){
　	var n = a.length;
　		while(n){
　　		var j = Math.random()*n | 0;
　　		var t = a[--n];
　　		a[n] = a[j];
　　		a[j] = t;
　		}
	}

}
