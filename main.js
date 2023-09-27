objects = []
status= ""


function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO)   
    video.size(480, 380)
    video.hide()
    video.center();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detectando objetos..."
}

function modelLoaded(){
    console.log("Modelo carregado!")
    status = true
    objectDetector.detect(video, gotResults)
}

function gotResults(){}