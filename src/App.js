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

// const testURL = "http://ec2-99-79-194-175.ca-central-1.compute.amazonaws.com/"
const URL = "http://ec2-99-79-194-175.ca-central-1.compute.amazonaws.com/"

function App() {
  // sample data
  const [localDev, setLocalDev] = useState(true)

  const [squaresData, setSquaresData] = useState()
  const [searchText, setSearchText] = useState()
  const [foundHashtags, setFoundHashtags] = useState([])

  // fetch all squares data
  const getSquares = async () => {
    if (localDev) {
      setSquaresData(sampleData)
    } else {
      const response = await fetch(URL + 'squares')
      const data = await response.json()
      setSquaresData(data)
    }

  }

  // function to search hashtags
  const searchHashtagsFunc = async (searchTerm) => {
    if (localDev) {
      let newArr = []
      for (let i = 0; i < sampleData.length; i++) {
        let result = sampleData[i].hashtags.filter((tag)=> tag === searchTerm)
        if(result.length > 0){
          newArr.push(sampleData[i])
        }
      }
      setFoundHashtags(newArr)
    } else {
      const response = await fetch(URL + 'hashtags/' + searchTerm)
      const data = await response.json()
      if (Array.isArray(data)) {
        setFoundHashtags(data)
      } else {
        setFoundHashtags([])
      }
    }
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
    return <h1>Still Loading</h1>
  }

  const Loaded = () => {
    return (
      <Routes>
        <Route path='/' element={<Mainpage allSquares={squaresData} />} />
        <Route path='/upload' element={<UploadPage handleUpload={handleUpload} />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/squares/:id' element={<ShowSquarePage allSquares={sampleData} squaresData={squaresData} deleteSquare={deleteSquare} />} />
        <Route path='/squares/:id/edit' element={<EditSquarePage allSquares={sampleData} squaresData={squaresData} handleEdit={handleEdit} deleteSquare={deleteSquare} />} />
        <Route path='/hashtags/:params' element={<HashtagResultsPage foundHashtags={foundHashtags} />} />

      </Routes>
    )
  }

  return (
    <div className="App">
      <Header searchHashtagsFunc={searchHashtagsFunc} searchTextState={searchText} setSearchTextState={setSearchText} />



      {squaresData ? Loaded() : Loading()}

      <Footer />
    </div>
  )
}

export default App;
