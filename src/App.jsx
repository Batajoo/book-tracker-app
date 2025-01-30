import { useEffect, useState } from 'react'
import { AddButtonPage, Footer, Header, MainSection } from './components/index'
import { AddButtonContextProvider, FilterContextProvider } from './context';


function App() {
  const [filterStatus, setFilterStatus] = useState(false);
  const [filterValue, setFilterValue] = useState("All Status");


  return (
    <>
		
      <FilterContextProvider value={{filterStatus, setFilterStatus, filterValue, setFilterValue}}>
        <AddButtonPage />
        <MainSection/>
      </FilterContextProvider>
    </>
  )
}

export default App
