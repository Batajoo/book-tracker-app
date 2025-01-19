import React from 'react';
import { faCircleCheck, faBookOpenReader, faCloud, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BookCard({
    bookName, 
    authorName, 
    status, 
    starsNumbers,
    dateCreated,
    genre,
    notes
}){
    return (
        <>
            <div className="mx-8 border p-6 rounded-lg shadow-md mb-5">
                <div className='flex justify-between'>
                    <h3 className="font-bold text-xl mb-5">{bookName}</h3>
                    <div>
                        {Array.from({length: starsNumbers}, (_, index)=>(
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
                        ))
                        }
                    </div>
                </div>
                <p className='text-gray-600 mb-1'>{authorName}</p>
                <p className='text-gray-500'>{genre}</p>
                <div className='text-gray-500 mb-1'>
                    {status === "completed" ? 
                        (
                        <div>
                            <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-2"/>
                            <span>Completed</span>
                        </div>
                        ) 
                        :status === "Currently Reading" ? 
                            (<div>
                                <FontAwesomeIcon icon={faBookOpenReader} className="text-blue-500 mr-2"/>
                                <span>Reading</span>
                            </div>
                            )
                        :status === "To Read" ?
                            (<div>
                                <FontAwesomeIcon icon={faCloud} className="text-gray-500 mr-2"/>
                                <span>To Read</span>
                            </div>)
                        : <div></div>

                    }
                </div>
                <div className='text-sm text-gray-500 mb-1'>Added: <span>{dateCreated}</span></div>
                <p className='text-sm'>"{notes}"</p>
            </div>
        </>
    )
}

export default BookCard;