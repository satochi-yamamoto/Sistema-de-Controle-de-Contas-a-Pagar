const connection = require('../config/db');

const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user', 'visitor') DEFAULT 'user'
)`;

connection.query(createUserTable, (err, results) => {
  if (err) throw err;
  console.log('Users table created or exists already');
});
