// libs
import React from 'react';
import styled from 'styled-components';

// components
import CategorySelector from './CategorySelector';
import Category from '../../../types/Categories';

interface ICategoryFilterProps {
  categoryFilters: Category[];
  handleFilter: (selectedFilter: string) => void;
}

interface ICategoryFilterState {
  categoryFilters: { name: string; isSelected: boolean }[];
}

class CategoriesFilter extends React.Component<
  ICategoryFilterProps,
  ICategoryFilterState
> {
  constructor(props: ICategoryFilterProps) {
    super(props);

    const allCategoryFilters = [
      {
        name: 'All',
        isSelected: true,
      },
      ...props.categoryFilters.map(category => ({
        name: category,
        isSelected: false,
      })),
    ];

    this.state = { categoryFilters: allCategoryFilters };
  }

  private handleClick = (categoryName: string) => {
    const { handleFilter } = this.props;
    const { categoryFilters } = this.state;

    const updatedCategories = categoryFilters.map(category => {
      return { ...category, isSelected: category.name === categoryName };
    });

    this.setState({ categoryFilters: updatedCategories });
    handleFilter(categoryName);
  };

  private getCategories = () => {
    const { categoryFilters } = this.state;

    return categoryFilters.map(category => (
      <CategorySelector
        key={category.name}
        category={category}
        handleClick={this.handleClick}
      />
    ));
  };

  public render() {
    return <CategoriesList>{this.getCategories()}</CategoriesList>;
  }
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
