import { createContext, h, render } from "preact";
import { useState } from "preact/hooks";
import { createGlobalStyle } from "styled-components";
import GameOver from "./game-over";
import MoleGrid from "./mole-grid";
import Soundboard from "./soundboard";
import TitleScreen from "./title-screen";
import { defaultContext, IContext, localStorageAvailable, setRandomNumberByRange } from "./_utils";

export const GameContext = createContext<[IContext]>([defaultContext]);
const prevMutedPreference = localStorageAvailable() ? (localStorage.getItem("ismute") === "true" ? true : false) : false;

function Game(props) {
	// Set our states
	const [config, setConfig] = useState(props.config),
		[targetCardId, setTargetCardId] = useState(setRandomNumberByRange(1, config.range)),
		[showTitleScreen, disableTitleScreen] = useState(true),
		[timeRemaining, countdown] = useState(config.gameLength),
		[playerScore, updateScore] = useState(0),
		[playerHighScore, updateHighScore] = useState(0),
		[isCountdownActive, setCountdownState] = useState(false),
		[isFirstPlay, setFirstPlayState] = useState(true),
		[isGameOver, setGameOverState] = useState(false),
		[isMuted, setMutedState] = useState(prevMutedPreference),
		[isHighScore, setHighScoreState] = useState(false);

	// Determine what to render
	const output = showTitleScreen ? <TitleScreen /> : isGameOver ? <GameOver /> : <MoleGrid columns={config.columns}/>;

	return (
		<GameContext.Provider
			value={[
				{
					config,
					countdown,
					disableTitleScreen,
					isCountdownActive,
					isGameOver,
					isFirstPlay,
					isMuted,
					isHighScore,
					playerHighScore,
					playerScore,
					setCountdownState,
					setFirstPlayState,
					setGameOverState,
					setMutedState,
					setHighScoreState,
					setTargetCardId,
					targetCardId,
					timeRemaining,
					updateHighScore,
					updateScore
				}
			]}
		>
			<GlobalStyle />
			{output}
			<Soundboard />
		</GameContext.Provider>
	);
}

const GlobalStyle = createGlobalStyle`
	html,
	body {
		height: 100%;
		overflow: hidden;
		overscroll-behavior: none;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		width: 100%;
	}

	body {
		align-content: center;
		display: grid;
		font-size: 2rem;
		font-weight: bold;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr auto;
		height: 100%;
		justify-content: center;
		min-width: 320px;
	}
`;

// Remove loader from DOM
let loader = document.getElementById("loader");
if (loader) {
	loader.remove();
	loader = null;
}

// Render our app
const rootElement = document.getElementById("app");
render(<Game config={{
	columns: 2,
	range: 2,
	matching: null,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -2,
	swapOnMatch: true,
	gameLength: 20,
	moleDelayLow: 1500,
	moleDelayHigh: 1800,
	moleSpeedUp: 0.015
}} />, rootElement as Element);

// Register service worker (not on dev/serve)
if (process.env.NODE_ENV !== "development") {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker.register("https://mole.onge.uk/sw.js").catch(error => {
				console.log("Registration failed: ", error);
			});
		});
	}
}
