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
    song.play()
    song.rate(1)
    song.setVolume(1)
}

function gotPoses(results){
    if(results.length > 0){
console.log(results)
scorerigthwrist = results[0].pose.keypoints[10].score
scoreleftwrist = results[0].pose.keypoints[9].score
leftwristx = results[0].pose.leftWrist.x    
leftwristy = results[0].pose.leftWrist.y

rightwristx = results[0].pose.rightWrist.x    
rightwristy = results[0].pose.rightWrist.y  

console.log(leftwristx, leftwristy)
console.log(rightwristx, rightwristy)
console.log(scorerigthwrist, scoreleftwrist)

}
}