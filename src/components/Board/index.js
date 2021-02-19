import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HexGrid } from 'react-hexgrid-with-context-api';
import Hexagon from './Hexagon';
import Pattern from './Pattern'
import { StyledLayout } from './styles';
import { setup } from '../../store/ducks/board';
import grid from '../../data/Board';
import patterns from '../../data/Board/patterns';

const { hexagons: initialHexagons, config } = grid;

function Board() {
  const hexagons = useSelector(state => state.board.hexagons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setup(config, initialHexagons))
  }, [dispatch])

  const { layout } = config;

  const hexSize = {
    x: layout.width,
    y: layout.height
  }

  return <HexGrid width={config.width} height={config.height}>
    <StyledLayout size={hexSize} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
      {hexagons.map((hex, index) => <Hexagon hex={{ ...hex, index }} key={index + config.mapProps} />)}
    </StyledLayout>
    {Object.entries(patterns).map(([name, link], index) => <Pattern key={index} id={name} size={hexSize} link={link} />)}
  </HexGrid>
}

export default Board;