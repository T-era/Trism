Trism.CharactorInitializer = function(id, callback) {
	var div = document.getElementById(id);
	div.style.display = "block";
	var canvas = div.firstElementChild;
	var context = canvas.getContext('2d');
	context.clearAll = function() { context.clearRect(0,0, canvas.width, canvas.height); };

	var range = { Min: 12, Max: 30 };
	var choice = [
		Trism.createRandomSlime(range),
		Trism.createRandomSlime(range),
		Trism.createRandomSlime(range)];
	var comment = Trism.RandomSelect(Trism.Identities, 3);
	var selectedIndex = 0;

	Trism.SetKeyListener({
			stepToL: function () {
				selectedIndex = (selectedIndex + 2) % choice.length;
				Repaint();
			},
			stepToR: function () {
				selectedIndex = (selectedIndex + 1) % choice.length;
				Repaint();
			},
			stepToUp: function() {},
			stepToDown: function() {},
			attackIt: function() {
				div.style.display = "none";
				callback(choice[selectedIndex]);
			},
		}
		, { isEmpty: function() { return true; }}
	);
	Repaint();
	function Repaint() {
		var size = 240;
		context.font = "30px Courier";
		context.clearAll();
		for (var i = 0, iMax = choice.length; i < iMax; i ++) {
			choice[i].drawAt(context, 120 + i * size, 80, 80, 60);
		}
		context.beginPath();
		context.strokeStyle = "#ffffff";
		context.strokeRect(selectedIndex * size, 0, size, 160);
		context.fillStyle = "#ffffff";
		context.fillText("Rate: " + choice[selectedIndex].rating.toString().slice(0,4), 10, 200);
		context.font = "24px Courier";
		var lines = comment[selectedIndex].split("\n");
		context.fillText(lines[0], 5, 236);
		context.fillText(lines[1], 5, 270);
		context.fillText(lines[2], 5, 304);
		context.stroke();
	}
}