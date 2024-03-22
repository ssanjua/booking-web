import React, { useContext, useState } from "react";
import Toast from "../components/Toast";

type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
}

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void
}

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({ 
    children 
}: { 
    children: React.ReactNode
}) => {
    const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
    
    return (
        <AppContext.Provider value={{
            showToast: (toastMessage) => {
                setToast(toastMessage);
            }
        }}
        >
            {toast && (
                <Toast 
                    message={toast.message} 
                    type={toast.type} 
                    onClose={() => setToast(undefined)} 
                />
            )}
            { children }
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
}