import { useState, useEffect } from 'react'

import Header from './components/Header'
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState([])

  const fetchProductData = () => {
    fetch('https://fakestoreapi.com/products').then(response => {
      return response.json()
    }).then(data => {
      setProducts(data)
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  return (
    <>
      <Header />
      
      <main className='main-container'>
        <header className='wall-header'>
          <h1 className='category-title'>Featured ({ products.length })</h1>

          <div>
            <p>Sort By: <span></span></p>
          </div>
        </header>
        
        { 
          products.length > 0 && (
            <div className='product-grid'>
              {
                products.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
          ) 
        }
      </main>
    </>
  )
}

export default App
