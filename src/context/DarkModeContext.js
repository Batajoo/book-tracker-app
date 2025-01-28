import { useContext, createContext } from "react";

export const DarkModeContext = createContext({
    darkMode: false,
    setDarkMode: () => {}
})

export const useDarkModeContext = () => {
    return useContext(DarkModeContext);
}

const DarkModeContextProvider = DarkModeContext.Provider;

export default DarkModeContextProvider;

