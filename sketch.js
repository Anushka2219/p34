var dogImg , happyDogImg ,dog ;
var  database , foodS , foodstock ;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
   
  database = firebase.database();

    foodStock = database.ref('Food');
    foodStock.on("value",readStock);
  

  dog = createSprite(200,200,1900,100);
  dog.addImage(dogImg,200,200);
  dog.scale = 0.5;
}


function draw() {  
  background(46,139,87);

  
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg,200,200);
  }
  drawSprites();

  
  textSize(20);
  fill("white");
  text("Note: Press UP_ARROW to feed him Milk");
}

function readStock(data){
  foodS = data.val();
}


function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}