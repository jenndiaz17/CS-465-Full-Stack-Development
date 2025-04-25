const jwt = require('jsonwebtoken');

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    console.log('Auth Header Required but NOT PRESENT!');
    return res.sendStatus(401);
  }

  const headers = authHeader.split(' ');
  if (headers.length < 2) {
    console.log('Not enough tokens in Auth Header: ' + headers.length);
    return res.sendStatus(401);
  }

  const token = headers[1];
  if (!token) {
    console.log('Null Bearer Token');
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      console.log('Token validation failed.');
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.auth = verified;
    next(); // Only continue when token is valid
  });
}

module.exports = { authenticateJWT };