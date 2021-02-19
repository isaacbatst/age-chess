import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HexGrid, Pattern } from 'react-hexgrid-with-context-api';
import { StyledLayout } from './styles';
import grid from '../../data/Board';
import Hexagon from './Hexagon';
import spear from '../../assets/icons/spear.svg';
import sword from '../../assets/icons/sword.svg';
import horse from '../../assets/icons/horse.svg';
import { setup } from '../../store/ducks/board';

const { hexagons: initialHexagons, config } = grid;

function Board() {
  const hexagons = useSelector(state => state.board.hexagons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setup(config, initialHexagons))
  }, [dispatch])
  
  const { layout } = config;
  const size = { x: layout.width, y: layout.height };

  return <HexGrid width={config.width} height={config.height}>
    <StyledLayout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
      {hexagons.map((hex, index) => <Hexagon hex={{ ...hex, index }} key={index} />)}
    </StyledLayout>
    <Pattern id="spear" link={spear} />
    <Pattern id="sword" link={sword} />
    <Pattern id="horse" link={horse} />
  </HexGrid>
}

export default Board;