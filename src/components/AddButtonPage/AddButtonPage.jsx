import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const AddButtonPage = () => {
  return (
    <div className='bg-transparent/10 absolute w-full h-screen flex justify-center items-center'>
        <div className='m-10 bg-white w-[430px] p-10 rounded-xl'>
        <div className='flex justify-between mb-2'>
            <h1>Add New Book</h1>
            <FontAwesomeIcon icon={faX}/>
        </div>
        <div className='flex flex-col gap-2'>
            <div>
                <h2>Title *</h2>
                <input type='text' className='border w-full'/>
            </div>
            <div>
                <h2>Author *</h2>
                <input type='text' className='border w-full'/>
            </div>
            <div>
                <h2>Genre *</h2>
                <input type='text' className='border w-full'/>
            </div>
            <div>
                <h2>Status</h2>
                <select className='w-full'>
                    <option>To Read</option>
                    <option>Currently Reading</option>
                    <option>Completed</option>
                </select>
            </div>
            <div>
                <h2>Rating</h2>
                <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
            </div>
            <div>
                <h2>Notes</h2>
                <textarea className='border w-full'></textarea>
            </div>
            <div className='flex justify-end gap-5'>
                <button>Cancel</button>
                <button className='border'>Add Button</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddButtonPage