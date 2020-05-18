document.title = "Shíwù (2)";

config.title = "Shíwù (2)";
config.range = 12;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shíwù (2) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shíwù (2) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Shíwù (2) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5ec1d06b5f5aaa74c006596a.mp3",
    "5e8dad947aa6d6552ebb39b4.mp3",
    "5e8dad947aa6d6552ebb39b3.mp3",
    "5e8dad947aa6d6552ebb39ab.mp3",
    "5ec1d0725f5aaa74c006596b.mp3",
    "5ec1d0725f5aaa74c006596c.mp3",
    "5ec1d0725f5aaa74c006596d.mp3",
    "5ec1d0735f5aaa74c006596e.mp3",
    "5e8dad947aa6d6552ebb39ac.mp3",
    "5ec1d0745f5aaa74c006596f.mp3",
    "5ec1d0745f5aaa74c0065970.mp3",
    "5ec1d0755f5aaa74c0065971.mp3"
]);
