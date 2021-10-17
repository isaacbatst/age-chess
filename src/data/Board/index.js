import { GridGenerator, HexUtils } from 'react-hexgrid-with-context-api';
import iconMap from './iconMap';
import config from './config';
import pieces from '../Game/pieces';

const hexagonsCoordinates = GridGenerator.getGenerator(config.map)(...config.mapProps);
const playersHexagons = Object.entries(iconMap.players)

const hexagonsWithPlayers = hexagonsCoordinates.map((coordinates) => {
  const coordinatesString = HexUtils.getID(coordinates)
  const playerWithHexagons = playersHexagons.find(([_, hexagons]) => hexagons && hexagons[coordinatesString])

  const hexagon = {
    id: coordinatesString, coordinates
  }

  if(!playerWithHexagons) {
    return hexagon;
  }
  
  const [player, playerHexagons] = playerWithHexagons;

  const pieceName = playerHexagons[coordinatesString];
  
  const piece = { ...pieces[pieceName] };

  piece.health = {
    actual: piece.health,
    full: piece.health
  }

  piece.name = pieceName;

  return {
    ...hexagon,
    owner: player,
    piece
  }
})

const grid = {
  hexagons: hexagonsWithPlayers,
  config
}

export default grid;