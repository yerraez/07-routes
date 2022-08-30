import React from 'react'
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom'
import Articles from '../components/Articles'
import { Contact } from '../components/Contact'
import { HomePage } from '../components/HomePage'
import NotFound from '../components/NotFound'
import { Person } from '../components/Person'
import { Navigate } from 'react-router-dom'
import ControlPanel from '../components/ControlPanel'
import { Home } from '../components/panel/Home'
import { AboutUs } from '../components/panel/AboutUs'
import { Create } from '../components/panel/Create'
import { Management } from '../components/panel/Management'

export const MainRouters = () => {
  return (
    <BrowserRouter>
    <h1>Cabecera</h1>
    <hr />
    <nav>
        <ul>
            <li>
                <NavLink to="/home-page" className={
                    ({isActive}) =>  isActive ? "activado" : ""
                }>Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/articles" className={
                    ({isActive}) =>  isActive ? "activado" : ""
                }>Articulos</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={
                    ({isActive}) =>  isActive ? "activado" : ""
                }>Contactanos</NavLink>
            </li>
            <li>
                <NavLink to="/panel" className={
                    ({isActive}) =>  isActive ? "activado" : ""
                }>Panel de Control</NavLink>
            </li>
        </ul>
    </nav>
    <hr />

    <section>
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home-page" element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path='/person/:name/:lastname/' element={<Person />}></Route>
        <Route path='/person/:name/' element={<Person />}></Route>
        <Route path='/person' element={<Person />}></Route>
        <Route path='/redirect' element={<Navigate to="/person/yess/erraez"/>}></Route>
        <Route path='/panel' element={<ControlPanel />}>
            <Route path='home-page' element={<Home />} />
            <Route path='create-articles' element={<Create />} />
            <Route path='user-management' element={<Management />} />
            <Route path='about-us' element={<AboutUs />} />
        </Route>
        <Route path='*' element={<NotFound />} />
    </Routes>
    </section>

    <hr />
    <footer>Pie de pagina</footer>
    </BrowserRouter>
  )
}
