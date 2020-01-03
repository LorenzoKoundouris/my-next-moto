// libs
import React from 'react';
import styled from 'styled-components';

// components
import CategorySelector from './CategorySelector';

// types
import Category from '../../../types/Categories';

interface ICategoryFilterProps {
  filterItems: Category[];
  handleFilter: (selectedFilter: Category) => void;
  selectedFilterItem: Category;
}

function CategoriesFilter(props: ICategoryFilterProps) {
  const {
    handleFilter,
    filterItems: propsFilterItems,
    selectedFilterItem,
  } = props;

  const filterItems = [...propsFilterItems];
  filterItems.unshift('All');

  const categories = filterItems.map(filterItem => (
    <CategorySelector
      key={filterItem}
      category={filterItem}
      isSelected={filterItem === selectedFilterItem}
      handleClick={handleFilter}
    />
  ));

  return <CategoriesList>{categories}</CategoriesList>;
}

// styles
const CategoriesList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100px;
  background: ${props => props.theme.secondaryColour};
`;

export default CategoriesFilter;
