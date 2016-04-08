function shiftfunc () {
	var temp = deck[0];
	deck.shift();
	deck.push(temp);
	updatetop();
}

function shufflefunc () {
	cards = [
		"academy-at-tolaria-west.jpg",
		"the-aether-flues.jpg",
		"agyrem.jpg",
		"bant.jpg",
		"cliffside-market.jpg",
		"the-dark-barony.jpg",
		"eloren-wilds.jpg",
		"the-eon-fog.jpg",
		"feeding-grounds.jpg",
		"fields-of-summer.jpg",
		"the-fourth-sphere.jpg",
		"glimmervoid-basin.jpg",
		"goldmeadow.jpg",
		"the-great-forest.jpg",
		"grixis.jpg",
		"the-hippodrome.jpg",
		"immersturm.jpg",
		"isle-of-vesuva.jpg",
		"izzet-steam-maze.jpg",
		"krosa.jpg",
		"lethe-lake.jpg",
		"llanowar.jpg",
		"the-maelstrom.jpg",
		"minamo.jpg",
		"murasa.jpg",
		"naar-isle.jpg",
		"naya.jpg",
		"otaria.jpg",
		"panopticon.jpg",
		"pools-of-becoming.jpg",
		"ravens-run.jpg",
		"sanctum-of-serra.jpg",
		"sea-of-sand.jpg",
		"shiv.jpg",
		"skybreen.jpg",
		"sokenzan.jpg",
		"stronghold-furnace.jpg",
		"turri-island.jpg",
		"undercity-reaches.jpg",
		"velis-vel.jpg",
		"tazeem-release-promo.jpg",
		"celestine-reef-pre-release-promo.jpg",
		"horizon-boughs-gateway-promo.jpg",
		"mirrored-depths.jpg",
		"tember-city.jpg",
		"akoum.jpg",
		"aretopolis.jpg",
		"astral-arena.jpg",
		"bloodhill-bastion.jpg",
		"edge-of-malacol.jpg",
		"furnace-layer.jpg",
		"gavony.jpg",
		"glen-elendra.jpg",
		"grand-ossuary.jpg",
		"grove-of-the-dreampods.jpg",
		"hedron-fields-of-agadeem.jpg",
		"jund.jpg",
		"kessig.jpg",
		"kharasha-foothills.jpg",
		"kilnspire-district.jpg",
		"lair-of-the-ashen-idol.jpg",
		"mount-keralia.jpg",
		"nephalia.jpg",
		"norns-dominion.jpg",
		"onakke-catacomb.jpg",
		"orochi-colony.jpg",
		"orzhova.jpg",
		"prahv.jpg",
		"quicksilver-sea.jpg",
		"selesnya-loft-gardens.jpg",
		"stensia.jpg",
		"takenuma.jpg",
		"talon-gates.jpg",
		"trail-of-the-mage-rings.jpg",
		"truga-jungle.jpg",
		"windriddle-palaces.jpg",
		"the-zephyr-maze.jpg",
		"stairs-to-infinity.jpg",
		"chaotic-aether.jpg",
		"interplanar-tunnel.jpg",
		"morphic-tide.jpg",
		"mutual-epiphany.jpg",
		"planewide-disaster.jpg",
		"reality-shaping.jpg",
		"spatial-merging.jpg",
		"time-distortion.jpg"
	];
	cardnum = cards.length;
	
	for (var i = 0; i < cardnum; i++) {
		var x = Math.floor(Math.random() * cards.length);
		deck[i] = cards[x];
		cards.splice(x, 1);
	}
	updatetop();
}

function updatetop () {
	document.getElementById('img').src = "img/" + deck[0];
}

/*function print () {
	for (var i = 0; i < deck.length; i++) {
		alert(deck[i]);
	}
}*/

deck = [];