import React from 'react'
import { Link } from "react-router-dom"

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/">
        <h1>Cirkit HP</h1>
      </Link>
    </div>
  )
}

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/company">
          <li>会社情報</li>
        </Link>
        <Link to="/business">
          <li>事業内容</li>
        </Link>
        <Link to="/student">
          <li>学生の皆さんへ</li>
        </Link>
        <Link to="/contact">
          <li>お問い合わせ</li>
        </Link>
      </ul>
    </div>
  )
}

const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header
