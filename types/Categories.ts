import {
  CATEGORY_ALL,
  CATEGORY_SPORT,
  CATEGORY_TOUR,
  CATEGORY_ROADSTER,
  CATEGORY_HERITAGE,
  CATEGORY_ADVENTURE,
  CATEGORY_URBAN_MOBILITY,
} from '../utils/constants/model-categories';

type Category =
  | typeof CATEGORY_ALL
  | typeof CATEGORY_SPORT
  | typeof CATEGORY_TOUR
  | typeof CATEGORY_ROADSTER
  | typeof CATEGORY_HERITAGE
  | typeof CATEGORY_ADVENTURE
  | typeof CATEGORY_URBAN_MOBILITY;

export default Category;
