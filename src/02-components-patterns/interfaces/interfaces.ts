import { ReactElement } from "react";
import { Props as ProductCardProps  } from '../components/ProductCard';
import {PropsButtons} from '../components/ProductButtons'
import { PropsTitle } from '../components/ProductTitle';
import { PropsImage } from "../components/ProductImage";



export  interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
export  interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
  }

export interface ProductCardHOCProps {
 ({ product, children }: ProductCardProps) : JSX.Element,
 Title: (Props:PropsButtons) => JSX.Element,
 Image: (Props:PropsTitle) => JSX.Element,
 Buttons: (Props:PropsImage) => JSX.Element,
 
}

export interface OnChangeArgs {
  product: Product;
  count:number
} 

export interface ProductInCart extends Product {
  count: number;
}