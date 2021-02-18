import { useState } from 'react';
import { Text } from 'react-hexgrid-with-context-api'
import { StyledHex } from './styles';



function Hexagon(props) {
  const [ selected, setSelected ] = useState(false);
  const { hex, hex: { coordinates: { q, r, s }, icon = "", owner = "none", index }, onClick } = props;
  
  return <StyledHex q={q} r={r} s={s} fill={icon} owner={owner} onClick={() => onClick(hex)} selected={selected}>
    <Text>{index.toString()}</Text>
  </StyledHex>
}

export default Hexagon;