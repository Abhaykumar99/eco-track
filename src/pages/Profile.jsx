import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import AnimatedCounter from "../components/AnimatedCounter";
import { BADGES } from "../utils/constants";
import {
  treesEquivalent,
  kmNotDriven,
  plasticBagsAvoided,
  getUserPercentile,
} from "../utils/calculations";
import {
  User,
  Calendar,
  Zap,
  Activity,
  Leaf,
  Award,
  LogOut,
  Edit3,
  Check,
  TreePine,
  Car,
  Recycle,
} from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20 },
};

export default function Profile({ ecoData }) {
  const { user, avatar, points, activities, totalCO2, badges, joinDate, updateProfile, logout } = ecoData;
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(user);

  const percentile = getUserPercentile(points);
  const earnedBadges = BADGES.filter((b) => badges.includes(b.id));

  const handleSave = () => {
    if (newName.trim()) {
      updateProfile(newName);
      setEditing(false);
    }
  };

  return (
    <motion.div className="page profile-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Profile Header */}
      <motion.div
        className="profile-header"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="profile-avatar-large">{avatar}</div>
        <div className="profile-name-row">
          {editing ? (
            <div className="profile-edit-name">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="profile-name-input"
                autoFocus
                maxLength={30}
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
              />
              <button className="profile-save-btn" onClick={handleSave}>
                <Check size={16} />
              </button>
            </div>
          ) : (
            <div className="profile-name-display">
              <h1>{user}</h1>
              <button className="profile-edit-btn" onClick={() => setEditing(true)}>
                <Edit3 size={16} />
              </button>
            </div>
          )}
        </div>
        <p className="profile-join-date">
          <Calendar size={14} /> Joined {new Date(joinDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
        {percentile > 0 && (
          <p className="profile-percentile">
            🌟 You are in the top {100 - percentile}% of eco warriors
          </p>
        )}
      </motion.div>

      {/* Stats Grid */}
      <div className="profile-stats">
        <GlassCard className="profile-stat-card">
          <Zap size={20} className="stat-icon-inline green" />
          <span className="stat-value"><AnimatedCounter target={points} /></span>
          <span className="stat-label">Total Points</span>
        </GlassCard>
        <GlassCard className="profile-stat-card">
          <Activity size={20} className="stat-icon-inline blue" />
          <span className="stat-value"><AnimatedCounter target={activities.length} /></span>
          <span className="stat-label">Activities Logged</span>
        </GlassCard>
        <GlassCard className="profile-stat-card">
          <Leaf size={20} className="stat-icon-inline green" />
          <span className="stat-value"><AnimatedCounter target={totalCO2} decimals={2} /></span>
          <span className="stat-label">kg CO₂ Saved</span>
        </GlassCard>
        <GlassCard className="profile-stat-card">
          <Award size={20} className="stat-icon-inline purple" />
          <span className="stat-value"><AnimatedCounter target={earnedBadges.length} /></span>
          <span className="stat-label">Badges Earned</span>
        </GlassCard>
      </div>

      {/* Environmental Impact */}
      <section className="profile-impact">
        <h2 className="section-title">🌍 Your Environmental Impact</h2>
        <p className="impact-subtitle">Your CO₂ savings equal:</p>
        <div className="impact-grid">
          <GlassCard className="impact-card">
            <TreePine size={28} className="impact-icon" />
            <span className="impact-value">{treesEquivalent(totalCO2)}</span>
            <span className="impact-label">Trees Planted 🌳</span>
          </GlassCard>
          <GlassCard className="impact-card">
            <Car size={28} className="impact-icon" />
            <span className="impact-value">{kmNotDriven(totalCO2)}</span>
            <span className="impact-label">km Not Driven 🚗</span>
          </GlassCard>
          <GlassCard className="impact-card">
            <Recycle size={28} className="impact-icon" />
            <span className="impact-value">{plasticBagsAvoided(totalCO2)}</span>
            <span className="impact-label">Plastic Bags Avoided ♻️</span>
          </GlassCard>
        </div>
      </section>

      {/* Badge Showcase */}
      {earnedBadges.length > 0 && (
        <section className="profile-badges">
          <h2 className="section-title">🏅 Badge Collection</h2>
          <div className="badge-showcase">
            {earnedBadges.map((badge) => (
              <motion.div
                key={badge.id}
                className="badge-showcase-item"
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <span className="badge-showcase-icon">{badge.icon}</span>
                <span className="badge-showcase-name">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Danger Zone */}
      <section className="profile-danger">
        <h2 className="section-title danger-title">⚠️ Danger Zone</h2>
        <motion.button
          className="logout-btn"
          onClick={logout}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <LogOut size={18} /> Logout
        </motion.button>
      </section>
    </motion.div>
  );
}
