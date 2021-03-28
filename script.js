myAudio = new Audio('tiktik.mp3');

myAudio.loop = true;

setInterval(function(){
  var date=new Date();
  var second=date.getSeconds();
  var minute=date.getMinutes();
  var hour=date.getHours();
  hour=hour%12;
  var hrotation=hour*30+minute/2;
  var mrotation=minute*6;
  var srotation=second*6;
  $(".minute").css("transform","rotate("+mrotation+"deg)");
  $(".second").css("transform","rotate("+srotation+"deg)");
  $(".hour").css("transform","rotate("+hrotation+"deg)");
},1000);
var flag=0;
$("body").click(function(){
  if(flag==0){  myAudio.play();flag=1;}
  else { myAudio.pause();flag=0;}

  console.log("clicked");
});
