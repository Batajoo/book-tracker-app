import {createContext, useContext } from "react";

export const AddButtonContext = createContext({
    addPageOpen: false,
    bookData:[],
    addBook: (title, author, genre, status, rating, notes)=>{},
    togglePopUp: ()=>{}
})

export const useAddButtonContext = () => {
    return useContext(AddButtonContext);
}

export const AddButtonContextProvider = AddButtonContext.Provider;

export default AddButtonContextProvider;