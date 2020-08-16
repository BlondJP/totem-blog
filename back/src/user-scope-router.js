const express = require("express");
const router = express.Router();

// controllers
const {
  createArticle,
  getAllArticles,
  createComment,
} = require("./controllers");

const ARTICLES_RESOURCE = "/articles";
router.post(ARTICLES_RESOURCE, createArticle);
router.get(ARTICLES_RESOURCE, getAllArticles);

const COMMENTS_RESOURCE = "/articles/:articleId/comments";
router.post(COMMENTS_RESOURCE, createComment);

module.exports = router;
