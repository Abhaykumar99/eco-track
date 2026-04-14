import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { initUser, isLoggedIn } from "../utils/storage";
import { AVATARS } from "../utils/constants";
import { showToast } from "../components/Toast";
import confetti from "canvas-confetti";
import { Leaf, ArrowRight } from "lucide-react";

export default function Login({ onLoginSuccess }) {
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) navigate("/dashboard", { replace: true });
  }, [navigate]);

  const handleLogin = async () => {
    if (!name.trim()) {
      showToast("Please enter your name", "error");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    initUser(name, selectedAvatar);
    if (onLoginSuccess) onLoginSuccess();

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#7C3AED", "#10B981", "#34D399", "#F59E0B"],
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 600);
  };

  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated background blobs */}
      <div className="login-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="login-logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <span className="login-logo-icon">🌱</span>
        </motion.div>

        <h1 className="login-title">EcoTrack</h1>
        <p className="login-subtitle">Start your eco journey today 🌍</p>

        <div className="login-form">
          <div className="login-field">
            <label htmlFor="name-input">Your Name</label>
            <input
              id="name-input"
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              maxLength={30}
              autoFocus
            />
          </div>

          <div className="login-field">
            <label>Choose Avatar</label>
            <div className="avatar-picker">
              {AVATARS.map((av) => (
                <motion.button
                  key={av}
                  className={`avatar-option ${selectedAvatar === av ? "selected" : ""}`}
                  onClick={() => setSelectedAvatar(av)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {av}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            className="login-btn"
            onClick={handleLogin}
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? (
              <span className="login-btn-loading">
                <Leaf size={18} className="spin" /> Planting seeds...
              </span>
            ) : (
              <span className="login-btn-content">
                Begin Journey <ArrowRight size={18} />
              </span>
            )}
          </motion.button>
        </div>

        <p className="login-footer">Built for HackForge 2.0</p>
      </motion.div>
    </motion.div>
  );
}
