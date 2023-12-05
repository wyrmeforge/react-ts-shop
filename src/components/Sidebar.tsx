import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext.tsx'
import { IoMdArrowForward } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext.tsx'
import CartItem from './CartItem.tsx'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ICartContext, ISidebarContext } from '../types/context.types.ts'
import { ICartItem } from '../types/types.ts'

const Sidebar = () => {
    const { isSidebarOpen, handleClose } = useContext(
        SidebarContext
    ) as ISidebarContext
    const { carts, clearCart, totalPrice, itemAmount } = useContext(
        CartContext
    ) as ICartContext

    const containerClasses = `${
        isSidebarOpen ? 'right-0' : '-right-full'
    } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-40 px-4 lg:px-[35px]`

    return (
        <div className={containerClasses}>
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold">
                    Shopping bag ({itemAmount})
                </div>
                <button
                    onClick={handleClose}
                    className="cursor-pointer w-8 h-8 flex justify-center items-center"
                >
                    <IoMdArrowForward className="text-2xl" />
                </button>
            </div>
            <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto">
                {carts.map((cart: ICartItem) => (
                    <CartItem item={cart} key={cart.id} />
                ))}
            </div>
            <div className="flex flex-col gap-y-3 py-4 mt-4">
                <div className="w-full flex justify-between items-center">
                    <div className="uppercase font-semibold">
                        <span>Total:</span>${' '}
                        {parseFloat(String(totalPrice)).toFixed(2)}
                    </div>
                    <button
                        onClick={clearCart}
                        className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
                    >
                        <FiTrash2 />
                    </button>
                </div>
                <Link
                    className="bg-gray-200 flex p-4 justify-center text-primary w-full font-medium"
                    to="/"
                >
                    View cart
                </Link>
                <Link
                    className="bg-primary flex p-4 justify-center text-white w-full font-medium"
                    to="/"
                >
                    Checkout
                </Link>
                <div></div>
            </div>
        </div>
    )
}

export default Sidebar
