addEventListener('keydown', (evt => {
	console.log(evt.keyCode)
	switch (evt.keyCode) {
		case 39:
			player.walk();
			break;
		case 38:
			player.jump();
			break;
		case 40:
			player.stand();
			break;
	}
}))