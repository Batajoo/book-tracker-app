import React, { useEffect, useState } from 'react'
import {Header, Footer} from '../'
import { Outlet } from 'react-router'
import { AddButtonContextProvider, DarkModeContextProvider } from '../../context'

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [addPageOpen, setAddPageOpen] = useState(false);

   const [bookData, setBookData] = useState([
    {
        bookName: "The Silent Ocean",
        authorName: "Sophie Calder",
        status: "Currently Reading",
        starsNumbers: 4,
        dateCreated: "2024-05-15",
        genre: "Science Fiction",
        notes: "An intriguing story of human survival and exploration."
    },
    {
        bookName: "Invisible Threads",
        authorName: "Jade Li",
        status: "Completed",
        starsNumbers: 3,
        dateCreated: "2023-12-20",
        genre: "Drama",
        notes: "A deep dive into human connections and hidden stories."
    },]
 )

  const togglePopUp = () => {
	setAddPageOpen(!addPageOpen);
	document.body.style.overflow = addPageOpen ? 'auto' : 'hidden';
  }

  const addBook = (title, author, genre, status, rating, notes) => {
	setBookData((prevData)=>[...prevData,{
		bookName: title,
		authorName: author,
		status: status,
		genre: genre,
		starsNumbers: rating,
		notes: notes,
		dateCreated: Date.now()
	}])
  }

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[darkMode])

  return (
    <>
      <AddButtonContextProvider value={{addPageOpen, togglePopUp, bookData, addBook}}>
        <DarkModeContextProvider value={{darkMode, setDarkMode}}>
            <Header/>
            <Outlet/>
          </DarkModeContextProvider>
      </AddButtonContextProvider>
        
        <Footer/>
    </>
  )
}

export default Layout