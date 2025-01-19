import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faStar } from '@fortawesome/free-solid-svg-icons'
import { useAddButtonContext } from '../../context/AddButtonContext'
import React, { useState } from 'react'

const AddButtonPage = () => {
    const {addPageOpen, togglePopUp, addBook} = useAddButtonContext();

    const [titleValue, changeTitleValue] = useState("");
    const [authorValue, changeAuthorValue] = useState("");
    const [genreValue, changeGenreValue] = useState("");
    const [statusValue, changeStatusValue] = useState("To Read");
    const [notesValue, changeNotesValue] = useState("");
    const [ratingValue, setRatingValue] = useState(3);

    const addBookBtnPressed = () => {
        addBook(titleValue, 
            authorValue,
            genreValue,
            statusValue,
            ratingValue, 
            notesValue,
        )
        togglePopUp()
    }

    return (
    <div className={`bg-transparent/10 absolute w-full h-screen flex justify-center items-center ${!addPageOpen ? 'hidden': ''}`}>
        <div className='m-10 bg-white w-[470px] p-10 rounded-xl'>
        <div className='flex justify-between mb-6 items-center'>
            <h1 className='text-2xl'>Add New Book</h1>
            <FontAwesomeIcon icon={faX} onClick={(e)=>{togglePopUp()}} className='text-xl cursor-pointer'/>
        </div>
        <div className='flex flex-col gap-3'>
            <div>
                <h2>Title *</h2>
                <input type='text' className='border w-full p-2 rounded-md' value={titleValue} onChange={(e)=>changeTitleValue(e.target.value)}/>
            </div>
            <div>
                <h2>Author *</h2>
                <input type='text' className='border w-full p-2 rounded-md' value={authorValue} onChange={(e)=>changeAuthorValue(e.target.value)}/>
            </div>
            <div>
                <h2>Genre *</h2>
                <input type='text' className='border w-full p-2 rounded-md' value={genreValue} onChange={(e)=>changeGenreValue(e.target.value)}/>
            </div>
            <div>
                <h2>Status</h2>
                <select className='w-full p-2 rounded-md' value={statusValue} onChange={(e)=>changeStatusValue(e.target.value)}>
                    <option>To Read</option>
                    <option>Currently Reading</option>
                    <option>Completed</option>
                </select>
            </div>
            <div>
                <h2>Rating</h2>
                <div>
                    {[...Array(5)].map((_, index)=>(
                        <span 
                            key={index}
                            onClick={()=>{setRatingValue(index+1)}}
                            className={`font-bold mr-1 text-3xl ${index < ratingValue ? "text-yellow-400" : "text-gray-400"} hover:text-yellow-300 cursor-pointer`}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <h2>Notes</h2>
                <textarea className='border w-full p-2 rounded-md' value={notesValue} onChange={(e)=>changeNotesValue(e.target.value)}></textarea>
            </div>
            <div className='flex justify-end gap-5'>
                <button className='cursor-pointer'
                    onClick={()=>{togglePopUp()}}
                >Cancel</button>
                <button className='bg-blue-500 text-white p-2 px-4 rounded-md cursor-pointer' onClick={addBookBtnPressed}>Add Button</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddButtonPage