import { h } from "preact";
import { useContext, useState } from "preact/hooks";
import styled from "styled-components";
import { GameContext } from ".";
import Card from "./card";
import { MoleLabel, MoleCheckbox, MolehillWrapper } from "./mole";
import Molehill from "./svg/molehill";

function Target(props) {
	const [isActive, setActiveState] = useState(false),
		[context] = useContext(GameContext),
		{ timeRemaining } = context,
		{ time } = props;

	setTimeout(() => {
		setActiveState(true);
	}, (time + 1) * 1000);

	if (timeRemaining === 0) {
		setActiveState(false);
	}

	return (
		<MoleLabel>
			<MoleCheckbox type="checkbox" checked={!isActive} disabled />
			<TargetWrapper>
				<TargetHolder />
				<Card type="target" id={1} marginTop="10%" />
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
	max-width: 12rem;
	min-width: 8rem;
	overflow: hidden;
	width: calc(15vw + 5rem);

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
	border: .4rem solid black;
`;

export default Target;
