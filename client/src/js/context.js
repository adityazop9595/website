import React, { useContext } from "react";

const AppContext=React.createContext();


const AppProvider=({children})=>{
const Backend = import.meta.env.VITE_BACKEND_URL;

return <AppContext.Provider value={{Backend}}>{children}</AppContext.Provider>
}

const useGlobalcontext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalcontext};
