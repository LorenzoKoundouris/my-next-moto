import IModel from './i-model';

export default interface ICategory {
  id: number;
  name: string;
  models: IModel[];
}
