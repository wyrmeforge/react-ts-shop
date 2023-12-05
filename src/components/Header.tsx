import { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext.tsx'
import { BsBag } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext.tsx'
import { Link } from 'react-router-dom'
import { ICartContext, ISidebarContext } from '../types/context.types.ts'

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const { isSidebarOpen, setIsSidebarOpen } = useContext(
        SidebarContext
    ) as ISidebarContext

    const { itemAmount } = useContext(CartContext) as ICartContext

    const onBagClick = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 60)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []) //

    return (
        <header
            className={`${
                isActive ? 'bg-[#fff]/80 py-4 shadow-md' : 'bg-none py-6'
            } fixed w-full z-10 transition-all`}
        >
            <div className="container mx-auto h-full flex items-center justify-between">
                <Link to="/" className="w-[120px] h-10 block">
                    <div className="w-full h-full bg-logo bg-cover bg-center" />
                </Link>
                <button
                    className="cursor-pointer flex relative"
                    onClick={onBagClick}
                >
                    <BsBag className="text-2xl" />
                    <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                        {itemAmount}
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header
