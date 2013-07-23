Trism.CanvasConsole = function(canvas) {
	var parent = canvas.parentNode;
	canvas.style.display = "none";

	window.addEventListener("resize", centering, false);

	function centering() {
		canvas.style.left = (parent.offsetWidth - canvas.offsetWidth) / 2 + "px";
		canvas.style.top = (parent.offsetHeight - canvas.offsetHeight) / 2 + "px";
	}
	var context = canvas.getContext('2d');
	context.font = "40px Courier"
	var nowActive = false;

	this.show = function(message) {
		if (message) {
			context.stroke();
			context.clearRect(0,0, canvas.width, canvas.height);
			nowActive = true;
			canvas.style.display = "block";
			context.fillStyle = "#ffffff";
			context.fillText(message, 0, 40);
			centering();
		}
	}
	this.setInactive = function() {
		canvas.style.display = "none";
		nowActive = false;
		eraseCursol();
	}

	function setTimer(blink) {
		setTimeout(function() {
			if (nowActive) {
				showCursol(blink);
			}
			setTimer(! blink);
		}, 500);
	};
	setTimer(false);
	function showCursol(blink) {
		context.beginPath();
		if (blink) {
		context.fillStyle = "#ffffff";
		} else {
		context.fillStyle = "#888888";
		}
		context.moveTo(100, 60);
		context.lineTo(120, 60);
		context.lineTo(110, 70);
		context.closePath();
		context.fill();
	}
	function eraseCursol() {
		context.beginPath();
		context.clearRect(100, 60, 120, 70);
		context.fill();
	}
}