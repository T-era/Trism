Trism.RandomSelect = function(source, size) {
	size = size || 1;
	if (size == 1) {
		var index = Math.floor(Math.random() * source.length);
		return source[index];
	} else {
		var indexes = [];
		for (var i = 0; i < size; i ++) {
			var index = Math.floor(Math.random() * source.length);

			while(isIn(index, indexes)) {
				index = (index + 1) % source.length;
			}
			indexes.push(index);
		}
		
		var selected = []
		for (var i = 0, iMax = indexes.length; i < iMax; i ++) {
			selected.push(source[indexes[i]]);
		}
		return selected;
	}

	function isIn(item, list) {
		for (var i = 0, iMax = list.length; i < iMax; i ++) {
			if (list[i] === item) {
				return true;
			}
		}
		return false;
	}
};
Trism.Identities = [" ���̐Ղ�ǂ��āA���E���~�����ɏo��17�΂̏��N�B\n ����ȃQ�[�����D���������B\n"
	, " �̋��̑���łڂ����ł̗͂ɑ΍R���邽�߂ɁA���g��\n�`�J����b���邽�߂ɐ��E�ɒ��킷��B\n ����Ȑ~��a�ݒ������ɉۂ����E��(36��)�B"
	, ' ���E���ŗB�ꐳ���Ȍp���������A���S��"�₨�͂�"��\n�Վ��B\n'
	, "        �܂���\n\n"
	, " �����ɓ���鏗�q�B\n\n �u�Ă�[���}�W����[������I�v"
	, " �ב�����͂�΂�K�ꂽ����ҁB\n �����̃o�X�オ������ƃ_���[�W�������B\n"
	, " ���������A���Ђ̎��͎ҁB\n ��������������Ȃ��A�Ƃ����n���f�𕉂��Ă��Ȃ���ӂ�\n�����B"
	, "�@�E�G�ł́A���̑��݂�m��Ȃ��҂̓��O���ƌ�����\n�قǂ̖ҎҁB\n�@�o�[�Q���Ŕ����킹����΂��΂���񂽂��������o���B"
	, " �u�������͔��Q�v�N������������ꑱ���Ă����I�g�R�B\n\n �u...�������͔��Q�v"
	, " ���낵�����ƂɁA�^�J�h�B\n Ex*le�t�@���B\n"
	, " �R�����W�n�C�h���W�F�����m�L�T�C�h�𕐊�Ƃ��鋶��m�B\n ��������x�̒��ŏǂƉ����Ă��܂������߁A�W�n�C�h��\n�W�F�����m�L�T�C�h�Ȃ��ł�3���Ɛ������Ȃ��B"
	, "�@�����ٍ�����K�ꂽ�h���C�h�B\n�@�@���̓Q���E�h�����R=�r�`�����S���X ���b�k���g�E�i�^�f�R\n�R�C���E�}�X�J�b�g�t�E�~�E�G=�D���E�[���[(�u�����ҁv�̈�)"];
