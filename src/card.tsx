import { h } from "preact";
import { useContext } from "preact/hooks";
import styled from "styled-components";
import { GameContext } from ".";

function Card(props) {
	const [context] = useContext(GameContext),
		{ config } = context,
		{ id, type, marginTop } = props;

	const matching = (config.matching === type ? 'matching' : '');

	return id != 0 ? (
		<Frame className={`${type}-card card-${id} ${matching}`} style={{ 'margin-top': marginTop }}>
			<Text>{type}<br />card {matching === 'matching' ? '*' : '#'}{id}</Text>
		</Frame>
	) : null;
}

const Frame = styled.div`
	position: absolute;
	width: 92%;
	left: 4%;
	padding-top: 69%;
	box-sizing: border-box;
	border: 1vh solid black;
	background: white center/90% no-repeat;
`;

const Text = styled.div`
	width: 100%;
	margin-top: -69%;
	text-align: center;
`;

export default Card;
