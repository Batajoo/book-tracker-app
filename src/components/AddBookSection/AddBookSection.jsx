import React from "react";
import { faExclamation, faPlus, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAddButtonContext, useFilterContext } from "../../context";

function AddBookSection(){
    const {togglePopUp} = useAddButtonContext()
    const {setFilterStatus} = useFilterContext()

    const addButtonPressed = (e) => {
        togglePopUp();
    }

    const filterButtonPressed = (e) => {
        setFilterStatus((prev)=>!prev)
    }

    return(
        <div className='flex justify-between items-center my-10 mx-8'>
            <h2 className="font-bold text-3xl dark:text-white">My Library</h2>
            <div className="flex items-center gap-5">
                <FontAwesomeIcon className="text-blue-500 text-2xl" icon={faFilter} onClick={filterButtonPressed}/>
                <button className='bg-blue-500 text-white py-2 px-3 rounded-md' onClick={addButtonPressed}><FontAwesomeIcon icon={faPlus} className="pr-2" />Add Book</button>
            </div>
        </div>
    )
}

export default AddBookSection;