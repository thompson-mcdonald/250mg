/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import messages from './messages';
import styled from 'styled-components';

let visList = [
  "https://www.youtube.com/embed/Tpba70L2BLo?ecver=2&autoplay=1&mute=1",
  "https://www.youtube.com/embed/S-VICwVEoBQ?ecver=2&autoplay=1&mute=1",
  "https://www.youtube.com/embed/NM2wtte1JRE?ecver=2&autoplay=1&mute=1"
]

let musicList = [
  "https://www.youtube.com/embed/N0KRSny4eTU?ecver=2&autoplay=1",
  "https://www.youtube.com/embed/FqgawnJLLiE?ecver=2&autoplay=1",
  "https://www.youtube.com/embed/iiuhJPFTw9s?ecver=2&autoplay=1"

]

let num = Math.floor(Math.random() * 42000);

function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

var music = shuffle(musicList);
var vis = shuffle(visList);

function printLine(array, num) {
  let result = array[num];
  return result;
}

const Video = styled.div`
  height: 100vh;
  width: 100vw;
`

const Container = styled.div`
  height: 100%;
  width:100%
`

const Slide1 = styled.iframe`
  display: none;
`

const Slide2 = styled.iframe`
  display: block;
  z-index: 1000;
  position: absolute;
`

const Slide3 = styled.iframe`
  display: block;
  z-index: 1200;
  position: absolute;
  opacity: 0.5;
`

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Video>
        <Container className="music">
          <Slide3 src={printLine(vis, 1)} width="100%" height="100%" frameBorder="0" autoplay='true' allowFullScreen></Slide3>
          <Slide2 src={printLine(vis, 0)} width="100%" height="100%" frameBorder="0" autoplay='true' allowFullScreen></Slide2>
          <Slide1 src={printLine(music, 2)} width="100%" height="100%" frameBorder="0" autoplay='true' allowFullScreen></Slide1>
        </Container>
      </Video>
    );
  }
}
