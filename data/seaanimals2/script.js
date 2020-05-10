document.title = "Hǎiyáng Dòngwù (2)";

config.title = "Hǎiyáng Dòngwù (2)";
config.range = 9;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Hǎiyáng Dòngwù (2) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Hǎiyáng Dòngwù (2) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5eb791ae14a1892be47ea8a3.mp3",
    "5eb791ae14a1892be47ea8a4.mp3",
    "5eb791af14a1892be47ea8a5.mp3",
    "5eb791af14a1892be47ea8a6.mp3",
    "5eb79b1ab25bfd882d779b82.mp3",
    "5eb79b1ab25bfd882d779b83.mp3",
    "5eb79b1bb25bfd882d779b84.mp3",
    "5eb79b1bb25bfd882d779b85.mp3",
    "5eb79b1bb25bfd882d779b86.mp3"
]);
