

function setup(){
captured = createCapture(VIDEO)
captured.size(640,420)
captured.position(5,110)


canvas = createCanvas(600,500);
canvas.position(650,70);

posenettoo = ml5.poseNet(captured , modalloaded)
posenettoo.on("pose" , gotposes)
}

function draw(){
    background("peach")
}

function modalloaded(){
    console.log("modal has been loaded")
}


function gotposes(results){
 if(results.length > 0){
     console.log(results)
 }
}