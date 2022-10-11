const controller = require("../controllers/nationality.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/lookups/insertAllNationalities",
    controller.insertAllNationalities
  );
  app.get("/api/lookups/getAllNationalities", controller.getAllNationalities);
};
