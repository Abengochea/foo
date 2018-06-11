module.exports = {
  development: {
    url: 'tfg_db', // database name
//    url: process.env.DATABASE_URL,
    database: 'tfg_db',
    dialect: 'mysql',
    username: 'admin_tfg',
    password: '123456',
    port: 3306
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  },
  test: {
    url: process.env.DATABASE_URL || '',
    dialect: 'mysql'
  }
};
