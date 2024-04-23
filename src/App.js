import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Pages
import EditSquarePage from './pages/EditSquarePage';
import Footer from './components/Footer';
import HashtagResultsPage from './pages/HashtagResultsPage';
import Header from './components/Header';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import ShowSquarePage from './pages/ShowSquarePage';
import UploadPage from './pages/UploadPage';

// Components
import sampleData from './data/sampledata';

const URL = "http://ec2-99-79-194-175.ca-central-1.compute.amazonaws.com/"

function App() {

  const [squaresData, setSquaresData] = useState()
  const [foundHashtags, setFoundHashtags] = useState()

  // fetch all squares data
  const getSquares = async () => {
    const response = await fetch(URL + 'squares')
    const data = await response.json()
    setSquaresData(data) 
  }

  // function to search hashtags
  const searchHashtags = async (searchTerm) => {
    const response = await fetch(URL + 'hashtags/' + searchTerm)
    const data = await response.json()
    setFoundHashtags(data)
  }

  //handle uploading new square 
  const handleUpload = async (square) => {
    await fetch(URL + 'squares', {
      method: 'post',

      body: square
    })

    getSquares()
  }

  //editing squares
  const handleEdit = async (square) => {
    await fetch(URL + 'squares/' + square.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(square),
    })
    console.log(square)
    getSquares()
  }

  // deleting square
  const deleteSquare = async (square) => {
    await fetch(URL + 'squares/' + square.id, {
      method: 'delete'
    })
    getSquares()
  }

  useEffect(() => {
    getSquares()
  }, [])

  const Loading = () => {
    return <h1>Still loading...</h1>
  }

  const Loaded = () => {

    return (
      <div className="App">
        <Header searchHashtags={searchHashtags}/>

        <Routes>
          <Route path='/' element={<Mainpage allSquares={squaresData}  />} />
          <Route path='/upload' element={<UploadPage handleUpload={handleUpload} />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/squares/:id' element={<ShowSquarePage allSquares={sampleData} squaresData={squaresData} deleteSquare={deleteSquare}/>} />
          <Route path='/squares/:id/edit' element={<EditSquarePage allSquares={sampleData} squaresData={squaresData} handleEdit={handleEdit} deleteSquare={deleteSquare}/>} />
          <Route path='/hashtags/:params' element={<HashtagResultsPage foundHashtags={foundHashtags} />} />

        </Routes>

        <Footer />

      </div>
    )
  }

  return squaresData ? Loaded() : Loading()
}

export default App;
