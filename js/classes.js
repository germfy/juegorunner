function AreadeJuego(){
	this.canvas = document.createElement('canvas');
	this.start = ()=>{
		this.canvas.width = 420;
		this.canvas.height = 420;
		this.context = this.canvas.getContext('2d');
		document.body.appendChild(this.canvas);
	};
	this.frame = 0;
	this.clear = ()=>{
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
	};
	this.stop = ()=>{
		stopGame();
	};
	this.update = ()=>{

		this.frame++;
	};
}

function Player(){
	this.walkFrames = []
	this.jumpFrames = []
	this.idleFrame = []
	this.currentFrame = 0;
	this.maxFrame = 0;
	this.currentAction = 0;
	this.setup = ()=>{
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
	}
	this.start = ()=>{
		player.currentAction = 1;
		player.maxFrame = 8;
		window.requestAnimationFrame(updateGame);
	}
	this.walk = ()=>{
		this.currentAction = 2;
		this.maxFrame = 1;
	}
	this.update = ()=>{
		let ctx = areadeJuego.context;
		this.currentFrame++;
		if(this.currentFrame === this.maxFrame){
			this.currentFrame = 0;
		}
		switch(this.currentAction) {
			case 1:
				//let ctx = areadeJuego.context;
				try{
					ctx.drawImage(this.idleFrame[this.currentFrame],100, 100, 100, 100);
				}catch(e){
					console.log(this.currentFrame);
					this.currentFrame = 0;
				}

				break;
			case 2:
				console.log(typeof this.staticFrame);
				ctx.drawImage(this.staticFrame, 100, 100, 100, 100);
				break;

		}
	}
}