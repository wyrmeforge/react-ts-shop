import { FC, useContext } from 'react'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext.tsx'
import { Link } from 'react-router-dom'
import { ICartContext } from '../types/context.types.ts'
import { ICartItem } from '../types/types.ts'

interface ICartItemProps {
    item: ICartItem
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(
        CartContext
    ) as ICartContext

    const { id, image, amount, title, price } = item || {}

    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                <Link to={`/product/${id}`}>
                    <img className="max-w-[80px] " src={image} alt={title} />
                </Link>
                <div className="w-full flex flex-col">
                    <div className="flex justify-between mb-2">
                        <Link to={`/product/${id}`}>
                            <div className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
                                {title}
                            </div>
                        </Link>
                        <button
                            className="text-xl cursor-pointer"
                            onClick={() => removeFromCart(id)}
                        >
                            <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                        </button>
                    </div>
                    <div className="flex gap-x-2 h-9 text-sm">
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                            <button
                                onClick={() => decreaseAmount(id)}
                                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                            >
                                <IoMdRemove />
                            </button>
                            <div className="h-full flex justify-center items-center px-2">
                                {amount}
                            </div>
                            <button
                                onClick={() => increaseAmount(id)}
                                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                            >
                                <IoMdAdd />
                            </button>
                        </div>
                        <div
                            className={`flex-1 flex items-center ${
                                amount < 1 ? 'justify-end' : 'justify-around'
                            }`}
                        >
                            $ {price}
                        </div>
                        {amount > 1 ? (
                            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
                                String(price * amount)
                            ).toFixed(2)}`}</div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
