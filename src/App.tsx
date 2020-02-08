import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Company from './Pages/Company'
import Business from './Pages/Business'
import Student from './Pages/Student'
import Contact from './Pages/Contact'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/business" component={Business} />
          <Route path="/student" component={Student} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
