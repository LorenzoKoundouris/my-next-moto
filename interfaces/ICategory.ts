import IModel from './IModel';

export default interface ICategory {
  id: number;
  name: string;
  models: IModel[];
}
