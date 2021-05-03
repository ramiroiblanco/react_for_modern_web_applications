import './App.css'
import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages'

function App () {

  return (
    <div className="App">
      <Router>
        <Link to="/counter">Counter Page</Link>
        <Link to="/people-list">People List Page</Link>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/counter/">
            <CounterButtonPage/>
          </Route>
          <Route path="/people-list">
            <PeopleListPage/>
          </Route>
          <Route path="/protected">
            <ProtectedPage />
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
