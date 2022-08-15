import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import NoPage from './pages/nopage/NoPage'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar/Navbar'
import Analytics from './pages/analytics/Analytics'
import Reports from './pages/reports/Reports'
import Profile from './pages/profile/Profile'
import Inbox from './pages/inbox/Inbox'
import Settings from './pages/settings/Settings'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="create" element={<Create />} />
            <Route path="project/:id" element={<Project />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
