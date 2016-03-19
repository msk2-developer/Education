//指定したＩＤのエレメントを取得
var medalEnter = document.getElementById("insertmedal");
var result = document.getElementById("result");
var number = document.getElementById("medal2");
var anemyImg1 = document.getElementsByClassName("anemyImg1");

//最初の画面でいらないものを非表示にする
document.getElementById("x2num").style.display = "none";
document.getElementById("x3num").style.display = "none";
document.getElementById("betlump1").style.display = "none";
document.getElementById("betlump2").style.display = "none";
document.getElementById("betlump3").style.display = "none";

//ルーレットの目を変えるための変数
var kakenum = 0;
//払い戻されるメダルを計算するために変数
var mflg = 0;
//ルーレット回転中にコインを投入できなくするための変数
var pflg = true;

//画像を配列
var hand = new Array("../image/gu-.png","../image/tyoki.png","../image/pa-.png");

//メダル投入口をクリックしたときにする動作
medalEnter.onclick = function() {
	
	//ルーレット回転中はここで処理が終わる
	if (pflg == false) {
		end
	}
	
	//メダルの枚数が0になったら事実上ゲームオーバー。再度メダルを入れないとゲームが始まらなくなる。
	if (number.innerHTML == 0) {
		result.innerHTML = "メダルがありませんページをリロードしてください"; 
		end
	}
	
	//掛け金上限に達したときの動作
	if (kakenum == 3) {
		result.innerHTML = "掛け金はすでに上限に達しています"; 
		end
	}
	//じゃんけん２回目以降に１枚コインを投入された状態の画面にする処理
	if (kakenum == 0) {
		document.getElementById("x1num").style.display = "block";
		document.getElementById("x2num").style.display = "none";
		document.getElementById("x3num").style.display = "none";
		document.getElementById("betlump2").style.display = "none";
		document.getElementById("betlump3").style.display = "none";
	}

    //メダル所持枚数を一枚減らす
	number.innerHTML -= 1;
	//処理を行うたびに変数に+1する
	kakenum++;
	mflg++;

	//コイン投入枚数によってルーレットの数字の表示非表示とbetランプの表示の処理を実行
	if (kakenum == 1) {
		document.getElementById("betlump1").style.display = "block";
		//jyankenmanを実行
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
//自分の出す手のボタンを押すと実行
function choose(btn) {
	//一枚でもメダルが投入されていればjyankenmanの動作を中止しじゃんけんが行われる
	if(kakenum > 0) {
		clearTimeout(jankenman);
		anemyh = Math.floor(Math.random() * 3);
		document.getElementById("anemy1").innerHTML = "<img src='" + hand[anemyh] + "'>";
	}

	//あいこの場合
	if (btn == 0 && anemyh == 0 || btn == 1 && anemyh == 1 || btn == 2 && anemyh == 2) {
		result.innerHTML = "あいこ";
		//()内で指定した時間後に処理を再開
		window.setTimeout(jankenman, 2000 )
		
	}
	//じゃんけんに勝った場合
	if (btn == 0 && anemyh == 1 || btn == 1 && anemyh == 2 || btn == 2 && anemyh == 0) {
		result.innerHTML = "勝ち";
		//anemyhとbtnを空にする（ボタンを連続で押すと連続で処理されてしまうため）
		anemyh = null;
		btn = null;
		pflg = false;
		
		//変数にfeverListをいれる
		var winList = document.getElementById("feverList");
		//変数にliをいれる
		var child = winList.getElementsByTagName("li");
		//変数にliの長さ（liの数）をいれる
		var childNum = child.length;
		var timer = null;
		//jankenmanの動作を中止
		clearTimeout(jankenman);
		var selected = 0;
		kakenum = 0;

		function loopstart() {
			//繰り返し処理
			var timer = setInterval(function() {
				selected++;
				if (selected > childNum - 1) {
					selected = 0;
				}
				//ルーレットの回転部分
				var listID = document.getElementById("list" + (selected));
				var listPlus = document.getElementById("list" + (selected + 1));
				//ルーレットの一番上の部分を表示するための処理
				if (selected == 11) {
					var listPlus = document.getElementById("list0");
				}
				listID.className = "";
				listPlus.className = "activeMedal";
			}, 50);
			//ルーレットをランダムで止める
			var randomNum = Math.floor(Math.random() * 4000 + 3000);
			setTimeout(function() {
				clearInterval(timer);
				var getMedal = document.getElementsByClassName("activeMedal")[0].innerHTML;
				//文字列を整数（１０進数）に
				getMedal = parseInt(getMedal, 10);
				var presentMedal = parseInt(number.innerHTML, 10);
				//払い出し枚数の計算
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
				pflg = true;
			}, randomNum);
		};
		//指定した時間にloopstartを実行
		setTimeout(function() {
			loopstart();
		}, 100);
		
	}
	//じゃんけんに負けた場合
	if (btn == 0 && anemyh == 2 || btn == 1 && anemyh == 0 || btn == 2 && anemyh == 1) {
		result.innerHTML = "負け";
		anemyh = null;
		btn = null;
		kakenum = 0;
		mflg = 0;
		clearTimeout(jankenman);
	}
}

//手の画像をシャッフルする処理
function jankenman() {
	//変数にanemy1をいれる
	var target = document.getElementById("anemy1");
	//変数にimgをいれる
	var images = target.getElementsByTagName("img");
	var i, imgs = [];
	for (i=0; i<images.length; i++) imgs[i] = images[i];
	setInterval(function(){
　		shaffle(imgs);
　		for(var i=0; i<imgs.length; i++)
　		//targetにimgs[i]を追加
　		target.appendChild(imgs[i]);
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

