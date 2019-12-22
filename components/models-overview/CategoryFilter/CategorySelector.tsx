// libs
import React from 'react';
import styled from 'styled-components';

// components
import Button from '../../common/Button';

interface ICategoriesFilterProps {
  category: { name: string; isSelected: boolean };
  handleClick: (categoryName: string) => void;
}

const buttonStylesConfig = {
  fontSize: '20px',
  margin: '0 10px',
  padding: '0 10px',
};

function CategorySelector(props: ICategoriesFilterProps) {
  const {
    category: { name, isSelected },
    handleClick,
  } = props;

  return (
    <StyledSelector>
      <Button
        onClick={() => handleClick(name)}
        stylesConfig={buttonStylesConfig}
      >
        {name}
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
