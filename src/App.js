import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import NoPage from "./pages/nopage/NoPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Analytics from "./pages/analytics/Analytics";
import Reports from "./pages/reports/Reports";
import Profile from "./pages/profile/Profile";
import Inbox from "./pages/inbox/Inbox";
import Settings from "./pages/settings/Settings";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
          {user && <Navbar />}
            <Routes>
              <Route
                exact
                path="/dashboard"
                element={!user ? <Navigate to="/login" /> : <Dashboard />}
              />
              <Route
                path="/analytics"
                element={!user ? <Navigate to="/login" /> : <Analytics />}
              />
              <Route
                path="/reports"
                element={!user ? <Navigate to="/login" /> : <Reports />}
              />
              <Route
                path="/profile"
                element={!user ? <Navigate to="/login" /> : <Profile />}
              />
              <Route
                path="/inbox"
                element={!user ? <Navigate to="/login" /> : <Inbox />}
              />
              <Route
                path="/settings"
                element={!user ? <Navigate to="/login" /> : <Settings />}
              />
              <Route
                path="/create"
                element={!user ? <Navigate to="/login" /> : <Create />}
              />
              <Route
                path="/projects/:id"
                element={!user ? <Navigate to="/login" /> : <Project />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
