var express = require("express");
var router = express.Router();

const swagger = {
  post: {
    tags: ["Authentication"],
    summary: "Login",
    description: "Login to the system",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              username: {
                name: "username",
                type: "string",
                description: "Username des",
                required: true,
                example: "admin",
              },
              password: {
                name: "password",
                type: "string",
                description: "Password",
                required: true,
                example: "admin",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Login successful",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                token: {
                  type: "string",
                  description: "JWT token",
                },
              },
            },
          },
        },
      },
      401: {
        description: "Invalid credentials",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  description: "Error message",
                },
              },
            },
          },
        },
      },
      400: {
        description: "Invalid request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  description: "Error message",
                },
              },
            },
          },
        },
      },
    },
  },
};

/* post login page. */
router.post("/", function (req, res, next) {
  // check req body has username and password
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      message: "Invalid request",
    });
  } else if (req.body.username === "admin" && req.body.password === "admin") {
    // if yes, check if username and password are correct
    // if yes, return a token
    res.status(200).json({
      token: "testing",
    });
  } else {
    // if no, return 401
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
});

module.exports = { router, swagger };
