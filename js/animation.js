

/* Shapes */
var svgContainer = document.getElementById('logo-animate');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: '/js/data.json'
});

animItem.setSpeed(1);



var myVideo = document.getElementById("video1"); 

function playPause(){
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
}