import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import productsService from '../services/productsService.ts'
import { IProductContext } from '../types/context.types.ts'
import { IProduct } from '../types/types.ts'

interface IProductProviderProps {
    children: ReactNode
}

export const ProductContext = createContext<IProductContext | null>(null)

const ProductProvider: FC<IProductProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    const fetchProducts = async (): Promise<void> => {
        try {
            const data: IProduct[] = await productsService.getAllProducts()

            setProducts(data)
            setIsLoading(false)
        } catch (error) {
            setError(error as Error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ products, isLoading, error }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
