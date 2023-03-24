import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement, CSSProperties } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';
import {ProductContextProps} from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args:OnChangeArgs) => void
  value?: number;

  }

export const ProductCard = ({ product, children, className,style, onChange, value }:Props) => {
 
  const { counter, increaseBy } = useProduct({onChange,product,value});

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div 
      style={style}
      className={`${styles.productCard} ${className} ` }>
        {children}
  
      </div>
    </Provider>
  );
};
