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
import H1 from 'components/H1';
import Cube from 'components/Cube';

let visList = [
  "https://www.youtube.com/embed/Tpba70L2BLo?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/S-VICwVEoBQ?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/NM2wtte1JRE?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/OWvmlMmgbwI?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/XS-59dxplXo?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/XwkdmHt_Ez8?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/c9f9fi4WZSM?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/ZyBiiWwBbTg?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/utnrmjc7iUI?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/L3V7LKYPIUQ?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/vvbN-cWe0A0?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/fw9MEopiuS0?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/On2jbcMXhtY?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/G-JTRNnZMKY?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/Z1AtiyMrVbE?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244",
  "https://www.youtube.com/embed/6iJ2nD5RPfk?ecver=2&loop=1&autoplay=1&showinfo=0&mute=1&controls=0&vq=244"

]

let musicList = [
  "https://www.youtube.com/embed/N0KRSny4eTU?ecver=2&autoplay=1&loop=1",
  "https://www.youtube.com/embed/FqgawnJLLiE?ecver=2&autoplay=1&loop=1",
  "https://www.youtube.com/embed/iiuhJPFTw9s?ecver=2&autoplay=1&loop=1",
  "https://www.youtube.com/embed/GJgXdSVFnJE?ecver=2&autoplay=1&loop=1",
  "https://www.youtube.com/embed/15wX9ftFAOI?ecver=2&autoplay=1&loop=1"

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
  display: flex;
  justify-content: center;
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

          <Cube />
          
          <Slide3 src={printLine(vis, 1)} width="100%" height="100%" frameBorder="0" autoplay='true' allowFullScreen></Slide3>
          <Slide2 src={printLine(vis, 2)} width="100%" height="100%" frameBorder="0" autoplay='true' allowFullScreen></Slide2>
          <Slide1 src={printLine(music, 2)} width="100%" height="100%" frameBorder="0" autoplay='true' allowFullScreen></Slide1>
        </Container>
      </Video>
    );
  }
}
