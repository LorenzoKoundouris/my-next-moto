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
      {getModelTiles(models)}
    </StyledSection>
  );
}

// styles
const getModelTiles = (models: IModel[]) => {
  return models.map(model => <ModelTile key={model.id} model={model} />);
};

const StyledSection = styled.div`
  padding: 20px 60px;
`;

const SectionTitle = styled.h1`
  margin-bottom: 15px;
`;

export default CategorySection;
