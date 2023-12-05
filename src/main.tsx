import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ProductProvider from './contexts/ProductContext.tsx'
import SidebarProvider from './contexts/SidebarContext.tsx'
import CartProvider from './contexts/CartContext.tsx'
import { RouterProvider } from 'react-router'
import { router } from './router.tsx'
import NotificationProvider from './contexts/NotificationContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <NotificationProvider>
        <SidebarProvider>
            <CartProvider>
                <ProductProvider>
                    <React.StrictMode>
                        <RouterProvider router={router} />
                    </React.StrictMode>
                </ProductProvider>
            </CartProvider>
        </SidebarProvider>
    </NotificationProvider>
)
