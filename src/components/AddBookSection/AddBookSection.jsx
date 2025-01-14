import React from "react";
import { faExclamation, faPlus, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddBookSection(){
    return(
        <div className='flex justify-between items-center my-10 mx-8'>
            <h2 className="font-bold text-3xl">My Library</h2>
            <div className="flex items-center gap-5">
                <FontAwesomeIcon className="text-blue-500 text-2xl" icon={faFilter}/>
                <button className='bg-blue-500 text-white py-2 px-3 rounded-md'><FontAwesomeIcon icon={faPlus} className="pr-2"/>Add Book</button>
            </div>
        </div>
    )
}

export default AddBookSection;