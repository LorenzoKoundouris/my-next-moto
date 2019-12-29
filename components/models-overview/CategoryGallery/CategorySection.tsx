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
  @media screen and (min-width: 300px) {
    margin: 10px 0 0 50px;
  }
`;

const SectionModels = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default CategorySection;
