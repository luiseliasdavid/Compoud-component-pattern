import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';

const product1 = {
  id: "1",
  title: "coffee Mug - card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "coffee Mug - Meme",
  img: "./coffee-mug2.png",
};

const products:Product[] = [product1, product2]

interface ProductInCart extends Product {
  count:number
}

export const ShoppingPage = () => {

       const [shopingCart, setShopingCart] =useState<{[key:string]:ProductInCart}>({});

       const onProductCartChange = (e:any) => {
        console.log('onProductCartChange', e)
       }


  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >

        {
          products.map( prod => (
        <ProductCard
         product={prod} 
         className="bg-dark text-white" 
         key={prod.id}
         onChange={(e) => onProductCartChange(e)}
         >
          <ProductImage className="custom-image" />
          <ProductTitle className=" text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

          ) )
        }
        

      </div>

        <div className="shoping-cart">
        <ProductCard
           product={product2}
           className="bg-dark text-white"
           style={{width:'100px'}}
            >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
           product={product1}
           className="bg-dark text-white"
           style={{width:'100px'}}
            >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        </div>

    </div>
  );
};
