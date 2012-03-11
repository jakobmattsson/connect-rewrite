exports.rewrite = function(rewrites) {
  return function(req, res, next) {
    if (rewrites[req.url]) {
      req.url = rewrites[req.url];
    }
    next();
  };
};
