Trism.SetKeyListener = function(field, messageQueue) {
	document.onkeypress = function(event) { 
		if (messageQueue.isEmpty()) {
			switch (event.keyCode) { // Cursol key
				case 37: // left
					field.stepToL();
					return false;
				case 38: // up
					field.stepToUp();
					return false;
				case 39: // right
					field.stepToR();
					return false;
				case 40: // down
					field.stepToDown();
					return false;
			}
			switch (event.charCode) { // Ten key
				case 52: // left
					field.stepToL();
					return false;
				case 56: // up
					field.stepToUp();
					return false;
				case 54: // right
					field.stepToR();
					return false;
				case 50: // down
					field.stepToDown();
					return false;
			}
		}
		if (event.charCode == 32) {
			if (messageQueue.isEmpty()) {
				field.attackIt();
				return false;
			} else {
				messageQueue.ShowNext();
				return false;
			}
		}
		return true;
	};
}