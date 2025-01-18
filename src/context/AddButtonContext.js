import {createContext, useContext } from "react";

export const AddButtonContext = createContext({
    status: false,
    changeStatus: ()=>{}
})

export const useAddButtonContext = useContext(AddButtonContext);

const AddButtonContextProvider = AddButtonContext.Provider;

export default AddButtonContextProvider;