import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Mainpage from './pages/Mainpage';
import Loginpage from './pages/Loginpage';
import sampleData from './data/sampledata';
import ShowSquarePage from './pages/ShowSquarePage';
import UploadPage from './pages/UploadPage';

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
        </Routes>
    
      </div>
    )
  

  // return squares ? Loaded() : Loading()
}

export default App;
