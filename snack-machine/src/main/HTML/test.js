 
var x = 0.60; 
var y = 0.80 ; 
var z = 1.20 ; 
var w = 0.30 ; 


	document.getElementById("t1").innerHTML = x + "JD";
	document.getElementById("t2").innerHTML = y + "JD";
	document.getElementById("t3").innerHTML = z + "JD";	
	document.getElementById("t4").innerHTML = w + "JD";
	
//===============================================================

function getAllData(){
	var price=prompt("pay here the price");
if (price==0.60) {
	alert("you'r going to buy chewig gum");
	document.getElementById("aa").innerHTML="please receive your order ,, thanks for purchasing from us";
	

} 

else {
	
	document.getElementById("aa").innerHTML="the Amount : " + price + " does not match the requested amount ,, please try again ... ";
} 

}
//==============================================================
function getAllData1(){
	var price1=prompt("pay here the price");
if (price1==0.80) {
		alert("you'r going to buy chips");
	document.getElementById("bb").innerHTML="please receive your order ,, thanks for purchasing from us";

} 

else {
	
	document.getElementById("bb").innerHTML="the Amount : " + price1 + " does not match the requested amount ,, please try again ... ";
} 

}
//=============================================================
function getAllData2(){
	var price2=prompt("pay here the price");
if (price2==1.20) {
		alert("you'r going to buy chockolate");
	document.getElementById("cc").innerHTML="please receive your order ,, thanks for purchasing from us";

} 

else {
	
	document.getElementById("cc").innerHTML="the Amount : " + price2 + " does not match the requested amount ,, please try again ... ";
} 

}
//===========================================================
function getAllData3(){
	var price3=prompt("pay here the price");
if (price3==0.30) {
		alert("you'r going to buy water");
	document.getElementById("dd").innerHTML="please receive your order ,, thanks for purchasing from us";

} 

else {
	
	document.getElementById("dd").innerHTML="the Amount : " + price3 + " does not match the requested amount ,, please try again ... ";
} 

}