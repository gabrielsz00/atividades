function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/weLF_W5df/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        random_number_r = Math.floor(Math.random()*255)+1
        random_number_g = Math.floor(Math.random()*255)+1
        random_number_b = Math.floor(Math.random()*255)+1
        
        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label
      
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"    
       

        img1= document.getElementById("animal_image")

        cachorro = 0
        gato = 0
        vaca = 0
        leao = 0


        if(results[0].label=="Latido"){
            img1.src = "cachorro.gif"
cachorro = cachorro+1
        }else 
        if(results[0].label=="Miado"){
            img1.src = "gato.gif"
gato = gato+1
}else
if(results[0].label=="Mugido"){
    img1.src = "vaca.png"
vaca = vaca+1
}else
if(results[0].label=="Rugido"){
    img1.src = "leao.gif"
leao = leao+1
}
else{
    img1.src = "listen.gif"
       
}
            
        




    }



}





