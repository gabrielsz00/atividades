noseX=0;
noseY=0;
posx = 250;
posy = 302;


tamanho = 430
img= 'https://i.postimg.cc/4yv7ZTj2/aaaaaasdadad.png'
salvar = 'foto'

function preload() {
  clownNose = loadImage(img);
document.getElementById("yy").value = posy
document.getElementById("xx").value = posx
document.getElementById("tt").value = tamanho
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-posx;
    noseY = results[0].pose.nose.y-posy;
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(clownNose, noseX, noseY, tamanho, tamanho);
}

function takeSnapshot(){    
  save(salvar);
}

function coco(){
  padrao()
  img='https://i.postimg.cc/hP412Ckb/baixados-removebg-preview.png'
  selecionado = "Cocô"
  preload()
  atualizar()

}


function oculos(){
  padrao()
  img='https://i.postimg.cc/Njds101k/smiling-face-with-sunglasses-1f60e.png'
  selecionado = "Óculos"
  preload()
  atualizar()
}

function feliz(){
  padrao()
  img='https://i.postimg.cc/132ThhPZ/8148ca973c5958c0fd6d58c133b9a5c5.png'
  selecionado = "Feliz"
  preload()
  atualizar()
}

function gabriel(){
  padrao()
  img='https://i.postimg.cc/43d7pVtP/mascara-Personalizado-1.png'
  selecionado = "Gabriel"
  preload()
  atualizar()
}

function bigode(){
  tamanho = 100
  posx = 60
  posy = 18
  img='https://i.postimg.cc/3x3QzSGq/m.png'
  selecionado = "Bigode"
  preload()
  atualizar()
}

function batom(){
  tamanho = 100
  posx = 55
  posy = -20
  img='https://i.postimg.cc/PxFvYgkv/l1.png'
  selecionado = "Batom"
  preload()
  atualizar()
}




function atualizar(){
  document.getElementById("kaka").innerHTML = "Selecionado:"+ selecionado;
}
function salvarfoto(){

  salvar = document.getElementById("salvar").value
}

function mudarposisy(){
posy = document.getElementById("yy").value
document.getElementById("yy").innerHTML = value
}

function mudarposisx(){
  posx = document.getElementById("xx").value
  document.getElementById("xx").innerHTML = value
  }

function mudarposistamanho(){
  tamanho = document.getElementById("tt").value
  document.getElementById("tt").innerHTML = value
}


function padrao(){
  posx = 250;
  posy = 302;
  tamanho = 430;
  preload() 
  
}

function esconder(){
img = 'https://i.postimg.cc/X7gWKDqF/nada.png'
selecionado = "Nenhum"
preload()
atualizar()
}