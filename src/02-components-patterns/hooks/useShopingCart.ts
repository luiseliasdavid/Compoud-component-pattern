import React from 'react'
import { JsxAttribute } from 'typescript'
import { Product, ProductInCart } from '../interfaces/interfaces'
import { useState } from 'react';


export const useShopingCart = () => {
  const [shopingCart, setShopingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCartChange = ({
    count,
    product,
  }: {
    count: number
    product: Product
  }) => {
    /*  console.log('onProductCartChange',count, product) */

    setShopingCart((oldShopingCart) => {
      const productInCart: ProductInCart = oldShopingCart[product.id] || {
        ...product,
        count: 0,
      }
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...oldShopingCart,
          [product.id]: productInCart,
        }
      }

      const { [product.id]: toDelete, ...rest } = oldShopingCart
      return { ...rest }

      /*  opcio1 para borrar un elemento si esta en 0
               let newState = Object.assign({}, shopingCart);
               delete newState[product.id] 
               return newState
               */
      /*  if (!count) {
            const { [product.id]: toDelete, ...rest } = oldShopingCart;
    
            return rest;
          }
    
          return {
            ...shopingCart,
            [product.id]: { ...product, count },
          };
    */
    })
  }

  return {
    shopingCart,
    onProductCartChange,
  }
}
