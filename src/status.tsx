import { h } from "preact";
import { useContext } from "preact/hooks";
import styled from "styled-components";
import { GameContext } from ".";

function Status() {
	const [context] = useContext(GameContext),
		{ config } = context;

	return <TitleText>{config.title}</TitleText>;
}

const TitleText = styled.div`
	font-weight: bold;
	padding: 0.5rem 1rem;
	grid-column: 1;
	grid-row: 3;
`;

export default Status;
