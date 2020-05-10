document.title = "Hǎiyáng Dòngwù (1)";

config.title = "Hǎiyáng Dòngwù (1)";
config.range = 9;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Hǎiyáng Dòngwù (1) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Hǎiyáng Dòngwù (1) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5eb791ab14a1892be47ea89b.mp3",
    "5eb791aa14a1892be47ea89a.mp3",
    "5eb791ab14a1892be47ea89c.mp3",
    "5eb791ac14a1892be47ea89d.mp3",
    "5eb791ac14a1892be47ea89e.mp3",
    "5eb791ac14a1892be47ea89f.mp3",
    "5eb791ad14a1892be47ea8a0.mp3",
    "5eb791ad14a1892be47ea8a1.mp3",
    "5eb791ae14a1892be47ea8a2.mp3"
]);
