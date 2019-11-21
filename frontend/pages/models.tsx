import styled from 'styled-components';

const Models = () => (
  <Container>
    <StyledTitle>ALL MODELS</StyledTitle>
    <StyledSubtitle>FIND YOUR NEW MOTORCYCLE</StyledSubtitle>
  </Container>
);

const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  margin: 100px 200px;
`;

const StyledTitle = styled.h1`
  color: ${props => props.theme.fontColour};
  font-size: 80px;
`;

const StyledSubtitle = styled.h1`
  color: ${props => props.theme.fontColour};

`;

export default Models;
