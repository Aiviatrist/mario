function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	gameover=loadSound("gameover.wav");
	mario_die=loadSound("mariodie.wav");
	mario_kick=loadSound("kick.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	video=createCapture(VIDEO);
	vidoe.size(600,300);
	video.parent("game_console");
	instializeInSetup(mario);
	pt=ml5.poseNet(video,modelloaded);
	pt.on("pose",gotPoses);
}

function modelloaded(){
	console.log("model loaded");
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
		nx=results[0].pose.nose.x;
		ny=results[0].pose.nose.y;
	}
}
function draw() {
	game()
}






