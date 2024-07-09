const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api', accountRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
