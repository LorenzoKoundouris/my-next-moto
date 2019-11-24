import styled from 'styled-components';
import CategoriesFilter from '../components/models-overview/CategoriesFilter';

const ModelsOverview = () => (
  <Container>
    <Banner>
      <StyledTitle>ALL MODELS</StyledTitle>
      <StyledSubtitle>FIND YOUR NEW MOTORCYCLE</StyledSubtitle>
    </Banner>
    <MainContent>
      <CategoriesFilter />
      <Categories>Placeholder</Categories>
    </MainContent>
  </Container>
);

const Container = styled.div``;

const Banner = styled.div`
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

const MainContent = styled.div`
  width: 100%;
  background: ${props => props.theme.secondaryColour};
`;

const Categories = styled.div`
  background: ${props => props.theme.tertiaryColour};
`;

export default ModelsOverview;
