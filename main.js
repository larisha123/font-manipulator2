function preload() {
    
}

function setup() {
    video=createCapture(550,500);
    video.size(550,500);

    canvas=createCanvas(550, 550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Initialised!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background("#969A97");
}
