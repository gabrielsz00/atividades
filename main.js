canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

carHeight = 100;
carWidth = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carX = 10;
carY = 10;

function add() {
	backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = background_image

    carImgTag = new Image();
    carImgTag.onload = uploadgreencar;
    carImgTag.src = greencar_image
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);  

}

function uploadgreencar() {
	ctx.drawImage(carImgTag, carX, carY, carWidth, carHeight);    
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	if (carY >= 0){
        carY = carY - 10;
    uploadBackground()
    uploadgreencar()
    }

}


function down()
{
	if (carY <= 500){
        carY = carY + 10;
    uploadBackground()
    uploadgreencar()
    }
}

function left()
{
	if (carX >= 0){
        carX = carX - 10;
    uploadBackground()
    uploadgreencar()
    }
}

function right()
{
	if (carX <= 700){
        carX = carX + 10;
    uploadBackground()
    uploadgreencar()
    }
}
