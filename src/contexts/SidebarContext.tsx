import { createContext, FC, ReactNode, useState } from 'react'
import { ISidebarContext } from '../types/context.types.ts'

interface ISidebarProviderProps {
    children: ReactNode
}

export const SidebarContext = createContext<ISidebarContext | null>(null)

const SidebarProvider: FC<ISidebarProviderProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleClose = () => setIsSidebarOpen(false)

    return (
        <SidebarContext.Provider
            value={{ isSidebarOpen, setIsSidebarOpen, handleClose }}
        >
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider
