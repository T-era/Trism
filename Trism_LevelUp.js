(function () {
	function StatusUp() {
		this.getMessages = function() {
			return [this._name + "の魔力があがった！"
				, this._name + "の加護が増した！"
				, this.SpecialMessage];
		};
	}
	function StatusUpR() {
		this._name = "火";
		this.SpecialMessage = " 疲れを癒すために焚き火にあたろうとしたら\nやけどをした！\n......火の魔力が上がった!!";
		this.event = function(slime) {
			slime.R ++;
			Trism.rHighlight(slime);
		}
	}
	function StatusUpG() {
		this._name = "風";
		this.SpecialMessage = " 戦いの疲れか、風邪をひいてしまったようだ\n......風の魔力が上がったみたい!!";
		this.event = function(slime) {
			slime.G ++;
			Trism.gHighlight(slime);
		}
	}
	function StatusUpB() {
		this._name = "水";
		this.SpecialMessage = "雨降って水の魔力が上がる。";
		this.event = function(slime) {
			slime.B ++;
			Trism.bHighlight(slime);
		}
	}
	StatusUpR.prototype = new StatusUp();
	StatusUpG.prototype = new StatusUp();
	StatusUpB.prototype = new StatusUp();
	function StatusUpAll() {
		this.getMessages = function() {
			return [" 「レベルが上がった！」\nとつぶやいてみた。\nなんとなく強くなった気がする！"
				, " 神話的に有名な名剣を手に入れた！\nだがしかし、名剣はなぞの長広舌と鬱陶しい\nエンドレストークを披露した!!\n......目を覚ますと名剣はどこにもなかった。\n　あまりの退屈に寝てしまったらしい。\n打ち切りになってしまったアニメへの想いを\n胸に旅路を続けた。"
				, "　今気づいたんだけど、意外とデキル子だった!!"];
		}
		this.event = function(slime) {
			slime.R ++;
			slime.G ++;
			slime.B ++;
			Trism.allHighlight(slime);
		}
	}

	var list = [
		{ Rate: 32, Event: new StatusUpR() },
		{ Rate: 32, Event: new StatusUpG() },
		{ Rate: 32, Event: new StatusUpB() },
		{ Rate:  4, Event: new StatusUpAll() },
	];
	var sumRate = 0;
	for (var i = 0, iMax = list.length; i < iMax; i ++) {
		sumRate += list[i].Rate;
	}
	Trism.LevelUp = function() {
		var rnd = Math.floor(Math.random() * sumRate);

		for (var i = 0, iMax = list.length; i < iMax; i ++) {
			if (rnd < list[i].Rate) {
				return list[i].Event;
			}
			rnd -= list[i].Rate;
		}
		throw "なんか間違った。";
	}
})();
