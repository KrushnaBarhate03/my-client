import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router";
import './index.css'
import Home from './views/Home.jsx'
import Addd from './views/Addd.jsx';
import Edit from './views/Edit.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Addd" element={<Addd/>}/>
    <Route path="/Edit/:userId" element={<Edit/>}/>
  
  </Routes>
  </BrowserRouter>
)
