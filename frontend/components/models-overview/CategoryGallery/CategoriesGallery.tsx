// libs
import styled from 'styled-components';

// data
import * as data from '../../../../backend/model-overview.json';

// components
import CategoriesFilter from '../CategoryFilter/CategoriesFilter';
import CategorySection from './CategorySection';

// interfaces
import ICategory from '../../../interfaces/ICategory';

function CategoriesGallery() {
  const strippedCategories = data.categories.map(category => ({
    id: category.id,
    name: category.name,
  }));

  return (
    <Container>
      <CategoriesFilter categories={strippedCategories} />
      {getCategorySections()}
    </Container>
  );
}

const getCategorySections = () => {
  return data.categories.map(
    ({ id, name, models }: ICategory): JSX.Element => {
      return <CategorySection key={id} id={id} name={name} models={models} />;
    }
  );
};

// styles
const Container = styled.div`
  background: ${props => props.theme.tertiaryColour};
`;

export default CategoriesGallery;
