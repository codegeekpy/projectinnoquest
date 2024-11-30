module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      lastLogin: DataTypes.DATE
    });
    return User;
  };
  