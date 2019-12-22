// libs
import styled from 'styled-components';

// components
import LinkItem from '../components/common/LinkItem';
import BurgerIcon from './common/BurgerMenu';

function Header() {
  return (
    <StyledHeader>
      <LeftMenu>
        <LinkItem href='/'>
          <BurgerIcon />
        </LinkItem>
      </LeftMenu>

      <LogoContainer>
        <MotorradLogo
          alt='BMW Motorrad Logo'
          src='https://www.bmw-motorrad.co.uk/content/dam/bmwmotorradnsc/common/mnm/graphics/bmw_motorrad_logo.png.asset.1572270945089.png'
        />
      </LogoContainer>
    </StyledHeader>
  );
}

// styles
const StyledHeader = styled.div`
  display: flex;
  position: sticky;
  padding: 13px 30px 0 0;
  height: 72px;
  background: ${props => props.theme.primaryColour};
  justify-content: space-between;
`;

const LeftMenu = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  cursor: pointer;
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
