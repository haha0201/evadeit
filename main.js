/* important! for alignment, you should make things
 * relative to the canvas' current width/height.
 */
var canvas = document.getElementById('Game');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function draw() {
  ctx.fillStyle = "black";
  ctx.arc(200, 200, 15, 0, Math.PI * 2);
  ctx.fill();
}
