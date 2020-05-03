import { h } from "preact";
import { useContext, useState, useEffect } from "preact/hooks";
import styled from "styled-components";
import { GameContext } from ".";
import Card from "./card";
import { MoleLabel, MoleCheckbox, MolehillWrapper } from "./mole";
import Molehill from "./svg/molehill";
import { setRandomNumberByRange, randomElementByClassName } from "./_utils";

function Target(props) {
	const [isActive, setActiveState] = useState(false),
		[cardId, setCardId] = useState(0),
		[context] = useContext(GameContext),
		{ config, timeRemaining, targetCardId, setTargetCardId, isMuted } = context,
		{ time } = props;

	useEffect(() => {
		setTimeout(() => {
			setActiveState(true);
		}, (time + 1) * 1000);
	}, []);

	useEffect(() => {
		if (targetCardId < 0) { // Was set inactive by other components
			setActiveState(false);
			setTimeout(() => {
				if (timeRemaining === 0) {
					return;
				}

				setActiveState(true);

				let nextTargetCardId = 0;
				do {
					nextTargetCardId = setRandomNumberByRange(1, config.range);
				} while (config.range > 1 && nextTargetCardId === cardId);
				setTargetCardId(nextTargetCardId);
			}, 1000);
		} else {
			setCardId(targetCardId);
			if (!isMuted) {
				const targetCardAudio = randomElementByClassName(`card-target-${targetCardId}`) as HTMLAudioElement;
				if (targetCardAudio) {
					targetCardAudio.currentTime = 0;
					targetCardAudio.play();
				}
			}
		}
	}, [targetCardId]);

	if (timeRemaining === 0) {
		setActiveState(false);
	}

	// Player has hit the target
	function targetHit(e: MouseEvent | TouchEvent) {
		// Prevent click/tap spamming
		if (isActive) {
			// Audio feedback to the user
			if (!isMuted) {
				const targetCardAudio = randomElementByClassName(`card-target-${cardId}`) as HTMLAudioElement;
				if (targetCardAudio) {
					targetCardAudio.currentTime = 0;
					targetCardAudio.play();
				}
			}
		}
	}

	return (
		<MoleLabel>
			<MoleCheckbox type="checkbox" checked={!isActive} disabled />
			<TargetWrapper onMouseDown={e => targetHit((e as unknown) as MouseEvent)} onTouchStart={e => targetHit((e as unknown) as TouchEvent)}>
				<TargetHolder />
				<Card type="target" id={cardId} marginTop="10%" />
			</TargetWrapper>
			<MolehillWrapper>
				<Molehill time={time} />
			</MolehillWrapper>
		</MoleLabel>
	);
};

const TargetWrapper = styled.div`
	position: relative;
	height: 100%;
	max-width: calc(24vh - 1rem);
	min-width: calc(16vh - 1rem);
	overflow: hidden;
	width: calc(15vw + 10vh - 1rem);

	input + & {
		transform: translate3d(0, 0, 0);
		transition: transform 150ms;
	}

	input:checked + & {
		transform: translate3d(0, 100%, 0);
	}
`;

const TargetHolder = styled.div`
	position: absolute;
	width: 60%;
	left: 20%;
	height: 100%;
	margin-top: 10%;
	box-sizing: border-box;
	border: calc(1vh - .05rem) solid black;
`;

export default Target;
