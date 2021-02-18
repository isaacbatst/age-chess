import styled from 'styled-components';
import { Layout, Hexagon } from 'react-hexgrid-with-context-api';

export const StyledLayout = styled(Layout)`
  g {
    fill: #3F51B5;
    fill-opacity: 0.6;
  }
  g:hover {
    fill-opacity: 1;
  }
  g:hover text {
    fill-opacity: 1;
  }

  g polygon {
    stroke: #aaa;
    stroke-width: 0.2;
    transition: fill-opacity .2s;
  }
  g text {
    font-size: 0.3em;
    fill: #FFFFFF;
    fill-opacity: 0.8;
    transition: fill-opacity .2s;
  }
  path {
    fill: none;
    stroke: hsl(60, 20%, 70%);
    stroke-width: 0.4em;
    stroke-opacity: 0.3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`

const hexColorMap = {
  player1: "blue",
  player2: "red",
  none: ""
}

export const StyledHex = styled(Hexagon)`
  g polygon {
    stroke: ${({ owner }) => hexColorMap[owner]};
  }
`