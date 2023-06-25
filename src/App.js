import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import BaseTemplate from './Pages/BaseTemplate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseTemplate />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
