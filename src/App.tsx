import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
