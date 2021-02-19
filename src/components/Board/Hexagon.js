import { Text } from 'react-hexgrid-with-context-api'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { selectHexagon } from '../../store/ducks/board';
import { StyledHex } from './styles';


function Hexagon(props) {
  const { hex, hex: { icon = "", owner = "none" } } = props;
  const { coordinates: { q, r, s } } = hex;

  const selectIsSelected = createSelector(state => state.board.selectedHexagon, selectedHexagon => selectedHexagon === hex.id)
  const isSelected = useSelector(selectIsSelected);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(selectHexagon(hex.id))
  }

  return <StyledHex q={q} r={r} s={s} fill={icon} owner={owner} onClick={handleClick} selected={isSelected}>
    <Text>{hex.id}</Text>
  </StyledHex>
}

export default Hexagon;