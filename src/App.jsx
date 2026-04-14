import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useEcoData from "./hooks/useEcoData";
import Navbar from "./components/Navbar";
import ToastContainer from "./components/Toast";
import Loader from "./components/Loader";
import { isLoggedIn } from "./utils/storage";

// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Activities = lazy(() => import("./pages/Activities"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Rewards = lazy(() => import("./pages/Rewards"));
const History = lazy(() => import("./pages/History"));
const Profile = lazy(() => import("./pages/Profile"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ProtectedRoute({ children, ecoData }) {
  if (!ecoData.user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function AppRoutes() {
  const ecoData = useEcoData();
  const location = useLocation();
  const showNavbar = ecoData.user && location.pathname !== "/";

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", ecoData.darkMode);
  }, [ecoData.darkMode]);

  return (
    <div className={`app ${ecoData.darkMode ? "dark" : ""}`}>
      <ScrollToTop />
      <ToastContainer />
      {showNavbar && (
        <Navbar
          userName={ecoData.user}
          avatar={ecoData.avatar}
          onLogout={ecoData.logout}
          darkMode={ecoData.darkMode}
          onToggleDark={ecoData.toggleDarkMode}
        />
      )}

      <main className={showNavbar ? "main-content with-navbar" : "main-content"}>
        <Suspense fallback={<div className="page-loader"><Loader size={48} text="Loading..." /></div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  isLoggedIn() ? <Navigate to="/dashboard" replace /> : <Login onLoginSuccess={ecoData.refresh} />
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute ecoData={ecoData}>
                    <Dashboard ecoData={ecoData} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/activities"
                element={
                  <ProtectedRoute ecoData={ecoData}>
                    <Activities ecoData={ecoData} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/leaderboard"
                element={
                  <ProtectedRoute ecoData={ecoData}>
                    <Leaderboard ecoData={ecoData} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rewards"
                element={
                  <ProtectedRoute ecoData={ecoData}>
                    <Rewards ecoData={ecoData} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/history"
                element={
                  <ProtectedRoute ecoData={ecoData}>
                    <History ecoData={ecoData} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute ecoData={ecoData}>
                    <Profile ecoData={ecoData} />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {showNavbar && (
        <footer className="app-footer">
          <p>Built for HackForge 2.0 · EcoTrack 🌱</p>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
