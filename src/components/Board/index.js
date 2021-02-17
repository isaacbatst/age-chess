import { useState } from 'react';
import { HexGrid, Pattern } from 'react-hexgrid-with-context-api';
import { StyledLayout } from './styles';
import { hexagons as defaultHexagons } from '../../data/grid/';
import config from '../../data/grid/config'
import Hexagon from './Hexagon';
import spear from '../../assets/icons/spear.svg';
import sword from '../../assets/icons/sword.svg';
import horse from '../../assets/icons/horse.svg';

function Board() {
  const [hexagons, setHexagons] = useState(defaultHexagons);
  
  const { layout } = config;
  const size = { x: layout.width, y: layout.height };

  return <HexGrid width={config.width} height={config.height}>
    <StyledLayout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
      {hexagons.map((hex, index) => <Hexagon hex={hex} key={config.mapProps + index} index={index} />)}
    </StyledLayout>
    <Pattern id="spear" link={spear} />
    <Pattern id="sword" link={sword} />
    <Pattern id="horse" link={horse} />
  </HexGrid>
}

export default Board;