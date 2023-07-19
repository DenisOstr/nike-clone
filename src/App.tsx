import { useState, useEffect } from 'react'

import Header from './components/Header'
import SortBy from './components/SortBy'
import ProductCard from './components/ProductCard'

import { Product, SortByList } from './types/Global'

function App() {
  const sortByList: SortByList[] = [
    { slug: 'low-high', title: 'Price: Low-High' },
    { slug: 'high-low', title: 'Price: High-Low' }
  ]

  const [products, setProducts] = useState<Product[]>([])
  const [sortBy, setSortBy] = useState<SortByList>(sortByList[0])

  const fetchProductData = () => {
    fetch('https://fakestoreapi.com/products').then(response => {
      return response.json()
    }).then(data => {
      setProducts(
        data.sort((a: Product, b: Product) => {
          return a.price - b.price
        })
      )
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  const handleProductSort = (sortBy: SortByList) => {
    const productsWithSort = [...products]

    productsWithSort.sort((a: Product, b: Product) => {
      if (sortBy.slug == 'low-high') {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })

    setSortBy(sortBy)
    setProducts(productsWithSort)
  }

  return (
    <>
      <Header />
      
      <main className='main-container'>
        <header className='wall-header'>
          <h1 className='category-title'>Featured ({ products.length })</h1>
          <SortBy sortByList={sortByList} currentSortBy={sortBy} callback={handleProductSort} />
        </header>
        
        <div>
          { 
            products.length > 0 && (
              <div className='product-grid'>
                {
                  products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                }
              </div>
            ) 
          }
        </div>
      </main>
    </>
  )
}

export default App
