var database, canvas;
var gameState = 0;
var playerCount = 0;
var form,player,game;
var allPlayers;
var cars, C1, C2, C3, C4;
var trackImg, car1Img, car2Img, car3Img, car4Img, groundImg;


function preload(){
    trackImg = loadImage("track.jpg");

    car1Img = loadImage("car1.png");
    car2Img = loadImage("car2.png");
    car3Img = loadImage("car3.png");
    car4Img = loadImage("car4.png");

    groundImg = loadImage("ground.png");
}

function setup(){
    database = firebase.database();

    canvas = createCanvas(displayWidth-20,displayHeight-30);

    game = new Game();
    game.getState();
    game.start();
}

function draw(){

    if(playerCount === 4){
        game.update(1);
        }

    if(gameState === 1){
        clear();
        game.play();
    }

    if(gameState === 2){
        game.end();
    }
}