img = ""
objects = []
modelstatus =  "";

function preload(){
    img = loadImage('cachorro.jpg')
}

function setup(){
    canvas = createCanvas(600, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando objetos..."
    
}

function modelLoaded(){
    console.log("Modelo carregado!")
    modelstatus = true 
    objectDetector.detect(img, gotResult)
}

function click1(){
window.location.href = './index1.html'
}