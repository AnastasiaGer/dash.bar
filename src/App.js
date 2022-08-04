import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import NoPage from './pages/nopage/NoPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="blogs" element={<Create />} />
            <Route path="contact" element={<Project />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
