import { GridGenerator } from 'react-hexgrid-with-context-api';
import iconMap from './iconMap';
import config from './config';

const hexGrid = GridGenerator.getGenerator(config.map);
const pureHexagons = hexGrid(...config.mapProps);
const playersEntries = Object.entries(iconMap.players)

export const hexagons = pureHexagons.map((hexagon, index) => {
  const ownerArray = playersEntries.find(([_, icons]) => icons ? icons[index] : undefined)

  if (ownerArray) {
    const [owner, map] = ownerArray;

    return {
      ...hexagon,
      owner,
      icon: map[index]
    }
  }

  return hexagon
})
