// libs
import styled from 'styled-components';

// components
import CategoriesGallery from '../components/models-overview/CategoryGallery/CategoriesGallery';

// animations
import { fadeInAnimation } from '../components/styles/animations/fade-in';
import { moveUpAnimation } from '../components/styles/animations/move-up';

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
  animation: ${fadeInAnimation} 3s, ${moveUpAnimation('10vh', '0')} 1s;

  @media screen and (min-width: 760px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 80px;
  }
`;

const StyledSubtitle = styled.h4`
  font-size: 16px;
  opacity: 0;
  animation: ${fadeInAnimation} 3s forwards, ${moveUpAnimation('10vh', '0')} 1s;
  animation-delay: 0.3s;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  background: ${props => props.theme.secondaryColour};
`;

export default ModelsOverview;
