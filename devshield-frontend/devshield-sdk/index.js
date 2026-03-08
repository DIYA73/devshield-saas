module.exports = require("./middleware");

  const endpoint = options.endpoint || "http://localhost:3001";

  return async function (req, res, next) {

    // prevent infinite loop
    if (req.originalUrl.includes("/api/logs")) {
      return next();
    }

    try {
      await fetch(`${endpoint}/api/logs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          method: req.method,
          endpoint: req.originalUrl
        })
      });
    } catch (err) {}

    next();
  };