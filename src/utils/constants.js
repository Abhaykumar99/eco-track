// ─── Activity Data ───────────────────────────────────────────────
export const ACTIVITIES = [
  { id: 1, name: "Used bicycle instead of bike", icon: "🚲", points: 30, co2: 0.8, unit: "trip", category: "Transport" },
  { id: 2, name: "Walked instead of taking auto", icon: "🚶", points: 20, co2: 0.5, unit: "km", category: "Transport" },
  { id: 3, name: "Turned off lights when leaving", icon: "💡", points: 15, co2: 0.3, unit: "session", category: "Energy" },
  { id: 4, name: "Skipped AC for 1 hour", icon: "❄️", points: 25, co2: 0.6, unit: "hour", category: "Energy" },
  { id: 5, name: "Used reusable water bottle", icon: "🍶", points: 10, co2: 0.2, unit: "use", category: "Waste" },
  { id: 6, name: "Avoided single-use plastic", icon: "♻️", points: 20, co2: 0.4, unit: "item", category: "Waste" },
  { id: 7, name: "Participated in tree plantation", icon: "🌱", points: 50, co2: 2.0, unit: "tree", category: "Green" },
  { id: 8, name: "Carpooled to college", icon: "🚗", points: 25, co2: 0.7, unit: "trip", category: "Transport" },
  { id: 9, name: "Composted food waste", icon: "🍂", points: 30, co2: 0.9, unit: "kg", category: "Waste" },
  { id: 10, name: "Used public transport", icon: "🚌", points: 20, co2: 0.5, unit: "trip", category: "Transport" },
];

export const CATEGORIES = ["All", "Transport", "Energy", "Waste", "Green"];

// ─── Badge Data ──────────────────────────────────────────────────
export const BADGES = [
  { id: "first_step", name: "First Step", icon: "👣", desc: "Log your first activity", required: 1, type: "activities" },
  { id: "green_week", name: "Green Week", icon: "🌿", desc: "Log 7 activities total", required: 7, type: "activities" },
  { id: "eco_warrior", name: "Eco Warrior", icon: "⚔️", desc: "Reach 500 points", required: 500, type: "points" },
  { id: "carbon_crusher", name: "Carbon Crusher", icon: "💪", desc: "Save 5 kg CO₂", required: 5, type: "co2" },
  { id: "century", name: "Century Club", icon: "💯", desc: "Reach 1000 points", required: 1000, type: "points" },
  { id: "planet_guardian", name: "Planet Guardian", icon: "🌍", desc: "Save 20 kg CO₂", required: 20, type: "co2" },
  { id: "legend", name: "Eco Legend", icon: "🏆", desc: "Reach 5000 points", required: 5000, type: "points" },
];

// ─── Reward Tiers ────────────────────────────────────────────────
export const REWARD_TIERS = [
  { points: 100, reward: "Eco Starter Kit 🌱" },
  { points: 500, reward: "Reusable Bottle 🍶" },
  { points: 1000, reward: "Campus Café Voucher ☕" },
  { points: 2500, reward: "College Store Discount 🛒" },
  { points: 5000, reward: "Sustainability Champion Certificate 🏆" },
];

// ─── Fake Users ──────────────────────────────────────────────────
export const FAKE_USERS = [
  { name: "Priya Sharma", avatar: "🌟", points: 2840, co2: 42.5 },
  { name: "Arjun Mehta", avatar: "⚡", points: 2650, co2: 38.2 },
  { name: "Sneha Patel", avatar: "🌸", points: 2410, co2: 35.1 },
  { name: "Rohan Singh", avatar: "🔥", points: 2200, co2: 31.8 },
  { name: "Kavya Nair", avatar: "💫", points: 1980, co2: 28.4 },
  { name: "Amit Kumar", avatar: "🎯", points: 1750, co2: 24.9 },
  { name: "Ishaan Gupta", avatar: "🌈", points: 1540, co2: 21.3 },
  { name: "Pooja Reddy", avatar: "🦋", points: 1320, co2: 18.7 },
  { name: "Dhruv Joshi", avatar: "🎮", points: 1100, co2: 15.2 },
  { name: "Meera Iyer", avatar: "🌺", points: 980, co2: 13.1 },
  { name: "Vikram Das", avatar: "🎸", points: 870, co2: 11.5 },
  { name: "Ananya Roy", avatar: "🌻", points: 760, co2: 9.8 },
  { name: "Siddharth Rao", avatar: "🎭", points: 650, co2: 8.2 },
  { name: "Ritika Bose", avatar: "🦚", points: 540, co2: 6.9 },
  { name: "Karthik Menon", avatar: "🎪", points: 430, co2: 5.3 },
  { name: "Divya Saxena", avatar: "🌷", points: 320, co2: 3.8 },
  { name: "Nikhil Verma", avatar: "🎵", points: 210, co2: 2.4 },
  { name: "Tanvi Mishra", avatar: "🦄", points: 150, co2: 1.6 },
];

// ─── Avatar Options ──────────────────────────────────────────────
export const AVATARS = ["🌿", "🌊", "⚡", "🔥", "🌸"];

// ─── Live Feed Templates ─────────────────────────────────────────
export const FEED_TEMPLATES = [
  { prefix: "🔥", action: "saved {co2} kg CO₂" },
  { prefix: "🌱", action: "planted a tree" },
  { prefix: "🚲", action: "cycled to campus" },
  { prefix: "♻️", action: "avoided single-use plastic" },
  { prefix: "💡", action: "saved energy today" },
  { prefix: "🚶", action: "walked instead of driving" },
  { prefix: "🍶", action: "used a reusable bottle" },
];

// ─── Weekly Challenges ───────────────────────────────────────────
export const WEEKLY_CHALLENGES = [
  { id: 1, title: "Walk 5 times this week", target: 5, activityId: 2, icon: "🚶" },
  { id: 2, title: "Use bicycle 3 times", target: 3, activityId: 1, icon: "🚲" },
  { id: 3, title: "Save energy 4 times", target: 4, activityId: 3, icon: "💡" },
  { id: 4, title: "Use reusable bottle 5 times", target: 5, activityId: 5, icon: "🍶" },
  { id: 5, title: "Compost waste 3 times", target: 3, activityId: 9, icon: "🍂" },
];
