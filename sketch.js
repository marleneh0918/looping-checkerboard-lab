// sketch.js
function setup() {
  createCanvas(500,400);
}

function draw() {
  var x = 10;
  var count=0;
  var y = 20
  
  while(count < 8) { 
    if (count % 2 === 0){
      // count is even
      fill('orange')
    } else {
      // count is odd
      fill('black')
    }    

      rect(x, y, 40, 40);
      count+= 1;
      x+=40;

  }

  y+=40
  x=10
  count=0
 
  while(count < 8) { 
    if (count % 2 === 0){
      // count is even
      fill('black')
    } else {
      // count is odd
      fill('orange  while(count < 8) { 
    if (count % 2 === 0){
      // count is even
      fill('orange')
    } else {
      // count is odd
      fill('black')
    }    

      rect(x, y/8, 40, 40);
      count+= 1;
      x+=40;
    // y+=40
  }
      

      rect(x, y, 40, 40);
      count+= 1;
      x+=40;
      
  
}