
canvas = new fabric.Canvas("myCanvas")
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function (img){
		blockImageObject = img
		blockImageObject.scaleToWidth(blockImageWidth)
		blockImageObject.scaleToHeight(blockImageHeight)
		blockImageObject.set({top: blockY, left: blockX})
		canvas.add(blockImageObject)


	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		blockX = 100;
		newImage('rr1.png')
		console.log("R")
	}
	if(keyPressed == '86')
	{
		blockX = -200;
		newImage('br.png')
		console.log("V")
	}
	
	if(keyPressed == '65')
	{
		blockX =300;
		newImage('yr.png')
		console.log("A")
	}
	
	if(keyPressed == '73')
	{
		blockX = 600;
		newImage('pr.png')
		console.log("I")
	}

	if(keyPressed == '69')
	{
		blockX = 800;
		newImage('gr.png')
		console.log("E")
	}
	
}
