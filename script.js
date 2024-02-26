/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("TimesNewRoman");
}
function draw() {
  background(200);
  textSize(16);
  text("focus on...", 20, 60);
  if(mouseIsPressed) {
  textSize(32);
    text("the positive.", 20, 160);
  }
}

