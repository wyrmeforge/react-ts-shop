export interface IProduct {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
    rating: number[]
}

export interface ICartItem extends IProduct {
    amount: number
}
