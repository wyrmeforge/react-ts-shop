import { FC, useContext } from 'react'
import { useParams } from 'react-router'
import { ProductContext } from '../contexts/ProductContext.tsx'
import { CartContext } from '../contexts/CartContext.tsx'
import { ICartContext, IProductContext } from '../types/context.types.ts'
import { IProduct } from '../types/types.ts'

const ProductDetails: FC = () => {
    const { id } = useParams()
    const { products } = useContext(ProductContext) as IProductContext
    const { addToCart } = useContext(CartContext) as ICartContext

    if (!id) {
        return (
            <div className="h-screen flex justify-center items-center">
                <p>Product not found.</p>
            </div>
        )
    }

    const product = products.find((item: IProduct) => item.id === +id)

    if (!product) {
        return (
            <div className="h-screen flex justify-center items-center">
                <p>Product not found.</p>
            </div>
        )
    }

    const { image, description, title, price } = product || {}

    return (
        <section className="pt-32 pb-12 lg:p-0 h-screen flex items-center">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                        <img
                            className="max-w-[200px] lg:max-w-sm"
                            src={image}
                            alt={title}
                        />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                            {title}
                        </h1>
                        <div className="text-xl text-red-500 font-medium mb-6">
                            $ {price}
                        </div>
                        <p className="mb-8">{description}</p>
                        <button
                            onClick={() => addToCart(product, +id)}
                            className="bg-primary py-4 px-8 text-white"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
