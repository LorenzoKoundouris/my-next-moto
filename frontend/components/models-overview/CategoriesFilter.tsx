import styled from 'styled-components';

import * as categories from '../../utils/constants/model-categories';
import Button from '../common/Button';

const buttonStylesConfig = {
  fontSize: '20px',
  margin: '0 10px',
  padding: '0 10px',
};

const CategoriesFilter = () => (
  <CategoriesList>
    {Object.values(categories).map(category => (
      <Button
        key={category}
        onClick={() => void 0}
        stylesConfig={buttonStylesConfig}
      >
        {category}
      </Button>
    ))}
  </CategoriesList>
);

const CategoriesList = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

export default CategoriesFilter;
