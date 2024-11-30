module.exports = (sequelize, DataTypes) => {
    const CourseRating = sequelize.define('CourseRating', {
      courseId: DataTypes.INTEGER,
      rating: DataTypes.FLOAT
    });
    return CourseRating;
  };
  