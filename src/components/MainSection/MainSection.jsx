import React from "react";
import { faExclamation, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AddBookSection, BookCard} from "../index";

function MainSection(){
    return(
    <section className="max-w-4xl mx-auto block">
        <AddBookSection/>
        <div className="flex m-8 p-4 gap-3 rounded-md items-center border shadow-lg">
            <FontAwesomeIcon icon={faExclamation}/>
            <span>Track your reading progress and manage your book collection.</span>
        </div>
        <BookCard 
            bookName="The great book" 
            authorName="Hritesh Hemis" 
            status="toRead" 
            starsNumbers={5} 
            dateCreated={"2024-10-01"} 
            genre="Classic"
            notes={"A masterpiece of American literature..."}    
        />
        <BookCard 
            bookName="The great book" 
            authorName="Hritesh Hemis" 
            status="toRead" 
            starsNumbers={5} 
            dateCreated={"2024-10-01"} 
            genre="Classic"
            notes={"A masterpiece of American literature..."}    
        />

        <BookCard 
            bookName="The great book" 
            authorName="Hritesh Hemis" 
            status="toRead" 
            starsNumbers={5} 
            dateCreated={"2024-10-01"} 
            genre="Classic"
            notes={"A masterpiece of American literature..."}    
        />
        <BookCard 
        bookName="The great book" 
        authorName="Hritesh Hemis" 
        status="toRead" 
        starsNumbers={5} 
        dateCreated={"2024-10-01"} 
        genre="Classic"
        notes={"A masterpiece of American literature..."}    
    />
    </section>
    )
}

export default MainSection;