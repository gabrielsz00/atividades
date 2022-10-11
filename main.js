
canvas = new fabric.Canvas("myCanvas")

ballX = 0
ballY = 0

holeX = 800
holeY = 400


blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function (img){
		holeobj = img 
		holeobj.scaleToWidth(50)
		holeobj.scaleToHeight(50)
		holeobj.set({top: holeY, left: holeX})
		canvas.add(holeobj)
	}
	)
	newImage();
}


function newImage()
{
	fabric.Image.fromURL("ball.png", function (img){
		ballobj = img 
		ballobj.scaleToWidth(50)
		ballobj.scaleToHeight(50)
		ballobj.set({top: ballY, left: ballX})
		canvas.add(ballobj)
	}
	)
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ballX == holeX && ballY == holeY){
		canvas.remove(ballobj)
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY >= 0){
			ballY = ballY - blockImageHeight
			canvas.remove(ballobj)
			newImage()
	}

	function down()
	{
		if(ballY <= 450){
			ballY = ballY + blockImageHeight
			canvas.remove(ballobj)
			newImage()
	}

	function left()
	{
		if(ballX >5)
		{
			ballX = ballX - blockImageWidth
			canvas.remove(ballobj)
			newImage()
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX = ballX + blockImageWidth
			canvas.remove(ballobj)
			newImage()
		}
	}
	
}

}
}
