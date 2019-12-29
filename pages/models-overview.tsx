// libs
import styled from 'styled-components';

// components
import CategoriesGallery from '../components/models-overview/CategoryGallery/CategoriesGallery';

function ModelsOverview() {
  return (
    <>
      <Banner>
        <StyledTitle>ALL MODELS</StyledTitle>
        <StyledSubtitle>FIND YOUR NEW MOTORCYCLE</StyledSubtitle>
      </Banner>
      <MainContent>
        <CategoriesGallery />
      </MainContent>
    </>
  );
}

//styles
const Banner = styled.div`
  margin: 8% 15%;
`;

const StyledTitle = styled.h1`
  font-size: 28px;

  @media screen and (min-width: 760px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 80px;
  }
`;

const StyledSubtitle = styled.h4`
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  background: ${props => props.theme.secondaryColour};
`;

export default ModelsOverview;
