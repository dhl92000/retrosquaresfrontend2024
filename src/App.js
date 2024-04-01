import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Pages
import EditSquarePage from './pages/EditSquarePage';
import Footer from './components/Footer';
import Header from './components/Header';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import ShowSquarePage from './pages/ShowSquarePage';
import UploadPage from './pages/UploadPage';

// Components
import sampleData from './data/sampledata';

// const URL = ""

function App() {

  const [squaresData, getSquaresData] = useState()

  const getSquares = async () => {
    const response = await fetch(URL + "/squares")
    const data = await response.json()
    getSquaresData(data)
  }

  //handle uploading new square 
  const handleUpload = async ( square ) => {
    await fetch(URL + '/squares', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(square)
    })

    getSquares()
  }

    return (
      <div className="App">
        <Header/>
  
        <Routes>
          <Route path='/' element={<Mainpage allSquares={squaresData}/>} />
          <Route path='/upload' element={<UploadPage handleUpload={handleUpload}/>} />
          <Route path='/login' element={<Loginpage/>} />
          <Route path='/squares/:id' element={<ShowSquarePage allSquares={sampleData} />} />
          <Route path='/squares/:id/edit' element={<EditSquarePage allSquares={sampleData} />} />

        </Routes>

        <Footer/>
    
      </div>
    )
  

  // return squares ? Loaded() : Loading()
}

export default App;
