const express = require('express');
const massive = require('massive');
const jwt = require('jsonwebtoken');
const cors = require("cors");

const secret = require('../secret.js');

const useraccount = require('./controllers/user.js');

massive({
  host: 'localhost',
  port: 5432,
  database: 'addressbookdb',
  user: 'postgres',
  password: 'addressbookdb',
}).then(db => {
  const app = express();

  app.set('db', db);
  app.use(cors());
  app.use(express.json());

  app.post('/api/register', useraccount.register);
  app.post('/api/login', useraccount.login);

  app.get('/api/protected/data', (req, res) => {
    if (!req.headers.authorization) {
      return res.status(401).end();
    }

    try {
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, secret); // will throw when token is invalid
      res.status(200).json({ data: 'here is the protected data' });
    } catch (err) {
      console.error(err);
      res.status(401).end();
    }
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});