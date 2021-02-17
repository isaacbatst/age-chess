import { Hexagon as Hex,  Text } from 'react-hexgrid-with-context-api'

function Hexagon(props) {
  const { hex: { q, r, s, icon = "" }, index } = props;

  return <Hex q={q} r={r} s={s} fill={icon}>
    <Text>{index.toString()}</Text>
  </Hex>
}

export default Hexagon;