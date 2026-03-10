import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatePost } from './pages/CreatePost';
import { Feed } from './pages/Feed';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
