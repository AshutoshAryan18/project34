//Create variables here
var gameState=0
var dog
var foodS
var foodStock
var happyDog
var database

function preload()
{
  //load images here
  dogImage=loadImage("dogImg.png")
  dogImage2=loadImage("dogImg1.png")

}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  
  dog=createSprite(250,350)
  dog.addImage(dogImage)
  dog.scale=0.2

  foodStock=database.ref("food")
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)


  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImage2)
  }

    database.ref("/").update({
      food:x
    })


  drawSprites();
  //add styles here
  text("NOTE: press UP_ARROW KEY to feed dragon food",200,50)
  }

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
}


