const connection = require('../config/db');

const createAccountTable = `
CREATE TABLE IF NOT EXISTS accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  supplier VARCHAR(255) NOT NULL,
  cnpj VARCHAR(18) NOT NULL,
  due_date DATE NOT NULL,
  reference_month VARCHAR(7) NOT NULL,
  issue_date DATE NOT NULL,
  invoice_number VARCHAR(255) NOT NULL,
  inclusion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  attachment_path VARCHAR(255)
)`;

connection.query(createAccountTable, (err, results) => {
  if (err) throw err;
  console.log('Accounts table created or exists already');
});
