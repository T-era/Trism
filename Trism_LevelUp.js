(function () {
	function StatusUp() {
		this.getMessages = function() {
			return [this._name + "�̖��͂����������I"
				, this._name + "�̉��삪�������I"
				, this.SpecialMessage];
		};
	}
	function StatusUpR() {
		this._name = "��";
		this.SpecialMessage = " ����������߂ɕ����΂ɂ����낤�Ƃ�����\n�₯�ǂ������I\n......�΂̖��͂��オ����!!";
		this.event = function(slime) {
			slime.R ++;
			Trism.rHighlight(slime);
		}
	}
	function StatusUpG() {
		this._name = "��";
		this.SpecialMessage = " �킢�̔�ꂩ�A���ׂ��Ђ��Ă��܂����悤��\n......���̖��͂��オ�����݂���!!";
		this.event = function(slime) {
			slime.G ++;
			Trism.gHighlight(slime);
		}
	}
	function StatusUpB() {
		this._name = "��";
		this.SpecialMessage = "�J�~���Đ��̖��͂��オ��B";
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
			return [" �u���x�����オ�����I�v\n�ƂԂ₢�Ă݂��B\n�Ȃ�ƂȂ������Ȃ����C������I"
				, " �_�b�I�ɗL���Ȗ�������ɓ��ꂽ�I\n�����������A�����͂Ȃ��̒��L��ƟT������\n�G���h���X�g�[�N���I����!!\n......�ڂ��o�܂��Ɩ����͂ǂ��ɂ��Ȃ������B\n�@���܂�̑ދ��ɐQ�Ă��܂����炵���B\n�ł��؂�ɂȂ��Ă��܂����A�j���ւ̑z����\n���ɗ��H�𑱂����B"
				, "�@���C�Â����񂾂��ǁA�ӊO�ƃf�L���q������!!"];
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
		throw "�Ȃ񂩊Ԉ�����B";
	}
})();
