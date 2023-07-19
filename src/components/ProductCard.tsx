import { ProductCardProp } from "../types/Global"

function ProductCard({ product }: ProductCardProp) {
    return (
        <>
            <div className="product-card-container">
                <figure>
                    <div className="product-card-body">
                        <div className="product-image-container">
                            <img src={product.image} alt="" className="product-image" />
                        </div>

                        <div className="product-card-info">
                            <div className='product-info-text'>
                                <p className="product-title">{ product.title }</p>
                                <p className='product-category'>{ product.category }</p>
                            </div>

                            <p className='product-price'>${ product.price.toFixed(2) }</p>
                        </div>
                    </div>
                </figure>
            </div>
        </>
    )
}

export default ProductCard