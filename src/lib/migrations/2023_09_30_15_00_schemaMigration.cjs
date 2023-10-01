const { DataTypes } = require("sequelize");

// @ts-ignore
exports.up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("tags2", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      length: 255
    },
    icon: {
      type: Sequelize.STRING,
      allowNull: false,
      length: 255
    }
  });

  await queryInterface.createTable("users2", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      length: 255
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      length: 255,
      unique: true
    },
    image: {
      type: Sequelize.STRING,
      length: 255
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW')
    }
  });

  await queryInterface.createTable("articles2", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      length: 255
    },
    content: {
      type: Sequelize.TEXT
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW')
    },
    tags: {
      type: DataTypes.JSON
    }
  });

  await queryInterface.createTable("questions2", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
      length: 255
    }
  });

  await queryInterface.createTable("parties2", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      length: 255
    },
    logo: {
      type: Sequelize.STRING,
      allowNull: false,
      length: 255
    }
  });
};

exports.down = async (queryInterface, _) => {
  await queryInterface.dropTable("tags2");
  await queryInterface.dropTable("users2");
  await queryInterface.dropTable("articles2");
  await queryInterface.dropTable("questions2");
  await queryInterface.dropTable("parties2");
};
