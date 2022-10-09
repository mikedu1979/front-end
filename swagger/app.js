var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");

var loginRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "My Express app",
    version: "1.0.0",
    description: "My Express app with swagger documentation",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server",
    },
  ],
  tags: [
    {
      name: "Authentication",
      description: "Authentication routes",
    },
    {
      name: "Users",
      description: "API for users in the system",
    },
  ],

  paths: {
    "/": {
      post: loginRouter.swagger.post,
    },
    "/users": {
      get: usersRouter.swagger.get,
    },
  },
};

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", loginRouter.router);
app.use("/users", usersRouter.router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).send(createError(500));
});

module.exports = app;
