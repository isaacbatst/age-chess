import { GridGenerator } from 'react-hexgrid-with-context-api';
import iconMap from './iconMap';
import config from './config';

const hexGrid = GridGenerator.getGenerator(config.map);
const pureHexagons = hexGrid(...config.mapProps);

export const hexagons = pureHexagons.map((hexagon, index) => ({
  ...hexagon,
  icon: iconMap[index]
}))
