
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

function takesnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="capturated_image" src="'+data_uri+'">'
} )
}

console.log('ml5 version:', ml5.version)

classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/XWpI2ynnd/model.json',modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}

function speek(){
synth = window.speechSynthesis
speekData1 = "A primeira previsão é:"+prediction1
speekData2 = "A segunda previsão é:"+prediction2
utterThis = new SpeechSynthesisUtterance(speekData1 + speekData2)
synth.speek(utterThis)
}