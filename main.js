noseX = 0
noseY = 0
diference = 0
rightWristX = 0
leftWristX = 0

function setup(){
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 550)
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
background('#969A97')

}

function modelLoaded(){
    console.log('Modelo carregado!')
}

function gotPoses(results){
    if (results.lenth > 0){
         console.log(results)
    }
}