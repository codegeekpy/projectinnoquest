const { EngagementMetric } = require('../models');

exports.addEngagementMetric = async (req, res) => {
  try {
    const engagementMetric = await EngagementMetric.create(req.body);
    res.json(engagementMetric);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add engagement metric' });
  }
};

exports.getAllMetrics = async () => {
  return await EngagementMetric.findAll();
};

