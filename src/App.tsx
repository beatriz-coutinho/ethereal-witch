import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Main } from './pages/Main'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
