// import useSwr from 'swr';
// import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import Link from 'next/link';
// import { ProductTypeList } from 'types';


const ProductsContent = () => {

  const [pro,setPro]=useState([])
  useEffect(()=>{
  async function fetchPro() {
      
      try{
        const result = await axios.get('http://localhost:8000/product'
      )
       if(result.status === 200){
              console.log(result.data)
              
               setPro(result.data)
          } 
    }catch(err){
     console.log(err);
    }
 }
  fetchPro()
  },[])

  return (
    <>
   {!pro && 
        <ProductsLoading />
    
      } 

       {pro &&
        <section className="products-list">
        
          {pro.map((data,idx)  => {
            console.log(data._id)
            return(
              <>
               <div className="product-item">
               <div className="product__image">
               {/* <Link href={`/product/${data._id}`}></Link> */}
               </div>
               <div className="product__description">
          <h3>{data.name}</h3>
            {/* <h4>${ currentPrice }</h4> */}
           <span>${ data.price }</span>
            
          </div>
               </div>
              </>
            )

          }
          )}
          </section>
}
        {/* <div className="product-item">
        <div className="product__image"> */}
          {/* <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button> */}
  
          {/* <Link href={`/product/${pro.id}`}>
            <a>
            </a>
          </Link>
        </div>
        
        <div className="product__description">
          <h3>{pro.data.name}</h3>
            <h4>${ currentPrice }</h4>
           <span>${ price }</span>
            
          </div>
        </div>
}
    
        </section>
    ))} */} 


{/* 
        // <section className="products-list">
        //    {pro.map()=> ( */}
        {/* //     <ProductItem  */}
        {/* //       id={.id} 
        //       name={item.name}
        //       price={item.price}
        //       color={item.color}
        //       currentPrice={item.currentPrice}
        //       key={item.id}
        //       images={item.images} 
        //     />
        //   ))} 
        // </section> */}
       
    </>
  );
};
  
export default ProductsContent