var d1=document.getElementById("1");
var d2=document.getElementById("2")
var d3=document.getElementById("3")
var d4=document.getElementById("4")
var d5=document.getElementById("5")
var d6=document.getElementById("6")
var d7=document.getElementById("7")
var d8=document.getElementById("8")
var d9=document.getElementById("9")

 fillData = () => {
  let ele1 = document.getElementById('1_3');
  ele1.innerHTML = '&#9823;';
  let  ele2 = document.getElementById('2_3');
  ele2.innerHTML = '&#9823;';
  let  ele3 = document.getElementById('3_3');
  ele3.innerHTML = '&#9823;';
  let  ele7 = document.getElementById('1_1');   
  ele7.innerHTML = '&#9817;';
  let  ele8 = document.getElementById('2_1');
  ele8.innerHTML = '&#9817;';
  let  ele9 = document.getElementById('3_1');
  ele9.innerHTML = '&#9817;';
 }
 

function allowDrop(ev) {
ev.preventDefault();
}
function dragStart(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}
function dragDrop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
}
function cplayer(ev)
{
  ev.preventDefault();
  document.getElementById("display").innerHTML = "It's player's 2 turn";
  checkwin();
}
function cplayer2(ev)
{
  ev.preventDefault();
  document.getElementById("display").innerHTML = "It's player's 1 turn";
  checkwin();
}

function checkwin()
{
 
if(d1.innerHTML==document.getElementById('1_3').innerHTML && d4.innerHTML ==document.getElementById('2_3').innerHTML && d7.innerHTML==document.getElementById('3_3').innerHTML)
{
  document.getElementById("display").innerHTML = "It's player's 1 win";

}
else if(d1.innerHTML=='&#9817' && d4.innerHtml =='&#9817' && d7.innerHTML=='&#9817')
{
  document.getElementById("display").innerHTML = "It's player's 2 win";
}
else if(d2.innerHTML==document.getElementById('1_3') && d5.innerHTML ==document.getElementById('2_3') && d8.innerHTML=='&#9823')
{
  document.getElementById("display").innerHTML = "It's player's 1 win";
}
else if(d2.innerHTML==document.getElementById('1_3') && d5.innerHTML =='&#9817' && d8.innerHTML=='&#9817')
{
  document.getElementById("display").innerHTML = "It's player's 2 win";
}
else if(d3.innerHTML==document.getElementById('1_3') && d6.innerHTML =='&#9823' &&  d9.innerHTML=='&#9823')
{
  document.getElementById("display").innerHTML = "It's player's 1 win";
}
else if(d3.innerHTML==document.getElementById('1_3') && d6.innerHTML =='&#9817' &&  d9.innerHTML=='&#9817')
{
  document.getElementById("display").innerHTML = "It's player's 2 win";
}
else if(d1.innerHTML==document.getElementById('1_3') && d5.innerHtml =='&#9823' && d9.innerHTML=='&#9823')
{
  document.getElementById("display").innerHTML = "It's player's 1 win";
}
else if(d1.innerHTML=='&#9817' && d5.innerHTML =='&#9817' && d9.innerHTML=='&#9817')
{
  document.getElementById("display").innerHTML = "It's player's 2 win";
}
else if(d3.innerHTML==document.getElementById('1_3') && d5.innerHTML =='&#9823' && d7.innerHTML=='&#9823')
{
  document.getElementById("display").innerHTML = "It's player's 1 win";
}
else if(d3.innerHTML=='&#9817' && d5.innerHTML=='&#9817' && d7.innerHTML=='&#9817')
{
  document.getElementById("display").innerHTML = "It's player's 2 win";
}
else if(d4.innerHtml==document.getElementById('1_3') && d5.innerHTML =='&#9823' && d6.innerHTML=='&#9823')
{
  document.getElementById("display").innerHTML = "It's player's 1 win";
}
else if(d4.innerHTML=='&#9817' && d5.innerHTML =='&#9817' && d6.innerHTML=='&#9817')
{
  document.getElementById("display").innerHTML = "It's player's 2 win";
}
else if(d7.innerHTML==document.getElementById('1_3') && d8.innerHTML =='&#9823' && d9.innerHTML=='&#9823')
{
  document.getElementById("display").innerHTML = "It's player's 1 win";

}
else if(d1.innerHTML=='&#9817' && d2.innerHTML =='&#9817' && d3.innerHTML=='&#9817')
{
  document.getElementById("display").innerHTML = "It's player's 2 win";
}
}
const reloadtButton = document. querySelector('#reload');

function reload() {
reload = location. reload();
}


reloadtButton. addEventListener('click', reload, false);

