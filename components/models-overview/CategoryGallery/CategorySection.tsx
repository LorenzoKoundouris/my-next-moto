// libs
import styled from 'styled-components';

// components
import ICategory from '../../../interfaces/ICategory';
import ModelTile from './ModelTile';

// interfaces
import IModel from '../../../interfaces/IModel';

function CategorySection({ id, name, models }: ICategory) {
  return (
    <StyledSection key={id}>
      <SectionTitle>{name}</SectionTitle>
      <SectionModels>{getModelTiles(models)}</SectionModels>
    </StyledSection>
  );
}

// styles
const getModelTiles = (models: IModel[]) => {
  return models.map(model => <ModelTile key={model.id} model={model} />);
};

const StyledSection = styled.div`
  min-width: 250px;
`;

const SectionTitle = styled.h1`
  @media screen and (max-width: 439px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;

const SectionModels = styled.div`
  display: grid;

  @media screen and (max-width: 439px) {
    padding: 20px;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-row-gap: 10px;
  }

  @media screen and (min-width: 440px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 2px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1280px) {
    padding: 15px;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 18px;
    grid-row-gap: 15px;
  }
`;

export default CategorySection;
