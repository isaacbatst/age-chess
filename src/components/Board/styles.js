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
  }

  g text {
    font-size: 0.3em;
    fill: black;
    fill-opacity: 0.8;
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
    stroke-width: ${({ owner }) => owner !== "none" ? 0.6 : 0.2};
    fill-opacity: ${({ selected }) => selected ? 1 : 0.5}
  }

  g rect.green {
    fill: green;
    fill-opacity: 1;
  }

  g rect.red {
    fill: red;
    fill-opacity: 1;
  }
`