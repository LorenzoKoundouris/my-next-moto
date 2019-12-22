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
      <strong>MENU</strong>
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
  background-color: ${(props: any) => props.theme.fontColour};
  margin: 2px 0;
`;

export default BurgerIcon;
