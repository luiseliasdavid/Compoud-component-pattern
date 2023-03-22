import {useState} from 'react'
import { Product, OnChangeArgs } from '../interfaces/interfaces';

interface UseProductsArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void
}

export const useProduct = ({onChange, product}:UseProductsArgs) => {

    const [counter, setCounter] = useState(0)

    const increaseBy = (value:number) => {

      const newValue= Math.max(counter + value, 0)

     setCounter( newValue)
     
     onChange && onChange({count:newValue, product});
    }
    

  return {
    counter,
    increaseBy
  }
}
