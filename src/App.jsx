import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/company">Company</Link>
      <Link to="/newproject">New Project</Link>
      <Container customClass="min-height">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App
