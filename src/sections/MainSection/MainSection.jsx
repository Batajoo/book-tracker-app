import React, { useEffect, useState } from "react";
import { faExclamation, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AddBookSection, BookCard} from "../../components/index";
import { useAddButtonContext, useFilterContext } from "../../context";

function MainSection(){
    const {bookData} = useAddButtonContext();
    const {filterStatus, filterValue, setFilterValue} = useFilterContext();

    const [filteredBookData, changeFilteredBookData] = useState([...bookData]);

    useEffect(()=>{
        if(filterValue === "All Status"){
            changeFilteredBookData(bookData);
        } else {
        changeFilteredBookData(bookData.filter((book)=>book.status === filterValue))
    }
    },[filterValue, bookData])

    return(
    <section className="max-w-4xl mx-auto block">
        <AddBookSection/>
        <div className={`${filterStatus ? "block" : "hidden"} shadow-lg border p-4 mx-8 my-2 rounded-lg bg-white`}>
            <select 
                className="p-2 rounded-md" 
                value={filterValue}
                onChange={(e)=>{setFilterValue(e.target.value)}}
            >
                <option>All Status</option>
                <option>Reading</option>
                <option>Completed</option>
                <option>To Read</option>
            </select>
        </div>
        <div className="flex mx-8 mb-5 p-4 gap-3 rounded-md items-center border shadow-lg bg-white">
            <FontAwesomeIcon icon={faExclamation}/>
            <span>Track your reading progress and manage your book collection.</span>
        </div>
        <div>
            {filteredBookData.map((el, index)=>(
                <BookCard {...el}  key={index} 
            />
            ))}
        </div>
        
    </section>
    )
}

export default MainSection;