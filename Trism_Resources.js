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
Trism.Identities = [" 父の跡を追って、世界を救う旅に出る17歳の少年。\n そんなゲームが好きだった。\n"
	, " 故郷の村を滅ぼした闇の力に対抗するために、自身の\nチカラを鍛えるために世界に挑戦する。\n そんな厨二病設定を自らに課した勇者(36歳)。"
	, ' 世界中で唯一正統な継承権をもつ、八百屋"やおはち"の\n跡取り。\n'
	, "        まさお\n\n"
	, " 美白に憧れる女子。\n\n 「てゆーかマジちょーうける！」"
	, " 隣村からはるばる訪れた挑戦者。\n 往復のバス代がちょっとダメージだった。\n"
	, " 将棋初級、脅威の実力者。\n 勝負が将棋じゃない、というハンデを負ってもなお戦意は\n旺盛。"
	, "　界隈では、その存在を知らない者はモグリと言われる\nほどの猛者。\n　バーゲンで鉢合わせすればおばちゃんたちも逃げ出す。"
	, " 「将来性は抜群」誰よりもそう言われ続けてきたオトコ。\n\n 「...将来性は抜群」"
	, " 恐ろしいことに、タカ派。\n Ex*leファン。\n"
	, " 山も削るジハイドロジェンモノキサイドを武器とする狂戦士。\n 自らも強度の中毒症と化してしまったため、ジハイドロ\nジェンモノキサイドなしでは3日と生きられない。"
	, "　遠い異国から訪れたドルイド。\n　法名はゲル・ドロンコ=ビチャリゴロス ンッヌワト・ナタデコ\nコイリ・マスカットフウミ・エ=ゥラ・ゼリー(「賢い者」の意)"];
