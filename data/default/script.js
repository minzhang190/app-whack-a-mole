config.range = 15;

config = [Object.assign({}, config, {
	title: 'Level 1',
	columns: 2,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Level 2',
	columns: 3,
	matching: 'target',
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Level 3',
	columns: 4,
	matching: 'mole',
	holdCardRatio: 1
})];

loadSound([
	"apple.mp3",
	"fig.mp3",
	"grape.mp3",
	"kiwi.mp3",
	"lemon.mp3",
	"lime.mp3",
	"mango.mp3",
	"melon.mp3",
	"orange.mp3",
	"peach.mp3",
	"pear.mp3",
	"pinapple.mp3",
	"plum.mp3",
	"raspberry.mp3",
	"strawberry.mp3",
]);
