Trism.Slime = function(r, g, b) {
	this.R = r;
	this.G = g;
	this.B = b;
	this.rgb = function(toDark) {
		return "#" + toTwoChar(this.R) + toTwoChar(this.G) + toTwoChar(this.B);
		function toTwoChar(v) {
			var hexa = (v + 1) * 8 - 1;
			if (toDark) hexa = Math.floor(hexa * 0.6);
			return ("00" + hexa.toString(16)).slice(-2);
		}
	};
	this.rating = Math.sqrt(100 / (r * g * b));
	this.isWhite = function() {
		return this.R == 31
			&& this.G == 31
			&& this.B == 31;
	};
	this.drawAt = function(context, x, y, width, heightLevel, shadow) {
		context.beginPath();
		context.moveTo(x - width, y);
		context.fillStyle = this.rgb(! shadow);
		context.bezierCurveTo(x - width, y + heightLevel, x + width, y + heightLevel, x + width, y);
		context.bezierCurveTo(x + width, y - heightLevel * 1.5, x - width, y - heightLevel * 1.5, x - width, y);
		context.fill();
		if (! shadow) {
			var d = 0.95;
			var dx = width * (1 - d);
			this.drawAt(context, x - dx, y - dx, width * d, heightLevel * d, true);
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
