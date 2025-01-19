import React from "react";
import { faExclamation, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AddBookSection, BookCard} from "../index";
import { useAddButtonContext } from "../../context";

function MainSection(){
    const {bookData} = useAddButtonContext();
    return(
    <section className="max-w-4xl mx-auto block">
        <AddBookSection/>
        <div className="flex m-8 p-4 gap-3 rounded-md items-center border shadow-lg">
            <FontAwesomeIcon icon={faExclamation}/>
            <span>Track your reading progress and manage your book collection.</span>
        </div>
        <div>
            {bookData.map((el, index)=>(
                <BookCard {...el}  key={index} 
            />
            ))}
        </div>
        
    </section>
    )
}

export default MainSection;