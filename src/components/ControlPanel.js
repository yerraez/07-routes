import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ControlPanel() {
  return (
    <div>
        <p>Eligue una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="/panel/home-page">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/create-articles'>Create articles</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/user-management'>User management</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/about-us'>About us</NavLink>
                </li>

            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
  )
}
