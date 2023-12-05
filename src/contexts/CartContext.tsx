import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { useNotification } from '../hooks/useNotification.ts'
import { ICartItem, IProduct } from '../types/types.ts'
import { ICartContext } from '../types/context.types.ts'

interface ICartProviderProps {
    children: ReactNode
}

export const CartContext = createContext<ICartContext | null>(null)

const CartProvider: FC<ICartProviderProps> = ({ children }) => {
    const [carts, setCart] = useState<ICartItem[]>([])
    const [itemAmount, setItemAmount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const { updateNotification } = useNotification()

    useEffect(() => {
        const calculateTotalPrice = () => {
            if (carts) {
                const totalPrice = carts.reduce(
                    (acc, cur) => acc + cur.price * cur.amount,
                    0
                )
                setTotalPrice(totalPrice)
            }
        }

        const calculateItemAmount = () => {
            if (carts) {
                const amount = carts.reduce((acc, cur) => acc + cur.amount, 0)
                setItemAmount(amount)
            }
        }

        calculateTotalPrice()
        calculateItemAmount()
    }, [carts])

    const addToCart = (
        product: IProduct,
        id: number,
        withNotification = true
    ) => {
        const newItem: ICartItem = { ...product, amount: 1 }
        const existingItemIndex = carts.findIndex((item) => item.id === id)

        if (existingItemIndex !== -1) {
            const newCart = [...carts]
            newCart[existingItemIndex].amount += 1
            setCart(newCart)
        } else {
            setCart((prevCart) => [...(prevCart ?? []), newItem])
        }

        if (withNotification) {
            updateNotification({ id, text: 'Successfully added to cart!' })
        }
    }

    const removeFromCart = (id: number, withNotification = true) => {
        const newCart = carts.filter((cart) => cart.id !== id)
        setCart(newCart)
        if (withNotification) {
            updateNotification({ id, text: 'Successfully removed from cart!' })
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const increaseAmount = (id: number) => {
        const cartItem = carts.find((item) => item.id === id)
        if (cartItem) {
            addToCart(cartItem, id, false)
        }
    }

    const decreaseAmount = (id: number) => {
        const existingItemIndex = carts.findIndex((item) => item.id === id)

        if (existingItemIndex !== -1) {
            const newCart = [...carts]
            newCart[existingItemIndex].amount -= 1
            setCart(newCart)

            if (newCart[existingItemIndex].amount < 1) {
                removeFromCart(id, false)
            }
        }
    }

    const contextValue: ICartContext = {
        carts,
        itemAmount,
        totalPrice,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
