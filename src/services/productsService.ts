import { IProduct } from '../types/types.ts'

const API_URL = 'https://fakestoreapi.com'

class ProductsService {
    async getAllProducts(): Promise<IProduct[]> {
        try {
            const response = await fetch(`${API_URL}/products`)

            return await response.json()
        } catch (error: unknown) {
            console.error('Error fetching products:', error)
            throw error
        }
    }
}

export default new ProductsService()
