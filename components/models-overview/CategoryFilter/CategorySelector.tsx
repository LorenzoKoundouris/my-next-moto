// libs
import styled from 'styled-components';

// components
import Button from '../../common/Button';
import Category from '../../../types/Categories';

interface ICategoriesFilterProps {
  category: Category;
  isSelected: boolean;
  handleClick: (categoryName: Category) => void;
}

const buttonStylesConfig = {
  fontSize: '20px',
  margin: '0 10px',
  padding: '0 10px',
};

function CategorySelector(props: ICategoriesFilterProps) {
  const { category, isSelected, handleClick } = props;

  return (
    <StyledSelector>
      <Button
        onClick={() => handleClick(category)}
        stylesConfig={buttonStylesConfig}
      >
        {category}
      </Button>
      {isSelected && <Arrow />}
    </StyledSelector>
  );
}

const StyledSelector = styled.div`
  display: flex;
  justify-content: center;
`;

const Arrow = styled.div`
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid ${props => props.theme.tertiaryColour};
  position: absolute;
`;

export default CategorySelector;
