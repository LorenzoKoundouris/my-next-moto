// libs
import { Component } from 'react';
import styled from 'styled-components';

// data
import * as data from '../../../data/model-overview.json';

// components
import CategoriesFilter from '../CategoryFilter/CategoriesFilter';
import CategorySection from './CategorySection';

// interfaces
import ICategory from '../../../interfaces/i-category';
import { CATEGORY_ALL } from '../../../utils/constants/model-categories';

// types
import Category from '../../../types/Categories';

interface ICategoriesGalleryState {
  categories: ICategory[];
  filterItems: Category[];
  selectedFilterItem: Category;
}

class CategoriesGallery extends Component<any, ICategoriesGalleryState> {
  constructor(props: any) {
    super(props);

    const filterItems = [
      CATEGORY_ALL,
      ...data.categories.map(category => category.name),
    ] as Category[];

    this.state = {
      categories: data.categories,
      filterItems,
      selectedFilterItem: CATEGORY_ALL,
    };
  }

  private getCategorySections = () => {
    const { categories, selectedFilterItem } = this.state;

    if (selectedFilterItem === CATEGORY_ALL) {
      return categories.map(({ id, name, models }) => (
        <CategorySection key={id} id={id} name={name} models={models} />
      ));
    }

    const { id, name, models } =
      categories.find(({ name }) => name === selectedFilterItem) ??
      categories[0];
    return [<CategorySection key={id} id={id} name={name} models={models} />];
  };

  private handleFilter = (selectedFilterItem: Category) => {
    this.setState({ selectedFilterItem });
  };

  public render() {
    const { filterItems, selectedFilterItem } = this.state;

    return (
      <Container>
        <CategoriesFilter
          filterItems={filterItems}
          handleFilter={this.handleFilter}
          selectedFilterItem={selectedFilterItem}
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
