import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import ProductDetails from './pages/ProductDetails.tsx'
import App from './App.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'product/:id',
                element: <ProductDetails />,
            },
        ],
    },
])
