module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        facebook_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        picture_link: {
            type: DataTypes.STRING,
        },
    });
    return User;
  };
