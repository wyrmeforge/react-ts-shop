import { FC, useContext } from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import Footer from './components/Footer.tsx'
import { ProductContext } from './contexts/ProductContext.tsx'
import { IProductContext } from './types/context.types.ts'
import Loader from './components/Loader.tsx'
import Notification from './components/Notification.tsx'

const App: FC = () => {
    const { isLoading } = useContext(ProductContext) as IProductContext

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="overflow-hidden">
            <Notification />
            <Header />
            <main>
                <Outlet />
            </main>
            <Sidebar />
            <Footer />
        </div>
    )
}

export default App
