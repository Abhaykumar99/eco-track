const express = require('express');
const User = require('../models/User');
const Ticket = require('../models/Ticket');
const Task = require('../models/Task');
const { verifyToken, isAdmin } = require('../middleware/auth');

const router = express.Router();

// GET /api/admin/stats
router.get('/stats', verifyToken, isAdmin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalTickets = await Ticket.countDocuments();
    const openTickets = await Ticket.countDocuments({ status: 'pending' });
    const resolvedTickets = await Ticket.countDocuments({ status: 'resolved' });
    const totalTasks = await Task.countDocuments();
    
    const co2Agg = await User.aggregate([{ $group: { _id: null, total: { $sum: '$totalCO2' } } }]);
    const totalCO2 = co2Agg.length > 0 ? co2Agg[0].total : 0;

    res.json({ totalUsers, totalTickets, openTickets, resolvedTickets, totalTasks, totalCO2 });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
