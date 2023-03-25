import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { useShopingCart } from "../hooks/useShopingCart";
import { products } from "../data/product";





export const ShoppingPage = () => {

 const {
  shopingCart,
  onProductCartChange,
 }= useShopingCart()
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
        {products.map((prod) => (
          <ProductCard
            product={prod}
            className="bg-dark text-white"
            key={prod.id}
            value={shopingCart[prod.id]?.count || 0}
            onChange={onProductCartChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className=" text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shoping-cart">
        {Object.entries(shopingCart).map(([key, product]) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCartChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
