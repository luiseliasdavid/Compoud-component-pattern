import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface PropsTitle {
  title?: string;
  className?:string
  style?: React.CSSProperties
}

export const ProductTitle = ({ title, className, style }: PropsTitle) => {
    const { product } = useContext(ProductContext);
  let titleToShow: string;

  if (title) {
    titleToShow= title;
  } else {
    titleToShow= product.title
  }
  return <span 
  style={style}
  className={`${styles.productDescription} ${className}`}> {titleToShow} </span>;
};