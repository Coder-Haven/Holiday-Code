
var ball = document.getElementById('ball');
ball.style.left = window.innerWidth / 2 - 35 + "px";

var poll = document.getElementById('poll');
poll.style.left = window.innerWidth / 2 - 10 + "px";

var hh = document.getElementById("hh");
var coder = document.getElementById('coder');



ball.style.left = window.innerWidth / 2 - 25 + "px";
 poll.style.left = window.innerWidth / 2 - 2 + "px";

coder.style.left = window.innerWidth / 2 - 150 + 'px';

$(document).ready(function(){

  $(window).resize(function(){
    ball.style.left = window.innerWidth / 2 - 25 + "px";
    poll.style.left = window.innerWidth / 2 - 2 + "px";
  });
     
  });

var count = 10
var int = setInterval(function(){

  
  ball.innerHTML = count;
  count--;
  
  if(count < 0){
    ball.innerHTML = '';
    clearInterval(int);
    change();
    text();
  }
  
  
  
  
}, 1000)

function change(){
  document.body.style.backgroundColor = '#fff';
  $("#ball").hide();
  $("#poll").hide();
  $("#hh").show();
  $('#coder').show();
  
}

function text(){
  hh.style.display = 'block';
  hh.style.left = window.innerWidth / 2 - 175 + 'px'
}