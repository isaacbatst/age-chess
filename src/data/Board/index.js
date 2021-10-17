import { GridGenerator, HexUtils } from 'react-hexgrid-with-context-api';
import iconMap from './iconMap';
import config from './config';

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

  return {
    ...hexagon,
    owner: player,
    icon: playerHexagons[coordinatesString]
  }
})

const grid = {
  hexagons: hexagonsWithPlayers,
  config
}

export default grid;