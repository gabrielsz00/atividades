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
    var texto = document.getElementById("texto").value
}

function modelLoaded(){
    console.log("Modelo carregado!")
    status = true
    objectDetector.detect(video, gotResults)
}

function gotResults(error, results){
    if (error){
        console.log(error);
    }
    console.log(results)
    objects = results
}

function draw(){
    image(video, 0, 0, 480, 380)
    if (status != ""){




        objectDetector.detect(video, gotResults)
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objeto detectado!"
            document.getElementById("numberOfObjects").innerHTML = "Quantidade de objetos detectados :" + objects.length;
        fill("#FF0000")
            percent = floor(objects[i].confidence*100)
            text(objects[i].label + " " + percent + "%", objects[i].x +15,objects[i].y +15)
            noFill()
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
    else{
        document.getElementById("encontrado").innerHTML = texto
    }
}