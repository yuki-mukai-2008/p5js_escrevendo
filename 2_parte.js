function setup() {
  createCanvas(500,500);
background("white");
}

function draw() {
  
stroke("blue")
 fill("red")
  
  //cnsole.log(mouseIsPressed);

  if(mouseIsPressed){
rect(mouseX,mouseY,20,35)
}
}
