import styled from 'styled-components';

import LinkItem from '../components/common/LinkItem';

const Header = () => (
  <StyledHeader>
    <LinkItem href='/'>🍔MENU</LinkItem>
    <LogoContainer>
      <MotorradLogo
        alt='BMW Motorrad Logo'
        src='https://www.bmw-motorrad.co.uk/content/dam/bmwmotorradnsc/common/mnm/graphics/bmw_motorrad_logo.png.asset.1572270945089.png'
      />
    </LogoContainer>
  </StyledHeader>
);

const StyledHeader = styled.div`
  height: 85px;
  display: flex;
  background: yellow; /* set props.theme.primaryColour */
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const MotorradLogo = styled.img`
  width: 140px;
`;

export default Header;
