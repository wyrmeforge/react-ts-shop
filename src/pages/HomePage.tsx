import { FC, useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext.tsx'
import Product from '../components/Product.tsx'
import Hero from '../components/Hero.tsx'
import { IProductContext } from '../types/context.types.ts'
import { IProduct } from '../types/types.ts'

const HomePage: FC = () => {
    const { products } = useContext(ProductContext) as IProductContext

    return (
        <>
            <Hero />
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0">
                        {products.map((product: IProduct) => (
                            <Product product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
