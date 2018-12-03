let areadeJuego = {
	canvas: document.createElement('canvas'),
	start: function()  {
		//console.log(this);
		this.canvas.width = 420;
		this.canvas.height = 420;
		this.context = this.canvas.getContext('2d');
		document.body.appendChild(this.canvas);
	},
	frame: 0,
	clear: function()  {
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
	},
	stop: function(){
		window.cancelAnimationFrame(this.animationId);
	},
	update: function() {
		this.clear();
		//console.log(this.frame);
		this.frame++;

	}
};

let player = {
	walkFrames: [],
	jumpFrames: [],
	idleFrame: [],
	currentFrame: 0,
	maxFrame: 0,
	currentAction: 0,
	setup: function() {
		for (let i = 0; i < 5; i++){
			this.walkFrames.push(new Image());
			this.walkFrames[i].src = `images/running/frame-${i+1}.png`
			this.walkFrames[i].addEventListener('load', this.start);
		}
		this.jumpFrames.push(new Image());
		this.jumpFrames[0].src = 'images/jump/jump_up.png';
		this.jumpFrames[0].addEventListener('load', this.start);
		this.jumpFrames.push(new Image());
		this.jumpFrames[1].src = 'images/jump_fall/jump_fall.png';
		this.jumpFrames[1].addEventListener('load', this.start);
		for( let i = 0; i < 8; i++) {
			this.idleFrame.push(new Image());
			this.idleFrame[i].src = `images/idle/frame-${i + 1}.png`
			this.idleFrame[i].addEventListener('load', this.start);
		}
	},
	start:()=>{
		console.log("todas las imagenes cargadas");
		player.currentAction = 1;
		player.maxFrame = 8;
		window.requestAnimationFrame(updateGame);
	},
	walk: () =>{

	},
	update: function() {
		switch(this.currentAction) {
			case 1:
				let ctx = areadeJuego.context;
				ctx.drawImage(this.idleFrame[this.currentFrame],100, 100, 100, 100);
				break;
		}
		(this.currentFrame == this.maxFrame) ? this.currentFrame = 0 : this.currentFrame++
	},
}