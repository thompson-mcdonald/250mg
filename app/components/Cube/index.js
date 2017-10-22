import React from 'React';
import styled from 'styled-components';
import H1 from 'components/H1';

const Enviro = styled.div`
	-webkit-perspective: 1000px;
	position: fixed;
	z-index: 99999999999;
	text-align: center;
	margin: 0 auto;
	width: 100%;
`

const CubeDice = styled.div`
	width: 50%;
	text-align: center;
	margin: 0 auto;
	height: 100px;
	transition: transform 1.33s; /* Animate the transform properties */
	transform-style: preserve-3d; /* <-NB */
	&:hover {
		transform: rotateX(90deg); /* Text bleed at 90º */
	}
`;

const CubeSide1 = styled.div`
background: transparent;
height: 100px;
transform: translateZ(100px);
h1 {
	color: black;
}
`

const CubeSide2 = styled.div`
background: transparent;
height: 100px;
transform: rotateX(-90deg) translateZ(-100px);

h1 {
	color: white;
	
}
`

export default class Cube extends React.PureComponent {
	render() {
		return (
		<Enviro>
			<CubeDice>
				<CubeSide1>
					<H1>250mg</H1>
				</CubeSide1>
				<CubeSide2>
					<H1>names36</H1>
				</CubeSide2>
			</CubeDice>
	</Enviro>
		)
	}
};
