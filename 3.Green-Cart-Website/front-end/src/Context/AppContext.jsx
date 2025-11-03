import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContent = createContext()

export const AppContentProvider =({children})=>{
    const Navigate = useNavigate()
    const [user,setUser] = useState(null)
    const [issellar,setIssellar] = useState(false)

    const value = {

    }

    return <AppContent.Provider value={""}>
        {children}
        </AppContent.Provider>;
}
export const useAppContext = ()=>{
    return useAppContext(AppContent)
}