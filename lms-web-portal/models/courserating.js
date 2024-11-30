module.exports = (sequelize, DataTypes) => {
  const CourseRating = sequelize.define('CourseRating', {
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
  return CourseRating;
};
