import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContext {
    
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    
}
interface NotifyContext{
    msg_no: number;
    setMsg_no: React.Dispatch<React.SetStateAction<number>>;
}

interface CartContext{
    cart_no: number;
    setCart_no: React.Dispatch<React.SetStateAction<number>>;
}


const ThemeContext = createContext<ThemeContext | undefined>(undefined);
const NotifyContext = createContext<NotifyContext | undefined>(undefined);
const CartContext = createContext<CartContext | undefined>(undefined);


type ThemeProviderProps = {
    children: React.ReactNode ;
};

const Provider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme ] = useState("light");
    const [msg_no, setMsg_no ] = useState(1);
    const [cart_no, setCart_no ] = useState(1);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
        <NotifyContext.Provider value={{ msg_no, setMsg_no }}>
        <CartContext.Provider value={{ cart_no, setCart_no }}>
            {children}
        </CartContext.Provider>
        </NotifyContext.Provider>
        </ThemeContext.Provider>
    );
};

export const useTheme = ()=>{
    const context = useContext(ThemeContext);
        if (!context) {
            throw new Error("useTheme must be used within a Provider");
        }
        return context;
    }
    
export const useMsg = ()=>{
    const context = useContext(NotifyContext);
        if (!context) {
            throw new Error("useMsg must be used within a Provider");
        }
        return context;
}
export const useCart = ()=>{
    const context = useContext(CartContext);
        if (!context) {
            throw new Error("useCart must be used within a Provider");
        }
        return context;
}

export const useLog = ()=>{
    const context = useContext(LoginContext);
        if (!context) {
            throw new Error("useLog must be used within a Provider");
        }
        return context;
}

export default Provider;