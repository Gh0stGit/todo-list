import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
        <nav className='nav'>
            <ul className='links-wrapper'>
                <ii>
                    <Link className='link' to="/">Home</Link>
                </ii>
                <ii>
                    <Link className='link' to="/about">About</Link>
                </ii>
                <ii>
                    <Link className='link' to="/tasks">Tasks</Link>
                </ii>
            </ul>
        </nav>
    </header>
  )
}

