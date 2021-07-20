var obj,objImg;
var obj2,obj2Img
var hasDocked;
var obj3;

function preload(){
  bg=loadImage("spacebg.jpg")
  objImg=loadImage("iss.png")
  obj2Img=loadImage("spacecraft1.png")
  Img2=loadImage("spacecraft3.png")
  Img3=loadImage("spacecraft4.png")
  Img4=loadImage("spacecraft2.png")
}

function setup() {

  createCanvas(1000,500);
  
 obj=createSprite(500, 250, 50, 50);
 obj.addImage("img",objImg)

 obj2=createSprite(450,400,50,50)
 obj2.addImage("img2",obj2Img)
 obj2.addImage("img3",Img2)
 obj2.addImage("img4",Img3)
 obj2.addImage("img5",Img4)
 obj3=createSprite(440,275,20,20)
 obj3.visible=false;

 obj2.scale=0.23

}

function draw() {
  background(bg);  
  obj2.velocityX=0;
  obj2.velocityY=0;

  if(!hasDocked){

    if(keyDown(LEFT_ARROW)){
      obj2.velocityX=-2
      obj2.changeImage("img3",Img2)
    }
    if(keyDown(RIGHT_ARROW)){
      obj2.velocityX=+2
      obj2.changeImage("img4",Img3)
    }
    if(keyDown(DOWN_ARROW)){
      obj2.velocityY=2
      obj2.changeImage("img2",obj2Img)
    }
    if(keyDown(UP_ARROW)){
      obj2.velocityY=-2
      obj2.changeImage("img5",Img4)
    }

  }

  






  drawSprites();
  if(obj2.isTouching(obj3)){
    fill("white")
    textSize(15)
    text("Docking Complete",450,450)
  }
}