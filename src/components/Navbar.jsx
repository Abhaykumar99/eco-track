import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  PlusCircle,
  Trophy,
  Gift,
  History,
  User,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/activities", label: "Activities", icon: PlusCircle },
  { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { path: "/rewards", label: "Rewards", icon: Gift },
  { path: "/history", label: "History", icon: History },
  { path: "/profile", label: "Profile", icon: User },
];

export default function Navbar({ userName, avatar, onLogout, darkMode, onToggleDark }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <>
      {/* Desktop / Top navbar */}
      <nav className="navbar-desktop">
        <div className="navbar-inner">
          <NavLink to="/dashboard" className="navbar-logo">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">EcoTrack</span>
          </NavLink>

          <div className="navbar-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active" : ""}`
                }
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="navbar-right">
            <button
              className="navbar-dark-toggle"
              onClick={onToggleDark}
              title="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="navbar-user">
              <span className="navbar-avatar">{avatar}</span>
              <span className="navbar-username">{userName}</span>
            </div>
            <button className="navbar-logout" onClick={handleLogout} title="Logout">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Bottom tab bar */}
      <nav className="navbar-mobile">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `mobile-tab ${isActive ? "active" : ""}`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
