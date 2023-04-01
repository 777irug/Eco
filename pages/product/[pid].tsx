import { GetServerSideProps } from 'next'

import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';
import { server } from '../../utils/server'; 

// types
import { ProductType } from 'types';

type ProductPageType = {
  product: ProductType;
}

const [pro, setPro] = useState([])

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

//   const fetchPro = async () => {
//     const response = await fetch('/product')
//     const data = await response.json()
//     console.log(data)
//     setPro(data)
// //   }
  
}

const Product = ({ product }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Description</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews (2)</button>
            </div>

            <Description show={showBlock === 'description'} />
            <Reviews product={product} show={showBlock === 'reviews'} />
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default Product


// import {
//   useState
// } from 'react'

// function BooksPage() {
//   const [books, setBooks] = useState([])

//   const fetchBooks = async () => {
//     const response = await fetch('/api/books')
//     const data = await response.json()
//     console.log(data)
//     setBooks(data)
//   }

//   return (
//     <>
//     <div align="center">
//       <button  onClick={fetchBooks}>Get the latest books</button>
//      </div>
//       {books.map(book => {
//         return (
//           <div align="center" key={book.id}>
//             {book.id}.<br/>
//             {"Title: "}{book.title}.<br/>
//             {"Pages: "} {book.pages}.<br/>
//             {"Language: "}{book.language} <br/>
//             <hr/>
//           </div>
//         )
//       })}
//     </>
//   )
// }
