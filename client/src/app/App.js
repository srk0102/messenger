import './App.css';

import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom'

//Importing Global componenets from local folders
import Main from "../components/global/main"

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route
        exact
        path="/"
        element={<Main/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
