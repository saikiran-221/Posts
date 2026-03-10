import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CreatePost } from './pages/CreatePost';
import { Feed } from './pages/Feed';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/feed' replace />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
