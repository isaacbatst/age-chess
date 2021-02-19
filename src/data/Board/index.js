import { GridGenerator, HexUtils } from 'react-hexgrid-with-context-api';
import iconMap from './iconMap';
import config from './config';

const hexGrid = GridGenerator.getGenerator(config.map);
const hexagonsCoordinates = hexGrid(...config.mapProps);
const playersEntries = Object.entries(iconMap.players)

const hexagons = hexagonsCoordinates.map((coordinates) => {
  const id = HexUtils.getID(coordinates)
  const ownerArray = playersEntries.find(([_, icons]) => icons ? icons[id] : undefined)
  
  const hexagon = {
    id, coordinates
  }
  
  if (ownerArray) {
    const [owner, map] = ownerArray;

    return {
      ...hexagon,
      owner,
      icon: map[id]
    }
  }

  return hexagon;
})

const grid = {
  hexagons,
  config
}

export default grid;