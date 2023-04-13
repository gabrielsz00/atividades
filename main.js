
prediction1 = ""
prediction2 = ""

Webcam.set({
    width: 350,
    height: 300,
    imageFormat: 'png',
    pngQuality:90
})

camera = document.getElementById("camera")

Webcam.attach('#camera')

function takeSnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="capturated_image" src="'+data_uri+'">'
} )
}

console.log('ml5 version:', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XWpI2ynnd/model.json',modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}

function speak(){
synth = window.speechSynthesis
speakData1 = "A primeira previsão é:"+prediction1
speakData2 = "A segunda previsão é:"+prediction2
utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2)
synth.speak(utterThis)
}

function check(){
    img = document.getElementById("capturated_image")
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("resultemotionname").innerHTML = results[0].label;
        document.getElementById("resultemotionname2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == "Polegar pra cima"){
            document.getElementById("updateemoji").innerHTML = "&#128077"
        }
    
        if (results[0].label == "Mão aberta"){
            document.getElementById("updateemoji").innerHTML = "&#9995"
        }
    
        if (results[0].label == "Polegar pra baixo"){
            document.getElementById("updateemoji").innerHTML = "&#128078"
        }
    
        if (results[1].label == "Polegar pra cima"){
            document.getElementById("updateemoji2").innerHTML = "&#128077"
        }
    
        if (results[1].label == "Mão aberta"){
            document.getElementById("updateemoji2").innerHTML = "&#9995"
        }
    
        if (results[1].label == "Polegar pra baixo"){
            document.getElementById("updateemoji2").innerHTML = "&#128078"
        }
    
    }
    
    
    }