document.title = "Jīntiān tiānqì zěnme yàng?";

config.title = "Jīntiān tiānqì zěnme yàng?";
config.range = 11;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Jīntiān tiānqì zěnme yàng? - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Jīntiān tiānqì zěnme yàng? - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Jīntiān tiānqì zěnme yàng? - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e9cd75dfb76c53278b7ea5c.mp3",
    "5e9cd75dfb76c53278b7ea5d.mp3",
    "5e9cd75efb76c53278b7ea5e.mp3",
    "5e9cd75ffb76c53278b7ea5f.mp3",
    "5e9cd75ffb76c53278b7ea60.mp3",
    "5e9cd760fb76c53278b7ea61.mp3",
    "5e9cd58117c76e7d6c69f905.mp3",
    "5e9cd58217c76e7d6c69f907.mp3",
    "5e9cd58117c76e7d6c69f906.mp3",
    "5ea3b71497e2a3b784762d36.mp3",
    "5ea3b71497e2a3b784762d37.mp3"
]);
