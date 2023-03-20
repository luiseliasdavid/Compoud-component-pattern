import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'




const product = {
    id:'1',
    title: 'coffee Mug - card',
    img: './coffee-mug.png'
   
}

export const ShoppingPage = () => {
  return (
    <div>
    <h1>ShoppingPage</h1>
    <hr/>
    <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'

    }}>
    <ProductCard product= {product} > 
       <ProductCard.Image  />
       <ProductCard.Title title={"hola mundo"} />
       <ProductCard.Buttons />
    </ProductCard>

    <ProductCard 
    product= {product}
    className="bg-dark"
    > 
       <ProductImage className='custom-image' />
       <ProductTitle className='text-white text-bold' />
       <ProductButtons />
    </ProductCard>
    
    </div>
    </div>
  )
}







