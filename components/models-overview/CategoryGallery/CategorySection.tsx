// libs
import styled from 'styled-components';

// components
import ICategory from '../../../interfaces/ICategory';
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
  return models.map(model => (
    <ModelTile key={model.id}>{model.name}</ModelTile>
  ));
};

const StyledSection = styled.div`
  padding: 20px 60px;
`;

const SectionTitle = styled.h2`
  /* make font larger */
`;

const ModelTile = styled.div`
  width: 295px;
  height: 405px;
  background: ${props => props.theme.primaryColour};
`;

export default CategorySection;
