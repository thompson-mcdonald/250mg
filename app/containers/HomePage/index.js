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

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Video>
        <Container className="music">
          <Slide2 src="https://www.youtube.com/embed/S-VICwVEoBQ?ecver=2&autoplay=1&mute=1" width="100%" height="100%" frameBorder="0" autoplay='true' allowFullScreen></Slide2>
          <Slide1 src="https://www.youtube.com/embed/N0KRSny4eTU?ecver=2&autoplay=1" width="100%" height="100%" frameBorder="0" autoplay='true' allowFullScreen></Slide1>
        </Container>
      </Video>
    );
  }
}
