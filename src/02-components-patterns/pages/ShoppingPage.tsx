import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { OnChangeArgs, Product } from '../interfaces/interfaces';
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
       const onProductCartChange = ( {count, product} :{count:number,product:Product}) => {
         /*  console.log('onProductCartChange',count, product) */
         
         setShopingCart( previus => {
           
           
           if(!count){
             /*  opcio1 para borrar un elemento si esta en 0
             let newState = Object.assign({}, shopingCart);
             delete newState[product.id] 
             return newState
             */
            const {[product.id]:toDelete, ...rest} = previus
                     
            return rest
          }
          
          
          
          return {
            ...shopingCart,
            [product.id]: {...product,count}
            
          }
       })

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
         onChange={onProductCartChange}
         >
          <ProductImage className="custom-image" />
          <ProductTitle className=" text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

          ) )
        }
        

      </div>

        <div className="shoping-cart">
        {
        Object.entries(shopingCart).map(([key,product]) => (
          
          <ProductCard
             key={product.id}
             product={product}
             className="bg-dark text-white"
             style={{width:'100px'}}
             value={product.count}
              >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
         

        ))
         
        }
       {/*  <ProductCard
           product={product1}
           className="bg-dark text-white"
           style={{width:'100px'}}
            >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
 */}
        </div>

      {/*   <div>
          <code>
            {JSON.stringify(shopingCart,null,10)  }
          </code>
        </div> */}

    </div>
  );
};
