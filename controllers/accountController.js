const connection = require('../config/db');

exports.createAccount = (req, res) => {
  const { supplier, cnpj, due_date, reference_month, issue_date, invoice_number } = req.body;
  const attachment_path = req.file ? req.file.path : null;

  connection.query(
    'INSERT INTO accounts (supplier, cnpj, due_date, reference_month, issue_date, invoice_number, attachment_path) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [supplier, cnpj, due_date, reference_month, issue_date, invoice_number, attachment_path],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Account created');
    }
  );
};

exports.getAccounts = (req, res) => {
  connection.query('SELECT * FROM accounts', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};
