import { ITypeProduct } from './ITypeProduct';
import { ICategoryProduct } from './ICategoryProduct';

export interface IProductInterface {
    productid: number;
    nomeproduct: string;
    valor: number;
    image: string;
    nometype: ITypeProduct;
    productcategory: ICategoryProduct;
  }
