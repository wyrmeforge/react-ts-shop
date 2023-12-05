import { useState, createContext, ReactNode, FC, useEffect } from 'react'
import { INotification, INotificationContext } from '../types/context.types.ts'

interface INotificationProviderProps {
    children: ReactNode
}

export const NotificationContext = createContext<INotificationContext | null>(
    null
)

const NotificationProvider: FC<INotificationProviderProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<INotification[]>([])

    const updateNotification = (data: INotification) => {
        setNotifications((prev) => [...prev, data])
    }

    const removeNotification = (id: number) => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.id !== id)
        )
    }

    useEffect(() => {
        if (!notifications) return

        const interval = setInterval(() => {
            setNotifications((prev) => (prev.length > 0 ? prev.slice(1) : prev))
        }, 2000)

        return () => clearInterval(interval)
    }, [notifications])

    const contextValue: INotificationContext = {
        notifications,
        updateNotification,
        removeNotification,
    }

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider
