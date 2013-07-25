Trism.Slime = function(r, g, b) {
	this.R = r;
	this.G = g;
	this.B = b;
	this.rgb = function(lvl) {
		var pow = Math.pow(0.92, lvl*lvl*lvl);
		return "#" + toTwoChar(this.R) + toTwoChar(this.G) + toTwoChar(this.B);
		function toTwoChar(v) {
			var hexa = Math.floor(((v + 1) * 8 - 1) * pow);
			return ("00" + hexa.toString(16)).slice(-2);
		}
	};
	this.rating = Math.sqrt(100 / (r * g * b));
	this.isWhite = function() {
		return this.R == 31
			&& this.G == 31
			&& this.B == 31;
	};
	this.drawAt = function(context, x, y, width, heightLevel, lvl) {
		var d = 1;
		drawIn(this, x, y, width, heightLevel, lvl);
		function drawIn(that, x, y, width, heightLevel, lvl) {
		lvl = (lvl == undefined ? 2 : lvl);
		context.beginPath();
		context.moveTo(x - width, y);
		context.fillStyle = that.rgb(lvl);
		context.bezierCurveTo(x - width, y + heightLevel, x + width, y + heightLevel, x + width, y);
		context.bezierCurveTo(x + width, y - heightLevel * 1.5, x - width, y - heightLevel * 1.5, x - width, y);
		context.fill();
		if (lvl > 0) {
			d = d * d * .90;
			var dx = width * (1 - d);
			drawIn(that, x - dx / 3, y - dx / 3, width * d, heightLevel * d, lvl - 1);
		}
		}
	}
}
Trism.createRandomSlime = function(arg) {
	var powMin = arg.Min;
	var powMax = arg.Max;
	getPow = function() {
		return powMin + Math.floor(Math.random() * (1 + powMax - powMin));
	};
	return new Trism.Slime(
		getPow(),
		getPow(),
		getPow());
}
