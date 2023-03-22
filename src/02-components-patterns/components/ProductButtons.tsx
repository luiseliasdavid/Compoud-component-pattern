import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";

export interface PropsButtons {
  className?: string;
  style?: React.CSSProperties
}

export const ProductButtons = ({className, style}:PropsButtons) => {
    const { increaseBy, counter } = useContext(ProductContext);
  
    return (
      <div
      style={style}
      className={`${styles.buttonsContainer} ${className}`}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
  
        <button className={styles.countLabel}> {counter} </button>
  
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    );
  };