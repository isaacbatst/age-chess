import styled from 'styled-components';

const boardHeight = 8;
const boardWidth = 8;

const Pixel = styled.div`
  height: 70px;
  width: 70px;
  border: 1px solid black;
  display: table-cell;
`;

const StyledRow = styled.div`
  display: table-row;
`

function createMany(Component, qtd) {
  return Array.from(Array(qtd)).map((_, index) => <Component key={index} />)
};

function Row(){
  return <StyledRow>{createMany(Pixel, boardHeight)}</StyledRow>
}

function Board() {
  return <div>{createMany(Row, boardWidth)}</div>
}

export default Board;