Trism.Fight = function(me, enem) {
	atkOnce();

	if (isLose()) return false;
	if (isWin()) {
		return true;
	}
	function atkOnce() {
		switch (Math.floor(Math.random() * 3)) {
			case 0:
				by(function(b) { return b.R; });
				break;
			case 1:
				by(function(b) { return b.G; });
				break;
			case 2:
				by(function(b) { return b.B; });
				break;
		}
		function by(f) {
			if (f(me) < f(enem)) {
				me.R --;
				me.G --;
				me.B --;
			} else if (f(me) > f(enem)) {
				enem.R --;
				enem.G --;
				enem.B --;
			}
		}
	}

	function isLose() {
		return (me.R <= 0
			|| me.G <= 0
			|| me.B <= 0
			|| (me.R < enem.R
				&& me.G < enem.G
				&& me.B < enem.B));
	}
	function isWin() {
		return (enem.R <= 0
			|| enem.G <= 0
			|| enem.B <= 0
			|| (enem.R < me.R
				&& enem.G < me.G
				&& enem.B < me.B));
	}
}
