status="";
object1="";
objects=[];

function preload(){
    
}

function setup(){
canvas=createCanvas(480,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,480,380);

if(status != "")
{
    objectDetector.detect(video,gotResult);
    for ( i = 0; i < objects.length; i++) {
        
    console.log(object1);
    if(objects[i].label == object1){
        video.stop();
        objectDetector.detect(gotResult);
        document.getElementById("object-finder").innerHTML=object1+" found";
    }
   
    }
}
if(status == ""){
    document.getElementById("object-finder").innerHTML=object1+"not found";
}
}

function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
console.log(object);
object1=document.getElementById("object").value;
}

function modelLoaded(){
console.log("Model Loaded Successfully ");
status=true;
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    objects=results;
    }
}