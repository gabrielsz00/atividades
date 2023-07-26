









diference = 0
rightWristX = 0
leftWristX = 0



function modelLoaded(){
    console.log('Modelo carregado!')
}


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
fill('#2DC2D9')
text("Gabriel", 0, 275)
stroke('#F90093')
textSize(diference)
}



function gotPoses(results){
    if (results.length > 0){
         console.log(results)

         leftWristX = results[0].pose.leftWrist.x
         rightWristX = results[0].pose.rightWrist.x

        diference = floor(leftWristX - rightWristX)

        console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "diference=" + diference)
        }
}
       