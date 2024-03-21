import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/components/Home/Home.js'
import Empresa from '../src/components/Empresa/Empresa.js'
import Contatos from '../src/components/Contatos/Contatos.js'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar></NavBar>}>4
            <Route index element ={<Home></Home>}></Route>
            <Route path='empresa' element={<Empresa></Empresa>}></Route>
            <Route path='contatos' element={<Contatos></Contatos>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
