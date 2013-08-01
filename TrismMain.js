var Trism = {}
Trism.Init = function(idField, idYou, idConsole) {
	var canvasField = document.getElementById(idField);
	var canvasYou = document.getElementById(idYou);
	var canvasConsole = document.getElementById(idConsole);

	this.setDomEvent(canvasYou);
	Trism.CharactorInitializer("init", function(arg) {
		var field = new Trism.Field(canvasField, canvasYou.__context, arg)
		field.Draw();
		Trism.MessageQueue = new Trism.MessageQueueCreator(new Trism.CanvasConsole(canvasConsole));
		Trism.SetKeyListener(field, Trism.MessageQueue);
	});
}

Trism.setDomEvent = function(canvas) {
	var context = canvas.getContext('2d');
	var sizeX = 5;
	var sizeY = 40;
	var statusHighlight = new Trism.HighlightEffect(canvas, context, sizeY * 2);

	Trism.rHighlight = function(slime) {
		statusHighlight.kickEffect(sizeX * 32, 220, sizeY, function() { context.ShowStatus(slime); });
	}
	Trism.gHighlight = function(slime) {
		statusHighlight.kickEffect(sizeX * 32, 260, sizeY, function() { context.ShowStatus(slime); });
	}
	Trism.bHighlight = function(slime) {
		statusHighlight.kickEffect(sizeX * 32, 300, sizeY, function() { context.ShowStatus(slime); });
	}
	Trism.allHighlight = function(slime) {
		statusHighlight.kickEffect(sizeX * 32, 220, sizeY * 3, function() { context.ShowStatus(slime); });
	}

	canvas.__context = context;
	context.clearAll = function() { this.clearRect(0,0,canvas.width, canvas.height); };
	context.font = "20px Courier"

	context.ShowStatus = function(slime) {
		this.clearAll();
		slime.drawAt(context, 90, 140, 60, 45);

		this.beginPath();
		showBar('#aa0000', 220, slime.R);
		showBar('#00aa00', 260, slime.G);
		showBar('#0000aa', 300, slime.B);
		this.stroke();
	}
	context.DiffStatus = function(stat1, stat2) {
		this.clearAll();

		stat2.drawAt(context, 120, 90, 45, 30);
		stat1.drawAt(context, 70, 150, 60, 45);

		this.beginPath();
		showBar('#aa0000', 220, stat1.R, true);
		showBar('#aa0000', 240, stat2.R, false);
		showBar('#00aa00', 260, stat1.G, true);
		showBar('#00aa00', 280, stat2.G, false);
		showBar('#0000aa', 300, stat1.B, true);
		showBar('#0000aa', 320, stat2.B, false);
		this.stroke();
	}
	
	function showBar(color, y, value, half) {
		var sy = (half === undefined) ? sizeY : sizeY / 2;
		if (half !== undefined) {
			if (half) {
				context.fillStyle = "#666666"
			} else {
				context.fillStyle = "#444444"
			}
			context.fillRect(0, y, sizeX * 255, sy);
		}
		
		context.fillStyle = color;
		context.fillRect(0, y, sizeX * value, sy);
		context.fillStyle = "#ffffff";
		context.fillText(value, 150, y+sy);
	}
}
