import { CgClose } from 'react-icons/cg'
import { useNotification } from '../hooks/useNotification.ts'
import { INotification } from '../types/context.types.ts'

const Notification = () => {
    const { notifications, removeNotification } = useNotification()

    return notifications?.length ? (
        <div className="fixed top-12 right-10 sm:right-[40%] z-50">
            {notifications.map((notification: INotification) => (
                <div
                    key={notification.id}
                    className="relative mb-3 top-5 right-5 rounded-md p-2 px-4 shadow-xl max-w-xs lg:max-w-md flex items-center z-50 transition bg-gradient-to-l from-green-600 to-emerald-600"
                >
                    <span className="block leading-5 tracking-wide text-start text-base text-white">
                        {notification.text}
                    </span>
                    <span
                        className="cursor-pointer inline-block p-2"
                        onClick={() => removeNotification(notification.id)}
                    >
                        <CgClose />
                    </span>
                </div>
            ))}
        </div>
    ) : null
}

export default Notification
