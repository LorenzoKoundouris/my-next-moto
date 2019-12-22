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
  * {
    padding: 0;
    margin: 0;
  }

  margin: 125px 200px;
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

export default ModelsOverview;
