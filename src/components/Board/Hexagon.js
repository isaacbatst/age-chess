import { Text } from 'react-hexgrid-with-context-api'
import { useDispatch, useSelector } from 'react-redux';
import { selectHexagonx } from '../../store/ducks/board';
import { StyledHex } from './styles';

function Hexagon(props) {
  const { hex, hex: { icon = "", owner = "none" } } = props;
  const { coordinates: { q, r, s } } = hex;

  const selectedHexagon = useSelector(state => state.board.selectedHexagon);
  const dispatch = useDispatch();

  const isSelected = selectedHexagon === hex.id;

  function handleClick() {
    dispatch(selectHexagonx(hex.id))
  }

  return <StyledHex q={q} r={r} s={s} fill={icon} owner={owner} onClick={handleClick} selected={isSelected}>
    <Text>{hex.id}</Text>
  </StyledHex>
}

export default Hexagon;