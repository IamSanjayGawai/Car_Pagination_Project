import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SinglePropertyPage from './pages/Property_page/SinglePropertyPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<SinglePropertyPage  />} />
      </Routes>
    </Router>
  );
}

export default App;
