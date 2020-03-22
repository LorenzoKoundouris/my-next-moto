// libs
import styled from 'styled-components';
import Select from 'react-select';

// components
import CategorySelector from './CategorySelector';

// types
import Category from '../../../types/Categories';

interface ICategoryFilterProps {
  filterItems: Category[];
  handleFilter: (selectedFilter: Category) => void;
  selectedFilterItem: Category;
}

interface IReactSelectCategory {
  value: Category;
  label: string;
}

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    color: '#000',
    marginBottom: '10px',
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    padding: '0',
    margin: '0',
  }),

  singleValue: (provided: any) => ({
    ...provided,
    margin: '0',
  }),

  menu: (provided: any) => ({
    ...provided,
    margin: '1px 0 0 0',
    padding: '0',
  }),

  option: (provided: any) => ({
    ...provided,
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 30px',
    '&:hover': { fontWeight: 'bold' },
    '&:active': { background: 'transparent' },
  }),

  control: (provided: any) => ({
    ...provided,
    height: '92px',
    border: 'none',
    padding: '0 30px',
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    transform: 'scale(1.5)',
    color: '#000',
  }),

  indicatorSeparator: (provided: any) => ({ ...provided, display: 'none' }),
};

function CategoriesFilter(props: ICategoryFilterProps) {
  const {
    filterItems: propsFilterItems,
    handleFilter,
    selectedFilterItem,
  } = props;

  const filterItems = propsFilterItems.map(item => ({
    value: item,
    label: item,
  }));

  const categories = filterItems.map(({ value }) => (
    <CategorySelector
      key={value}
      category={value}
      isSelected={value === selectedFilterItem}
      handleClick={handleFilter}
    />
  ));

  const handleChange = (selectedOption: IReactSelectCategory) => {
    handleFilter(selectedOption.value);
  };

  return (
    <>
      <CategoriesList>{categories}</CategoriesList>
      <CategoriesSelect>
        <Select
          instanceId='category-selector'
          styles={customStyles}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: 'black',
              primary25: 'transparent',
              neutral0: '#e6e6e6',
            },
          })}
          value={{
            value: selectedFilterItem,
            label: selectedFilterItem,
          }}
          // https://github.com/JedWatson/react-select/issues/2902
          onChange={handleChange as any}
          options={filterItems}
        />
      </CategoriesSelect>
    </>
  );
}

const CategoriesList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100px;
  background: ${props => props.theme.secondaryColour};

  @media (max-width: 767px) {
    display: none;
  }
`;

const CategoriesSelect = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`;

export default CategoriesFilter;
