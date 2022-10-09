var express = require("express");
var router = express.Router();

const swagger = {
  get: {
    tags: ["Users"],
    summary: "get all users",
    description: "get all users",

    responses: {
      200: {
        description: "Users were obtained",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                users: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "User",
                  },
                },
              },
            },
          },
        },
      },
      401: {
        description: "Unauthorized",
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

/* GET user page. */
router.get("/", function (req, res, next) {
  let users = ["admin", "user", "guest", "test"];

  res.status(200).json(users);
});

module.exports = { router, swagger };
