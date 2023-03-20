import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from 'react';
import { Product } from '../interfaces/interfaces';
import {ProductContextProps} from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  }

export const ProductCard = ({ product, children, className }:Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className} ` }>
        {children}
  
      </div>
    </Provider>
  );
};
