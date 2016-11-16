
  
// draws the character on the canvas
function drawCharacter(){
  var canvas;
  var context;
	  
//grab the canvas element on the page
canvas = document.getElementById('canvas'); //grabs the item lables canvas
context = canvas.getContext('2d'); // sets the cntext to 2d   context.beginPath(); //begins the body of packman
	   
	   context.moveTo(118, 118); //starts the origin of packman
	   context.lineTo(227, 73); //being the mouth of packman
	   context.bezierCurveTo(209, 30, 167, 0, 118, 0); // this being the arch
	   context.bezierCurveTo(53, 0, 0.5, 53, 0, 118); //  continues the body
	   context.bezierCurveTo(0, 183, 53, 235, 118, 235); // continues the body
	   context.bezierCurveTo(159, 235, 195, 215, 216, 183); //continues the body
	   context.lineTo(118, 118); // draws the other half of the mouth
	   context.closePath(); // closes the body of packmen
	   context.fillStyle = "rgb(249, 243, 161)"; // sets the color yellow
	  context.fill(); // fills the boy with yellow
	  context.stroke(); // creates an outline for packman's body 
	 
	  //Draw the eye
	  context.beginPath(); // starts the reation of pacmans eye.
	  context.arc(118, 60, 10, 0, 2 * Math.PI, false); // draws a circle around the origin/
	  context.fillStyle = "rgb(0, 0, 0)"; // sets the color to black.
	  context.fill(); // fills the circle in.
}