exports.adminOnly = (req, res, next) => {
  if (req.userRole !== 'admin') return res.status(403).send('Admin access required');
  next();
};

exports.userOnly = (req, res, next) => {
  if (req.userRole !== 'user') return res.status(403).send('User access required');
  next();
};
