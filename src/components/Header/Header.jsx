import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router';

function Header(){
    return(
        <header className='flex justify-between px-5 py-3 text-3xl items-center shadow-lg sticky top-0 w-full dark:bg-black dark:shadow-white dark:shadow-md'>
        <div className='flex gap-20'>
          <div className='flex gap-3 items-center'>
          <FontAwesomeIcon icon={faBookOpen} className='text-blue-600 text-3xl' />
          <h1 className='font-bold dark:text-white'>BookTracker</h1>
          </div>

          <nav className='flex gap-5 items-center'>
            <NavLink to="/" className={({isActive})=> 
              isActive ? 
              "active:bg-blue-300 bg-blue-200 px-3 py-1.5 rounded-md text-blue-500": 
              "text-gray-500 hover:text-blue-500 px-3 py-1.5"}>
              <svg 
                className="lucide lucide-book-open w-5 h-5" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </NavLink>
            <NavLink to="/summary" className={({isActive})=> 
              isActive ? 
              "active:bg-blue-300 bg-blue-200 px-3 py-1.5 rounded-md text-blue-500": 
              "text-gray-500 hover:text-blue-500 px-3 py-1.5"}>
              <svg 
                className="lucide lucide-trending-up w-5 h-5" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </NavLink>
            <NavLink to="/settings" className={({isActive})=> 
              isActive ? 
              "active:bg-blue-300 bg-blue-200 px-3 py-1.5 rounded-md text-blue-500": 
              "text-gray-500 hover:text-blue-500 px-3 py-1.5"}>
              <svg 
                className="lucide lucide-settings w-5 h-5" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </NavLink>
          </nav>

        </div>
        <button><svg className=" text-gray-500 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button>
      </header>
    );
}

export default Header;