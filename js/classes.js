function AreadeJuego(){
	this.canvas = document.createElement('canvas');
	this.fondo = new Image();
	this.x = 0;
	this.speed = -1;
	this.frame = 0;

	this.start = ()=>{
		this.canvas.width = 420;
		this.canvas.height = 700;
		this.context = this.canvas.getContext('2d');
		document.body.appendChild(this.canvas);
		this.fondo.src = "images/background/game-background-p4-4.jpg"
	};

	this.clear = ()=>{
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
	};
	this.stop = ()=>{
		stopGame();
	};
	this.move = () =>{
		this.x += this.speed;
		this.x %= this.canvas.width;
		this.frame++;
	};
	this.update = (action)=>{
		switch(action){
			case 2:
				this.move();
				break;
			default:
				break;
		}
		this.context.drawImage(this.fondo, this.x, 0)
		if(this.speed < 0){
			this.context.drawImage(this.fondo, this.x + this.canvas.width, 0)
		} else {
			this.context.drawImage(this.fondo, this.x - this.fondo.width, 0)
		}

	};
}

function Player(){
	this.walkFrames = []
	this.jumpFrames = []
	this.idleFrame = []
	this.currentFrame = 0;
	this.maxFrame = 0;
	this.currentAction = 0;
	this.x = 30;
	this.y = 462;
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
		this.stand();
		window.requestAnimationFrame(updateGame);
	}
	this.stand = ()=>{
		this.currentAction = 1;
		this.maxFrame = 8;
	}
	this.walk = ()=>{
		this.currentAction = 2;
		this.maxFrame = 5;
	}
	this.jump = ()=>{
		this.currentAction = 3;
		this.maxFrame = 2;
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
					ctx.drawImage(this.idleFrame[this.currentFrame],this.x, this.y, this.idleFrame[this.currentFrame].width/4, this.idleFrame[this.currentFrame].height/4);
				}catch(e){
					console.log(this.currentFrame);
					this.currentFrame = 0;
				}

				break;
			case 2:
				try{
					ctx.drawImage(this.walkFrames[this.currentFrame], this.x, this.y, this.walkFrames[this.currentFrame].width/4, this.walkFrames[this.currentFrame].height/4);
				}catch(e){
					this.currentFrame = 0;
				}

				break;
			case 3:
				try{
					ctx.drawImage(this.jumpFrames[this.currentFrame], this.x, this.y, this.jumpFrames[this.currentFrame].width/4, this.jumpFrames[this.currentFrame].height/4);
				}catch(e){
					this.currentFrame = 0;
				}

				break;


		}
	}
}