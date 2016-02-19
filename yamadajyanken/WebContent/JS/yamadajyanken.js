var medalEnter = document.getElementById("insertmedal");
var result = document.getElementById("result");
var number = document.getElementById("medal2");
var anemyImg1 = document.getElementsByClassName("anemyImg1");

document.getElementById("x2num").style.display = "none";
document.getElementById("x3num").style.display = "none";
document.getElementById("betlump1").style.display = "none";
document.getElementById("betlump2").style.display = "none";
document.getElementById("betlump3").style.display = "none";

var kflg0 = false;
var kflg1 = false;
var kflg2 = false;
var kflg3 = false;
var kflg4 = false;
var kflg5 = false;
var kflg6 = false;
var kflg7 = false;
var kflg8 = false;
var kflg9 = false;
var kflg10 = false;
var kflg11 = false;

window.onload = function() {
	if (kflg0 == false){
		document.getElementById("kaiten").style.display = "none";
	}
	if (kflg1 == false){
		document.getElementById("kaiten1").style.display = "none";
	}
	if (kflg2 == false){
		document.getElementById("kaiten2").style.display = "none";
	}
	if (kflg3 == false){
		document.getElementById("kaiten3").style.display = "none";
	}
	if (kflg4 == false){
		document.getElementById("kaiten4").style.display = "none";
	}
	if (kflg5 == false){
		document.getElementById("kaiten5").style.display = "none";
	}
	if (kflg6 == false){
		document.getElementById("kaiten6").style.display = "none";
	}
	if (kflg7 == false){
		document.getElementById("kaiten7").style.display = "none";
	}
	if (kflg8 == false){
		document.getElementById("kaiten8").style.display = "none";
	}
	if (kflg9 == false){
		document.getElementById("kaiten9").style.display = "none";
	}
	if (kflg10 == false){
		document.getElementById("kaiten10").style.display = "none";
	}
	if (kflg11 == false){
		document.getElementById("kaiten11").style.display = "none";
	}
}

var kakenum = 0;
var kakekin = 0;

hand = new Array("gu-.png","tyoki.png","pa-.png");


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
		kakenum = 0;
		rukaiten();
	}
	if (btn == 0 && anemyh == 2 || btn == 1 && anemyh == 0 || btn == 2 && anemyh == 1) {
		result.innerHTML = "負け";
		anemyh = null;
		btn = null;
		kakenum = 0;
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

function rukaiten() {
	
	if (kflg0 == false) {
		document.getElementById("kaiten").style.display = "block";
		kflg0 == true;
	}
	
	if (kflg0 == true) {
		document.getElementById("kaiten1").style.display = "block";
		document.getElementById("kaiten").style.display = "none";
		kflg1 = true;
		kflg0 = false;
	}
	if (kflg1 == true) {
		document.getElementById("kaiten2").style.display = "block";
		document.getElementById("kaiten1").style.display = "none";
		kflg2 = true;
		kflg1 = false;
	}
	if (kflg2 == true) {
		document.getElementById("kaiten3").style.display = "block";
		document.getElementById("kaiten2").style.display = "none";
		kflg3 = true;
		kflg2 = false;
	}
	if (kflg3 == true) {
		document.getElementById("kaiten4").style.display = "block";
		document.getElementById("kaiten3").style.display = "none";
		kflg4 = true;
		kflg3 = false;
	}
	if (kflg4 == true) {
		document.getElementById("kaiten5").style.display = "block";
		document.getElementById("kaiten4").style.display = "none";
		kflg5 = true;
		kflg4 = false;
	}
	if (kflg5 == true) {
		document.getElementById("kaiten6").style.display = "block";
		document.getElementById("kaiten5").style.display = "none";
		kflg6 = true;
		kflg5 = false;
	}
	if (kflg6 == true) {
		document.getElementById("kaiten7").style.display = "block";
		document.getElementById("kaiten6").style.display = "none";
		kflg7 = true;
		kflg6 = false;
	}
	if (kflg7 == true) {
		document.getElementById("kaiten8").style.display = "block";
		document.getElementById("kaiten7").style.display = "none";
		kflg8 = true;
		kflg7= false;
	}
	if (kflg8 == true) {
		document.getElementById("kaiten9").style.display = "block";
		document.getElementById("kaiten8").style.display = "none";
		kflg9 = true;
		kflg8 = false;
	}
	if (kflg9 == true) {
		document.getElementById("kaiten10").style.display = "block";
		document.getElementById("kaiten9").style.display = "none";
		kflg10 = true;
		kflg9 = false;
	}
	if (kflg10 == true) {
		document.getElementById("kaiten11").style.display = "block";
		document.getElementById("kaiten10").style.display = "none";
		kflg11 = true;
		kflg10 = false;
	}
	if (kflg11 == true) {
		document.getElementById("kaiten").style.display = "block";
		document.getElementById("kaiten11").style.display = "none";
		kflg0 = true;
		kflg11 = false;
	}
}
