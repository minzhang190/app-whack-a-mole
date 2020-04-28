import { Fragment, h } from "preact";
import styled from "styled-components";
import Clock from "./clock";
import Mole from "./mole";
import Target from "./target";
import { Scoreboard } from "./scoreboard";

function MoleGrid(props) {
	const { columns } = props;

	const cells = [...Array(columns * 3 - 1)].map((_, idx) =>
		<Mole id={`mole-${idx + 1}`} time={idx / (columns * 3)} />
	);
	cells.splice(Math.floor((3 * columns - 1) / 2), 0, <Target time={1 - 1 / (columns * 3)}/>);

	return (
		<Fragment>
			<Clock />
			<Scoreboard />
			<GridArea style={{ 'grid-template-columns': '1fr '.repeat(columns) }}>
				{cells}
			</GridArea>
		</Fragment>
	);
}

const GridArea = styled.main`
	display: grid;
	grid-column: 1 / span 2;
	grid-gap: 5vh;
	grid-row: 2;
	grid-template-rows: 1fr 1fr 1fr;
	height: 100%;
	justify-self: center;
	max-width: 1440px;
	width: 100%;
`;

export default MoleGrid;
