import { ICartItem, IProduct } from './types.ts'

type idType = number
type isSidebarOpenType = boolean

export interface IProductContext {
    products: IProduct[]
    isLoading: boolean
    error: Error | null
}

export interface ICartContext {
    carts: ICartItem[]
    itemAmount: number
    totalPrice: number
    setCart: (cart: ICartItem[]) => void
    addToCart: (product: IProduct, id: idType) => void
    removeFromCart: (id: idType) => void
    clearCart: () => void
    increaseAmount: (id: idType) => void
    decreaseAmount: (id: idType) => void
}

export interface ISidebarContext {
    isSidebarOpen: isSidebarOpenType
    setIsSidebarOpen: (isSidebarOpen: isSidebarOpenType) => void
    handleClose: () => void
}

export interface INotification {
    id: idType
    text: string
}

export interface INotificationContext {
    notifications: INotification[]
    updateNotification: (arg: INotification) => void
    removeNotification: (id: idType) => void
}
