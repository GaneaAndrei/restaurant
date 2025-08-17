import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx' 
import Services from './components/Services.jsx'
import Menu from './components/Menu.jsx'
import Team from './components/Team.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Newsletter from './components/Newsletter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <About/>
    <Services/>
    <Menu/>
    <Team/>
    <Blog/>
    <Contact/>
    <Newsletter/>
  </StrictMode>,
)
