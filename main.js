nosex=0
nosey=0
function preload(){
clownnose=loadImage("clown.png")
}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
postNet=ml5.postNet(video,modelLoaded)
postNet.on('pose',gotPoses)
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}
function modelLoaded(){
    console.log("postNetisinitiated")
}
function draw(){
image(video,0,0,300,300);
image(clownnose,nosex,nosey,30,30)
}
function takesnapshot(){
    save("filter.png")
}