module.exports = (sequelize, DataTypes) => {
    const EngagementMetric = sequelize.define('EngagementMetric', {
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      views: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      completions: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return EngagementMetric;
  };
