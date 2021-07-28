// LIMAS
function luas(){
   var a = parseInt(document.getElementById("luasA").value);
   var b = parseInt(document.getElementById("luasS").value);
   var c = a + b;
   document.getElementById("hasil").innerHTML = c;
}

function volume(){
   var a = parseInt(document.getElementById("luasa").value);
   var b = parseInt(document.getElementById("luasT").value);
   var c = a * b*1/3;
   document.getElementById("hasilv").innerHTML = c;
}

function reset1(){
   document.getElementById("luasA").value = "";
   document.getElementById("luasS").value = "";
   document.getElementById("hasil").innerHTML = "";
}

function reset2(){
   document.getElementById("luasa").value = "";
   document.getElementById("luasT").value = "";
   document.getElementById("hasilv").innerHTML = "";
}

// BOLA
function luasbola(){
   var a = parseInt(document.getElementById("r2").value);
   var b = Math.pow(2,a);
   c = b * 4 * 3.14;
   document.getElementById("luasbola").innerHTML = c;
}

function resetbola(){
   document.getElementById("r2").value="";
   document.getElementById("luasbola").innerHTML="";
}

function volumebola(){
   var a = parseInt(document.getElementById("r3").value);
   var b = Math.pow(3,a);
   c = b * 4/3 * 3.14;
   document.getElementById("volbola").innerHTML = c;
}

function resetbola2(){
   document.getElementById("r3").value="";
   document.getElementById("volbola").innerHTML="";
}

// KUBUS
function luaskubus(){
   var a = parseInt(document.getElementById("SK1").value);
   var b = 6 * (a*a);
   document.getElementById("luaskubus").innerHTML = "Luas Kubus Adalah: " + b;
}

function resetk1(){
   document.getElementById("SK1").value = "";
   document.getElementById("luaskubus").innerHTML = "";
}

function volumekubus(){
   var a = parseInt(document.getElementById("SK2").value);
   var b = a * a * a;
   document.getElementById("volumek1").innerHTML = "Volume Kubus Adalah: " + b;
}

function resetk2(){
   document.getElementById("SK2").value="";
   document.getElementById("volumek1").innerHTML="";
}

function kelkubus(){
   var a = parseInt(document.getElementById('SK3').value);
   var b = 12 * a;
   document.getElementById("kelkubus").innerHTML = "Keliling Kubus Adalah: " + b;
}

function resetk3(){
   document.getElementById('kelkubus').innerHTML = "";
   document.getElementById('SK3').value = "";
}

// BALOK
function luasbalok(){
   var a = parseInt(document.getElementById("pb1").value);
   var b = parseInt(document.getElementById("lb1").value);
   var c = parseInt(document.getElementById("tb1").value);
   d = 2 * ((a*b) + (a*c) + (b*c));
   document.getElementById("luasbalok").innerHTML = 'Luas Balok Adalah: ' + d;
}

function resetb1(){
   document.getElementById('luasbalok').innerHTML="";
   document.getElementById('pb1').value="";
   document.getElementById('lb1').value="";
   document.getElementById('tb1').value="";
}

function volumebalok(){
   var a = parseInt(document.getElementById("pb2").value);
   var b = parseInt(document.getElementById("lb2").value);
   var c = parseInt(document.getElementById("tb2").value);
   d = a * b * c;
   document.getElementById("volumebalok").innerHTML = 'Volume Balok Adalah: ' + d;
}

function resetb2(){
   document.getElementById('volumebalok').innerHTML="";
   document.getElementById('pb2').value="";
   document.getElementById('lb2').value="";
   document.getElementById('tb2').value="";
}

function kelbalok(){
   var a = parseInt(document.getElementById("pb3").value);
   var b = parseInt(document.getElementById("lb3").value);
   var c = parseInt(document.getElementById("tb3").value);
   d = 4 * (a*b*c);
   document.getElementById("kelbalok").innerHTML = 'Volume Balok Adalah: ' + d;
}

function resetb3(){
   document.getElementById('kelbalok').innerHTML="";
   document.getElementById('pb3').value="";
   document.getElementById('lb3').value="";
   document.getElementById('tb3').value="";
}

// MEAN
function meann(){
   var a = parseInt(document.getElementById('n1').value);
   var b = parseInt(document.getElementById('n2').value);
   var c = parseInt(document.getElementById('n3').value);
   var d = parseInt(document.getElementById('n4').value);
   var e = parseInt(document.getElementById('n5').value);
   var f = (a + b + c + d + e) / 5;
   document.getElementById('hasilmean').innerHTML = 'Mean dari nilai tersebut adalah: ' + f;
}

function resetmeann(){
   document.getElementById('hasilmean').innerHTML = '';
   document.getElementById('n1').value='';
   document.getElementById('n2').value='';
   document.getElementById('n3').value='';
   document.getElementById('n4').value='';
   document.getElementById('n5').value='';
}