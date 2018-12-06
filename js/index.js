let animationId = 0;
let areadeJuego = new AreadeJuego();
let player = new Player();
let fps = 20, fpsInterval, startTime, now, then, elapsed;

let startGame = () => {
	fpsInterval = 1000 / fps;
	then = Date.now();
	startTime = then;
	window.onload = () => {
		areadeJuego.start();
		player.setup();
		updateGame();
	}
}


updateGame = ()=>{
	animationId = this.requestAnimationFrame(updateGame);
	now = Date.now();
	elapsed = now -then;
	if(elapsed > fpsInterval){
		then = now - (elapsed % fpsInterval);
		areadeJuego.clear();
		areadeJuego.update();
		player.update();
	}
};
// window.addEventListener(this.)

stopGame = ()=>{
	this.cancelAnimationFrame(animationId);
}

startGame();