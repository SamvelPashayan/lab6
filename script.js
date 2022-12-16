let count=0;
function z1(){
  alert("Дратути :)");
}

function z2(){
  let p=document.getElementById("textinput");
  p.value="НовыйТекст";
}

function z3(){
  let p=document.getElementById("textinput");
  alert(p.value);
}
function z4(){
  let p=document.getElementById("textinput2");
  let x=p.value;
  alert(x*x);
}

function z5(){
  let p=document.getElementById("textinput2").value;
  document.getElementById("textinput2").value=document.getElementById("textinput").value;
  document.getElementById("textinput").value=p;
}

function z6(){
  document.getElementById("butt6").innerText="НовыйТекст";
}

function z7(){
  let p=document.getElementById("textinput2").style.color="blue";
}

function z8_1(){
  document.getElementById("textinput2").disabled=true;
}

function z8(){
  document.getElementById("textinput2").disabled=false;
}

function z9(){
  alert("Вы навели мышку на кнопку, а теперь видите результат работы alert");
}

function z10(){
  alert("Вы нажали на кнопку два раза, это еще один прикол использования alert :)");
}

function z12(){
  let img = document.getElementById("img");
  img.src="dog.jpg";
}

function z13(){
  alert("Ура, вы нажали на кнопку");
}

function z14(){
  document.getElementById("textinput2").value="Привет!";
}



function z15(){
  document.getElementById("butt15").disabled=true;
  alert("Кнопка Заблокирована");
}

function z16(){
  count++;
  idfirst.innerText=count;
}

function z17(){
  document.getElementById("butt17").style.cursor = "crosshair";
}

function z18(){
  document.getElementById("hide").style.display="none";
}

function z19(){
  document.getElementById("butt19").style.display="none";
}

function z20(){
  document.getElementById("calc").style.display="block";
}

function plus(){
  let num1=Number(document.getElementById("num1").value);
  let num2=Number(document.getElementById("num2").value);
  idfirst2.innerText=num1+num2;
}
function minus(){
  let num1=Number(document.getElementById("num1").value);
  let num2=Number(document.getElementById("num2").value);
  idfirst2.innerText=num1-num2;
}
function mult(){
  let num1=Number(document.getElementById("num1").value);
  let num2=Number(document.getElementById("num2").value);
  idfirst2.innerText=num1*num2;
}
function div(){
  let num1=Number(document.getElementById("num1").value);
  let num2=Number(document.getElementById("num2").value);
  idfirst2.innerText=num1/num2;
}