// libs
import React from 'react';
import styled from 'styled-components';

// components
import CategorySelector from './CategorySelector';

interface ICategoryFilterProps {
  categories: { id: number; name: string }[];
}

interface ICategoryFilterState {
  categories: { id: number; name: string; isSelected: boolean }[];
}

class CategoriesFilter extends React.Component<
  ICategoryFilterProps,
  ICategoryFilterState
> {
  constructor(props: ICategoryFilterProps) {
    super(props);

    this.state = {
      categories: props.categories.map((category, idx) => ({
        id: category.id,
        name: category.name,
        isSelected: !idx,
      })),
    };
  }

  private handleClick = (categoryId: number) => {
    const updatedCategories = this.state.categories.map(category => {
      return { ...category, isSelected: category.id === categoryId };
    });

    this.setState({ categories: updatedCategories });
  };

  private getCategories = () => {
    const { categories } = this.state;

    return categories.map(category => (
      <CategorySelector
        key={category.id}
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
