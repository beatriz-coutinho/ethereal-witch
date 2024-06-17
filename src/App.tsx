import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { Header } from './components/Header'
import { Main } from './pages/Main'
import { PainelControl } from './pages/Admin/PainelControl.tsx'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={ <PainelControl /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
