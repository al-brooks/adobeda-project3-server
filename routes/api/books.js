const express = require("express");
const router = express.Router();
const booksCtrl = require("../../controllers/api/books");

// GET /api/books/:id
router.get("/:id", booksCtrl.getBook);

module.exports = router;
