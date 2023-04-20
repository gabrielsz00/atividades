function preload(){

}

function setup(){
    canvas = createCanvas(640, 480)
    canvas.position(650, 90)
    video = createCapture(VIDEO)
    video.hide()
    tintColor = ""

}

function draw(){
    image(video, 0, 0, 640, 480)
    tint(tintColor)
    fill(0,191,255)
    rect(00, 0, 700, 10);
    rect(630, 0, 10, 7000);
    rect(0, 0, 10, 7000);
    rect(00, 470, 700, 10);
    fill(255,255,255)
    text('Minha foto',230, 475)
    textSize(50);
    textFont('Impact')
    
}

function takeSnapshot(){
   save(tintColor) 
}

function filterTint(){
    tintColor = document.getElementById("colorname").value
}

