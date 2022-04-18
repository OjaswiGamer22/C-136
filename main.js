vid="";

function preload(){
vid=createVideo("video.mp4");
vid.hide();

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
}

function draw(){
image(vid,0,0,300,300);
}

function start(){
objectDetector=ml5.objectDetector("cocossd",ModelLoaded);
document.getElementById("status").innerHTML= "Status:    Detecting Objects";
}

function ModelLoaded(){
    console.log("ModelLoaded");
    vid.loop();
    vid.speed(1);
    vid.volume(0);
    

}
    