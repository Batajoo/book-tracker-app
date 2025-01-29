import { useEffect, useState } from 'react'
import { AddButtonPage, Footer, Header, MainSection } from './components/index'
import { AddButtonContextProvider, FilterContextProvider } from './context';


function App() {
  const [addPageOpen, setAddPageOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);
  const [filterValue, setFilterValue] = useState("All Status");

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
        status: "completed",
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
    localStorage.setItem("bookData", JSON.stringify(bookData));
  },[bookData])

  return (
    <>
		<AddButtonContextProvider value={{addPageOpen, togglePopUp, bookData, addBook}}>
      <FilterContextProvider value={{filterStatus, setFilterStatus, filterValue, setFilterValue}}>
        <AddButtonPage />
        <MainSection/>
      </FilterContextProvider>
		</AddButtonContextProvider>
    </>
  )
}

export default App
