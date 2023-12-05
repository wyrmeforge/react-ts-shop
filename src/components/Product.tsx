import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FC, useContext } from 'react'
import { CartContext } from '../contexts/CartContext.tsx'
import { IProduct } from '../types/types.ts'
import { ICartContext } from '../types/context.types.ts'

interface IProductProps {
    product: IProduct
}

const Product: FC<IProductProps> = ({ product }) => {
    const { addToCart } = useContext(CartContext) as ICartContext
    const { id, image, category, title, price } = product || {}

    return (
        <div className="flex flex-col">
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img
                            src={image}
                            alt={title}
                            className="max-h-[160px] group-hover:scale-110 transition duration-300"
                        />
                    </div>
                </div>
                <div className="absolute top-2 -right-5 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button onClick={() => addToCart(product, id)}>
                        <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                            <BsPlus className="text-3xl" />
                        </div>
                    </button>
                    <Link
                        to={`/product/${id}`}
                        className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                    >
                        <BsEyeFill />
                    </Link>
                </div>
                {product.title}
            </div>
            <div>
                <div className="text-sm capitalize text-gray-500 mb-1">
                    {category}
                </div>
                <Link to={`/product/${id}`}>
                    <h2 className="font-semibold mb-1">{title}</h2>
                </Link>
                <div className="font-semibold">$ {price}</div>
            </div>
        </div>
    )
}

export default Product
