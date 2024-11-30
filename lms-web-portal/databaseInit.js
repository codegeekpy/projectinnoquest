const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

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

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate([
    { name: 'Alice', lastLogin: new Date() },
    { name: 'Bob', lastLogin: new Date() },
    { name: 'Charlie', lastLogin: new Date() }
  ]);

  await CourseRating.bulkCreate([
    { courseId: 1, rating: 4.5 },
    { courseId: 2, rating: 3.8 },
    { courseId: 3, rating: 4.0 }
  ]);

  await EngagementMetric.bulkCreate([
    { courseId: 1, views: 150, completions: 50 },
    { courseId: 2, views: 200, completions: 75 },
    { courseId: 3, views: 300, completions: 150 }
  ]);

  console.log('Database seeded!');
  sequelize.close();
};

seedDatabase();
