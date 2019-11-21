import styled from 'styled-components';

const Header = () => (
  <StyledHeader>
    <MenuButton>🍔 MENU</MenuButton>
    <MotorradLogo src='https://www.bmw-motorrad.co.uk/content/dam/bmwmotorradnsc/common/mnm/graphics/bmw_motorrad_logo.png.asset.1572270945089.png' />
  </StyledHeader>
);

const StyledHeader = styled.div`
  height: 85px;
  display: flex;
  background: yellow;
  justify-content: space-between;
  padding: 0 20px;
`;

const MenuButton = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
  padding: 0;
`;

const MotorradLogo = styled.img`
  width: 140px;
  margin: auto 0;
`;

export default Header;
