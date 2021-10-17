import { Text } from 'react-hexgrid-with-context-api'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { clickHexagon } from '../../../store/ducks/board';
import Health from './Piece/Health';
import { StyledHex } from './styles';


function Hexagon({ hex }) {
  const { piece, owner = "none" } = hex;
  const { coordinates: { q, r, s } } = hex;

  const selectIsSelected = createSelector(state => state.board.selectedHexagon, selectedHexagon => selectedHexagon && selectedHexagon.id === hex.id)
  const isSelected = useSelector(selectIsSelected);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(clickHexagon(hex))
  }

  return (
    <StyledHex q={q} r={r} s={s} fill={piece ? piece.icon : ""} owner={owner} piece={piece} selected={isSelected} onClick={handleClick}>
       { piece && <Health piece={piece} /> }
      <Text>{hex.id}</Text>
    </StyledHex>
  )
}

export default Hexagon;