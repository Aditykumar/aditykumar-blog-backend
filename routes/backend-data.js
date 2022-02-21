const express = require("express");
const blogController = require("../controllers/backend-data")
const blogRouter = express.Router();

// blogRouter.route("/details")
//     .get(blogController.blogData)
    blogRouter.route("/details/:Category")
    .get(blogController.blogData)
    


module.exports = blogRouter