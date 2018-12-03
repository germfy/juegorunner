var animationId = 0;
let startGame = () => {
	window.onload = () => {
		areadeJuego.start();
		player.setup();
		//animationId = this.requestAnimationFrame(updateGame);
	}
}


updateGame = ()=>{
	areadeJuego.clear();
	areadeJuego.update();
	player.update();
	animationId = this.requestAnimationFrame(updateGame);
};

stopGame = ()=>{
	this.cancelAnimationFrame(animationId);
}

startGame();