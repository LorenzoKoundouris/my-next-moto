// libs
import styled from 'styled-components';

// components
import LinkItem from './common/LinkItem';
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
        <MotorradLogo alt='BMW Motorrad Logo' />
      </LogoContainer>
    </StyledHeader>
  );
}

// styles
const StyledHeader = styled.div`
  display: flex;
  height: 85px;
  background: ${props => props.theme.primaryColour};
  justify-content: space-between;
`;

const LeftMenu = styled.div`
  display: flex;
  cursor: pointer;

  @media screen and (max-width: 1279px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 30px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MotorradLogo = styled.img`
  margin: 0 20px;
  height: 30px;

  @media screen and (max-width: 349px) {
    content: url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png');
  }

  @media screen and (min-width: 350px) {
    content: url('https://www.bmw-motorrad.co.uk/content/dam/bmwmotorradnsc/common/mnm/graphics/bmw_motorrad_logo.png.asset.1572270945089.png');
  }
`;

export default Header;
