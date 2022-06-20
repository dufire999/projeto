
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var PLAY = 1;
var END = 0;
var gamestate = serve;
var serve;
var backgroundImg1;
var backgroundImg2;
var score;
var canvas;
var power;

var fighter1_animation = [];
var fighter1_spriteData;
var fighter1_spriteSheet;

var fighter2_animation = [];
var fighter2_spriteData;
var fighter2_spriteSheet;

var power_animation;
var power_spriteData;
var power_spriteSheet;


function preload(){
    backgroundImg1 = loadImage("assets/MicrosoftTeams-image (2).png");
    backgroundImg2 = loadImage("assets/MicrosoftTeams-image (3).png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    fighter1 = createSprite(70,windowHeight-170,20,150);
    fighter2 = createSprite(1200,windowHeight-170,20,150);
    fighter1.visible = false;
    fighter2.visible = false;
    backgroundImg2.visible = false;
    backgroundImg1.visible = true;
    
}

function draw() {
    background(180)
    if(gamestate === serve){
        background(backgroundImg1);
        
        
    }
    if(gamestate === PLAY){
       
    }


drawSprites();
}


function keyPressed(){
    if(keyCode===69){
        fighter1.visible = true;
        fighter2.visible = true;
        //backgroundImg1.visible = false;
        //backgroundImg2.visible = true;
        background(backgroundImg2);
        gamestate = PLAY;
    }
}