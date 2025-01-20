import { useContext, createContext } from "react";

export const FilterContext = createContext({
    filterStatus: false,
    filterValue: "All Status",
    setFilterStatus: ()=>{},
    setFilterValue: ()=>{}

})

export const FilterContextProvider = FilterContext.Provider;

export const useFilterContext = () => {
    return useContext(FilterContext)
}

export default FilterContextProvider;