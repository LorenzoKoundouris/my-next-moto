// libs
import styled from 'styled-components';

function BurgerIcon() {
  return (
    <>
      <Burger>
        <Line />
        <Line />
        <Line />
      </Burger>
      <Menu>MENU</Menu>
    </>
  );
}

// styles
const Burger = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const Line = styled.div`
  width: 23px;
  height: 3px;
  background-color: ${props => props.theme.fontColour};
  margin: 2px 0;
`;

const Menu = styled.strong`
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 2px;
`;

export default BurgerIcon;
