Trism.MessageQueueCreator = function(messageDisp) {
	var cueue = [];
	this.Clear = function() {
		cueue = [];
	}
	this.isEmpty = function() {
		return cueue.length == 0;
	}
	this.ShowNext = function() {
		cueue.shift();
		if (cueue.length == 0) {
			messageDisp.setInactive();
		} else {
			messageDisp.show(cueue[0]);
		}
	}
	this.AddMessage = function(message) {
		cueue.push(message);
		messageDisp.show(cueue[0]);
	}
	this.AddMessages = function(messageList) {
		for (var i = 0, iMax = messageList.length; i < iMax; i ++) {
			cueue.push(messageList[i]);
		}
		messageDisp.show(cueue[0]);
	}
}