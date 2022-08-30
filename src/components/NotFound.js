import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h1>Error 404</h1>
        <p>This page doesn't exist</p>
        <Link to="/home-page">Return to the HomePage</Link>
    </div>
  
  )
}
