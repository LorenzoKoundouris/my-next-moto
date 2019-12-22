// libs
import React from 'react';
import styled from 'styled-components';

// data
import * as data from '../../../data/model-overview.json';

// components
import CategoriesFilter from '../CategoryFilter/CategoriesFilter';
import CategorySection from './CategorySection';

// interfaces
import ICategory from '../../../interfaces/ICategory';
import { CATEGORY_ALL } from '../../../utils/constants/model-categories';
import Category from '../../../types/Categories';

interface ICategoriesGalleryState {
  categories: ICategory[];
  categoryFilters: Category[];
  selectedFilter: string;
}

class CategoriesGallery extends React.Component<any, ICategoriesGalleryState> {
  constructor(props: any) {
    super(props);

    this.state = {
      categories: data.categories,
      categoryFilters: data.categories.map(
        category => category.name as Category
      ),
      selectedFilter: CATEGORY_ALL,
    };
  }

  private getCategorySections = () => {
    const { categories, selectedFilter } = this.state;

    if (selectedFilter === CATEGORY_ALL) {
      return categories.map(({ id, name, models }) => (
        <CategorySection key={id} id={id} name={name} models={models} />
      ));
    }

    const { id, name, models } =
      categories.find(({ name }) => name === selectedFilter) ?? categories[0];
    return [<CategorySection key={id} id={id} name={name} models={models} />];
  };

  private handleFilter = (filter: string) => {
    this.setState({ selectedFilter: filter });
  };

  public render() {
    const { categoryFilters } = this.state;

    return (
      <Container>
        <CategoriesFilter
          categoryFilters={categoryFilters}
          handleFilter={this.handleFilter}
        />
        {this.getCategorySections()}
      </Container>
    );
  }
}

// styles
const Container = styled.div`
  background: ${props => props.theme.tertiaryColour};
`;

export default CategoriesGallery;
