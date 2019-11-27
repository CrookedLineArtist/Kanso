

/* Shapes */
var svgContainer = document.getElementById('logo-animate');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
});