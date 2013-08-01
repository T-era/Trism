Trism.HighlightEffect = function(canvas, context, barWidth) {
	this.kickEffect = function(width, top, height, refleshDraw) {
		new EffectAnimation(width, top, height, refleshDraw);
	}

	function EffectAnimation(width, top, height, refleshDraw) {
		var tempX = -1;

		motion();
		function motion() {
			if (stepNext()) {
				setTimeout(motion, 1);
			}
		}
		function stepNext() {
			refleshDraw();
			if (tempX - barWidth <= width + barWidth) {
				tempX += 2;
				for (var i = 0; i < height; i ++) {
					var relX = (tempX - i) % height;
					if (relX < 0) {}
					else {
						var phyX = tempX - i;

						if (i != 0
							&& i != height - 1) {
							context.beginPath();
							context.strokeStyle = "#ffffff";
							context.moveTo(phyX, top + i);
							context.lineTo(phyX + height, top + i);
							context.stroke();
						}
					}
				}

				return true;
			} else {
				return false;
			}
		}
	}
}