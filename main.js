
var canvas = new fabric.Canvas("myCanvas");

ball_x = 0;
ball_y = 0;
hole_y = 400;
hole_x = 400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole.obj = Img;
		hole.obj.scaleToWidth(50);
		hole.obj.scaleToHeight(50);
		hole.obj.scale({
			top:hole_y,
            left:hole_x
		});
		canvas.add(hole_obj);
	});
	
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img)
	{
      ball.obj = Img;
	  ball.obj.scaleToWidth(50);
	  ball.obj.scaleToHeight(50);
	  hole.obj.scale({
		top:ball_y ,
		left:ball_x
	  });
	  canvas.add(ball.obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x = hole_x)&&(ball_y = hole_y)) 
	{
		canvas.remove(ball.png);
		document.getElementById("hd3").innerHTML = "You Have Hit The Goal !!!";
		document.getElementById('myCanvas').style.borderColor = "red";
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
		ball_y = ball_y + block_image_height;
		console.log("Block Image Height = " + block_image_height);
		console.log("When Up Arrow key is Pressed , X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(ball.obj);
		new_image();

	}

	function down()
	{
		 ball_y = ball_y - block_image_height;
		 console.log("Block Image Height = " + block_image_height);
		 console.log("When Down Arrow key is Pressed , X = " + ball_x + " , Y = " + ball_y);
		 canvas.remove(ball.obj);
		 new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x + block_image_width;
			console.log("Block Image Width = " + block_image_width);
		    console.log("When Left Arrow key is Pressed , X = " + ball_x + " , Y = " + ball_y);
		    canvas.remove(ball.obj);
		    new_image();

		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x - block_image_width;
			console.log("Block Image Width = " + block_image_width);
		    console.log("When Right Arrow key is Pressed , X = " + ball_x + " , Y = " + ball_y);
		    canvas.remove(ball.obj);
		    new_image();
		}
	}
	
}

