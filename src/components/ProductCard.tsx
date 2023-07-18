function ProductCard(props: any) {
    return (
        <>
            <div className="product-card-container">
                <figure>
                    <div className="product-card-body">
                        <div className="product-image-container">
                            <img src={props.product.image} alt="" className="product-image" />
                        </div>

                        <div className="product-card-info">
                            <div className='product-info-text'>
                                <p className="product-title">{ props.product.title }</p>
                                <p className='product-category'>{ props.product.category }</p>
                            </div>

                            <p className='product-price'>{ props.product.price.toFixed(2) }</p>
                        </div>
                    </div>
                </figure>
            </div>
        </>
    )
}

export default ProductCard