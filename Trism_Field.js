Trism.Field = function(canvas, contextYou, sHero) {
	var context = canvas.getContext('2d')
	context.clearAll = function() {
		context.clearRect(0,0,canvas.width, canvas.height);
	};
	var STAGES = [{ Min: 1, Max: 10 }
		, { Min: 6, Max: 16 }
		, { Min: 12, Max: 26 }
		, { Min: 23, Max: 31 }];
	var SIZE = 5;
	var SIZE_OF_ICON = 30;
	var level = -1;
	var score = 0;
	var target;
	var items;
	var x;
	var y;
	
	StageUp();

	function StageUp() {
		context.clearRect(0,0,canvas.width, canvas.height);
		level ++;
		if (sHero.isWhite()) {
			alert("Complete white!" + 100000 / score);
			alert(score);
			Trism.SetKeyListener();
		}
		if (level >= STAGES.length) {
			alert("GAME OVER");
			Trism.SetKeyListener();
		} else {
			items = createItems(SIZE, SIZE, STAGES[level]);
			x = 2;
			y = 2;
			items[x][y] = null;
		}
	}

	this.stepToL = function() {
		this.stepTo(x - 1, y);
	}
	this.stepToR = function() {
		this.stepTo(x + 1, y);
	}
	this.stepToUp = function() {
		this.stepTo(x, y - 1);
	}
	this.stepToDown = function() {
		this.stepTo(x, y + 1);
	}
	this.stepTo = function(toX, toY) {
		if (toX == 2 && toY < 0) {
			StageUp();
			this.Draw();
			return ;
		} else if (toX < 0 || toY < 0
			|| toX >= SIZE || toY >= SIZE) {
			return ;
		} else {
			target = null;
			if (items[toY][toX]) {
				target = items[toY][toX];
			} else {
				x = toX;
				y = toY;
			}
			this.Draw();
		}
	}
	this.attackIt = function() {
		if (target) {
			score += sHero.rating;
			var res = Trism.Fight(sHero, target);
			if (res === false) {
				alert("Lose");
			} else if (res === true) {
				var lvup = Trism.LevelUp();
				lvup.event(sHero);
				var message = Trism.RandomSelect(lvup.getMessages());

				Trism.MessageQueue.AddMessages(message.split("\n"));
				if (sHero.R > 31) sHero.R = 31;
				if (sHero.G > 31) sHero.G = 31;
				if (sHero.B > 31) sHero.B = 31;

				items[target.y][target.x] = null;
				target = null;
			}
		}
		this.Draw();
	}

	this.Draw = function() {
		context.clearAll();
		for (var vy = 0, yMax = items.length; vy < yMax; vy ++) {
			for (var vx = 0, xMax = items[vy].length; vx < xMax; vx ++) {
				if (vx == x && vy == y) {
					drawSlime(x, y, sHero);
				} else {
					drawSlime(vx, vy, items[vy][vx]);
				}
			}
		}
		if (target) {
			contextYou.DiffStatus(sHero, target);
		} else {
			contextYou.ShowStatus(sHero);
		}
		drawBox();
	}
	function drawSlime(x, y, slime) {
		context.beginPath();
		if (slime) {
			if (slime == sHero) {
				context.fillStyle = "#ffffff";
				context.fillRect(2 + (x + 0.5) * SIZE_OF_ICON , 2 + (y + 0.5) * SIZE_OF_ICON , SIZE_OF_ICON - 4, SIZE_OF_ICON - 4);
			} else {
				context.strokeStyle = "#000000";
			}
			context.fillStyle = slime.rgb(0);
			context.arc((1 + x) * SIZE_OF_ICON , (1 + y) * SIZE_OF_ICON , SIZE_OF_ICON / 2 - 2, 0,7)
		} else {
			context.clearRect((x + 0.5) * SIZE_OF_ICON , (y + 0.5) * SIZE_OF_ICON , SIZE_OF_ICON , SIZE_OF_ICON );
		}
		context.stroke();	
		context.fill();
	}
	function createItems(sizeX, sizeY, powBand) {
		var list = [];
		for (var y = 0; y < sizeY; y ++) {
			var subList = [];
			for (var x = 0; x < sizeX; x ++) {
				var newItem = new Trism.createRandomSlime(powBand);
				newItem.x = x;
				newItem.y = y;
				subList.push(newItem);
			}
			list.push(subList);
		}
		return list;
	}
	function drawBox() {
		context.beginPath();
		context.strokeStyle = "#ffffff";
		context.moveTo(2.5 * SIZE_OF_ICON - 1, SIZE_OF_ICON  / 2 - 1);
		context.lineTo(SIZE_OF_ICON / 2 - 1, SIZE_OF_ICON  / 2 - 1);
		context.lineTo(SIZE_OF_ICON / 2 - 1, SIZE_OF_ICON  * (SIZE + 0.5) + 1);
		context.lineTo(SIZE_OF_ICON  * (SIZE + 0.5) + 1, SIZE_OF_ICON  * (SIZE + 0.5) + 1);
		context.lineTo(SIZE_OF_ICON  * (SIZE + 0.5) + 1, SIZE_OF_ICON  / 2 - 1);
		context.lineTo(3.5 * SIZE_OF_ICON + 1, SIZE_OF_ICON  / 2 - 1);
		context.stroke();
	}
};
