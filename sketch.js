
let t1;
let t2;
let img;
//let button;

function preload(){
  t1 = loadImage('assets/telpa1.png');
  t2 = loadImage('assets/telpa2.png');
  img =loadImage('assets/mmaiss.png');
}
  


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  
}

function draw() {
  background(220);
  
  image(t1,0,0,width,height);
  image(img,mouseX,mouseY, 300,400);
  
  if(mouseX> width*0.8 &&
    mouseX<width*0.9&&
    mouseY>height*0.3&&
    mouseY<height*0.6){
    
  image(t2,0,0,width,height)
    
 

   
}

  if (mouseX> width*0.8 &&
    mouseX<width*0.9&&
    mouseY>height*0.3&&
    mouseY<height*0.6 && mouseIsPressed) {background(0); 
  noLoop()
                                         }}
  function mouseClicked() {
    // Check if the mouse is within the rectangle
    if (mouseX> width*0.8 &&
    mouseX<width*0.9&&
    mouseY>height*0.3&&
    mouseY<height*0.6) {
      // Open a link in a new tab
      window.open('https://atkritumi-3.glitch.me/');
    }

 
    //image(t1,0,0,width, height)


  }