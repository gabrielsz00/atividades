song1 = ""
song2 = ""

scorerigthwrist = 0
scoreleftwrist = 0

rightwristx = 0
rightwristy = 0

leftwristx = 0
leftwristy = 0

function preload(){
    song1 = loadSound("chão.mp3")
    song2 = loadSound("Undertale.mp3")
}

function setup(){
    canvas = createCanvas(600, 500)
    canvas.center();

    video = createCapture(VIDEO)


    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Modelo carregado!")
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function play(){
    song1.play()

}