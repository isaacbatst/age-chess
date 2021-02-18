import { Text } from 'react-hexgrid-with-context-api'
import { StyledHex } from './styles';



function Hexagon(props) {
  const { hex: { q, r, s, icon = "", owner = "none" }, index } = props;

  console.log(owner)

  return <StyledHex q={q} r={r} s={s} fill={icon} owner={owner}>
    <Text>{index.toString()}</Text>
  </StyledHex>
}

export default Hexagon;