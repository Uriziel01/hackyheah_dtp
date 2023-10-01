const { Sequelize } = require('sequelize');
const Umzug = require('umzug');
const sequelize = require('./sequelize.cjs'); // Import configured Sequelize connection
const { dirname, join } = require('path');
const fs = require('fs');

const currentModulePath = __filename;
console.log('currentModulePath', currentModulePath);
const migrationPath = join(dirname(currentModulePath), 'lib', 'migrations');
console.log('migrationPath', migrationPath);

const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize,
  },
  migrations: {
    params: [
      sequelize.getQueryInterface(),
      Sequelize,
    ],
    path: migrationPath, // Use migrationPath variable as the path to the migrations folder
  },
});

async function runMigrations() {
  try {
    await umzug.up(); // Apply all migrations

    let migrations = fs.readdirSync(migrationPath);
    let completedMigrations = await sequelize.query("SELECT name FROM \"SequelizeMeta\";", {type: Sequelize.QueryTypes.SELECT});
    for (let name in completedMigrations) {
        if (completedMigrations.hasOwnProperty(name)) {
            let index = migrations.indexOf(completedMigrations[name].name);
            if (index !== -1) {
                migrations.splice(index, 1);
            }
        }
    }

    migrations = migrations.sort();

    for(let i = 0, c = migrations.length; i < c; i++){
      console.log('migrations', migrationPath)
      let migration = require(migrationPath + '/' + migrations[i]);
      await migration.up(sequelize.queryInterface, Sequelize);
      await sequelize.query("INSERT INTO \"SequelizeMeta\" VALUES(:name)", {type: Sequelize.QueryTypes.INSERT, replacements: {name: migrations[i]}})
    }

    console.log('Migrations have been applied.');
  } catch (error) {
    console.error('Error applying migrations:', error);
  }
}


runMigrations();
