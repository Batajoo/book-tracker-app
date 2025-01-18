import { useState } from 'react'
import { AddButtonPage, Footer, Header, MainSection } from './components/index'

function App() {
  const [addPageStatus, setAddPageStatus] = useState(false);


  return (
    <>
      <Header/>
      <AddButtonPage />
      <MainSection/>
      <Footer/>
    </>
  )
}

export default App
