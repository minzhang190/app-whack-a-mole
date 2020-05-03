document.title = "Shuǐguǒ";

config.title = "Shuǐguǒ";
config.range = 20;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shuǐguǒ - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shuǐguǒ - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5e8bf93af6082885ff046aa6.mp3",
    "5e8bf93bf6082885ff046aa7.mp3",
    "5e8bf93cf6082885ff046aa8.mp3",
    "5e8bf93cf6082885ff046aa9.mp3",
    "5e8bf93df6082885ff046aaa.mp3",
    "5e8bf93ef6082885ff046aab.mp3",
    "5e8bf93ef6082885ff046aac.mp3",
    "5e8bf93ff6082885ff046aad.mp3",
    "5e8bf940f6082885ff046aae.mp3",
    "5e8bf941f6082885ff046aaf.mp3",
    "5e8bf942f6082885ff046ab0.mp3",
    "5e8bf942f6082885ff046ab1.mp3",
    "5e8bf943f6082885ff046ab2.mp3",
    "5e8bf944f6082885ff046ab3.mp3",
    "5e8bf944f6082885ff046ab4.mp3",
    "5e8bf945f6082885ff046ab5.mp3",
    "5e8bf946f6082885ff046ab6.mp3",
    "5e8bf946f6082885ff046ab7.mp3",
    "5e8bf947f6082885ff046ab8.mp3",
    "5e8bf948f6082885ff046ab9.mp3"
]);
