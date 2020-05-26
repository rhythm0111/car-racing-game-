var  database;
var form;
var game;
var player
var gameState = 0;
var playerCount;
var allPlayers


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();

  
}

function draw(){
  if(playercount===4){
    game.update(1);
  }
if(gameState===1){
  game.play();
}
  
    
}
